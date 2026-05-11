<script lang="ts">
  import { render } from "$lib/syntax";
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
    {@html render(source, "html")}
  </figcaption>
</figure>
