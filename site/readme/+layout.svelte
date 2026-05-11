<script lang="ts">
  import type { LayoutProps } from "./$types";
  import SectionNav from "./SectionNav.svelte";

  const { children }: LayoutProps = $props();
</script>

<style>
  main {
    padding-block: var(--margin);
  }
</style>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<main>
  <SectionNav class="( main" />

  {@render children()}
</main>
