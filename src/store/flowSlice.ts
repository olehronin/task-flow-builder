import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addEdge, applyEdgeChanges, applyNodeChanges, Connection, EdgeChange, NodeChange} from "@xyflow/react";
import {FlowEdge, FlowState, FlowTaskNode, UpdateNodeLabelPayload, UpdateNodePositionPayload} from "@/types";

const initialState: FlowState = {
    nodes: [],
    edges: [],
    selectedNode: null,
    selectedNodeId: null,
};

const flowSlice = createSlice({
    name: "flow",
    initialState,
    reducers: {
        addNode: (state) => {
            const newNode: FlowTaskNode = {
                id: `${Date.now()}`,
                type: "task",
                position: {x: Math.random() * 400, y: Math.random() * 400},
                data: {label: "New Task"},
            };
            state.nodes = [...state.nodes, newNode];
        },
        updateNodeLabel: (state, action: PayloadAction<UpdateNodeLabelPayload>) => {
            const node = state.nodes.find((n) => n.id === action.payload.id);
            if (node) {
                node.data.label = action.payload.label;
                if (state.selectedNodeId === action.payload.id) {
                    state.selectedNode = {...node, data: {...node.data}};
                }
            }
        },
        deleteNode: (state, action: PayloadAction<string>) => {
            state.nodes = state.nodes.filter((n) => n.id !== action.payload);
            state.edges = state.edges.filter((e) => e.source !== action.payload && e.target !== action.payload);
            if (state.selectedNodeId === action.payload) {
                state.selectedNodeId = null;
                state.selectedNode = null;
            }
        },
        updateNodePosition: (state, action: PayloadAction<UpdateNodePositionPayload>) => {
            const node = state.nodes.find((n) => n.id === action.payload.id);
            if (node) {
                node.position = action.payload.position;
                if (state.selectedNodeId === action.payload.id) {
                    state.selectedNode = {...node, position: {...node.position}};
                }
            }
        },
        onNodesChange: (state, action: PayloadAction<NodeChange<FlowTaskNode>[]>) => {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
            if (state.selectedNodeId) {
                const updatedNode = state.nodes.find((n) => n.id === state.selectedNodeId);
                state.selectedNode = updatedNode ? {...updatedNode, data: {...updatedNode.data}} : null;
            }
        },
        onEdgesChange: (state, action: PayloadAction<EdgeChange<FlowEdge>[]>) => {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
        onConnect: (state, action: PayloadAction<Connection>) => {
            state.edges = addEdge({...action.payload, type: "smoothstep"}, state.edges);
        },
        selectNode: (state, action: PayloadAction<string | null>) => {
            const nodeId = action.payload;
            if (nodeId === null) {
                state.selectedNodeId = null;
                state.selectedNode = null;
            } else {
                const node = state.nodes.find((node) => node.id === nodeId);
                state.selectedNodeId = node ? nodeId : null;
                state.selectedNode = node ? {...node, data: {...node.data}} : null;
            }
        },
    },
});

export const {
    addNode,
    updateNodeLabel,
    deleteNode,
    updateNodePosition,
    onNodesChange,
    onEdgesChange,
    onConnect,
    selectNode,
} = flowSlice.actions;

export default flowSlice.reducer;
