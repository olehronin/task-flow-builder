import {combineReducers} from "@reduxjs/toolkit";
import flowReducer from "@/store/flowSlice";
import {persistReducer} from "redux-persist";
import flowPersistConfig from "@/store/persistConfig";

const persistedFlowReducer = persistReducer(flowPersistConfig, flowReducer);

const rootReducer = combineReducers({
    flow: persistedFlowReducer,
});

export default rootReducer;