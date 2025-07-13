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
      <div>True Range: {trueRange && trueRange.toFixed(DIGITS)}</div>
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
      <div>Balance: 42</div>
    </section>
  );
};

export default Panel;
