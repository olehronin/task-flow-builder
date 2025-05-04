import {StrictMode} from "react"
import {createRoot} from "react-dom/client"

import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "@/store";
import {Provider} from "react-redux";

import "@xyflow/react/dist/style.css";
import App from "@/App.tsx";
import "@/styles/index.css"

const root = document.getElementById("root");

createRoot(root!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
