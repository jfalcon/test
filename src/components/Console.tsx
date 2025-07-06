import React, { useRef, useState, useEffect } from 'react';
import '../styles/Console.scss';

const Console: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const originalConsoleLog = useRef<typeof window.console.log>(window.console.log);

  useEffect(() => {
    // use console.info, etc. if you want to display content on the actual log window
    window.console.log = (...args: unknown[]) => {
      const message = args
        .map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)))
        .join(' ');

      setLogs(prev => [...prev, message]);
    };

    return () => {
      // restore original when component unmounts
      window.console.log = originalConsoleLog.current;
    };
  }, []);

  // no need to use a pre (preserve) tag since we control this
  // with styles and also ensure no font size reduction
  return (
    <section id="console" data-testid="console">
      {logs.map((log, i) => <div key={i}>{log}</div>)}
    </section>
  );
};

export default Console;
