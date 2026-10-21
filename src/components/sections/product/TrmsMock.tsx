/* legacy v6trmsMock: an illustrative live session screen, drawn in markup. */
const ST: [string, string, string, number][] = [
  ['Station 1', 'Detail 3', 'On lane', 72], ['Station 2', 'Detail 4', 'On lane', 45],
  ['Station 3', 'Detail 2', 'Reshoot', 88], ['Station 4', 'Detail 5', 'Queued', 0],
];

export function TrmsMock() {
  return (
    <div className="pv-ui" role="img" aria-label="Illustration of a live session screen: a timer, result counters and four stations with their details">
      <div className="pv-ui__bar"><span className="pv-ui__dot"></span><span className="pv-ui__dot"></span><span className="pv-ui__dot"></span><b>Live session</b><em>Illustrative</em></div>
      <div className="pv-ui__top">
        <div className="pv-ui__timer"><i className="ph ph-timer" aria-hidden="true"></i><b>01:42:16</b></div>
        <div className="pv-ui__kpi"><span><b>18</b>Qualified</span><span><b>41</b>Passed</span><span><b>6</b>Failed</span></div>
      </div>
      <div className="pv-ui__st">{ST.map((x) => (
        <div className="pv-ui__row" key={x[0]}>
          <b>{x[0]}</b><span>{x[1]}</span>
          <i className={`pv-ui__s pv-ui__s--${x[2].toLowerCase().replace(' ', '')}`}>{x[2]}</i>
          <span className="pv-ui__bar2"><span style={{ width: `${x[3]}%` }}></span></span>
        </div>
      ))}</div>
    </div>
  );
}
