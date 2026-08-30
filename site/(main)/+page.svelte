<script lang="ts">
  import { Circle } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
  import type { PageProps } from "./$types";
  import Status from "./Status.svelte";

  const { data }: PageProps = $props();

  const href =
    "https://2026.pgconf.dev/svelte/immutable/assets/butcher.BRs9V-uj.avif";
</script>

<style>
  :global #root > hr {
    display: none;
  }

  :global main {
    margin-block-end: var(--gap);
  }

  header {
    padding-block: var(--margin);
  }

  @media (width >= 48rem) {
    header {
      background: url("./banner.svg") center bottom / cover no-repeat;
    }
  }

  @media (width < 48rem) {
    header > hgroup {
      background: url("./banner.svg") center bottom / cover no-repeat;
      padding-block-end: var(--margin);
    }
  }

  header dd {
    line-height: 1.2;
  }

  /* Insane Safari bug in revert-layer */
  section {
    margin-block: var(--margin);
  }

  /* section.border { */
  /*   padding: var(--margin); */
  /* } */

  section.area {
    margin-block: 0;
    padding-block: var(--margin);
    padding-inline: 0;
  }
</style>

<svelte:head>
  <title>PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 will be held on May 11–14 in Montreal, QC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
  <link href={Mastodon.href} rel="me" />
</svelte:head>

<header>
  <hgroup class="*:(main)">
    <p class="action">The PostgreSQL Developer Conference</p>

    <h1 class="text" style:--size="var(--h0-size)">
      <span class="action">PGConf</span>.dev <span class="mute">2027</span>
    </h1>

    <p class="h2" style:font-weight="400">
      Where PostgreSQL <span class="mono size-">JOINs</span> together
    </p>
  </hgroup>

  <dl class="(main) grid+16 dedent section">
    <div>
      <dt class="over">Time</dt>
      <dd class="lede">
        <time datetime="2027-05-11">May 11</time>
        &ndash;
        <time datetime="2027-05-14">14</time>, 2027
      </dd>
      <dd><small>Tuesday through Friday</small></dd>
    </div>

    <div>
      <dt class="over">Location</dt>
      <dd class="lede">Montréal, QC</dd>
      <dd><small>Plaza Centre-Ville</small></dd>
    </div>

    <div>
      <dt class="over">Format</dt>
      <dd class="lede">3+ tracks × 4 days</dd>
      <dd><small>~300 attendees</small></dd>
    </div>

    <div>
      <dt class="over">Price</dt>
      <dd class="lede">$480</dd>
      <dd><small>Early-bird through Jan 31</small></dd>
    </div>
  </dl>

  <div class="(main) flex section">
    <a href="#" class="button circle delete stroke">Register</a>
    <!-- "Submit a talk" hidden until the CFP opens — see hidden/program
    <Link href={resolve("/program")} class="button circle stroke">
      Submit a Talk
    </Link>
    -->
  </div>
</header>

<section>
  <div class="(main) grid-1:2@48-" style:gap="var(--margin)">
    <hgroup>
      <p>About the Conference</p>
      <h2>Built by and for PostgreSQL contributors.</h2>
    </hgroup>

    <div>
      <p class="lede">
        PGConf.dev is the annual gathering of PostgreSQL hackers, committers,
        extension authors, and the developers who work with them. Four days of
        unconference sessions, hallway-track conversations, and talks that go
        deeper than the conference circuit usually allows — written by the
        people actually shipping the database.
      </p>

      <p>
        Now in its fourth year, the conference moves between cities each spring
        to keep the core team and contributor community in the same room at
        least once a year.
      </p>

      <p><Link href={resolve("/about")}>Read more about who we are →</Link></p>
    </div>
  </div>
</section>

<section class="area">
  <div class="(main)">
    <hgroup class="margin-gap">
      <p>Sponsors</p>
      <h2>The companies underwriting 2027.</h2>
      <p class="text">
        PGConf.dev is non-profit. Sponsors cover the venue, A/V, scholarships,
        and the parts of the program that ticket revenue alone can't.
      </p>
    </hgroup>

    <p>
      <Link href={resolve("/sponsor")}>Sponsor PGConf.dev 2027 →</Link>
    </p>
  </div>
</section>

<section class="(main)">
  <hgroup class="margin-gap">
    <p>From past editions</p>
    <h2>Three years of contributor conversation.</h2>
    <p class="text">
      A look at the rooms, the hallway track, and the people who keep showing
      up.
    </p>
  </hgroup>

  <div class="grid+16">
    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2026 · Vancouver</strong>
        Day-one keynote
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2025 · Montréal</strong>
        Unconference scheduling
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2024 · Vancouver</strong>
        Hallway-track conversation
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2025 · Montréal</strong>
        Tutorial day
      </figcaption>
    </figure>
  </div>
</section>

{#await data.statuses then statuses}
  <section class="area">
    <div class="(main) margin-gap grid-2:1@48-">
      <hgroup class="margin-gap">
        <p>Latest</p>
        <h2>News from the organizers</h2>
        <p class="text">
          Schedule drops, deadlines, and travel notes — posted to @pgconfdev on
          Mastodon as they happen.
        </p>
      </hgroup>

      <Link
        class="button circle iconic stroke"
        href={Mastodon.href}
        style="align-self: center; justify-self: end;"
      >
        <Mastodon /> Follow @pgconfdev
      </Link>
    </div>

    <div class="(main) grid+18">
      {#each statuses.slice(0, 3) as status (status.id)}
        <Status class="size-" {status} />
      {/each}
    </div>
  </section>
{/await}

<section
  class="area"
  style:--fg-tint="var(--bg)"
  style:background-color="var(--action)"
  style:color="var(--bg)"
>
  <div class="(main)">
    <hgroup class="h1">
      <p>Registration</p>
      <h2 class="text">Reserve your seat for the 2027 edition.</h2>
    </hgroup>

    <p
      class="margin-gap mono size-"
      style:letter-spacing="0.05em"
      style:opacity="0.85"
    >
      <strong style="font-weight: 550">Early-bird $480</strong> through Jan 31
      &nbsp;·&nbsp;
      <strong style="font-weight: 550">Standard $640</strong>
      &nbsp;·&nbsp;
      <strong style="font-weight: 550">Student $120</strong>
    </p>

    <a
      class="button circle"
      href="#"
      style:background-color="var(--bg)"
      style:color="var(--delete-fg)"
    >
      Register
    </a>
  </div>
</section>
