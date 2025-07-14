import React from 'react';
import { useSelector } from 'react-redux';

import { DIGITS } from '@/constants';
import type { RootState } from '@/store';
import '@/styles/components/Panel.scss';

type PanelProps = {
};

const Panel: React.FC<PanelProps> = () => {
  const trueRange = useSelector((state: RootState) => state.meta.trueRange);

  return (
    <section id="panel" data-testid="panel">
      <div className="inputs">
        <div>1</div>
        <div><input type="text" defaultValue={0.123456} /></div>
        <div>3</div>
        <div><input type="text" defaultValue={0.123456} /></div>
        <div>5</div>
        <div><input type="text" defaultValue={0.123456} /></div>
        <div>True Range</div>
        <div><data value="0">{trueRange && trueRange.toFixed(DIGITS)}</data></div>
        <div>Balance</div>
        <div><data value="42">42.00</data></div>
        <div>11</div>
        <div><data value="0">0.00</data></div>
      </div>
      <div className="panes">
        <div>
          <table className="long">
            <thead>
              <tr>
                <th colSpan={5}>Long Positions</th>
              </tr>
              <tr>
                <th>Units</th>
                <th>Lots</th>
                <th>Keep</th>
                <th>Profit</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <table className="short">
            <thead>
              <tr>
                <th colSpan={5}>Short Positions</th>
              </tr>
              <tr>
                <th>Units</th>
                <th>Lots</th>
                <th>Keep</th>
                <th>Profit</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Panel;
