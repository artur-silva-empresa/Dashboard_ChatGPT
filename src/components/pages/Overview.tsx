import { KPICard } from '../components/dashboard/KPICard';
import { ProductionChart } from '../components/charts/ProductionChart';
import { EfficiencyChart } from '../components/charts/EfficiencyChart';
import { useDashboardStore } from '../store/dashboardStore';
import { calculateKPIs } from '../services/kpiEngine';

export function Overview() {
  const data = useDashboardStore(state=>state.data);

  const kpis = calculateKPIs(data);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <KPICard
          title="Produção Total"
          value={`${kpis.totalKg.toFixed(0)} Kg`}
        />

        <KPICard
          title="Eficiência Média"
          value={`${kpis.avgEfficiency.toFixed(1)}%`}
        />

        <KPICard
          title="Retrabalho"
          value="4.2%"
        />

        <KPICard
          title="Preparação"
          value="18%"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-2xl p-5">
          <h2 className="text-white text-lg mb-4">
            Produção Mensal
          </h2>

          <ProductionChart />
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <h2 className="text-white text-lg mb-4">
            Eficiência Máquinas
          </h2>

          <EfficiencyChart />
        </div>
      </div>
    </div>
  );
}