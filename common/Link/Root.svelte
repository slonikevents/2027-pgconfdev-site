<!--
  @component

  An `<a>` that sets `aria-current="page"` when it targets the active page, and
  sets `rel="external"` with `target="_blank"` when it targets an external HTTP
  or HTTPS origin.
-->

<script lang="ts">
  import { page } from "$app/state";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const { href, children, ...rest }: HTMLAnchorAttributes = $props();

  type Attributes = Pick<
    HTMLAnchorAttributes,
    "aria-current" | "rel" | "target"
  >;
  const same: Attributes = { "aria-current": "page" };
  const auto = $derived.by((): Attributes => {
    if (href == null) return {};

    const to = new URL(href, page.url);
    if (!["http:", "https:"].includes(to.protocol)) return {};
    if (to.origin !== page.url.origin)
      return { rel: "external", target: "_blank" };

    return to.pathname === page.url.pathname ? same : {};
  });
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} {...auto} {...rest}>
  {@render children?.()}
</a>
