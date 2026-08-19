export interface ModuleStat {
    id: string;
    name: string;
    path: string;
    size: number;
    gzip: number;
    brotli: number;
    category: string;
    route?: string;
    imports: string[];
    importedBy: string[];
    chunks?: string[];
    isNodeModule?: boolean;
    source?: "app" | "dependency"
}

export interface BundleStats {
    name: string;
    size: number;
    gzip: number;
    brotli: number;
    modules: ModuleStat[];
    chunks?: ChunkStat[];
}

export interface ChunkStat{
    id: string;
    name: string;
    size: number;
    gzip: number;
    brotil?: number;
    modules: string[];
}

export interface Insight {
    id: string;
    severity: "critical" | "warning" | "info";
    title: string;
    description: string;
    impact: string;
    recommendation: string;
}

export interface Budget{
    name: string;
    limit: number;
    actual: number;
    unit: "kb" | "percent";
}