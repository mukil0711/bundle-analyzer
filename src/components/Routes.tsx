import { useAnalyzerStore } from "../store/analyzerStore"


const Routes = () => {
    const { stats } = useAnalyzerStore();

    const routes = [...new Set(
        stats.modules.map((module) => module.route).filter(Boolean)
    )]

  return (
    <div>
        <h3 className="fw-bold">Route mapping</h3>
        <p className="text-secondary">
            See which dependencies are loaded by each application route.
        </p>

        <div className="row g-3">
            {routes.map((route) => {
                const modules = stats.modules.filter(
                    (module) => module.route === route
                )

                const total = modules.reduce(
                    (sum,module) => sum + module.size,
                    0
                );

                return(
                    <div className="col-md-6 col-xl-4 key={route}">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="fw-fold">{route}</h5>
                                    <span className="badge bg-primary">
                                        {(total / 1024).toFixed(0)} KB
                                    </span>
                                </div>

                                <hr />

                                {modules.map((module) => (
                                    <div
                                        key={module.id}
                                        className="d-flex justify-content-between py-2"
                                    >
                                        <span>{module.name}</span>
                                        <span className="text-secondary">
                                            {(module.size / 1024).toFixed(0)} KB
                                        </span>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default Routes
