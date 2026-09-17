<script lang="ts">
  import newsreaderLatinOpszNormalWoff2 from "@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2?url";
  import publicSansLatinWghtNormalWoff2 from "@fontsource-variable/public-sans/files/public-sans-latin-wght-normal.woff2?url";
  import { setLucideProps } from "@lucide/svelte";
  import { CLOUDFLARE_TOKEN } from "$app/env/public";
  import type { LayoutProps } from "./$types";
  import "./site.css";
  import "virtual:uno.css";

  const { children }: LayoutProps = $props();

  setLucideProps({ class: "icon" });
</script>

<svelte:head>
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={publicSansLatinWghtNormalWoff2}
    crossorigin="anonymous"
  />

  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={newsreaderLatinOpszNormalWoff2}
    crossorigin="anonymous"
  />

  {#if CLOUDFLARE_TOKEN !== undefined}
    {const source = "https://static.cloudflareinsights.com/beacon.min.js"}
    {const beacon = JSON.stringify({ token: CLOUDFLARE_TOKEN })}
    <script type="module" src={source} data-cf-beacon={beacon}></script>
  {/if}
</svelte:head>

{@render children()}
