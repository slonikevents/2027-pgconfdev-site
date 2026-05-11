<script>
  import { getContext } from "$lib/layout";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  /* Photo placeholder — drop in real photography later. */
  .photo {
    align-items: center;
    aspect-ratio: 3 / 2;
    color: var(--fg-tint);
    display: flex;
    font-family: var(--mono-font);
    font-size: 0.75rem;
    justify-content: center;
    letter-spacing: 0.05em;
    text-align: center;
    text-transform: uppercase;
  }

  .photo--wide {
    aspect-ratio: 16 / 7;
  }
</style>

<svelte:head>
  <title>Social Events — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Social events at PGConf.dev 2027 — welcome breakfast, group run, reception, community dinner, and the conference pub."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Social events</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Social</p>
    <h1>Social events.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev's hallway track is as valuable as the scheduled program. These
    events are how the contributor community actually connects — don't skip
    them.
  </p>

  <figure class="section">
    <div class="photo photo--wide border">
      [ Photo · reception · past edition ]
    </div>
    <figcaption>
      Fig. — The hallway track in full swing at a recent edition. Replace with a
      real photograph.
    </figcaption>
  </figure>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#evenings">The big evenings</a></li>
    <li><a class="li-number" href="#week">Around the week</a></li>
  </ol>
</nav>

<section id="evenings">
  <hgroup class="main">
    <p class="section-number">The big evenings</p>
    <h2>Two nights worth clearing your calendar for.</h2>
  </hgroup>

  <aside class=") note">
    <h3 class="over">Details &amp; signup</h3>
    <p>
      Venues and signup links for 2027 go up closer to the conference; the
      events here are modeled on 2026 and may change. Signup for the dinner and
      Meet &amp; Eat opens with early-bird registration — watch the mailing list
      and the conference Discord.
    </p>
  </aside>

  <div class="grid+16 (main)">
    <figure id="reception">
      <div class="photo border">[ Photo · evening reception ]</div>
      <figcaption class="note">
        <hgroup class="h4">
          <p>Tuesday · 18:00 · Grand Foyer</p>
          <h3>Opening Reception</h3>
        </hgroup>
        <p>
          Appetizers and two complimentary drinks included with your
          registration. A chance to decompress after the tutorial day. Bring
          your badge; additional drinks available for purchase.
        </p>
      </figcaption>
    </figure>

    <figure id="dinner">
      <div class="photo border">[ Photo · community dinner ]</div>
      <figcaption class="note">
        <hgroup class="h4">
          <p>Thursday · 19:30 · Old Montréal</p>
          <h3>Community Dinner</h3>
        </hgroup>
        <p>
          The traditional conference dinner at a venue in Old Montréal. Separate
          signup required and subsidized by sponsorship; limited to 250 seats.
          Signup opens with early-bird registration.
        </p>
      </figcaption>
    </figure>
  </div>
</section>

<section id="week">
  <hgroup class="main">
    <p class="section-number">Around the week</p>
    <h2>Smaller ways to meet people.</h2>
  </hgroup>

  <div class="grid+12 (main)">
    <figure id="breakfast">
      <div class="photo border">[ Photo · welcome breakfast ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Tuesday · 08:00 · Registration</p>
          <h3>Newcomer Welcome Breakfast</h3>
        </hgroup>
        <p>
          Meet other newcomers alongside experienced community members before
          the day starts. No signup — just show up for coffee and pastries.
        </p>
      </figcaption>
    </figure>

    <figure id="run">
      <div class="photo border">[ Photo · social run ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Wednesday · 18:00 · Main entrance</p>
          <h3>Social Run</h3>
        </hgroup>
        <p>
          A recreational 5–10 km run through Montréal and along the waterfront.
          Multiple pace groups. Running shoes required; bring your badge.
        </p>
      </figcaption>
    </figure>

    <figure id="pub">
      <div class="photo border">[ Photo · hallway pub ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Evenings · all week · Near conference</p>
          <h3>Hallway Pub</h3>
        </hgroup>
        <p>
          An informal after-hours spot near the venue. No signup, no agenda —
          just the conversations from the day, continued. Venue announced at
          registration.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="photo border">[ Photo · small-group dinner ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Wed &amp; Fri · Various restaurants</p>
          <h3>Meet &amp; Eat</h3>
        </hgroup>
        <p>
          Self-organized dinners in groups of 8. Sign up at registration, get a
          group and a restaurant, meet at the desk at 18:00. Self-pay — a real
          conversation with people you've only known by email.
        </p>
      </figcaption>
    </figure>

    <figure id="office-hours">
      <div class="photo border">[ Photo · community office hours ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Wed &amp; Thu · Daytime · Foyer</p>
          <h3>Community Office Hours</h3>
        </hgroup>
        <p>
          Book focused time with a project maintainer to walk through a patch, a
          design question, or a contribution you're stuck on. Sign up at the
          registration desk — slots fill fast.
        </p>
      </figcaption>
    </figure>

    <figure id="posters">
      <div class="photo border">[ Photo · poster session ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Thursday · Lunch · Foyer</p>
          <h3>Poster Session</h3>
        </hgroup>
        <p>
          Over lunch, browse posters from PostgreSQL projects and the people
          building them. A relaxed way to see what's in flight and corner a
          maintainer with questions.
        </p>
      </figcaption>
    </figure>

    <figure id="karaoke">
      <div class="photo border">[ Photo · karaoke night ]</div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Wednesday · 22:00 · Nearby venue</p>
          <h3>Karaoke</h3>
        </hgroup>
        <p>
          The PGConf.dev tradition. After the first day of talks winds down, the
          night migrates to karaoke. No talent required; enthusiasm encouraged.
          Venue announced at registration.
        </p>
      </figcaption>
    </figure>
  </div>
</section>
