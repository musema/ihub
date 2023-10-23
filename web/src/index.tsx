import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import { configureStore } from "./store";
import { App } from "./App";
const store = configureStore();

export function AppWithStore() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<AppWithStore />);
