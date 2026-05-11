import adapter from "@sveltejs/adapter-static";

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
        client: "hook.client",
        server: "hook.server",
        universal: "hook",
      },
      lib: "common",
      routes: "site",
      serviceWorker: "worker",
      src: "source",
    },
    outDir: ".svelte",
  },
};
