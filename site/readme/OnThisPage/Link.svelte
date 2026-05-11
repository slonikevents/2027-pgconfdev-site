<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { getContext } from "./context.ts";

  type Props = HTMLAnchorAttributes & { href: string };
  const { href, children, ...rest }: Props = $props();
  const context = getContext();

  let target = $state<HTMLElement | null>(null);
  const active = $derived(target !== null && context.active == target);

  function attachment(a: HTMLAnchorElement) {
    if (a.origin !== location.origin) return;
    if (a.pathname !== location.pathname) return;
    if (a.search !== location.search) return;
    if (a.hash === "") return;

    const id = decodeURIComponent(a.hash.slice(1));
    if ((target = document.getElementById(id)) === null) return;
    return context.observe(target);
  }
</script>

<style>
  a[aria-current="location"] {
    background-color: var(--bg-tint);
    color: var(--action-fg);
  }
</style>

<a
  aria-current={active ? "location" : undefined}
  {href}
  {...rest}
  {@attach attachment}
>
  {@render children?.()}
</a>
