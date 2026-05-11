<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["div"];
  const { class: klass, children, ...rest }: Props = $props();
  const id = $props.id();
</script>

<style>
  div {
    align-items: center;
    gap: 0.5em;
    margin-block: var(--gap);
  }
</style>

<div aria-labelledby={id} class={["flex", klass]} role="separator" {...rest}>
  <hr aria-hidden="true" style:flex="auto" />
  <span class="over" {id}>{@render children?.()}</span>
  <hr aria-hidden="true" style:flex="auto" />
</div>
