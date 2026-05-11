<script module lang="ts">
  import html from "@shikijs/langs/html";
  import catppuccinMacchiato from "@shikijs/themes/catppuccin-macchiato";
  import { createHighlighterCore } from "shiki/core";
  import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

  const highlighter = await createHighlighterCore({
    engine: createJavaScriptRegexEngine(),
    langs: [html],
    themes: [catppuccinMacchiato],
  });

  function render(source: string) {
    return highlighter.codeToHtml(source.trim(), {
      lang: "html",
      theme: "catppuccin-macchiato",
    });
  }
</script>

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["div"] & { source: string };
  const { source, children, ...rest }: Props = $props();
</script>

<style>
  figure {
    border: 1px solid var(--border);
  }

  div {
    padding: var(--gap);
  }

  figcaption {
    font-size: inherit;
    margin-block: 0;
  }

  figcaption > :global(pre) {
    padding: var(--gap);
    white-space: pre-wrap;
  }
</style>

<figure>
  <div {...rest}>
    {#if children}
      {@render children()}
    {:else}
      {@html source}
    {/if}
  </div>

  <figcaption>
    {@html render(source)}
  </figcaption>
</figure>
