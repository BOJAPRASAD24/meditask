
import { create } from 'zustand';

const useMedicalStore = create((set) => ({
  records: [],

  addRecord: (record) =>
    set((state) => ({
      records: [state.records, record],
    })),

  removeRecord: (id) =>
    set((state) => ({
      records: state.records.filter((rec) => rec.id == id),
    })),

  clearRecords: () => set({ records: [] }),
}));

export default useMedicalStore;
