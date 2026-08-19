import { useAnalyzerStore } from "../store/analyzerStore"


const Insights = () => {
    const { stats } = useAnalyzerStore();

    const insights = [
        {
            severity: "critical",
            title: "Moment.js is the one of the largest dependencies",
            description:"Moment.js contributes a significant amount of Javascript to the reports route.",
            recommendation: "Replace it with a smaller modeern date library r native Intl APIs.",
        },
        {
            severity: "warning",
            title: "Monaco Editor should be lazy loaded",
            description: "The editor dependency is the only nedded on the editor route.",
            recommendation: "Use route-level dynamic imports to keep it out of the initial bundle."
        },
        {
            severity: "warning",
            title: "Chart.js is route-specific",
            description: "Analytics visualization code is not needed by most users.",
            recommendation: "Move Chart.js behind a dynamic import.",
        },
        {
            severity: "info",
            title: "Bootstrap contributes UI overhead",
            description: "A signiicant amount of CSS and Javascript comes from the UI framework.",
            recommendation: "Consider importing only the Bootstrap components you use.", 
        }
    ]
  return (
    <div>
        <h3 className="fw-bold">Actionable insights</h3>
        <p className="text-secondary">
            Recommendations priortized by potential bundle impact.
        </p>

        <div className="row g-3">
            {insights.map((insight) => (
                <div className="col-lg-6" key={insight.title}>
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <span
                                className={`badge ${
                                    insight.severity === 'critical'
                                        ?"bg-danger"
                                        :insight.severity === "warning"
                                        ? "bg-warning text-dark"
                                        : "bg-info text-dark"
                                }`}
                            >
                                {insight.severity}
                            </span>

                            <h5 className="fw-bold mt-3">
                                {insight.title}
                            </h5>

                            <p className="text-secondary">
                                {insight.description}
                            </p>

                            <div className="bg-light rounded p-3">
                                <strong>Recommended fix</strong>
                                <div className="small mt-1">
                                    {insight.recommendation}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-4 text-secondary small">
            Analyzed {stats.modules.length} modules.
        </div>
      
    </div>
  )
}

export default Insights
