import React, {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { createStore, useStore, type StoreApi } from "zustand";
import type { CollapseContextType } from "./types";

const collapseStateCreator = () =>
  createStore<CollapseContextType>((set) => ({
    isOpen: false,
    toggleCollapse: () => set((state) => ({ isOpen: !state.isOpen })),
  }));

type CollapseStateApi = StoreApi<CollapseContextType>;

const CollapseContext = createContext<CollapseStateApi | undefined>(undefined);

export const CollapseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const collapseStateRef = useRef<CollapseStateApi>(undefined);

  if (!collapseStateRef.current) {
    collapseStateRef.current = collapseStateCreator();
  }

  return (
    <CollapseContext.Provider value={collapseStateRef.current}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapeContext = () => {
  const context = useContext(CollapseContext);
  if (!context?.getState) throw new Error("Отсутствует CollapseProvider");
  const isOpen = useStore(context, (data) => data.isOpen);
  const toggleCollapse = useStore(context, (data) => data.toggleCollapse);
  return { isOpen, toggleCollapse };
};
