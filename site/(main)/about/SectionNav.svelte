<!--
  @component Section `<nav>` component of the `/about` layout.
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
  <li><Link href={resolve("/about")}>About PGConf.dev</Link></li>
  <li><Link href={resolve("/about/team")}>Team</Link></li>
  <li><Link href={resolve("/about/conduct")}>Code of Conduct</Link></li>
  <li>
    <Link href={resolve("/about/policies")}>Policies &amp; Privacy</Link>
  </li>
{/snippet}

<SectionNav aria-labelledby="about-the-conference" {...rest}>
  <h2 id="about-the-conference" class="over">About the Conference</h2>
  <ul>
    {@render list()}
  </ul>
  {@render children?.()}
</SectionNav>
