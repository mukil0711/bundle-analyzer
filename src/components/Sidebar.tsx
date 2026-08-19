import { useAnalyzerStore } from "../store/analyzerStore";

const items = [
    ["overview","bi-speedometer2","Overview"],
    ["treemap","bi-grid-3x3-gap","Treemap"],
    ["dependencies","bi-diagram-3","Dependencies"],
    ["insights", "bi-lightbulb", "Insights"],
    ["routes", "bi-signpost-split", "Routes"],
    ["diff", "bi-arrows", "Diff"],
    ["budgets", "bi-bar-chart", "Budgets"]
];

export default function Sidebar() {
    const { activeView, setActiveView } = useAnalyzerStore();

    return (
        <aside
            className="bg-dark text-white p-3"
            style={{ width:230, minHeight: "clac(100vh -73px"}}
        >
            <div className="text-uppercase small text-secondary mb-3">
                Analyze
            </div>

            {items.map(([id, icon, label]) => (
                <button
                    key={id}
                    onClick={() => setActiveView(id)}
                    className={`sidebar-item ${
                        activeView === id ? "active" : ""
                    }`}
                >
                    <i className={`bi ${icon}`} />
                    {label}
                </button>
            ))}

            <hr className="border=secondary my-4"/>

            <div className="text-uppercase small text-secondary mb-3">
                Build
            </div>

            <button className="sidebar-item">
                <i className="bi bi-file-earmark-code" />
                Stats Files
            </button>

            <button className="sidebar-item">
                <i className="bi bi-gear" />
                Settings
            </button>
        </aside>
    )
}
