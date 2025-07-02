import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { replaceTodos } from '../store/todos';

interface ForexEvent {
  title: string;
  country: string;
  date: Date;
  impact: string;
  forecast: number;
  previous: number;
}

const isTodayOrFuture = (date: Date): boolean => {
  // normalize to midnight
  const when = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

  // also normalize to midnight
  const today = Date.UTC(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate(),
  );

  return when >= today;
}

const parseTime = (input: string): { hours: number, minutes: number } | null => {
  const safe = input.replace(/\s/g, '').toUpperCase();
  const pattern = /^([01]?\d):(\d\d)(AM|PM)?$/; // formats: HH:MM, HH:MM AM/PM

  const parts = safe.match(pattern);

  if (parts) {
    const offset = parts[3] === 'PM' ? 12 : 0;
    const hours = (parseInt(parts[1], 10) || 0) + offset;
    const minutes = parseInt(parts[2]) || 0;

    return { hours, minutes };
  } else return null;
}

const parseDate = (date: string, time: string): Date | null => {
  // formats MM-DD-YYYY or YYYY-MM-DD
  const dateParts = date.split('-');
  const timeParts = parseTime(time);

  if (dateParts.length !== 3) return null;
  if (timeParts === null) return null;

  let year, month, day;

  // format: YYYY-MM-DD
  if (dateParts[0].length === 4) [year, month, day] = dateParts;
  // format: MM-DD-YYYY
  else if (dateParts[2].length === 4) [month, day, year] = dateParts;
  // unknown format
  else return null;

  // assume UTC
  const timestamp = Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    timeParts.hours,
    timeParts.minutes
  );

  return new Date(timestamp);
};

const parsePercentage = (input: string): number | null => {
  // formats "5.2", "-0.1%", etc.
  const result = parseFloat(input.replace(/[ %,]/g, ''));
  return isNaN(result) ? null : result;
};

async function fetchEvents(): Promise<ForexEvent[]> {
  try {
    const response = await fetch(
      'https://corsproxy.io/?https://nfs.faireconomy.media/ff_calendar_thisweek.xml'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    const events: ForexEvent[] = [];

    // split XML into individual event blocks
    const eventPattern = /<event>([\s\S]*?)<\/event>/g;
    let eventMatch: RegExpExecArray | null;

    while ((eventMatch = eventPattern.exec(data)) !== null) {
      const eventContent = eventMatch[1];

      // helper function to extract text between tags
      const getTagValue = (tag: string, content: string): string => {
        const regex = new RegExp(`<${tag}>(.*?)</${tag}>`, 'i');
        const match = (content || '').trim().match(regex);

        return match ? match[1].trim().replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1') : '';
      };

      const rawDate = getTagValue('date', eventContent);
      const rawTime = getTagValue('time', eventContent);
      const date = parseDate(rawDate, rawTime);

      const forecast = parsePercentage(getTagValue('forecast', eventContent));
      const previous = parsePercentage(getTagValue('previous', eventContent));
      const impact = (getTagValue('impact', eventContent) || '').trim().toLowerCase();

      // validate fields
      if ((impact === 'high') && date && isTodayOrFuture(date)) {
        events.push({
          title: getTagValue('title', eventContent),
          country: getTagValue('country', eventContent),
          date,
          impact,
          forecast: forecast ?? 0,
          previous: previous ?? 0,
        });
      }
    }

    return events;
  } catch (error) {
    console.error('Error fetching or parsing events:', error);
    return [];
  }
}

const LoadTodos: React.FC = () => {
  // in reality, there would be some means to invalidate this
  const [hasFetched, setHasFetched] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (hasFetched) return;

    try {
      const events = await fetchEvents();
      dispatch(replaceTodos(events.map(e => e.title)));
      setHasFetched(true);
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  };

  return (
    <section aria-labelledby="load-todo-heading">
      <h2 id="load-todo-heading" className="visually-hidden">Load Todos</h2>
      <button
        type="submit"
        className="load-button"
        data-testid="load-todos"
        onClick={handleClick}
      >
        Load Todos
      </button>
    </section>
  );
};

export default LoadTodos;
