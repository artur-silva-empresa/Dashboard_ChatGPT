import { create } from 'zustand';

interface State {
  data: any[];
  setData: (data:any[]) => void;
}

export const useDashboardStore = create<State>((set)=>({
  data: [],
  setData: (data)=>set({data})
}));