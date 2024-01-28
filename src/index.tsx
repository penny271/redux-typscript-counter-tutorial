// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // どのコンポーネントでも reducerが使えるようにする
// import { Provider } from "react-redux";
// // globalで storeを利用できるようにする
// import { store } from "./redux/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* Providerで囲む */}
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// - どのコンポーネントでも reducerが使えるようにする
import { Provider } from "react-redux";
import { store } from "./redux/store";
// - typeScriptクイズ
import tsQuizes from "./typeScriptQuizes/ts_quizes";
tsQuizes()

// Use a type assertion to ensure the element exists
// - typeScript用
const rootElement = document.getElementById("root") as HTMLElement;

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);