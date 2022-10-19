import React from "react";
import ReactDOM from "react-dom/client"
import App from "./components/App";
import "./components/cssfile.css"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div className="section">
    <div className="container">
      <App />
    </div>
  </div>
)