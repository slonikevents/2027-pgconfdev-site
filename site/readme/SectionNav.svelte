<!--
  @component Section `<nav>` component of the `/readme` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import SectionNav from "$lib/SectionNav.svelte";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof SectionNav>;
  const { children, ...rest }: Props = $props();
</script>

<SectionNav aria-labelledby="readme" {...rest}>
  <h2 id="readme" class="over">Readme</h2>
  <ul>
    <li><Link href={resolve("/readme")}>Overview</Link></li>
    <li><Link href={resolve("/readme/page-layout")}>Page Layout</Link></li>
    <li><Link href={resolve("/readme/text")}>Text</Link></li>
    <li><Link href={resolve("/readme/appearance")}>Appearance</Link></li>
    <li><Link href={resolve("/readme/layout")}>Layout</Link></li>
  </ul>
  {@render children?.()}
</SectionNav>
