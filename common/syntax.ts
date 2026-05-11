import css from "@shikijs/langs/css";
import html from "@shikijs/langs/html";
import svelte from "@shikijs/langs/svelte";
import typescript from "@shikijs/langs/typescript";
import catppuccinMacchiato from "@shikijs/themes/catppuccin-macchiato";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

/** A syntax the highlighter can render. */
export type Syntax = "css" | "html" | "svelte" | "typescript";

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [css, html, svelte, typescript],
  themes: [catppuccinMacchiato],
});

/** Render `source` as a highlighted `<pre>` element. */
export function render(source: string, syntax: Syntax) {
  return highlighter.codeToHtml(source.trim(), {
    lang: syntax,
    theme: "catppuccin-macchiato",
  });
}
