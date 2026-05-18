interface Props {
  title: string;
  value: string;
}

export function KPICard({title,value}:Props) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 shadow-xl border border-slate-700">
      <div className="text-slate-400 text-sm">
        {title}
      </div>

      <div className="text-white text-4xl font-bold mt-3">
        {value}
      </div>
    </div>
  );
}