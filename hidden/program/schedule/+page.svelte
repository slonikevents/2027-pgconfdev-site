<script lang="ts">
  import { getContext } from "$lib/layout";

  const { BreadcrumbNav, SectionNav } = getContext();

  interface Session {
    track: string;
    title: string;
    who: string;
    org?: string;
    room: string;
    type: string;
  }

  // Map a session type to its schedule-grid accent variant.
  const variant: Record<string, string> = {
    talk: "",
    tutorial: "session--tutorial",
    unconf: "session--unconf",
    featured: "session--featured",
  };

  const days = [
    {
      id: "day-1",
      meta: "Day 01 · Tutorial day",
      dow: "Tue",
      date: "11 May",
      intro:
        "Two parallel tracks of hands-on tutorials, capped by an opening reception. Bring a laptop with Postgres 17 and your usual psql.",
      slots: [
        {
          time: "09:00 — 10:30",
          sessions: [
            {
              track: "A · Tutorial · Beginner",
              title:
                "Reading the planner's mind: a walk through EXPLAIN ANALYZE",
              who: "Alex M.",
              org: "Crunchy Data",
              room: "Room 2A",
              type: "tutorial",
            },
            {
              track: "B · Tutorial · Intermediate",
              title: "Building Postgres extensions in Rust with pgrx",
              who: "Sam K.",
              org: "Tembo",
              room: "Room 2B",
              type: "tutorial",
            },
          ],
        },
        {
          time: "10:30 — 11:00",
          break: "Coffee & refreshments",
          place: "Foyer",
        },
        {
          time: "11:00 — 12:30",
          sessions: [
            {
              track: "A · Tutorial · Intermediate",
              title:
                "Logical replication for upgrades: a hands-on path to zero downtime",
              who: "Jordan H.",
              org: "EDB",
              room: "Room 2A",
              type: "tutorial",
            },
            {
              track: "B · Tutorial · All levels",
              title: "Writing your first patch — committer's walkthrough",
              who: "Priya R.",
              org: "core team",
              room: "Room 2B",
              type: "tutorial",
            },
            {
              track: "B · Panel · Optional",
              title: "Newcomer Q&A — your first PGConf, what to expect",
              who: "Organizing committee",
              room: "Room 2B",
              type: "talk",
            },
          ],
        },
        { time: "12:30 — 14:00", break: "Lunch — provided", place: "Hall C" },
        {
          time: "14:00 — 15:30",
          sessions: [
            {
              track: "A · Tutorial · Intermediate",
              title:
                "Operating Postgres on Kubernetes: a CloudNativePG deep dive",
              who: "Marco D.",
              org: "independent",
              room: "Room 2A",
              type: "tutorial",
            },
            {
              track: "B · Tutorial · Intermediate",
              title: "Tuning vacuum: a guided tour of autovacuum and friends",
              who: "Hannah W.",
              org: "Microsoft",
              room: "Room 2B",
              type: "tutorial",
            },
          ],
        },
        { time: "15:30 — 16:00", break: "Afternoon break", place: "Foyer" },
        {
          time: "16:00 — 17:30",
          sessions: [
            {
              track: "A · Tutorial · Beginner",
              title:
                "Indexes from first principles: B-tree, BRIN, Bloom, and when to use each",
              who: "Wei C.",
              org: "Supabase",
              room: "Room 2A",
              type: "tutorial",
            },
            {
              track: "B · Tutorial · Advanced",
              title:
                "Reading raw heap pages — a tour of pageinspect and pg_buffercache",
              who: "Léa T.",
              org: "Citus / Microsoft",
              room: "Room 2B",
              type: "tutorial",
            },
          ],
        },
        {
          time: "18:00 — late",
          sessions: [
            {
              track: "All · Opening reception",
              title: "Welcome to PGConf.dev 2027",
              who: "Light food, drinks, and the official kickoff. All attendees welcome.",
              room: "Grand Foyer",
              type: "featured",
            },
          ],
        },
      ],
    },
    {
      id: "day-2",
      meta: "Day 02 · Talks",
      dow: "Wed",
      date: "12 May",
      intro:
        "First full day of talks. Opening keynote at 09:00, then three parallel tracks of 45-minute sessions through 17:30.",
      slots: [
        {
          time: "09:00 — 10:00",
          sessions: [
            {
              track: "★ · Opening keynote",
              title: "Twenty-five years of WAL: how durability shaped Postgres",
              who: "Keynote speaker",
              org: "core committer · 25+ years on -hackers",
              room: "Grand Ballroom",
              type: "featured",
            },
          ],
        },
        { time: "10:00 — 10:30", break: "Coffee & reset", place: "Foyer" },
        {
          time: "10:30 — 11:15",
          sessions: [
            {
              track: "A · Internals",
              title:
                "Query planning in 18: what the costing changes actually mean",
              who: "Tomás R.",
              org: "committer",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "Running Postgres at planet scale: lessons from a global SaaS",
              who: "Anh L.",
              org: "Shopify",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title: "pgvector in 2027 — what shipped, what's next",
              who: "Andrew K.",
              org: "pgvector maintainer",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "11:30 — 12:15",
          sessions: [
            {
              track: "A · Internals",
              title:
                "Cardinality estimation revisited: stats, samples, and the gap",
              who: "Mei Y.",
              org: "independent",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title: "LISTEN/NOTIFY at scale: yes, you can",
              who: "Felix B.",
              org: "Linear",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title: "Postgres on ZFS — a decade of production lessons",
              who: "Robin S.",
              org: "FreeBSD foundation",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        { time: "12:15 — 13:45", break: "Lunch — provided", place: "Hall C" },
        {
          time: "13:45 — 14:30",
          sessions: [
            {
              track: "A · Internals",
              title: "MERGE in practice: the edge cases nobody talks about",
              who: "Aditi S.",
              org: "committer",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title: "Zero-downtime major upgrades in a regulated industry",
              who: "Daniela P.",
              org: "banking customer",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title:
                "CloudNativePG: how Kubernetes changed Postgres operations",
              who: "Marco D.",
              org: "independent",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "14:45 — 15:30",
          sessions: [
            {
              track: "A · Internals",
              title: "JIT compilation in 2027: when it helps, when it hurts",
              who: "Rui Z.",
              org: "contributor",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "Replication slots, invalidation, and surviving long outages",
              who: "Esther V.",
              org: "Neon",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title: "Apache AGE — graph queries on top of Postgres",
              who: "Bilal F.",
              org: "AGE maintainer",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        { time: "15:30 — 16:00", break: "Afternoon break", place: "Foyer" },
        {
          time: "16:00 — 16:45",
          sessions: [
            {
              track: "A · Internals",
              title:
                "Inside the regression test suite: a tour for new contributors",
              who: "Yusuke T.",
              org: "committer",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title: "Vacuum after the WAL — the real cost of recovery",
              who: "Hannah W.",
              org: "Microsoft",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title:
                "PGXN in 2027: extension distribution, supply chain, and trust",
              who: "David W.",
              org: "PGXN maintainer",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "17:00 — 17:30",
          sessions: [
            {
              track: "All · Plenary",
              title: "Lightning talks — open mic",
              who: "5-minute slots, signup at the registration desk by 12:00.",
              room: "Grand Ballroom",
              type: "talk",
            },
          ],
        },
      ],
    },
    {
      id: "day-3",
      meta: "Day 03 · Talks",
      dow: "Thu",
      date: "13 May",
      intro:
        "Second day of talks. Mid-conference keynote at lunch. Closing dinner Thursday evening — separate signup required.",
      slots: [
        {
          time: "09:00 — 09:45",
          sessions: [
            {
              track: "A · Internals",
              title: "Lock contention in 18: what changed, what didn't",
              who: "Tomás R.",
              org: "committer",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title: "Backups in the era of object storage: pgBackRest in 2027",
              who: "Steve C.",
              org: "pgBackRest maintainer",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title:
                "TimescaleDB internals: hypertables, chunks, and compression",
              who: "Sven L.",
              org: "Timescale",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "10:00 — 10:45",
          sessions: [
            {
              track: "A · Internals",
              title:
                "A new index access method, walked through start to finish",
              who: "Léa T.",
              org: "Citus / Microsoft",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "Connection pooling: PgBouncer, pgcat, and what we actually need",
              who: "Karim O.",
              org: "independent",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title: "Postgres-XL revisited: what sharding teaches us",
              who: "Mei Y.",
              org: "independent",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        { time: "10:45 — 11:15", break: "Coffee", place: "Foyer" },
        {
          time: "11:15 — 12:00",
          sessions: [
            {
              track: "A · Internals",
              title: "Subtransactions and SLRU: the bottleneck we keep finding",
              who: "Aditi S.",
              org: "committer",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "Observability for Postgres: pg_stat_*, auto_explain, and beyond",
              who: "Anh L.",
              org: "Shopify",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title: "Building a Postgres-based queue you can actually trust",
              who: "Felix B.",
              org: "Linear",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "12:15 — 13:15",
          sessions: [
            {
              track: "★ · Mid-conference keynote",
              title:
                "The committer model: how a database community keeps a project alive",
              who: "Keynote speaker",
              org: 'core team · co-author of "PostgreSQL Internals"',
              room: "Grand Ballroom",
              type: "featured",
            },
          ],
        },
        { time: "13:15 — 14:30", break: "Lunch — provided", place: "Hall C" },
        {
          time: "14:30 — 15:15",
          sessions: [
            {
              track: "A · Internals",
              title: "Heap pruning and HOT — a tour of what happens on UPDATE",
              who: "Rui Z.",
              org: "contributor",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "Multi-region Postgres without lying to your users about consistency",
              who: "Esther V.",
              org: "Neon",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title:
                "Postgres in the regulated enterprise: an honest field report",
              who: "Daniela P.",
              org: "banking customer",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "15:30 — 16:15",
          sessions: [
            {
              track: "A · Internals",
              title: "Foreign data wrappers: what's still hard in 2027",
              who: "Priya R.",
              org: "core team",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "When the planner gets it wrong: hints, freezes, and pragmatism",
              who: "Hannah W.",
              org: "Microsoft",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title: "Postgres operators on Kubernetes — a comparative look",
              who: "Marco D.",
              org: "independent",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        { time: "16:15 — 16:45", break: "Afternoon break", place: "Foyer" },
        {
          time: "16:45 — 17:30",
          sessions: [
            {
              track: "A · Internals",
              title:
                "A walk through the buffer manager, from request to eviction",
              who: "Yusuke T.",
              org: "committer",
              room: "Room 5A",
              type: "talk",
            },
            {
              track: "B · Operating",
              title:
                "Compliance, audit, and Postgres — what we wish DBAs heard sooner",
              who: "Karim O.",
              org: "independent",
              room: "Room 5B",
              type: "talk",
            },
            {
              track: "C · Ecosystem",
              title:
                "Pglogical, pglogical2, pg_logical — keeping the lineage straight",
              who: "Wei C.",
              org: "Supabase",
              room: "Room 5C",
              type: "talk",
            },
          ],
        },
        {
          time: "19:30 — late",
          sessions: [
            {
              track: "★ · Closing dinner",
              title: "Community dinner — Old Montréal",
              who: "Separate signup required. Limited to 250 seats; subsidized by sponsorship.",
              room: "Restaurant venue · Walking distance",
              type: "featured",
            },
          ],
        },
      ],
    },
    {
      id: "day-4",
      meta: "Day 04 · Unconference",
      dow: "Fri",
      date: "14 May",
      intro:
        "No fixed program. The schedule fills in live based on attendee proposals — write a topic on a card, pin it to the board at 09:00, the room votes, sessions go on the wall.",
      slots: [
        {
          time: "09:00 — 10:00",
          sessions: [
            {
              track: "★ · Plenary",
              title: "Open-mic proposal session",
              who: "Write your topic on a card, pitch it in 30 seconds, the room votes. Top 12 fill the morning slots; top 6 fill the afternoon.",
              room: "Grand Ballroom",
              type: "featured",
            },
          ],
        },
        {
          time: "10:15 — 10:45",
          sessions: [
            {
              track: "A · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-1",
              type: "unconf",
            },
            {
              track: "B · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-2",
              type: "unconf",
            },
            {
              track: "C · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-3",
              type: "unconf",
            },
          ],
        },
        {
          time: "11:00 — 11:30",
          sessions: [
            {
              track: "A · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-1",
              type: "unconf",
            },
            {
              track: "B · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-2",
              type: "unconf",
            },
            {
              track: "C · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-3",
              type: "unconf",
            },
          ],
        },
        { time: "11:45 — 12:15", break: "Coffee & reshuffle", place: "Foyer" },
        {
          time: "12:15 — 12:45",
          sessions: [
            {
              track: "A · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-1",
              type: "unconf",
            },
            {
              track: "B · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-2",
              type: "unconf",
            },
            {
              track: "C · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-3",
              type: "unconf",
            },
          ],
        },
        { time: "12:45 — 14:00", break: "Lunch — provided", place: "Hall C" },
        {
          time: "14:00 — 14:30",
          sessions: [
            {
              track: "A · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-1",
              type: "unconf",
            },
            {
              track: "B · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-2",
              type: "unconf",
            },
            {
              track: "C · Unconference · TBD",
              title: "Topic to be proposed",
              who: "Schedule fills in live",
              room: "Room U-3",
              type: "unconf",
            },
          ],
        },
        {
          time: "15:00 — 16:00",
          sessions: [
            {
              track: "★ · Closing plenary",
              title:
                "Where we go from here — unconference report & roadmap notes",
              who: "Recap from the unconference moderators, themes from the week, and a quick look at where the contributor community is heading next.",
              room: "Grand Ballroom",
              type: "featured",
            },
          ],
        },
        {
          time: "16:00 — 18:00",
          sessions: [
            {
              track: "· Wrap",
              title: "Conference ends. Hallway track continues.",
              who: "Foyer stays open until 18:00. See you in Berlin in 2028.",
              room: "Grand Foyer",
              type: "talk",
            },
          ],
        },
      ],
    },
  ];
</script>

<style>
  /* Schedule: a time × track grid. Time runs down the left column; each slot's
     sessions align across track columns; breaks span the full width. */
  .schedule {
    display: grid;
  }

  .schedule__row {
    align-items: start;
    border-top: 1px solid var(--border);
    display: grid;
    gap: 1rem;
    grid-template-columns: 9rem 1fr;
    padding-block: 1rem;
  }

  .schedule__row:last-child {
    border-bottom: 1px solid var(--border);
  }

  .schedule__time {
    color: var(--fg);
    font-family: var(--mono-font);
    font-size: 0.875rem;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
    line-height: 1.4;
  }

  .slot {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(var(--tracks, 1), 1fr);
  }

  .schedule__row--break {
    align-items: baseline;
    color: var(--fg-mute);
    grid-template-columns: 9rem 1fr auto;
  }

  .break-label {
    color: var(--fg-mute);
    font-family: var(--header-font);
    font-style: italic;
  }

  .break-meta {
    color: var(--fg-tint);
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .session {
    border-top: 3px solid var(--accent, var(--border));
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.75rem 1rem 1rem;
  }

  .session__track {
    color: var(--accent, var(--fg-tint));
    font-family: var(--mono-font);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin: 0;
    text-transform: uppercase;
  }

  .session__title {
    font-family: var(--header-font);
    font-size: 1.0625rem;
    font-weight: 500;
    letter-spacing: -0.005em;
    line-height: 1.2;
    margin: 0;
    text-wrap: pretty;
  }

  .session__speaker {
    color: var(--fg-mute);
    font-size: 0.875rem;
    margin: 0;
  }

  .session__speaker strong {
    color: var(--fg);
    font-weight: 500;
  }

  .session__meta {
    color: var(--fg-tint);
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    margin-block-start: auto;
    padding-block-start: 0.5rem;
    text-transform: uppercase;
  }

  .session--featured {
    --accent: var(--action);
  }
  .session--featured .session__title {
    font-size: 1.5rem;
    line-height: 1.15;
  }
  .session--tutorial {
    --accent: var(--insert);
  }
  .session--unconf {
    --accent: var(--notice-fg);
  }

  @media (width < 48rem) {
    .schedule__row {
      gap: 0.5rem;
      grid-template-columns: 1fr;
    }
    .schedule__row--break {
      grid-template-columns: 1fr auto;
    }
    .slot {
      grid-template-columns: 1fr;
    }
    .schedule__time {
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.25rem;
    }
  }
</style>

{#snippet session(s: Session)}
  <article class={["session", variant[s.type]]}>
    <p class="session__track">{s.track}</p>
    <h3 class="session__title">{s.title}</h3>
    <p class="session__speaker">
      {#if s.org}<strong>{s.who}</strong> · {s.org}{:else}{s.who}{/if}
    </p>
    <p class="session__meta">{s.room}</p>
  </article>
{/snippet}

<svelte:head>
  <title>Program — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The PGConf.dev 2027 program: 42 talks, 8 tutorials, and a full unconference day across 4 days at the Plaza Centre-Ville in Montréal."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Schedule</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Program · 4 days · 3 tracks</p>
    <h1>The 2027 program.</h1>
  </hgroup>

  <p class="lede mute text">
    Forty-two talks, eight tutorials, and a full day of unconference — spread
    across four days at the Plaza Centre-Ville. Schedule subject to small
    changes through April.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">Jump to a day</h2>
  <ol>
    <li><a class="li-number" href="#day-1">Tue · 11 May · Tutorials</a></li>
    <li><a class="li-number" href="#day-2">Wed · 12 May · Talks</a></li>
    <li><a class="li-number" href="#day-3">Thu · 13 May · Talks</a></li>
    <li><a class="li-number" href="#day-4">Fri · 14 May · Unconference</a></li>
  </ol>
</nav>

<aside class=") note area border" aria-labelledby="legend">
  <h2 id="legend" class="over">Legend</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Talk · 45 min</dt>
      <dd>Three parallel tracks · Room 5A – 5C</dd>
    </div>
    <div class="p">
      <dt class="over insert">Tutorial · 90 min</dt>
      <dd>Hands-on · Day 1 · Room 2A – 2B</dd>
    </div>
    <div class="p">
      <dt class="over action">Keynote · plenary</dt>
      <dd>Grand Ballroom</dd>
    </div>
    <div class="p">
      <dt class="over notice">Unconference · 30 min</dt>
      <dd>Day 4 · Room U-1 – U-3</dd>
    </div>
  </dl>
</aside>

<section aria-label="Statistics" class="(main)">
  <hr class="margin-gap" />

  <div class="grid+12 margin-gap">
    <figure>
      <div class="action h2">4</div>
      <figcaption class="over">Days</figcaption>
    </figure>
    <figure>
      <div class="action h2">3</div>
      <figcaption class="over">Parallel tracks</figcaption>
    </figure>
    <figure>
      <div class="action h2">42</div>
      <figcaption class="over">Talks</figcaption>
    </figure>
    <figure>
      <div class="action h2">8</div>
      <figcaption class="over">Tutorials</figcaption>
    </figure>
    <figure>
      <div class="action h2">18</div>
      <figcaption class="over">Unconf sessions</figcaption>
    </figure>
    <figure>
      <div class="action h2">2</div>
      <figcaption class="over">Keynotes</figcaption>
    </figure>
  </div>

  <hr class="margin-gap" />
</section>

{#each days as day (day.id)}
  <section id={day.id}>
    <hgroup class="main">
      <p>{day.meta}</p>
      <h2>{day.dow} · {day.date}</h2>
    </hgroup>

    <p class="main note">{day.intro}</p>

    <div class="schedule (main)">
      {#each day.slots as slot}
        {#if slot.break}
          <div class="schedule__row schedule__row--break">
            <div class="schedule__time">{slot.time}</div>
            <div class="break-label">{slot.break}</div>
            <div class="break-meta">{slot.place}</div>
          </div>
        {:else}
          <div class="schedule__row">
            <div class="schedule__time">{slot.time}</div>
            <div class="slot" style:--tracks={slot.sessions?.length ?? 1}>
              {#each slot.sessions ?? [] as s}
                {@render session(s)}
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>
{/each}

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Changes &amp; updates</h3>
    <p>
      The program is subject to minor changes through April 2027. The CFP for
      the unconference closes 1 May; until then, the unconference slots above
      remain placeholders.
    </p>
  </div>
</section>
