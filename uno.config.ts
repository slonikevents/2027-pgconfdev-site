import { symbols, withLayer, type CSSObject, type Rule } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

type RuleObject = CSSObject | ((...args: string[]) => CSSObject);

function rule(matcher: RegExp, ...rest: RuleObject[]): Rule {
  function handler(args: string[]) {
    return rest.map((it) => (typeof it === "function" ? it(...args) : it));
  }
  return [matcher, handler];
}

// Just: > * { margin-block: 0; }
const childMarginBlock = {
  [symbols.selector]: (selector: string) => `${selector} > *`,
  "margin-block": 0,
};

const layout = withLayer("layout", [
  rule(/^none$/, () => ({ display: "none" })),

  rule(/^flex(?:-(.*))?$/, childMarginBlock, (_, align) => ({
    "align-items": align ? align : undefined,
    display: "flex",
    "flex-wrap": "wrap",
    gap: "var(--gap)",
  })),

  rule(/^grid\/(\d+)$/, childMarginBlock, (_, number) => ({
    display: "grid",
    gap: "var(--gap)",
    "grid-template-columns": `repeat(${number}, 1fr)`,
  })),

  rule(/^grid-(\d+(?::\d+)*)$/, childMarginBlock, (_, series) => ({
    display: "grid",
    gap: "var(--gap)",
    "grid-template-columns": series
      .split(":")
      .map((n) => `${n}fr`)
      .join(" "),
  })),

  rule(/^grid\+(\d+)$/, childMarginBlock, (_, number) => ({
    display: "grid",
    gap: "var(--gap)",
    "grid-template-columns": `repeat(auto-fit, minmax(${number}rem, 1fr))`,
  })),

  rule(/^pagegrid$/, childMarginBlock, {
    display: "grid",
    gap: "var(--gap) var(--margin)",
    "grid-template-columns": "var(--pagegrid-template, 1fr)",
  }),

  rule(/^subgrid$/, childMarginBlock, {
    display: "grid",
    "grid-template-columns": "subgrid",
  }),

  rule(/^column-((?:span-)?\d+)(?:-((?:span-)?\d+))?$/, (_, ...i) => {
    const name = (string: string) => string.replace("-", " ");
    const column = i[1] ? `${name(i[0])} / ${name(i[1])}` : name(i[0]);
    return { "grid-column": column };
  }),
]);

const accent = withLayer("layout", [
  rule(/^band$/, {
    "border-block": "1px solid var(--border)",
    "padding-block": "var(--gap)",
  }),

  rule(/^border$/, {
    border: "1px solid var(--border)",
    padding: "var(--gap)",
  }),

  rule(/^area$/, {
    "background-color": "var(--bg-tint)",
    padding: "var(--gap)",
  }),

  rule(/^(static|action|notice|insert|delete)-area$/, (_, role) => ({
    "--bg": `var(--${role}-bg)`,
    "--bg-tint": `var(--${role}-bg-tint)`,
    "--border": `var(--${role}-border)`,
    "--edge": `var(--${role})`,
    "background-color": "var(--bg)",
    padding: "var(--gap)",
  })),

  rule(/^(?:(static|action|notice|insert|delete)-)?acme$/, (_, role) => ({
    "border-block-start": "3px solid var(--edge)",
    "border-block-start-color": role ? `var(--${role}-fg)` : undefined,
    "padding-block-start": "var(--gap)",
  })),

  rule(/^(?:(static|action|notice|insert|delete)-)?edge$/, (_, role) => ({
    "border-inline-start": "3px solid var(--edge)",
    "border-inline-start-color": role ? `var(--${role}-fg)` : undefined,
    "padding-inline-start": "var(--gap)",
  })),
]);

export default defineConfig({
  extractors: [extractorSvelte()],
  outputToCssLayers: true,
  presets: [],
  rules: [...layout, ...accent],
  variants: [
    (matcher) => {
      if (!matcher.endsWith("@)")) return;
      matcher = matcher.slice(0, -2);
      return { matcher, parent: "@media (width >= 48rem)" };
    },

    (matcher) => {
      if (!matcher.endsWith("@(")) return;
      matcher = matcher.slice(0, -2);
      return { matcher, parent: "@media (width >= 64rem)" };
    },

    (matcher) => {
      const result = matcher.match(/^(.+)@(\d+)?-(\d+)?$/);
      if (!result) return;

      const [, rule, minimum, maximum] = result;
      const q = [];
      if (minimum) q.push(`(width >= ${minimum}rem)`);
      if (maximum) q.push(`(width < ${maximum}rem)`);
      return { matcher: rule, parent: `@media ${q.join(" and ")}` };
    },
  ],
});
