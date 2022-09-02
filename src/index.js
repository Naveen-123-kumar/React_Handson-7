import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import StudentProvider from "./contextAPI/StudentProvider"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentProvider>
    {/* <Provider store={store}> */}
    <Provider store={store}>
      <App />
    </Provider>
    </StudentProvider>
  </React.StrictMode>
);
reportWebVitals();
