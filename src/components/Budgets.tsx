import { useAnalyzerStore } from "../store/analyzerStore"


const Budgets = () => {
    const { stats } = useAnalyzerStore();

    const budgets = [
        {
            name: "Initial JS",
            limit: 500,
            actual: stats.gzip / 1024,
        },
        {
            name: "Total JS",
            limit: 1200,
            actual: stats.size / 1024,
        },
        {
            name: "Brotli",
            limit: 350,
            actual: stats.brotli / 1024,
        }
    ]
  return (
    <div>
        <h3 className="fw-bold">Performance budgets</h3>
        <p className="text-secondary">
            Keep bundle growth within defined limits.
        </p>

        <div className="row g-3">
            {budgets.map((budget) => {
                    const percentage = Math.min(
                    (budget.actual / budget.limit) * 100,
                    100
                );

                const exceeded = budget.actual > budget.limit

                return (
                    <div className="col-md-4" key={budget.name}>
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h6 className="fw-bold">{budget.name}</h6>

                                    <span
                                        className={`badge ${
                                             exceeded ? "bg-danger" : "bg-success"
                                            }`}
                                    >
                                        {exceeded ? "Exceeded" : "Passing"}
                                    </span>
                                </div>

                                <div>
                                    {budget.actual.toFixed(0)} KB
                                </div>

                                <div className="progress" style={{ height: 8 }}>
                                    <div
                                        className={`progress-bar ${
                                            exceeded ? "bg-danger" : "bg-success"
                                        }`}
                                        style={{ width: `${percentage}%` }}
                                    >
                                    </div>

                                    <div className="small text-secondary mt-2">
                                        Budget: {budget.limit} KB
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )     
            })}
        </div>
      
    </div>
  )
}

export default Budgets
