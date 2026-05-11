import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";
// @ts-expect-error no type module
import postcssHeading from "postcss-heading";
import postcssPresetEnv from "postcss-preset-env";
// @ts-expect-error no type module
import postcssSize from "postcss-size";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: { rollupOptions: { checks: { pluginTimings: false } } },
  css: {
    postcss: {
      plugins: [postcssHeading(), postcssSize(), postcssPresetEnv()],
    },
  },
  plugins: [enhancedImages(), UnoCSS(), sveltekit()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: "webkit" }],
      provider: playwright(),
    },
  },
});
