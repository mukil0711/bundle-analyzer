import type { BundleStats, ModuleStat} from "../types/analyzer"

function isModuleStat(value:unknown): value is ModuleStat {
    if(!value || typeof value !== "object") return false;

    const module = value as Record<string, unknown>

    return (
        typeof module.id === "string" &&
        typeof module.name === "string" &&
        typeof module.path === "string" &&
        typeof module.size === "number" &&
        typeof module.gzip === "number" &&
        typeof module.brotli === "number" &&
        typeof module.category === "string" &&
        Array.isArray(module.imports) &&
        Array.isArray(module.importedBy)
    )
}

function isBundleStats(value: unknown): value is BundleStats {
    if (!value || typeof value !== "object") return false;

    const stats = value as Record<string, unknown>

    return (
        typeof stats.name === "string" &&
        typeof stats.size === "number" &&
        typeof stats.gzip === "number" &&
        typeof stats.brotli === "number" &&
        Array.isArray(stats.modules) &&
        stats.modules.every(isModuleStat)

    )

    
}

export function parseStats(input: unknown): BundleStats {
    if (isBundleStats(input)) {
        return input;
    }

    throw new Error(
        "Unsupported stats format. Expected normalized BundleStats JSON."
    )
}


export async function parseStatsFile(file: File): Promise<BundleStats> {
  const text =await file.text();

  let json:unknown;

  try {
    json = JSON.parse(text);
  } catch {
    throw new Error("The selected file is not valid JSON.")
  }

  return parseStats(json);
}


