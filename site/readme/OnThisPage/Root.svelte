<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import { Context, setContext } from "./context.ts";

  type Props = SvelteHTMLElements["nav"];
  const { children, ...rest }: Props = $props();

  setContext(new Context());
</script>

<style>
  nav {
    background-color: var(--bg);
    box-shadow: 0 0 0 0.75em var(--bg);
    position: sticky;
    top: var(--gap);
  }
</style>

<nav aria-labelledby="on-this-page" {...rest}>
  <h2 id="on-this-page" class="over">On This Page</h2>
  {@render children?.()}
</nav>
