<!--
  @component Section `<nav>` component common to each layout.
-->

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["nav"];
  const { class: klass, children, ...rest }: Props = $props();
</script>

<style>
  nav {
    container: section-nav / inline-size;

    :global li {
      margin-block: 0;
    }

    :global a {
      border-inline-start: 2px solid var(--border);
      border-radius: 0;
      margin-inline: 0;

      &:hover {
        border-color: var(--action-fg);
      }

      &[aria-current="page"] {
        background-color: var(--action-bg-tint);
        border-color: var(--action-fg);
      }
    }

    @container section-nav (width >= 28rem) {
      :global ul {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
      }

      :global a {
        border-radius: calc(1px * infinity);
        border: 1px solid var(--border);
      }
    }
  }
</style>

<nav class={["(", "note", klass]} {...rest}>
  {@render children?.()}
</nav>
