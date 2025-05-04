import {ChangeEvent, FC, memo, useCallback} from "react";
import {Handle, NodeProps, Position} from "@xyflow/react";
import {deleteNode, updateNodeLabel} from "@/store/flowSlice";
import {useAppDispatch} from "@/store/hooks";
import CloseIcon from "@/components/ui/CloseIcon";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {FlowTaskNode} from "@/types";

const TaskNode: FC<NodeProps<FlowTaskNode>> = memo(({id, data, selected}) => {
    const dispatch = useAppDispatch();

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNodeLabel({id, label: e.target.value}));
    }, [dispatch, id]);

    const handleDelete = useCallback(() => {
        dispatch(deleteNode(id));
    }, [dispatch, id]);

    return (
        <div
            className={`bg-background-node border-accent-border border rounded-2xl transition-all duration-150 ease-in-out ${
                selected ? "border-accent-blue scale-105" : "border-background-dark"
            }`}
        >
            <Handle type={"target"} position={Position.Left} className={"w-3 h-3"}/>

            <div className={"flex flex-col"}>
                <div className={"flex gap-2 pl-3 pr-2 py-1.5 items-center border-b border-accent-border"}>
                    <h3 className={"block w-full text-md text-text-primary font-light"}>
                        Task
                    </h3>
                    <Button
                        isIconOnly={true}
                        onClick={handleDelete}
                        title={"Delete task"}
                        className={"bg-transparent border-transparent hover:bg-red-500/20 hover:text-red-400"}
                    >
                        <CloseIcon strokeWidth={1}/>
                    </Button>
                </div>
                <div className={"flex items-center justify-center p-2"}>
                    <Input
                        value={data.label}
                        onChange={handleChange}
                        placeholder={"Task name"}
                        className={"nodrag"}
                    />
                </div>
            </div>
            <Handle type={"source"} position={Position.Right} className={"w-3 h-3"}/>
        </div>
    );
});

TaskNode.displayName = "TaskNode";

export default TaskNode;