import { Upload } from 'lucide-react';
import { parseExcel } from '../../services/parser';
import { useDashboardStore } from '../../store/dashboardStore';

export function ExcelUpload() {
  const setData = useDashboardStore(state=>state.setData);

  async function handleFile(e:any) {
    const file = e.target.files?.[0];

    if (!file) return;

    const data = await parseExcel(file);

    setData(data);
  }

  return (
    <label className="cursor-pointer">
      <div className="bg-blue-600 hover:bg-blue-700 transition rounded-xl px-4 py-2 flex items-center gap-2 text-white">
        <Upload size={18} />
        <span>Importar Excel</span>
      </div>

      <input
        hidden
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFile}
      />
    </label>
  );
}