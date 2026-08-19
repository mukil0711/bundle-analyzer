import { useMemo } from "react";
import { useAnalyzerStore } from "../store/analyzerStore"

const format = (bytes: number) =>
    `${(bytes / 1024).toFixed(1)} KB`

const Overview = () => {
    const { stats } = useAnalyzerStore();

    const largest = useMemo(
        () => [...stats.modules].sort((a,b) => b.size - a.size).slice(0,5),
        [stats.modules]
    )
  return (
    <div>
        <div className="mb-4">
            <h3 className="fw-bold">Bundle overview</h3>
            <p className="text-secondary mb-0">
                Understand what's large, why it exists, and what to fix first. 
            </p>
        </div>

        <div className="row g-3 mb-4">
            <Metric
                title="Total size"
                value={format(stats.size)}
                icon="bi-box"
                color="primary"
            />

            <Metric
                title="Gzip"
                value={format(stats.gzip)}
                icon="bi-file-zip"
                color="success"
            />

            <Metric
                title="Brotli"
                value={format(stats.size)}
                icon="bi-lightning"
                color="info"
            />

            <Metric
                title="Modules"
                value={stats.modules.length.toString()}
                icon="bi-boxes"
                color="warning"
            />
        </div>

        <div className="row g-4">
            <div className="col-lg-8">
                <div className="card border-0 shawdow-sm">
                    <div className="card-body">
                        <h5 className="fw-bold mb-4">Largest modules</h5>

                        {largest.map((module) => {
                            const percentage = (module.size/stats.size) * 100;

                            return(
                                <div className="mb-4" key={module.id}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong>{module.name}</strong>
                                            <div className="small text-secondary">
                                                {module.category}
                                            </div>
                                        </div>

                                        <strong>{format(module.size)}</strong>
                                    </div>

                                    <div className="progress mt-2" style={{ height: 7}}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${percentage}%`}}
                                        />
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <h5 className="fw-bold">Quick insights</h5>

                        <div className="alert alert-danger mt-3">
                            <strong>Moment.js is large</strong>
                            <br />
                            <small>
                                285 KB of uncompressed Javascript.
                            </small>
                        </div>

                        <div className="alert alert-warning">
                            <strong>Heavy editor dependency</strong>
                            <br />
                            <small>
                                Monaco contributes 242 KB to the bundle.
                            </small>
                        </div>

                        <div className="alert alert-info mb-0">
                            <strong>Consider route splitting</strong>
                            <br />
                            <small>
                                Analytics and editor dependencies can be lazy loaded.
                            </small>

                        </div>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

function Metric({
    title,
    value,
    icon,
    color,
}: {
    title: string;
    value: string;
    icon: string;
    color: string;
}) {
    return (
        <div className="col-md-6 col-xl-3">
            <div className="card-border-0 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="text-secondary small">{title}</div>
                            <div className="fs-4 fw-bold mt-1">{value}</div>
                        </div>

                        <div className={`metric-icon text-${color}`}>
                            <i className={`bi ${icon}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
