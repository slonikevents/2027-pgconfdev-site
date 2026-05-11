<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Policies &amp; Privacy — PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 policies, privacy practices, and financial disclosure."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Policies &amp; privacy</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">About</p>
    <h1>Policies &amp; privacy.</h1>
  </hgroup>

  <p class="lede mute text">
    The required bits. How PGConf.dev is run, what we do with your data, and
    where the money goes.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") note">
  <h2 id="on-this-page" class="over">On This Page</h2>
  <ol>
    <li><a class="li-number" href="#policies">Policies</a></li>
    <li><a class="li-number" href="#privacy">Privacy</a></li>
    <li><a class="li-number" href="#financial">Financial disclosure</a></li>
  </ol>
</nav>

<section id="policies" class="main">
  <hgroup>
    <p class="section-number">Policies</p>
    <h2>A PostgreSQL Community Event.</h2>
  </hgroup>

  <p>
    PGConf.dev is a recognised PostgreSQL Community Event and is run in
    accordance with the
    <Link href="https://www.postgresql.org/about/policies/conferences/">
      PostgreSQL community conference policies
    </Link>. The
    <Link href={resolve("/about/conduct")}>code of conduct</Link> applies at all conference
    venues and conference-related social events.
  </p>
</section>

<section id="privacy" class="main">
  <hgroup>
    <p class="section-number">Privacy</p>
    <h2>What we collect, and what we don't.</h2>
  </hgroup>

  <p>
    This site is hosted on GitHub Pages; see GitHub's
    <Link
      href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
    >
      General Privacy Statement</Link
    > for details on server-side logging.
  </p>

  <p>
    We measure traffic with <strong>Cloudflare Web Analytics</strong>, which
    keeps no client-side state and does not fingerprint visitors — there are no
    advertising cookies on this site. Our emails contain no tracking pixels or
    open-tracking links.
  </p>

  <p>
    The conference is organised by Slonik Events Canada, which follows its own
    <Link href="https://www.pgevents.ca/about/privacypolicy/">
      Privacy Policy
    </Link> for registration and attendee data.
  </p>
</section>

<section id="financial" class="main">
  <hgroup>
    <p class="section-number">Financial disclosure</p>
    <h2>Where the money goes.</h2>
  </hgroup>

  <p>
    PGConf.dev is underwritten by <strong>Slonik Events Canada</strong>, a
    Canadian non-profit, with support from our
    <Link href={resolve("/sponsor")}>sponsors</Link>. All proceeds support the
    PostgreSQL community as set out in the
    <Link
      href="https://www.pgevents.ca/media/local/pdf/slonik-events-bylaws-2023.pdf"
    >
      Slonik Events bylaws</Link
    >.
  </p>

  <p>
    Organisers and volunteers receive no remuneration for their work beyond free
    conference attendance. They may apply for travel sponsorship on the same
    terms as anyone else.
  </p>
</section>
