import {Node} from "@xyflow/react";
import TaskNode from "@/components/TaskNode.tsx";

export interface TaskNodeData {
    label: string;

    [key: string]: unknown;
}

export type FlowTaskNode = Node<TaskNodeData, "task">;

export const nodeTypes = {
    task: TaskNode
};