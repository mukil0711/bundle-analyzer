

const Diff = () => {
    const changes = [
        {
            module: "moment",
            before: 210,
            after: 285,
            change: 75,
        },
        {
            module: "monaco-editor",
            before: 218,
            after: 242,
            change: 24,
        },
        {
            module: "chart.js",
            before: 170,
            after: 185,
            change: 15,
        },
        {
            module: "loadash",
            before: 73,
            after: 71,
            change: -2,
        },
    ]
  return (
    <div>
        <h3 className="fw-bold">Build diff</h3>
        <p className="text-secondary">
            Compare your current build with previous build.
        </p>

        <div className="card border-0 shadow-sm">
            <div className="table-responsive">
                <table className="table align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>Module</th>
                            <th>Previous</th>
                            <th>Current</th>
                            <th>Change</th>
                            <th>Impact</th>
                        </tr>
                    </thead>

                    <tbody>
                        {changes.map((item) => (
                            <tr key={item.module}>
                                <td className="fw-semibold">{item.module}</td>
                                <td>{item.before} KB</td>
                                <td>{item.after} KB</td>
                                <td
                                    className={
                                        item.change > 0
                                            ? "text-danger fw-bold"
                                            : "text-success fw-bold"
                                    }
                                >
                                    {item.change > 0 ? "+" : ""}
                                    {item.change} KB
                                </td>
                                <td>
                                    <span>
                                        {item.change > 20
                                            ? "High"
                                            : item.change > 0
                                            ? "Medium"
                                            : "Improved"
                                        }
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>    
    </div>
  )
}

export default Diff
