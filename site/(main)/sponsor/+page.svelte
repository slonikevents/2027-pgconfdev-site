<script>
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import BreadcrumbNav from "./BreadcrumbNav.svelte";
</script>

<style>
  :global #root > hr {
    display: none;
  }

  :global main {
    margin-block-end: var(--gap);
  }

  section.area {
    margin-block: 0;
    padding-block: var(--margin);
    padding-inline: 0;
  }

  .tier ul {
    padding-inline-start: 1.25em;
  }

  .tier li + li {
    margin-block-start: 0.5em;
  }

  .tier + .tier {
    margin-block-start: var(--gap);
  }
</style>

<svelte:head>
  <title>Sponsors — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Sponsor PGConf.dev 2027. The companies underwriting the annual PostgreSQL Developer Conference."
  />
</svelte:head>

<BreadcrumbNav />

<header class="(main)">
  <hgroup>
    <p class="action">Sponsors</p>
    <h1>The Companies Sponsoring 2027.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev is non-profit. Tickets alone don't cover our costs. Sponsors help
    cover the venue, A/V, catering, scholarships, and more.
  </p>
</header>

<hr class="section" />

<nav aria-labelledby="on-this-page" class="( none@-64 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#confirmed">2027 sponsors</a></li>
    <li><a class="li-number" href="#become">Why sponsor</a></li>
    <li><a class="li-number" href="#tiers">Sponsorship tiers</a></li>
  </ol>
</nav>

<aside class=") note area border" aria-labelledby="tiers-glance">
  <h2 id="tiers-glance" class="over">Tiers at a Glance</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Gold</dt>
      <dd>CAD $27,500</dd>
    </div>
    <div class="p">
      <dt class="over">Silver</dt>
      <dd>CAD $9,900</dd>
    </div>
    <div class="p">
      <dt class="over">Bronze</dt>
      <dd>CAD $2,500</dd>
    </div>
  </dl>
</aside>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Sponsorships are open</h3>
    <p>
      We are actively seeking sponsors for the 2027 edition. <Link
        href={`${resolve("/about/team")}#contact`}
        >Contact the sponsorship team</Link
      > to start a conversation.
    </p>
  </div>
</section>

<section id="confirmed" class="main">
  <hgroup>
    <p class="section-number">2027 sponsors</p>
    <h2>Confirmed sponsors will appear here.</h2>
  </hgroup>

  <p>
    Announcements will be made as sponsorships are confirmed. Check back or
    follow us on social media.
  </p>
</section>

<section id="become" class="main">
  <hgroup>
    <p class="section-number">Become a sponsor</p>
    <h2>Why sponsor PGConf.dev?</h2>
  </hgroup>

  <p class="lede">
    PGConf.dev puts your company in front of the engineers who build, maintain,
    and extend PostgreSQL — not just use it.
  </p>

  <p>
    The audience is different from general PostgreSQL conferences. The majority
    of attendees are committers, patch authors, extension maintainers, and
    database infrastructure engineers from companies shipping Postgres at scale.
    If your company's products or services reach this audience, sponsoring
    PGConf.dev is the most direct way to do it.
  </p>

  <p>
    Sponsorship funds directly cover: venue costs, A/V production, catering, and
    the scholarship program (travel grants for speakers and contributors who
    couldn't otherwise attend).
  </p>
</section>

<section id="tiers">
  <hgroup class="main">
    <p class="section-number">Sponsorship tiers</p>
    <h2>Three levels of support</h2>
  </hgroup>

  <p class="main note">
    Pricing is in Canadian dollars. Each card lists the benefits included at
    that sponsorship level.
  </p>

  <div class="main">
    <section class="tier">
      <hgroup class="h4">
        <h3>Gold</h3>
        <p class="mono price">CAD $27,500</p>
      </hgroup>
      <ul>
        <li>Name and logo on the conference website</li>
        <li>Logo on foyer and common-area banners</li>
        <li>Sticker-table benefit</li>
        <li>Social-media appreciation</li>
        <li>5 registration vouchers and 3 job postings</li>
        <li>Opening and closing acknowledgement</li>
        <li>T-shirt logo with prominent placement</li>
        <li>1 large and 1 small promotional item</li>
        <li>Logo on recorded conference sessions</li>
        <li>Banners at the front of presentation rooms</li>
        <li>
          One-paragraph company description on the website, up to 300 characters
        </li>
        <li>Option to claim one individual sponsorship benefit</li>
        <li>
          One 25-minute sponsored talk for the first 6 Gold sponsors to sign
        </li>
        <li>One off-hours event announced in the opening session</li>
      </ul>
    </section>

    <section class="tier">
      <hgroup class="h4">
        <h3>Silver</h3>
        <p class="mono price">CAD $9,900</p>
      </hgroup>
      <ul>
        <li>Name and logo on the conference website</li>
        <li>Logo on foyer and common-area banners</li>
        <li>Sticker-table benefit</li>
        <li>Social-media appreciation</li>
        <li>2 registration vouchers and 2 job postings</li>
        <li>Opening and closing acknowledgement</li>
        <li>T-shirt logo</li>
        <li>1 small promotional item</li>
        <li>One off-hours event announced in the opening session</li>
      </ul>
    </section>

    <section class="tier">
      <hgroup class="h4">
        <h3>Bronze</h3>
        <p class="mono price">CAD $2,500</p>
      </hgroup>
      <ul>
        <li>Name and logo on the conference website</li>
        <li>Logo on foyer and common-area banners</li>
        <li>1 registration voucher and 1 job posting</li>
        <li>Sticker-table benefit</li>
        <li>Social-media appreciation</li>
      </ul>
    </section>
  </div>

  <div class="main">
    <p>
      Gold individual sponsorship benefits are exclusive and first come, first
      served. Available options include lanyards, the evening social event,
      meals and coffee breaks, the Unconference, social areas and lounges, and a
      plenary chair drop.
    </p>
    <p>
      Physical-logo and promotional-item benefits require suitable assets and
      payment by <time datetime="2027-03-15">March 15, 2027</time>. Registration
      vouchers are subject to overall availability. Contact us for the complete
      prospectus and sponsorship agreement.
    </p>
  </div>
</section>

<section class="main">
  <p>
    <small>
      Sponsors provide their own promotional items and banner assets. Organizer
      approval and delivery details apply to benefits that use physical or
      recorded-session assets.
    </small>
  </p>

  <p class="section">
    <Link href={`${resolve("/about/team")}#contact`} class="button circle">
      Contact the sponsorship team
    </Link>
  </p>
</section>

<section
  class="area"
  style:--fg-mute="var(--bg)"
  style:--fg-tint="var(--bg)"
  style:background-color="var(--action)"
  style:color="var(--bg)"
>
  <div class="(main)">
    <hgroup class="h1">
      <p>Past editions</p>
      <h2 class="text">
        Thank you to our
        <Link href="https://2026.pgconf.dev/sponsor" style="color: var(--bg)">
          2026 sponsors
        </Link>.
      </h2>
    </hgroup>

    <p class="lede text">
      We're grateful for your support, and we'd love to see you back in 2027.
    </p>
  </div>
</section>
