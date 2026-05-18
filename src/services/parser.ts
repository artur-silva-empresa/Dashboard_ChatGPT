import * as XLSX from 'xlsx';

export async function parseExcel(file: File) {
  const buffer = await file.arrayBuffer();

  const workbook = XLSX.read(buffer);

  const sheet = workbook.Sheets['Anual'];

  const rows = XLSX.utils.sheet_to_json(sheet);

  return rows.map((row:any)=>({
    maq: row.MAQ || 'M1',
    peso: Number(row.PESO || 0),
    eff: Number(row.EFF || 0),
    category: row.REC || 'Normal'
  }));
}