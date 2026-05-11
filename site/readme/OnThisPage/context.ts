import { createContext } from "svelte";
import { SvelteSet } from "svelte/reactivity";

// Return whichever of a or b appears first in the document.
function earliest<T extends Node>(a: T, b: T): T {
  return b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING
    ? a
    : b;
}

export class Context {
  #active = new SvelteSet<Element>();
  #observer: IntersectionObserver | null = null;

  #getObserver() {
    return (this.#observer ??= new IntersectionObserver(this.#on));
  }

  #on = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) this.#active.add(entry.target);
      else this.#active.delete(entry.target);
    }
  };

  observe(target: Element) {
    this.#getObserver().observe(target);
    return () => this.unobserve(target);
  }

  unobserve(target: Element) {
    this.#getObserver().unobserve(target);
    this.#active.delete(target);
  }

  get active(): Element | null {
    return this.#active.size ? [...this.#active].reduce(earliest) : null;
  }
}

export const [getContext, setContext] = createContext<Context>();
