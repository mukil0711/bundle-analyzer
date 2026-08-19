import { ResponsiveTreeMap } from "@nivo/treemap";
import { useAnalyzerStore } from "../store/analyzerStore"

const BundleTreemap = () => {
    const { stats, setSelectedModule } = useAnalyzerStore();

    const data = {
        name: "bundle",
        childen: stats.modules.map((module) => ({
            name: module.name,
            loc: module.size,
            category: module.category,
            id: module.id,
        }))
    }

  return (   
    <div>
        <h3 className="fw-bold">Bundle treemap</h3>
        <p className="text-secondary">
            Larger rectangles represent more Javascript. 
        </p>

        <div
            className="card border-0 shadow-sm"
            style={{ height: 600}}
        >
            <ResponsiveTreeMap
                data={data}
                identity="name"
                value="loc"
                valueFormat=".2s"
                margin={{ top:10, right: 10, bottom: 10, left:10}}
                label={(node) => node.id}
                labelSkipSize={30}
                parentLabelSize={30}
                borderColor="#ffffff"
                borderWidth={2}
                colors={{ scheme: "tableau10" }}
                nodeOpacity={0.9}
                onClick={(node) => {
                    const module = stats.modules.find(
                        (item) => item.name === node.id
                    )
                    
                    if (module) {
                        setSelectedModule(module.id);
                    }
                }}
            />

        </div>  
    </div>
  )
}

export default BundleTreemap
