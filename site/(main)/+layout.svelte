<script lang="ts">
  import { SquarePen } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { LinkedIn, Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
  import type { LayoutProps } from "./$types";
  import { list as aboutList } from "./about/SectionNav.svelte";
  import { list as attendList } from "./attend/SectionNav.svelte";
  import Header from "./Header";

  const { children }: LayoutProps = $props();
</script>

<style>
  :global :where(#root) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-block: var(--gap);
    min-height: 100vh;
  }

  :global .page-extent {
    --page-margin: max(var(--margin), (100vw - 74rem) / 2);
  }

  :where(main) {
    margin-block-end: var(--margin);
  }

  footer {
    justify-content: space-between;
  }
</style>

<Header class="(main) page-extent margin-gap">
  <!-- Program section hidden until the CFP opens and a schedule exists — see hidden/program
  <li>
    <Header.Menu name="Program">
      {@render programList()}
    </Header.Menu>
  </li>
  -->

  <li>
    <Header.Menu name="Attend">
      {@render attendList()}
    </Header.Menu>
  </li>

  <li><Link href={resolve("/sponsor")}>Sponsor</Link></li>

  <li>
    <Header.Menu name="About">
      {@render aboutList()}
    </Header.Menu>
  </li>
</Header>

<hr class="margin-gap" />

<main style:flex="auto">
  {@render children()}
</main>

<hr class="margin-gap" />

<footer class="(main) flex@48- margin-gap note">
  <p>
    Follow us on
    <Link class="inline-iconic" href={Mastodon.href} aria-label="Mastodon">
      Mastodon<Mastodon class="size-" />
    </Link> or
    <Link class="inline-iconic" href={LinkedIn.href} aria-label="LinkedIn">
      LinkedIn<LinkedIn class="size-" />
    </Link> for the latest news on PGConf.dev 2027
  </p>

  <p>
    <Link class="inline-iconic" href={resolve("/readme")}>
      Edit this site <SquarePen />
    </Link>
  </p>
</footer>
