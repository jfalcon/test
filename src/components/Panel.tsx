import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DIGITS } from '@/constants';
import type { RootState } from '@/store';
import '@/styles/Panel.scss';

type PanelProps = {
};

const Panel: React.FC<PanelProps> = () => {
  const [useLots, setUseLots] = useState(false);
  const trueRange = useSelector((state: RootState) => state.meta.trueRange);

  return (
    <section id="panel" data-testid="panel">
      <div className="inputs">
        <div>1</div>
        <div><input type="text" value={0.123456} /></div>
        <div>3</div>
        <div><input type="text" value={0.123456} /></div>
        <div>5</div>
        <div><input type="text" value={0.123456} /></div>
        <div>True Range</div>
        <div><data value="0">{trueRange && trueRange.toFixed(DIGITS)}</data></div>
        <div>Balance</div>
        <div><data value="42">42.00</data></div>
        <div>11</div>
        <div><data value="0">0.00</data></div>
      </div>
      <div className="panes">
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>Main Header</th>
              </tr>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
                <td>Totals</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>Main Header</th>
              </tr>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
            </tbody>
            <tfoot>
              <tr>
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
