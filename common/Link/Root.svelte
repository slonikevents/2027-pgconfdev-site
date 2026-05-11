<!--
  @component

  An `<a>` that sets `aria-current="page"` when it targets the active page, and
  sets `target="_blank"` when it targets an external origin.
-->

<script lang="ts">
  import { page } from "$app/state";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes & { href: string };
  const { href, children, ...rest }: Props = $props();

  const to = $derived(new URL(href, page.url));
  const http = $derived(["http:", "https:"].includes(to.protocol));
  const auto = $derived(to.origin === page.url.origin);

  const ariaCurrent = $derived(
    http && auto && to.pathname === page.url.pathname ? "page" : undefined,
  );
  const target = $derived(http && !auto ? "_blank" : undefined);
</script>

<a aria-current={ariaCurrent} {href} {target} {...rest}>
  {@render children?.()}
</a>
