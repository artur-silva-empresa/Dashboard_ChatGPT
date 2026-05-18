export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold">
          Dashboard Tinturaria
        </h1>

        <p className="text-slate-300">
          Preview GitHub Pages
        </p>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="text-sm text-slate-500">
              Produção Total
            </div>

            <div className="text-4xl font-bold mt-3">
              125000 Kg
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <div className="text-sm text-slate-500">
              Eficiência
            </div>

            <div className="text-4xl font-bold mt-3">
              84%
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <div className="text-sm text-slate-500">
              Retrabalho
            </div>

            <div className="text-4xl font-bold mt-3">
              4.8%
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <div className="text-sm text-slate-500">
              Preparação
            </div>

            <div className="text-4xl font-bold mt-3">
              18000 Kg
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
