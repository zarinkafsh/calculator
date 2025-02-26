import { count } from "console";
import { stat } from "fs";
import { evaluate } from "mathjs";
import { create } from "zustand";

interface State {
  display: string;
  history: string[];
  memory: number;
  theme: "light" | "dark";
  appendToDisplay: (value: string) => void;
  calculate: () => void;
  clear: () => void;
}

export const useCalculatorStore = create<State>((set) => ({
  display: "0",
  history: [],
  memory: 0,
  theme: "light",
  appendToDisplay: (value: string) =>
    set((state) => ({
      display:
        state.display === "0"
          ? value
          : state.display + value,
    })),
  clear: () => set(() => ({ display: "0" })),
  toggleTheme: () =>
    set((state: State) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  calculate: () =>
    set((state) => ({
      display: evaluate(state.display),
    })),
}));
