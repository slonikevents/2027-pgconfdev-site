<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  /* Aligned label → value spec table */
  .facts {
    display: grid;
  }

  .facts > div {
    align-items: baseline;
    border-top: 1px solid var(--border);
    display: grid;
    gap: 1rem;
    grid-template-columns: 9rem 1fr;
    padding-block: 0.75rem;
  }

  .facts > div:last-child {
    border-bottom: 1px solid var(--border);
  }

  .facts dd {
    color: var(--fg-mute);
    margin-inline-start: 0;
  }
</style>

<svelte:head>
  <title>Attend — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Venue, travel, and everything you need to attend PGConf.dev 2027 in Montréal."
  />
</svelte:head>

<BreadcrumbNav />

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Montréal 2027</p>
    <h1>Everything you need to get here.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev 2027 takes place 11 – 14 May at the Plaza Centre-Ville in
    Montréal. This page covers the venue, getting there, accommodation, and
    everything you need for the week.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#venue">The venue</a></li>
    <li>
      <a class="li-number" href="#floor-plans">Rooms &amp; floor plans</a>
    </li>
    <li><a class="li-number" href="#accessibility">Accessibility</a></li>
  </ol>
</nav>

<section id="venue" class="main">
  <hgroup>
    <p class="section-number">Venue</p>
    <h2>Plaza Centre-Ville.</h2>
  </hgroup>

  <p class="lede">
    The Plaza Centre-Ville is a conference venue in Montréal's Quartier
    international, steps from the Square-Victoria–OACI métro station and
    connected to the underground city.
  </p>

  <p>
    The venue is a short walk from hotels, restaurants, and the rest of the
    downtown core. Old Montréal and the Vieux-Port are minutes away on foot.
  </p>

  <dl class="facts">
    <div>
      <dt class="over">Address</dt>
      <dd>777 Boulevard Robert-Bourassa, Montréal, QC H3C 3Z7</dd>
    </div>
    <div>
      <dt class="over">Métro</dt>
      <dd>Square-Victoria–OACI (Orange line) — direct underground access</dd>
    </div>
    <div>
      <dt class="over">Dates</dt>
      <dd>11 – 14 May 2027 (Tue – Fri)</dd>
    </div>
    <div>
      <dt class="over">Registration</dt>
      <dd>Main lobby. Open from 08:00 each day.</dd>
    </div>
  </dl>

  <figure class="section">
    <div class="border" style:aspect-ratio="16 / 7">
      [ Photo · Plaza Centre-Ville exterior ]
    </div>
    <figcaption>
      Fig. 01 — Replace with a photo of the Plaza Centre-Ville.
    </figcaption>
  </figure>
</section>

<section id="floor-plans" class="main">
  <hgroup>
    <p class="section-number">Rooms &amp; floor plans</p>
    <h2>Session rooms and spaces.</h2>
  </hgroup>

  <p>
    The conference takes over the meeting rooms of the Plaza Centre-Ville for
    the week. Room names and numbers are confirmed closer to the conference; the
    spaces below are what to expect.
  </p>

  <dl class="facts">
    <div>
      <dt class="over">Plenary room</dt>
      <dd>Plenary sessions, keynotes, opening/closing</dd>
    </div>
    <div>
      <dt class="over">Talk rooms</dt>
      <dd>Three parallel talk tracks, 150 seats each</dd>
    </div>
    <div>
      <dt class="over">Tutorial rooms</dt>
      <dd>40 seats, tables for laptops</dd>
    </div>
    <div>
      <dt class="over">Unconference rooms</dt>
      <dd>Friday only, flexible seating</dd>
    </div>
    <div>
      <dt class="over">Sponsor hall</dt>
      <dd>Adjacent to registration, open all four days</dd>
    </div>
    <div>
      <dt class="over">Foyer</dt>
      <dd>Breaks, hallway track, coffee</dd>
    </div>
    <div>
      <dt class="over">Lunch</dt>
      <dd>Catered on site (included in registration)</dd>
    </div>
  </dl>
</section>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Floor plans</h3>

    <p>
      Detailed floor plans will be published closer to the conference and
      included in the printed program distributed at registration.
    </p>
  </div>
</section>

<section id="accessibility" class="main">
  <hgroup>
    <p class="section-number">Accessibility</p>
    <h2>Accessible by design.</h2>
  </hgroup>

  <p>
    The Plaza Centre-Ville is fully wheelchair accessible, with elevators
    serving all levels. Accessible entrances are available on Boulevard
    Robert-Bourassa and via the underground Square-Victoria–OACI métro station.
  </p>

  <p>
    If you have specific accessibility requirements, contact us in advance at
    <Link href={`${resolve("/about/team")}#contact`}>info@pgconf.dev</Link> so we
    can make arrangements. Captioning and hearing loop availability will be confirmed
    closer to the conference.
  </p>
</section>
