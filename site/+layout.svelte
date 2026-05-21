<script lang="ts">
  import "@fontsource/montserrat/400-italic.css";
  import "@fontsource/montserrat/400.css";
  import "@fontsource/montserrat/700-italic.css";
  import "@fontsource/montserrat/700.css";
  import montserratLatin400NormalWoff2 from "@fontsource/montserrat/files/montserrat-latin-400-normal.woff2?url";
  import montserratLatin700NormalWoff2 from "@fontsource/montserrat/files/montserrat-latin-700-normal.woff2?url";
  import "./site.css";

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={montserratLatin400NormalWoff2}
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={montserratLatin700NormalWoff2}
    crossorigin="anonymous"
  />
</svelte:head>

{@render children()}
