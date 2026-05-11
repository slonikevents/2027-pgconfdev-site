<script lang="ts">
  import type { Component } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes & { icon: Component<{}> };
  const { icon: Icon, class: klass, children, ...rest }: Props = $props();
</script>

<style>
  a {
    border-radius: var(--radius);
    gap: 0.75rem;
    margin-inline: -0.75em;
    padding: 0.75em;

    &:hover {
      background-color: var(--bg-tint);
    }
  }

  a > :global(svg) {
    background-color: var(--action-bg-tint);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    color: var(--action-fg);
    height: 2.5em;
    padding: 0.5em;
    width: 2.5em;
  }

  p {
    line-height: 1.2;
  }
</style>

<a class={["iconic", klass]} {...rest}>
  <Icon />
  <p>
    {@render children?.()}
  </p>
</a>
