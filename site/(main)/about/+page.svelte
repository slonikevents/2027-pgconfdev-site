<script>
  import {
    Activity,
    BookOpen,
    CalendarDays,
    Code,
    GitCommitHorizontal,
    Globe,
    GraduationCap,
    Layers,
    Puzzle,
  } from "@lucide/svelte";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";
  import attendance from "./attendance.svg";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  blockquote {
    font-style: italic;
    font-weight: 400;
  }

  .timeline > * {
    grid-auto-flow: dense;
    grid-column: span 2;
  }
</style>

<svelte:head>
  <title>About — PGConf.dev 2027</title>
  <meta
    name="description"
    content="About PGConf.dev — the annual PostgreSQL Developer Conference, its history, organizing committee, and how to get in touch."
  />
</svelte:head>

<BreadcrumbNav />

<header class="(main) section">
  <hgroup>
    <p class="action">About PGConf.dev</p>
    <h1>The PostgreSQL Developer Conference.</h1>
  </hgroup>

  <p class="lede mute text">
    Four days of talks, discussions, and an unconference to work out the next
    year of PostgreSQL in person.
  </p>
</header>

<section class="band section" aria-label="Statistics">
  <div class="(main) grid+12">
    <figure>
      <div class="action h2">~300</div>
      <figcaption class="over">Attendees</figcaption>
    </figure>
    <figure>
      <div class="action h2">80+</div>
      <figcaption class="over">Speakers</figcaption>
    </figure>
    <figure>
      <div class="action h2">4</div>
      <figcaption class="over">Days</figcaption>
    </figure>
    <figure>
      <div class="action h2">~100</div>
      <figcaption class="over">Sessions</figcaption>
    </figure>
  </div>
</section>

<SectionNav class="( main" />

<nav class="main ) note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#what">What PGConf.dev is</a></li>
    <li><a class="li-number" href="#who">Who attends</a></li>
    <li><a class="li-number" href="#history">A short history</a></li>
  </ol>
</nav>

<aside
  aria-labelledby="at-a-glance"
  class="main ) area@-48 border@-48 note"
  data-pagefind-ignore
>
  <h2 id="at-a-glance" class="over">At a glance</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Conference</dt>
      <dd>
        PGConf.dev 2027, the fourth annual PostgreSQL Developer Conference
      </dd>
    </div>

    <div class="p">
      <dt class="over">Dates</dt>
      <dd>May 11–14, 2027</dd>
    </div>

    <div class="p">
      <dt class="over">Venue</dt>
      <dd>Plaza Centre-Ville, Montréal</dd>
    </div>

    <div class="p">
      <dt class="over">Format</dt>
      <dd>3 days × 3+ tracks · 1 unconference day</dd>
    </div>

    <div class="p">
      <dt class="over">Attendance</dt>
      <dd>~300, including most Major Contributors</dd>
    </div>

    <div class="p">
      <dt class="over">Organizer</dt>
      <dd>Slonik Events Canada</dd>
    </div>
  </dl>
</aside>

<section id="what" class="main">
  <hgroup>
    <p class="section-number">What it is</p>
    <h2>A working conference on the future of PostgreSQL.</h2>
  </hgroup>

  <p class="lede">
    PGConf.dev is four days of design discussion, patch review, and community
    organizing, to plan for what PostgreSQL does next.
  </p>

  <p>
    It's run by and for PostgreSQL contributors. A third of the schedule is
    unconference or working groups, where contributors plan the next year of
    development, settle technical decisions, work through architectural
    disagreements, and take up what the ecosystem and the community need next.
  </p>

  <p>
    Talks are technical. They draw on what the project has already tried, and
    they're where new ideas start.
  </p>

  <p>
    The people who come are the ones you'll work with all year on the mailing
    lists. For most of them, this is the one week that you'll all be in the same
    room.
  </p>

  <p>
    And if you run a community event or are trying to start one, this is the
    conference where you'll find people doing the same.
  </p>

  <figure class="section">
    <blockquote class="action-acme h2 mute">
      <q>
        I met the people behind Postgres, discussed patch ideas, and got
        first-hand feedback on my own contribution.
      </q>
    </blockquote>

    <figcaption class="over">
      <cite style:font-style="normal">
        — Alberto Piai,
        <Link
          href="https://www.postgresql.org/message-id/DITN90YX3328.2A0I3LCV164BA@gmail.com"
          >New PostgreSQL contributor</Link
        >, PGConf.dev 2026
      </cite>
    </figcaption>
  </figure>

  <figure>
    <div class="border screen">[ Photo · main hall · past edition ]</div>
    <figcaption>
      Fig. 01 — A landscape photo from a recent edition — the main hall during a
      contributor talk. Replace with a real photograph.
    </figcaption>
  </figure>
</section>

<section id="who" class="*:main">
  <hgroup>
    <p class="section-number">Who attends</p>
    <h2>~300 people, including most Major Contributors.</h2>
  </hgroup>

  <p class="lede">
    If you do something that makes PostgreSQL great, this is the conference for
    you. And if you'd like to but don't know how to start, ask anyone here.
  </p>

  <dl
    class="(main) grid+14 dedent"
    style:gap="var(--margin)"
    style:margin-block="var(--gap)"
  >
    <div>
      <dt class="h6 iconic">
        <GitCommitHorizontal /> <span>Core contributors</span>
      </dt>
      <dd class="deck">
        Committers, patch authors and reviewers, translators, infrastructure
        administrators, and regulars on
        <code style:white-space="nowrap">-hackers</code>.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <Puzzle /> <span>Extension authors</span>
      </dt>
      <dd class="deck">
        People building PostGIS, pgvector, TimescaleDB, Citus, and the hundreds
        more on PGXN.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <Globe /> <span>Ecosystem maintainers</span>
      </dt>
      <dd class="deck">
        Maintainers of drivers, ORMs, utilities (pooling, backup, monitoring,
        administration), distributions, and packages.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <Layers /> <span>Platform engineers</span>
      </dt>
      <dd class="deck">
        Everyone whose product is Postgres, or started as it: hyperscalers,
        startups, and forks.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <Activity /> <span>Operators</span>
      </dt>
      <dd class="deck">
        DBAs, SREs, and consultants: anyone who carries the pager for a
        production cluster.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <Code /> <span>Application developers</span>
      </dt>
      <dd class="deck">
        Application, data, and AI engineers who chose Postgres for a reason.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <CalendarDays /> <span>Community organizers</span>
      </dt>
      <dd class="deck">
        People running a local user group, a conference, or the nonprofit behind
        one.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <BookOpen /> <span>Writers and educators</span>
      </dt>
      <dd class="deck">
        Bloggers, trainers, and advocates, who explain Postgres to everyone
        else.
      </dd>
    </div>

    <div>
      <dt class="h6 iconic">
        <GraduationCap /> <span>Academics and researchers</span>
      </dt>
      <dd class="deck">
        Researchers and students studying database internals.
      </dd>
    </div>
  </dl>

  <p>
    A decision that's been open since last autumn gets settled at a table over
    lunch.
  </p>

  <p>
    In 2026, attendees travelled from 29 countries across six continents, from
    New Zealand to Kenya to Japan. The project runs asynchronously across every
    timezone all year. This is the one week it doesn't.
  </p>

  <figure class="(main) section">
    <img
      src={attendance}
      alt="World map highlighting the 29 countries attendees travelled from in 2026"
    />
  </figure>
</section>

<section id="history" class="*:main">
  <hgroup>
    <p class="section-number">History</p>
    <h2>Four years, two cities.</h2>
  </hgroup>

  <aside class="( note">
    <h3 class="over">PGCon</h3>
    <p>
      PGCon ran in Ottawa from 2007 to 2023 — sixteen editions before PGConf.dev
      picked up the thread.
    </p>
  </aside>

  <p>
    When the long-running PGCon wound down, the contributor community rebooted
    the format under a new name in Vancouver. Each spring, the conference moves
    between coasts to remain accessible to the global community.
  </p>

  <div class="(main main) pagegrid section timeline">
    <div class="subgrid@)">
      <figure class="column-1@( column-2@)">
        <div class="action h2">2024</div>
        <figcaption class="over">Vancouver, BC</figcaption>
      </figure>

      <div class="note">
        <h4>PGCon → PGConf.dev</h4>
        <p>
          The first PGConf.dev takes over the mantle from PGCon, and adds new
          formats like the Student Breakfast and Patch Review Workshop. 210
          attendees take the leap with us.
        </p>
      </div>
    </div>

    <hr aria-hidden="true" />

    <div class="subgrid@)">
      <figure class="column-1@( column-2@)">
        <div class="action h2">2025</div>
        <figcaption class="over">Montréal, QC</figcaption>
      </figure>

      <div class="note">
        <h4>New ways to connect</h4>
        <p>
          Meet &amp; Eat launches to build new community relationships over a
          meal. The Poster Session debuts, highlighting even more community work
          asynchronously.
        </p>
      </div>
    </div>

    <hr aria-hidden="true" />

    <div class="subgrid@)">
      <figure class="column-1@( column-2@)">
        <div class="action h2">2026</div>
        <figcaption class="over">Vancouver, BC</figcaption>
      </figure>

      <div class="note">
        <h4>Four days, 30 years</h4>
        <p>
          Community Discussion Sessions join the program, and Tuesday opens to
          everyone. PostgreSQL's 30th anniversary makes it a real party. Sold
          out at 250 attendees.
        </p>
      </div>
    </div>

    <hr aria-hidden="true" />

    <div class="subgrid@)">
      <figure class="column-1@( column-2@)">
        <div class="action h2">2027</div>
        <figcaption class="over">Montréal, QC</figcaption>
      </figure>

      <div class="note">
        <h4>This year</h4>
        <p>Four days at the Plaza Centre-Ville, May 11 – 14.</p>
      </div>
    </div>
  </div>
</section>
