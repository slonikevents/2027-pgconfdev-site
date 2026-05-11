<script lang="ts">
  import { setContext } from "$lib/layout";
  import type { LayoutProps } from "./$types";
  import BreadcrumbNav from "./BreadcrumbNav.svelte";
  import SectionNav from "./SectionNav.svelte";

  const { children }: LayoutProps = $props();

  setContext({ BreadcrumbNav, SectionNav });
</script>

{@render children()}
