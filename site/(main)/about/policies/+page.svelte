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
    <h1>Policies &amp; Privacy.</h1>
  </hgroup>

  <p class="lede mute text">
    How PGConf.dev is run, what this site collects, and where the money goes.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") note">
  <h2 id="on-this-page" class="over">On this page</h2>
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
    PGConf.dev is a
    <Link href="https://www.postgresql.org/about/policies/conferences/">
      PostgreSQL Community Event
    </Link>. All attendees are required to follow our
    <Link href={resolve("/about/code-of-conduct")}>code of conduct</Link>, which
    applies at all conference venues and conference-related social events.
  </p>
</section>

<section id="privacy" class="main">
  <hgroup>
    <p class="section-number">Privacy</p>
    <h2>What we collect, and what we don't.</h2>
  </hgroup>

  <p>
    This site is hosted on
    <Link
      href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection"
    >
      GitHub Pages
    </Link>; see GitHub's <Link
      href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
    >
      General Privacy Statement
    </Link> for more information.
  </p>

  <p>
    We measure our outreach with
    <Link href="https://www.cloudflare.com/web-analytics/">
      Cloudflare Web Analytics
    </Link>, which doesn't use any client-side state, such as cookies or
    <code>localStorage</code>, to collect usage metrics. We also don't
    &ldquo;fingerprint&rdquo; individuals via their IP address,
    <code>User-Agent</code> string, or any other data.
  </p>

  <p>Our emails contain no tracking of any kind.</p>

  <p>
    The conference is organised by
    <Link href="https://www.pgevents.ca/">Slonik Events Canada</Link>, which
    follows its own
    <Link href="https://www.pgevents.ca/about/privacypolicy/">
      Privacy Policy
    </Link> for registration and attendee data.
  </p>
</section>

<section id="recording" class="main">
  <hgroup>
    <p class="section-number">Privacy</p>
    <h2>Photography & Recordings</h2>
  </hgroup>
  <p>
    Conference attendees with red lanyard have indicated that they prefer that
    their photo is not included in social media posts. Conference attendees with
    a blue lanyard have indicated that they are okay with their photo showing up
    in social media posts.
  </p>
  <p>
    We ask all attendees to try to avoid posting photos to social media with
    people wearning a red lanyard. All attendees should be aware that PGConf.dev
    2027 is on a public space and it is possible that your photo will included
    in a social media post even if you are wearing a red lanyard. Many of the
    talks at PGConf.dev 2027 will be recorded and posted on the Internet. If you
    ask question during a recorded talk this might be included in a public
    video. If you walk into the cameras view while it is recording a talk then
    you might appear in a public video.
  </p>
  <p>
    The conference will record and publish many of the conference sessions.
    Attendees and speakers are not allowed to make their own vidoe recordings of
    conference sessions. Attendees that want to capture audio for the purposes
    of note taking or translation can do so in a non-disruptive manner but they
    must not share the recordings or transcripts with others. Unauthorized
    distribution may result in removal from the conference and not being allowed
    to attend future PGConf.dev or Slonik Events Canada events
  </p>
</section>

<section id="financial" class="main">
  <hgroup>
    <p class="section-number">Financial disclosure</p>
    <h2>Where the money goes.</h2>
  </hgroup>

  <p>
    PGConf.dev is underwritten by
    <Link href="https://www.pgevents.ca/">Slonik Events Canada</Link>, a
    Canadian non-profit organisation incorporated expressly to organise this
    conference, with support from our
    <Link href={resolve("/sponsor")}>sponsors</Link>. All proceeds belong to
    Slonik Events Canada and support the PostgreSQL community as set out in the
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
