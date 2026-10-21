import type { ReactNode } from 'react';

/* First cell of each row is the row header. */
export function Table({ head, rows, caption }: { head: string[]; rows: ReactNode[][]; caption?: string }) {
  return (
    <div className="tbl rv">
      <table>
        {caption && <caption>{caption}</caption>}
        <thead><tr>{head.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => (j === 0 ? <th scope="row" key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
