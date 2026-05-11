if (typeof globalThis.Temporal === "undefined") {
  const { Temporal, toTemporalInstant } = await import("temporal-polyfill");
  globalThis.Temporal = Temporal;
  Date.prototype.toTemporalInstant = toTemporalInstant;
}

export {};
