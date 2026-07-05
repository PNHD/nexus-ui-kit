import { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import { useTheme, cssVar } from '../theme/ThemeProvider.jsx';

/**
 * Theme-aware ApexCharts wrapper. Resolves the accent CSS variables at runtime
 * and re-reads them whenever theme/accent changes, so every chart follows the
 * active palette — the React equivalent of the HTML edition's renderCharts().
 *
 * `build(colors)` receives resolved { a1, a2, a3, grid, tx } and returns
 * { type, height, options, series }.
 */
export default function Chart({ build }) {
  const { theme, accent } = useTheme();
  const [c, setC] = useState(null);

  useEffect(() => {
    setC({
      a1: cssVar('--a1') || '#7c5cff',
      a2: cssVar('--a2') || '#a48bff',
      a3: cssVar('--a3') || '#22d3ee',
      grid: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(20,24,38,0.08)',
      tx: cssVar('--tx-4') || '#8b8b9c',
    });
  }, [theme, accent]);

  if (!c) return null;

  const spec = build(c);
  const base = {
    chart: {
      background: 'transparent',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'Sora, sans-serif',
      foreColor: c.tx,
      animations: { easing: 'easeinout', speed: 700 },
    },
    grid: { borderColor: c.grid, strokeDashArray: 4 },
    dataLabels: { enabled: false },
    tooltip: { theme },
    legend: { labels: { colors: c.tx } },
  };

  const options = {
    ...base,
    ...spec.options,
    chart: { ...base.chart, ...(spec.options?.chart || {}), type: spec.type, height: spec.height },
  };

  return (
    <ApexChart options={options} series={spec.series} type={spec.type} height={spec.height} />
  );
}
