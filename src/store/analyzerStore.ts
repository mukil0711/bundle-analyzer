import { create } from "zustand";
import type { BundleStats } from "../types/analyzer";
import { sampleStats } from "../data/sampleStats";

interface AnalyzerState {
    stats: BundleStats;
    selectedModule: string | null;
    search: string;
    activeView: string;

    setStats: (stats: BundleStats) => void;
    setSelectedModule: (id:string | null) => void;
    setSearch: (search:string) => void;
    setActiveView: (view:string) => void;
}

export const useAnalyzerStore = create<AnalyzerState>((set) => ({
    stats: sampleStats,
    selectedModule: null,
    search: "",
    activeView: "overview",

    setStats: (stats) => set({ stats }),
    setSelectedModule: (selectedModule) => set({ selectedModule }),
    setSearch: (search) => set({ search }),
    setActiveView: (activeView) => set({ activeView }),

}))