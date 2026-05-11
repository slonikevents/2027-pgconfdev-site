<!--
  @component Breadcrumb `<nav>` component of the `/` layout.
-->

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["nav"];
  const { class: klass, children, ...rest }: Props = $props();
</script>

<style>
  nav :global a {
    display: inline;
    margin: 0;
    padding: 0;

    &:hover {
      background-color: revert;
      text-decoration: revert;
    }
  }

  ol :global > li {
    &::before {
      content: "/ ";
      white-space: pre;
    }

    &::after {
      content: " ";
      white-space: pre;
    }
  }
</style>

<nav class={["(main)", klass]} aria-label="Breadcrumb" {...rest}>
  <ol class="flex-center over" style:gap="0">
    {@render children?.()}
  </ol>
</nav>
