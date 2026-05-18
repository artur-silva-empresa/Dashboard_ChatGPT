import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip
} from 'recharts';

const data = [
  { name: 'M1', eff: 82 },
  { name: 'M2', eff: 77 },
  { name: 'M3', eff: 91 }
];

export function EfficiencyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Line type="monotone" dataKey="eff" stroke="#22c55e" />
      </LineChart>
    </ResponsiveContainer>
  );
}