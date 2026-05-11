import type { Temporal as TemporalNS } from "temporal-polyfill";

// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  const Temporal: typeof TemporalNS;

  interface Date {
    toTemporalInstant(): TemporalNS.Instant;
  }

  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
