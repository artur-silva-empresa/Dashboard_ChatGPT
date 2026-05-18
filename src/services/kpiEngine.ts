export function calculateKPIs(data:any[]) {
  const totalKg = data.reduce((a,b)=>a+b.peso,0);

  const avgEfficiency =
    data.length > 0
      ? data.reduce((a,b)=>a+b.eff,0)/data.length
      : 0;

  return {
    totalKg,
    avgEfficiency
  };
}