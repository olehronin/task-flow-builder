import {memo, MouseEvent, ReactElement, useCallback} from "react";
import {Background, Connection, Controls, EdgeChange, MiniMap, NodeChange, Panel, ReactFlow} from "@xyflow/react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {FlowEdge, FlowTaskNode, nodeTypes} from "@/types";
import {addNode, onConnect, onEdgesChange, onNodesChange, selectNode, updateNodePosition,} from "@/store/flowSlice";
import Button from "@/components/ui/Button";

const ActionPanel = memo(() => {
    const dispatch = useAppDispatch();

    return (
        <Panel position={"top-left"}>
            <Button onClick={() => dispatch(addNode())}>
                Add task
            </Button>
        </Panel>
    )
})

const FlowCanvas = (): ReactElement => {
    const dispatch = useAppDispatch();
    const {nodes, edges} = useAppSelector((state) => state.flow);

    const onNodesChangeHandler = useCallback((changes: NodeChange<FlowTaskNode>[]) => {
        dispatch(onNodesChange(changes));
    }, [dispatch]);

    const onEdgesChangeHandler = useCallback((changes: EdgeChange<FlowEdge>[]) => {
        dispatch(onEdgesChange(changes));
    }, [dispatch]);

    const onConnectHandler = useCallback((params: Connection) => {
        dispatch(onConnect(params));
    }, [dispatch]);

    const onNodeDragStop = useCallback((_: MouseEvent, node: FlowTaskNode) => {
        dispatch(updateNodePosition({id: node.id, position: node.position}));
    }, [dispatch]);

    const onNodeClick = useCallback((_: MouseEvent, node: FlowTaskNode) => {
        dispatch(selectNode(node.id));
    }, [dispatch]);

    const onSelectionChange = useCallback(({nodes}: { nodes: FlowTaskNode[] }) => {
        if (nodes.length === 0) {
            dispatch(selectNode(null));
        } else {
            dispatch(selectNode(nodes[0].id));
        }
    }, [dispatch]);

    return (
        <div className={"flex-1"}>
            <div className={"h-full w-full"}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChangeHandler}
                    onEdgesChange={onEdgesChangeHandler}
                    onSelectionChange={onSelectionChange}
                    onConnect={onConnectHandler}
                    onNodeDragStop={onNodeDragStop}
                    onNodeClick={onNodeClick}
                    nodeTypes={nodeTypes}
                    fitView={true}
                    defaultEdgeOptions={{type: "smoothstep"}}
                >
                    <ActionPanel/>
                    <Background gap={16}/>
                    <Controls/>
                    <MiniMap/>
                </ReactFlow>
            </div>
        </div>
    );
};

export default FlowCanvas;