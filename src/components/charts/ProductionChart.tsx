import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from 'recharts';

const data = [
  { name: 'Jan', kg: 12000 },
  { name: 'Fev', kg: 18000 },
  { name: 'Mar', kg: 22000 },
  { name: 'Abr', kg: 20000 }
];

export function ProductionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="kg" fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  );
}