<!--
  @component Section `<nav>` component of the `/program` layout.
-->

<script module lang="ts">
  export { list };
</script>

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import SectionNav from "$lib/SectionNav.svelte";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof SectionNav>;
  const { children, ...rest }: Props = $props();
</script>

{#snippet list()}
  <li><Link href={resolve("/program")}>Call for Proposals</Link></li>
  <li><Link href={resolve("/program/schedule")}>Schedule</Link></li>
{/snippet}

<SectionNav aria-labelledby="program-nav" {...rest}>
  <h2 id="program-nav" class="over">Program</h2>
  <ul>
    {@render list()}
  </ul>
  {@render children?.()}
</SectionNav>
