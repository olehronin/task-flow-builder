import {ReactElement} from "react"
import FlowCanvas from "@/components/FlowCanvas"
import Drawer from "@/components/Drawer.tsx"

const App = (): ReactElement => {
    return (
        <div className={"flex min-h-screen"}>
            <Drawer/>
            <FlowCanvas/>
        </div>
    )
}

export default App;