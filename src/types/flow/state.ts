import {FlowEdge, FlowTaskNode} from "@/types";

export interface FlowState {
    nodes: FlowTaskNode[];
    edges: FlowEdge[];
    selectedNode: FlowTaskNode | null;
    selectedNodeId: string | null;
}


export interface UpdateNodeLabelPayload {
    id: string;
    label: string;
}

export interface UpdateNodePositionPayload {
    id: string;
    position: { x: number; y: number };
}