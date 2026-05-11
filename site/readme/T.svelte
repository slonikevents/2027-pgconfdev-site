<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["code"];
  const { class: klass, children, ...rest }: Props = $props();
</script>

<code class={["action", klass]} {...rest}>
  {@render children?.()}
</code>
