import storage from "redux-persist/lib/storage";
import {PersistConfig} from "redux-persist";
import {FlowState} from "@/types";

const flowPersistConfig: PersistConfig<FlowState> = {
    key: "flow",
    storage,
    whitelist: ["nodes", "edges"],
};

export default flowPersistConfig;
