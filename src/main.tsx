import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CollapseProvider, TodoProvider } from "./store/context.tsx";
import App from "./App.tsx";
import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <CollapseProvider>
        <App />
      </CollapseProvider>
    </TodoProvider>
  </StrictMode>
);
