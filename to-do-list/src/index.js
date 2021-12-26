import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} />
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
