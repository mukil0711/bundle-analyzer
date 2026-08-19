import { useRef, useState } from "react"
import { useAnalyzerStore } from "../store/analyzerStore"
import { parseStatsFile } from "../parsers/statsParser"


const StatsUploader = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const { setStats } = useAnalyzerStore();

    const [loading,setLoading] = useState(false)

    const [error,setError] = useState<string | null>(null)

    const handleFile = async (file:File) => {
        setError(null)

        if (!file.name.endsWith(".json")) {
            setError("Please select a .json stats file.")
            return;
        }

        try {
            setLoading(true);

            const stats = await parseStatsFile(file);

            setStats(stats)
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "unable to parse stats file"
            )
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (file) {
            void handleFile(file)
        }
    }
  return (
    <>
        <input
            ref={inputRef}
            type="file"
            accept=".json,application/json"
            className="d-none"
            onChange={handleChange}
        />

        <button
            className="btn btn-dark btn-sm"
            disabled={loading}
            onClick={() => inputRef.current?.click()}
        >
            <i className="bi bi-upload me-2" />

            {loading ? "Parsing..." : "Upload stats.json"}
        </button>

        {error && (
            <div className="position-fixed bottom-0 end-0 p-3">
                <div className="alert alert-danger shadow-sm mb-0">
                    <strong>Import failed</strong>
                    <div className="small mt-1">
                        {error}
                    </div>
                </div>
            </div>
        )}
      
    </>
  )
}

export default StatsUploader
