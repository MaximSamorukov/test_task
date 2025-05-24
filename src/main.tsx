import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./store/todoContext.tsx";
import App from "./App.tsx";
import { CollapseProvider } from "./store/collapseContext.tsx";
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
