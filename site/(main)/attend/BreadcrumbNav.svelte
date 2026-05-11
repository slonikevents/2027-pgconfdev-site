<!--
  @component Breadcrumb `<nav>` component of the `/attend` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import Link from "$lib/Link";
  import type { ComponentProps } from "svelte";
  import BreadcrumbNav from "../BreadcrumbNav.svelte";

  type Props = ComponentProps<typeof BreadcrumbNav>;
  const { children, ...rest }: Props = $props();
</script>

<BreadcrumbNav {...rest}>
  <li>
    {#if page.url.pathname !== resolve("/attend")}
      <Link href={resolve("/attend")}>Attend</Link>
    {:else}
      Attend
    {/if}
  </li>
  {@render children?.()}
</BreadcrumbNav>
