<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import PGConf from "./PGConf.svg?no-inline";

  const rest: SvelteHTMLElements["svg"] = $props();
</script>

<svg fill="currentColor" viewBox="0 0 1464.2 411" {...rest}>
  <use href="{PGConf}#mark-root" />
</svg>
