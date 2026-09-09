<script lang="ts">
  import { resolve } from "$app/paths";
  import { Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
  import type { PageProps } from "./$types";
  import Status from "./Status.svelte";

  const { data }: PageProps = $props();
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
      <dd class="lede">Individual $350</dd>
      <dd><small>Corporate $550</small></dd>
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
      <p>About the conference</p>
      <h2>Built by and for PostgreSQL contributors.</h2>
    </hgroup>

    <div>
      <p class="lede">
        PGConf.dev is the annual gathering of PostgreSQL community organizers,
        hackers, extension maintainers, and the developers who build on their
        work. Join us for four days of unconference sessions, workshops,
        hallway-track conversations, and talks that focus on building the future
        of PostgreSQL.
      </p>

      <p>
        Now in its fourth year, the conference draws a significant portion of
        current PostgreSQL contributors, and also introduces hundreds of new
        people each year to the PostgreSQL community.
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

<section class="(main)" id="past-editions">
  <hgroup class="margin-gap">
    <p>From past editions</p>
    <h2>Three years of contributor conversation.</h2>
    <p class="text">
      From keynote talks to unconference discussions, a few moments from
      Vancouver and Montréal.
    </p>
  </hgroup>

  <div class="grid+16">
    <figure>
      <enhanced:img
        src="./photos/2026-vancouver-retrospective.jpeg?w=1200;800;400"
        alt="Panelists smiling together on stage after the 30 Years of PostgreSQL retrospective"
        loading="lazy"
        sizes="(width >= 80rem) 20rem, (width >= 48rem) 50vw, 100vw"
        style:height="auto"
        style:aspect-ratio="16 / 9"
        style:object-fit="cover"
        style:object-position="center bottom"
      />
      <figcaption class="over">
        <strong>2026 · Vancouver</strong>
        30 Years of PostgreSQL retrospective
      </figcaption>
    </figure>

    <figure>
      <enhanced:img
        src="./photos/2025-montreal-unconference.jpeg?w=1200;800;400"
        alt="An unconference organizer leading a vote beside a board of handwritten session proposals"
        loading="lazy"
        sizes="(width >= 80rem) 20rem, (width >= 48rem) 50vw, 100vw"
        style:height="auto"
        style:aspect-ratio="16 / 9"
        style:object-fit="cover"
        style:object-position="center 45%"
      />
      <figcaption class="over">
        <strong>2025 · Montréal</strong>
        Unconference scheduling
      </figcaption>
    </figure>

    <figure>
      <enhanced:img
        src="./photos/2024-vancouver-keynote.jpeg?w=1200;800;400"
        alt="Margo Seltzer speaking and gesturing from the podium during her keynote"
        loading="lazy"
        sizes="(width >= 80rem) 20rem, (width >= 48rem) 50vw, 100vw"
        style:height="auto"
        style:aspect-ratio="16 / 9"
        style:object-fit="cover"
        style:object-position="center 35%"
      />
      <figcaption class="over">
        <strong>2024 · Vancouver</strong>
        Margo Seltzer’s keynote
      </figcaption>
    </figure>

    <figure>
      <enhanced:img
        src="./photos/2025-montreal-registration.jpeg?w=1200;800;400"
        alt="Magnus Hagander, Katherine Saar, Paul Ramsey, and Steve Singer smiling beside the registration desk"
        loading="lazy"
        sizes="(width >= 80rem) 20rem, (width >= 48rem) 50vw, 100vw"
        style:height="auto"
        style:aspect-ratio="16 / 9"
        style:object-fit="cover"
        style:object-position="center 35%"
      />
      <figcaption class="over">
        <strong>2025 · Montréal</strong>
        Welcome at registration
      </figcaption>
    </figure>
  </div>
</section>

{#await data.statuses then statuses}
  <section class="area">
    <div class="(main) margin-gap grid-2:1@48-">
      <hgroup class="margin-gap">
        <p>Latest</p>
        <h2>News from the organizers.</h2>
        <p class="text">
          Conference updates, deadlines, and travel notes — posted to @pgconfdev
          on Mastodon as they happen.
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
  style:--fg-mute="var(--bg)"
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
      <strong style="font-weight: 550">Individual (self-pay) $350</strong>
      &nbsp;·&nbsp;
      <strong style="font-weight: 550">Corporate $550</strong>
      &nbsp;·&nbsp;
      <strong style="font-weight: 550">Student $75</strong>
      <br />
      <small>Plus 14.975% tax (5% GST + 9.975% QST)</small>
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
