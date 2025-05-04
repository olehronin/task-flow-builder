import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {selectNode, updateNodeLabel} from "@/store/flowSlice";
import {ChangeEvent, ReactElement, useCallback} from "react";
import CloseIcon from "@/components/ui/CloseIcon";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Drawer = (): ReactElement => {
    const dispatch = useAppDispatch();

    const {selectedNode} = useAppSelector((state) => state.flow);

    const handleLabelChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (selectedNode && selectedNode.id) {
            dispatch(updateNodeLabel({id: selectedNode.id, label: e.target.value}));
        }
    }, [dispatch, selectedNode]);

    const onCloseDrawer = useCallback(() => {
        dispatch(selectNode(null))
    }, [dispatch]);

    return (
        <div className={`fixed inset-2 w-72 max-w-72 bg-[linear-gradient(135deg,_#fffffff5,_#3a4b8a,_#ffffff98)]
         border border-accent-border overflow-hidden rounded-2xl z-40 transition-transform duration-200 ease-in-out 
         ${selectedNode ? "translate-x-0" : "translate-x-[calc(-100%-8px)]"}`}
        >
            <div className={"h-full text-[1rem] bg-[linear-gradient(135deg,_#0d1120_0%,_#1b264b_43%,_#0d1120_100%)] overflow-y-auto"}>
                <div className={"flex gap-2 justify-between items-center p-4 border-b border-accent-border"}>
                    <h3 className={"text-lg font-semibold text-text-primary"}>
                        Editing Task
                    </h3>
                    <Button
                        isIconOnly={true}
                        className={"bg-transparent"}
                        onClick={onCloseDrawer}
                    >
                        <CloseIcon/>
                    </Button>
                </div>
                {selectedNode && (
                    <div className={"p-4"}>
                        <Input
                            value={selectedNode.data.label}
                            onChange={handleLabelChange}
                            placeholder={"Task name"}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;
