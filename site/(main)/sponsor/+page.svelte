<script>
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import BreadcrumbNav from "./BreadcrumbNav.svelte";
</script>

<style>
  .tier-platinum {
    --tier-color: var(--action-fg);
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
    border-inline-start-color: var(--tier-color);
  }

  .tier .price {
    color: var(--tier-color);
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
    <h1>The companies underwriting 2027.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev is non-profit. Sponsors cover the venue, A/V, catering,
    scholarships, and the parts of the program that ticket revenue alone can't.
  </p>
</header>

<hr class="section" />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
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
      <dt class="over">Platinum</dt>
      <dd>CAD $25,000</dd>
    </div>
    <div class="p">
      <dt class="over">Gold</dt>
      <dd>CAD $15,000</dd>
    </div>
    <div class="p">
      <dt class="over">Silver</dt>
      <dd>CAD $7,500</dd>
    </div>
    <div class="p">
      <dt class="over">Bronze</dt>
      <dd>CAD $3,000</dd>
    </div>
  </dl>
</aside>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Sponsorships are open</h3>
    <p>
      We are actively seeking sponsors for the 2027 edition. See the tiers below
      or <Link href={`${resolve("/about/team")}#contact`}
        >contact the sponsorship team</Link
      > for a full prospectus.
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
    subscribe to the mailing list for updates.
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
    Sponsorship funds directly cover: venue costs, A/V production, catering, the
    scholarship program (travel grants for contributors who couldn't otherwise
    attend), and speaker travel support.
  </p>
</section>

<section id="tiers">
  <hgroup class="main">
    <p class="section-number">Sponsorship tiers</p>
    <h2>Four levels of support.</h2>
  </hgroup>

  <p class="main note">
    Pricing in Canadian dollars. Contact us for the full prospectus with
    detailed benefit descriptions.
  </p>

  <div class="grid+16 (main)">
    <div class="note border edge tier tier-platinum">
      <hgroup class="h4">
        <h3>Platinum</h3>
        <p class="mono price">CAD $25,000</p>
      </hgroup>
      <p>
        Prominent logo placement throughout the venue and website, speaking
        opportunity at the opening session, two complimentary registrations,
        dedicated table in the sponsor area.
      </p>
    </div>

    <div class="note border edge tier tier-gold">
      <hgroup class="h4">
        <h3>Gold</h3>
        <p class="mono price">CAD $15,000</p>
      </hgroup>
      <p>
        Logo on website, printed program, and sponsor banner. Two complimentary
        registrations. Table in the sponsor area.
      </p>
    </div>

    <div class="note border edge tier tier-silver">
      <hgroup class="h4">
        <h3>Silver</h3>
        <p class="mono price">CAD $7,500</p>
      </hgroup>
      <p>
        Logo on website and printed program. One complimentary registration.
        Shared sponsor table.
      </p>
    </div>

    <div class="note border edge tier tier-bronze">
      <hgroup class="h4">
        <h3>Bronze</h3>
        <p class="mono price">CAD $3,000</p>
      </hgroup>
      <p>Logo on website. One complimentary registration.</p>
    </div>
  </div>
</section>

<section class="main">
  <p>
    <small>
      Custom arrangements are possible — contact us to discuss. All sponsors are
      listed in the printed program, website, and social media announcements.
      Benefits are fulfilled based on the tier at time of contract.
    </small>
  </p>

  <p class="section">
    <Link href={`${resolve("/about/team")}#contact`} class="button circle"
      >Contact the sponsorship team</Link
    >
  </p>
</section>

<section
  class="(main)"
  style:background-color="var(--action)"
  style:color="var(--bg)"
  style:padding-block="var(--margin)"
>
  <hgroup class="h1">
    <p style:color="var(--bg)">Past editions</p>
    <h2 style:color="var(--bg)" style:max-width="38rem">
      Thank you to our 2026 sponsors.
    </h2>
  </hgroup>

  <p
    class="margin-gap mono size-"
    style:opacity="0.85"
    style:letter-spacing="0.05em"
  >
    EDB · Microsoft · AWS · Huawei · Databricks · Percona · Fujitsu · HighGo ·
    pganalyze · Supabase · SRA OSS · Snowflake · CYBERTEC · Xata
  </p>
</section>
