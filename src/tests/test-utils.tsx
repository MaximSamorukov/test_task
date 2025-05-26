import React, { StrictMode, type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { TodoProvider } from "@/store/todoContext";
import { CollapseProvider } from "@/store/collapseContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <TodoProvider>
        <CollapseProvider>{children}</CollapseProvider>
      </TodoProvider>
    </StrictMode>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
