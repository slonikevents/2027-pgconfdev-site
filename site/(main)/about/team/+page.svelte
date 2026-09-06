<script>
  import { Mastodon } from "$lib/icon";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Team — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The volunteers who organize PGConf.dev — the organizing committee behind the 2027 conference, and how to reach them."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Team</li>
</BreadcrumbNav>

<SectionNav class="( main)" />

<section class="main)">
  <hgroup>
    <p class="action">About</p>
    <h1>The Organizing Committee.</h1>
  </hgroup>

  <p class="lede mute text">
    No paid staff. These volunteers handle the program, logistics, and
    sponsorship between them.
  </p>

  <div class="grid+12">
    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Andrey Borodin</h2>
        </hgroup>

        <p><!-- Affiliation --></p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Kaiting Chen</h2>
        </hgroup>

        <p>Domino Data Lab</p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Jonathan Katz</h2>
        </hgroup>

        <p>Databricks</p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Tristan Partin</h2>
        </hgroup>

        <p><!-- Affiliation --></p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Melanie Plageman</h2>
        </hgroup>

        <p>Microsoft</p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Gwen Shapira</h2>
        </hgroup>

        <p>Nile</p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p class="delete">Responsibility TBD</p>
          <h2>Steve Singer</h2>
        </hgroup>

        <p>Nav Technologies</p>
      </figcaption>
    </figure>
  </div>

  <h2 id="contact">How to reach us.</h2>

  <p class="text">
    We'd love to hear from you with questions, comments, or anything else about
    the conference.
  </p>

  <p class="mono">
    <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a>
  </p>

  <p class="text">
    Schedule changes, deadlines, and travel notes get posted to
    <Link href={Mastodon.href}>@pgconfdev</Link> on Mastodon as they happen. During
    the conference itself, the registration desk is staffed the whole time the venue
    is open, and is the fastest way to find an organizer.
  </p>
</section>
