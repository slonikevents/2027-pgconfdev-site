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

  .sponsor-sidebar > aside:first-child {
    margin-block-start: 0;
  }

  .sponsor-signup {
    margin-block-start: 1rem;
  }

  .tier-gold {
    --tier-color: oklch(0.72 0.13 85);
  }
  .tier-silver {
    --tier-color: oklch(0.62 0.02 245);
  }
  .tier-bronze {
    --tier-color: oklch(0.58 0.09 50);
  }

  .tier {
    border-inline-start: 3px solid var(--tier-color);
    padding-inline-start: 1rem;
  }

  .tier .price {
    color: var(--tier-color);
  }

  .tier ul {
    list-style-type: square;
    padding-inline-start: 2rem;
  }

  .tier li > strong {
    display: block;
  }

  .tier li + li {
    margin-block-start: 0.25rem;
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
    <li><a class="li-number" href="#important-dates">Important dates</a></li>
    <li><a class="li-number" href="#tiers">Sponsorship tiers</a></li>
  </ol>
</nav>

<div class=") sponsor-sidebar">
  <aside
    id="important-dates"
    class="note area border"
    aria-labelledby="important-dates-title"
  >
    <h2 id="important-dates-title" class="over">Important dates</h2>

    <hr />

    <dl class="dedent">
      <div class="p">
        <dt class="over"><time datetime="2027-03-15">March 15, 2027</time></dt>
        <dd>Deadline for printed logo assets</dd>
      </div>
      <div class="p">
        <dt class="over"><time datetime="2027-05-11">May 11, 2027</time></dt>
        <dd>Conference begins</dd>
      </div>
    </dl>
  </aside>

  <aside class="note area border" aria-labelledby="tiers-glance">
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

</div>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Sponsorships are open</h3>
    <p>We are actively seeking sponsors for the 2027 edition.</p>
    <p class="sponsor-signup">
      <Link
        href="https://www.pgevents.ca/events/sponsor/signup/pgconfdev2027/"
        class="button circle"
      >
        Sign up to sponsor
      </Link>
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
    Pricing is in Canadian dollars. Each level lists the benefits included at
    that sponsorship level.
  </p>

  <!-- Add back in when we post the actual sponsorship levels -->
  <div class="main">
    <section class="tier tier-gold">
      <hgroup class="h4">
        <h3>Gold</h3>
        <p class="mono price">CAD $27,500</p>
      </hgroup>
      <ul>
         <li>
          <strong>Sponsored talk.</strong> A 25-minute talk is available to the first
          six Gold sponsors to sign; the organizer assigns the room and time.
        </li>
        <li>
          <strong>Banners at front of room</strong>  
          The Sponsor is entitled to have a banner featuring their company name and logo at the front of the rooms used for presentation of conference talks.
        </li>
        <li> 
          <strong>Business description on website</strong>
          The Sponsor is entitled to have a short (1 paragraph, 300 characters) description of their company and products or services listed on The Event website.
        </li>
        <li>
          <strong> Logo on website</strong> 
          The Sponsor is entitled to have their name and logo listed in the sponsors section of the pgconf.dev website. 
        </li>
        <li>
          <strong>Logo featured on the recorded session videos</strong> 
          The Sponsor is entitled to have their logo appear on the recorded video session
        </li>
        <li>
        <strong>‍Option to choose one individual sponsor benefit</strong>
        The Sponsor is entitled to claim one (1) of the following sponsor benefits. Each of the benefits can be claimed by only one sponsor on a first come first serve basis after the sponsorship contract has been executed and the sponsorship confirmed.
          <ul>
              <li>The Sponsor's name will appear on the conference lanyards</li>
              <li>The Sponsor will be credited as the sponsor for the evening social event</li>
              <li>The Sponsor will be credited as the sponsor for meals and coffee breaks</li>
              <li>The Sponsor will be credited as the sponsor for the Unconference</li>
              <li>The Sponsor will be credited as the sponsor of the social area and any lounges</li>
              <li>The Sponsor will be entitled to leave an item provided by The Sponsor on chairs during a plenary session (“Chair Drop”) </li> 
          </ul>       
        </li>
        <li>
          <strong>Acknowledged in Opening & Closing Session.</strong> 
          The Sponsor will be mentioned (by company name) and thanked in the opening and closing sessions.
        </li>
        <li>
          <strong>Logo on t-shirt</strong>  
          The Sponsor is entitled to have their logo printed on the conference t-shirt. Sponsors logos will be arranged by The Organizer to give Gold level sponsors a more prominent placement than Silver level Sponsors.
        </li>
        <li>
          <strong> Promotional item distribution</strong>  
          The Sponsor has the right to distribute 1 large and 1 small promotional item to The Event attendees.
        </li>
        <li> <strong> Free conference vouchers</strong>
          The Sponsor is entitled to five (5) free voucher to the conference
        </li>
        <li>
          <strong>‍Logo featured in conference banner in foyer and common areas.</strong> 
          The Sponsor is entitled to have their logo appear (alongside those of other sponsors) on The Event banners in the common areas of the conferences.
        </li>
        <li>
          <strong>Sticker benefit</strong> 
          The sponsor is entitled to bring stickers that can be left at designated sticker tables
        </li>
        <li>
          <strong>Social-media appreciation.</strong> 
          Sponsor thanked in a PGConf.dev social-media posting.
        </li>
        <li>
          <strong>Job listing on website</strong> 
          The Sponsor is entitled to have 3 job posting appear on The Event website.
        </li>
        <li>
          <strong>Presentation-room banners.</strong> Banners placed at the front
          of rooms assigned by the organizer.
        </li>
        <li>
          <strong>Off-hours event announcement.</strong> One sponsor-organized event
          announced in the opening session.
        </li>
      </ul>
    </section>

    <section class="tier tier-silver">
      <hgroup class="h4">
        <h3>Silver</h3>
        <p class="mono price">CAD $9,900</p>
      </hgroup>
      <ul>
        <li>
          <strong> Logo on website</strong> 
          The Sponsor is entitled to have their name and logo listed in the sponsors section of the pgconf.dev website. 
        </li>
        <li>
          <strong>‍Logo featured in conference banner in foyer and common areas.</strong> 
          The Sponsor is entitled to have their logo appear (alongside those of other sponsors) on The Event banners in the common areas of the conferences.
        </li>
        <li>
          <strong>Sticker benefit</strong> 
          The sponsor is entitled to bring stickers that can be left at designated sticker tables
        </li>
        <li>
          <strong>Social-media appreciation.</strong> Sponsor thanked in a PGConf.dev
          social-media posting.
        </li>
        <li> <strong> Free conference vouchers</strong>
          The Sponsor is entitled to two (2) free voucher to the conference
        </li>
        <li>
          <strong>Job listing on website</strong> 
          The Sponsor is entitled to have 2 job posting appear on The Event website.
        </li>
        <li>
          <strong>Acknowledged in Opening & Closing Session.</strong> 
          The Sponsor will be mentioned (by company name) and thanked in the opening and closing sessions.
        </li>
        <li>
          <strong>Logo on t-shirt</strong>  
          The Sponsor is entitled to have their logo printed on the conference t-shirt. Sponsors logos will be arranged by The Organizer to give Gold level sponsors a more prominent placement than Silver level Sponsors.
        </li>
        <li>
          <strong> Promotional item distribution</strong>  
          The Sponsor has the right to distribute one small promotional item to The Event attendees.
        </li>
        <li>
          <strong>Off-hours event announcement.</strong> One sponsor-organized event
          announced in the opening session.
        </li>
      </ul>
    </section>

    <section class="tier tier-bronze">
      <hgroup class="h4">
        <h3>Bronze</h3>
        <p class="mono price">CAD $2,500</p>
      </hgroup>
      <ul>
        <li>
          <strong> Logo on website</strong> 
          The Sponsor is entitled to have their name and logo listed in the sponsors section of the pgconf.dev website. 
        </li>
        <li>
          <strong>‍Logo featured in conference banner in foyer and common areas.</strong> 
          The Sponsor is entitled to have their logo appear (alongside those of other sponsors) on The Event banners in the common areas of the conferences.
        </li>
        <li> <strong> Free conference vouchers</strong>
          The Sponsor is entitled to one (1) free voucher to the conference
        </li>
        <li>
          <strong>Job listing on website</strong> 
          The Sponsor is entitled to have 1 job posting appear on The Event website.
        </li>
        <li>
          <strong>Sticker benefit</strong> 
          The sponsor is entitled to bring stickers that can be left at designated sticker tables
        </li>
        <li>
          <strong>Social-media appreciation.</strong> Sponsor thanked in a PGConf.dev
          social-media posting.
        </li>
      </ul>
    </section>
  </div>
</section>

<section class="main">

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
