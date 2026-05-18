import { Overview } from './pages/Overview';
import { ExcelUpload } from './components/upload/ExcelUpload';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-3xl font-bold">
              Dashboard Industrial
            </h1>

            <p className="text-slate-400">
              Controlo de Produção Tinturaria
            </p>
          </div>

          <ExcelUpload />
        </div>
      </header>

      <main className="p-6">
        <Overview />
      </main>
    </div>
  );
}