import { createContext } from "svelte";

interface Context {
  menu: string | null;
}

export const [getContext, setContext] = createContext<Context>();
