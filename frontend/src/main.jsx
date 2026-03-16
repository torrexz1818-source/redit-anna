import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </AuthProvider>
  </React.StrictMode>
);