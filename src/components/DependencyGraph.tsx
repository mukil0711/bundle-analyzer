import ReactFlow ,{ Background, Controls, MiniMap } from "reactflow";
import { useAnalyzerStore } from "../store/analyzerStore"
import "reactflow/dist/style.css";


const DependencyGraph = () => {
    const { stats } = useAnalyzerStore();

    const nodes = stats.modules.map((module, index) => ({
        id: module.id,
        position: {
            x: (index % 4) * 230,
            y: Math.floor(index/4) * 150,
        },
        data: {
            label: (
                <div>
                    <strong>{module.name}</strong>
                    <div className="small text-secondary">
                        {(module.size / 1024).toFixed(0)} KB
                    </div>
                </div>
            )
        }

    }))

    const edges = stats.modules.flatMap((module) => {
        return module.importedBy.flatMap((source) => {
            const sourceModule = stats.modules.find(
            (item) => item.name === source || item.id === source
        );

        if (!sourceModule) {
            return []
        }

        return [ 
              {
                id : `${sourceModule.id}-${module.id}`,
                source: sourceModule.id,
                target: module.id,
                animated: false,
              }
            ]        
          })
        })
        


  return (
    <div>
      <h3 className="fw-bold">Dependency graph</h3>
      <p className="text-secondary">
        Trace which modules introduce expensive dependencies.
      </p>

      <div
        className="card border-0 shadow-sm overflow-hidden"
        style={{ height: 650}}
      >
        <ReactFlow nodes={nodes} edges={edges}>
            <Background />
            <Controls />
            <MiniMap />
        </ReactFlow>

      </div>
    </div>
  )
}

export default DependencyGraph
