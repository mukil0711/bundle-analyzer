import Budgets from "./components/Budgets";
import BundleTreemap from "./components/BundleTreemap";
import DependencyGraph from "./components/DependencyGraph";
import Diff from "./components/Diff";
import Header from "./components/Header"
import Insights from "./components/Insights";
import Overview from "./components/Overview";
import Routes from "./components/Routes";
import Sidebar from "./components/Sidebar"
import { useAnalyzerStore } from "./store/analyzerStore"


const App = () => {
  const { activeView } = useAnalyzerStore();

  const renderView = () => {
    switch (activeView) {
      case "treemap":
        return <BundleTreemap />

      case "dependencies":
        return <DependencyGraph />

      case "insights":
        return <Insights />

      case "routes":
        return <Routes />

      case "diff":
        return <Diff />

      case "budgets":
        return <Budgets />

      default:
        return <Overview />
    }
  }
  return (
    <div className="min-vh-100 bg-light">
      <Header />
      
      <div className="d-flex">
        <Sidebar />

        <main className="flex-grow-1 p-4 overflow-auto">
          {renderView()}
        </main>
      </div>
    </div>
  )
}

export default App
