import type { BundleStats } from "../types/analyzer";

export const sampleStats: BundleStats = {
    name: "production",
    size: 1248000,
    gzip: 382000,
    brotli: 318000,

    modules: [
        {
            id: "react",
            name: "react",
            path: "node_modules/react/index.js",
            size: 45200,
            gzip: 15400,
            brotli: 12800,
            category: "framework",
            route: "/" ,
            imports: ["react-dom"],
            importedBy: ["src/main.tsx", "src/App.tsx"]
        },
        {
            id: "react-dom",
            name: "react-dom",
            path: "node_modules/react-dom/index.js",
            size: 142000,
            gzip: 46800,
            brotli: 38200,
            category: "framework",
            route: "/" ,
            imports: ["react"],
            importedBy: ["src/main.tsx"]
        },
        {
            id: "lodash",
            name: "lodash",
            path: "node_modules/lodash/lodash.js",
            size: 71000,
            gzip: 24800,
            brotli: 20100,
            category: "utility",
            route: "/dashboard" ,
            imports: [],
            importedBy: ["src/utils.ts"]
        },
        {
            id: "moment",
            name: "moment",
            path: "node_modules/moment/moment.js",
            size: 285000,
            gzip: 76000,
            brotli: 64200,
            category: "date",
            route: "/reports" ,
            imports: [],
            importedBy: ["src/reports/date.ts"]
        },
        {
            id: "chart",
            name: "chart.js",
            path: "node_modules/chart.js/dist/index.js",
            size: 185000,
            gzip: 54200,
            brotli: 43800,
            category: "vizualization",
            route: "/analytics" ,
            imports: [],
            importedBy: ["src/analytics/Chart.tsx"]
        },
        {
            id: "editor",
            name: "monaco-editor",
            path: "node_modules/monaco-editor",
            size: 242000,
            gzip: 71000,
            brotli: 58000,
            category: "editor",
            route: "/editor" ,
            imports: [],
            importedBy: ["src/editor/Editor.tsx"]
        },
        {
            id: "app",
            name: "Application",
            path: "src/App.tsx",
            size: 82000,
            gzip: 27000,
            brotli: 22000,
            category: "application",
            route: "/" ,
            imports: ["react"],
            importedBy: []
        },
        {
            id: "bootstrap",
            name: "bootstrap",
            path: "node_modules/bootstrap",
            size: 98000,
            gzip: 31000,
            brotli: 25500,
            category: "ui",
            route: "/" ,
            imports: [],
            importedBy: ["src/main.tsx"]
        },
    ]
}

