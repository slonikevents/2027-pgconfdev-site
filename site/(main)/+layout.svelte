<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";

  let { children } = $props();
</script>

<style>
  hr {
    border-color: rgb(3 60 107);
  }

  footer {
    font-family: var(--header-font);
    font-size: 0.875rem;
    text-align: center;

    @media (width >= 768px) {
      display: flex;
      gap: 1.5rem;
      justify-content: space-between;

      > * {
        margin-block: 0;
      }
    }
  }
</style>

<main style:flex-grow="1">
  {@render children()}
</main>

<hr />

<footer>
  <p>Follow us on <Mastodon /> for the latest news on PGConf.dev 2027</p>
  <p>Fork this site on <GitHub /></p>
</footer>
