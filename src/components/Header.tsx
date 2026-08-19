import { useAnalyzerStore } from '../store/analyzerStore'
import StatsUploader from "./StatsUploader"

const Header = () => {
    const { stats } = useAnalyzerStore();

    const formatSize = (bytes: number) =>
        `${(bytes / 1024).toFixed(1)} KB`;
  return (
    <header className='border-bottom bg-white px-4 py-3 d-flex justify-content-between align-items-center'>
        <div>
            <h5 className='mb-0 fw-bold'>Bundle Analyzer</h5>
            <small className='text-secondary'>
                Production bundle . {formatSize(stats.size)}
            </small>
        </div>

        <div className='d-flex gap-2'>
            <button className='btn btn-outline-secondary btn-sm'>
                Compare
            </button>

            
            <StatsUploader />
            
        </div>
    </header>
  )
}

export default Header
