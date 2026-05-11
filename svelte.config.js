import adapter from "./adapter-pagefind.js";

export default {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in
    // Svelte 6.
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
  },
  kit: {
    adapter: adapter(),
    appDir: "svelte",
    files: {
      appTemplate: "site.html",
      hooks: {
        client: "source/hook.client",
        server: "source/hook.server",
        universal: "source/hook",
      },
      lib: "common",
      routes: "site",
      serviceWorker: "source/worker",
      src: "source",
    },
    outDir: ".svelte",
    paths: {
      base: process.env.SVELTE_BASE ?? "",
    },
  },
};
