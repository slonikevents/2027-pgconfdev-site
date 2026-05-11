import { createContext, type Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

interface Context {
  /** Breadcrumb `<nav>` component of the layout. */
  BreadcrumbNav: Component<SvelteHTMLElements["nav"]>;

  /** Section `<nav>` component of the layout. */
  SectionNav: Component<SvelteHTMLElements["nav"]>;
}

export const [getContext, setContext] = createContext<Context>();
