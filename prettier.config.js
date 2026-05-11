export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
  importOrderTypeScriptVersion: "6.0.0",
  svelteSortOrder: "options-scripts-styles-markup",
};
