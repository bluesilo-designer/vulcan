/* Contour lines behind the footer and the contact block. */
const PATHS = Array.from({ length: 14 }, (_, k) => {
  const y = 40 + k * 26, a = 18 + k * 2.2, ph = k * 0.55;
  let d = 'M -40 ' + y;
  for (let x = 0; x <= 1640; x += 40) {
    const yy = y + Math.sin(x / 170 + ph) * a + Math.sin(x / 61 + ph * 1.7) * a * 0.28;
    d += ' L ' + x + ' ' + yy.toFixed(1);
  }
  return d;
});
export function Topo() {
  return (
    <svg viewBox="0 0 1600 420" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="1">
      {PATHS.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
