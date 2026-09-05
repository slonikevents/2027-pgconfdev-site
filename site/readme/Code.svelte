<!--
  @component

  A syntax-highlighted source listing. Unlike `Demo`, the source is only shown,
  never rendered, so it can be markup that wouldn't stand on its own.
-->

<script lang="ts">
  import { render, type Syntax } from "$lib/syntax";
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["div"] & { syntax?: Syntax; source: string };
  const { class: klass, syntax = "svelte", source, ...rest }: Props = $props();
</script>

<style>
  div > :global(pre) {
    border: 1px solid var(--border);
    padding: var(--gap);
    white-space: pre-wrap;
  }
</style>

<div class={["p", klass]} {...rest}>
  {@html render(source, syntax)}
</div>
