import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ConnectionText from "./connectiontext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/*  <ConnectionText/>*/}
    </BrowserRouter>
  </Provider>
);

/*
구버전
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
