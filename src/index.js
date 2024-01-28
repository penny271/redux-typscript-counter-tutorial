import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// どのコンポーネントでも reducerが使えるようにする
import { Provider } from "react-redux";
// globalで storeを利用できるようにする
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Providerで囲む */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
