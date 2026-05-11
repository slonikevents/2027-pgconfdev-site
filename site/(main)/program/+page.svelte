<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  /* Deadlines ledger — milestone left, date right; stacks when narrow.
     Cell appearance (mono/mute/size/serif) is handled by utilities. */
  .dates > div {
    align-items: baseline;
    border-top: 1px solid var(--border);
    display: grid;
    gap: 0.25rem 1.5rem;
    grid-template-columns: 1fr auto;
    padding-block: 0.85rem;
  }

  .dates > div:last-child {
    border-bottom: 1px solid var(--border);
  }

  .dates dt {
    font-family: var(--header-font);
  }

  @media (width < 30rem) {
    .dates > div {
      grid-template-columns: 1fr;
    }
  }
</style>

<svelte:head>
  <title>Call for Proposals — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Submit a talk, tutorial, or unconference topic to PGConf.dev 2027. CFP closes 14 February 2027."
  />
</svelte:head>

<BreadcrumbNav />

<header class="(main)">
  <hgroup>
    <p class="action">Call for Proposals</p>
    <h1>Submit a talk for 2027.</h1>
  </hgroup>

  <p class="lede mute text">
    We're looking for technical talks, hands-on tutorials, and unconference
    topics from contributors at every level. The CFP closes
    <strong>14 February 2027</strong> at 11:59 pm UTC.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#looking-for">What we're looking for</a></li>
    <li><a class="li-number" href="#formats">Formats</a></li>
    <li><a class="li-number" href="#review">Review process</a></li>
    <li><a class="li-number" href="#dates">Key dates</a></li>
  </ol>
</nav>

<aside class=") note area border" aria-labelledby="cfp-glance">
  <h2 id="cfp-glance" class="over">At a Glance</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Status</dt>
      <dd class="insert">Open for submissions</dd>
    </div>

    <div class="p">
      <dt class="over">Closes</dt>
      <dd>14 February 2027 · 11:59 pm UTC</dd>
    </div>

    <div class="p">
      <dt class="over">Decisions</dt>
      <dd>By 15 March 2027</dd>
    </div>

    <div class="p">
      <dt class="over">Formats</dt>
      <dd>45-min talk · 90-min tutorial · unconference</dd>
    </div>
  </dl>
</aside>

<section class="main">
  <div class="insert-area edge">
    <h3 class="h6">CFP is open</h3>
    <p>
      Proposals are being accepted now through <strong>14 February 2027</strong
      >. Submit via the proposal system linked below. Questions?
      <Link href={`${resolve("/about/team")}#contact`}
        >Contact the program committee.</Link
      >
    </p>
  </div>
</section>

<section id="looking-for" class="main">
  <hgroup>
    <p class="section-number">What we're looking for</p>
    <h2>Technical depth, honestly reported.</h2>
  </hgroup>

  <p class="lede">
    PGConf.dev is a working conference. The audience has already read the
    documentation — they want to hear what the documentation doesn't say.
  </p>

  <aside class=") main note p">
    <h3 class="over">Not a fit</h3>
    <p>
      Introductory talks are a poor match for this audience. If your proposal
      could run verbatim at a general PostgreSQL conference, it probably belongs
      at one.
    </p>
  </aside>

  <p>
    The best talks here are war stories, deep dives, and design walks that only
    the person who built or broke the thing could give. We especially welcome:
  </p>

  <ul class="edge dedent">
    <li>
      <strong>Internals and patches</strong> — new features in PG 18, work in progress,
      design decisions and their trade-offs
    </li>
    <li>
      <strong>Operating at scale</strong> — vacuum, replication, connection pooling,
      observability — what you actually learned in production
    </li>
    <li>
      <strong>Extensions</strong> — building, distributing, and maintaining extensions;
      pgvector, TimescaleDB, pgrx, the PGXN ecosystem
    </li>
    <li>
      <strong>Tooling and ecosystem</strong> — backup, migration, upgrade paths, cloud-native
      deployments, logical replication
    </li>
    <li>
      <strong>Community and process</strong> — how patches get committed, how the
      committer model works, how new contributors find their footing
    </li>
  </ul>
</section>

<section id="formats">
  <hgroup class="main">
    <p class="section-number">Formats</p>
    <h2>Three formats to choose from.</h2>
  </hgroup>

  <p class="main">
    Pick the format that fits your material. We review each format on its own
    merits — a 45-minute talk is not a better or worse submission than a
    tutorial.
  </p>

  <div class="grid+16 (main)">
    <div class="note border edge">
      <hgroup class="h4">
        <p>45 min · 3 tracks</p>
        <h3>Talk</h3>
      </hgroup>
      <p>
        The main format. Slide-driven or live-demo, with Q&amp;A in the final
        5–10 minutes.
      </p>
    </div>

    <div class="note border insert-edge">
      <hgroup class="h4">
        <p>90 min · Day 1</p>
        <h3>Tutorial</h3>
      </hgroup>
      <p>
        Hands-on, laptop-required session on the tutorial day. Max 40 attendees
        per room; attendees should have Postgres 17 installed.
      </p>
    </div>

    <div class="note border notice-edge">
      <hgroup class="h4">
        <p>30 min · Friday</p>
        <h3>Unconference</h3>
      </hgroup>
      <p>
        Proposed and voted on the day of. Submit a topic idea in advance to seed
        the board; the schedule fills live from attendee proposals.
      </p>
    </div>
  </div>
</section>

<section id="review" class="main">
  <hgroup>
    <p class="section-number">Review process</p>
    <h2>Double-blind, then discussed.</h2>
  </hgroup>

  <p>
    Every proposal is reviewed independently by at least two members of the
    program committee. The first pass is blind to author identity. In the second
    pass, reviewers discuss shortlisted proposals with author context visible
    and conflicts of interest declared.
  </p>

  <p>
    All proposers receive written feedback regardless of outcome. If your talk
    isn't selected, you'll get specific notes you can use for the next
    submission or a future edition.
  </p>

  <div class="action-area edge section">
    <h3 class="h6">Speaker support</h3>
    <p>
      Accepted speakers receive a complimentary full-conference registration. If
      travel funding would make the difference between submitting and not, note
      that in your proposal — we have a small speaker travel fund allocated each
      year.
    </p>
  </div>
</section>

<section id="dates">
  <hgroup class="main">
    <p class="section-number">Key dates</p>
    <h2>Important deadlines.</h2>
  </hgroup>

  <dl class="dates dedent main">
    <div>
      <dt>CFP opens</dt>
      <dd class="mono mute size-">
        <time datetime="2026-12-01">1 December 2026</time>
      </dd>
    </div>
    <div>
      <dt>CFP closes</dt>
      <dd class="mono action size-">
        <time datetime="2027-02-14">14 February 2027</time> · 11:59 pm UTC
      </dd>
    </div>
    <div>
      <dt>Notifications</dt>
      <dd class="mono mute size-">
        <time datetime="2027-03-15">by 15 March 2027</time>
      </dd>
    </div>
    <div>
      <dt>Schedule published</dt>
      <dd class="mono mute size-">
        <time datetime="2027-04-01">early April 2027</time>
      </dd>
    </div>
    <div>
      <dt>Conference</dt>
      <dd class="mono mute size-">11 – 14 May 2027 · Montréal</dd>
    </div>
  </dl>
</section>

<section class="main">
  <p>
    <a
      href="#"
      class="button circle stroke"
      style:color="var(--delete-fg)"
      style:border="1px solid var(--delete-fg)"
    >
      Submit a proposal — link coming soon
    </a>
  </p>
  <p>
    <small
      >Questions? Email <Link href={`${resolve("/about/team")}#contact`}
        >the program committee</Link
      >.</small
    >
  </p>
</section>
