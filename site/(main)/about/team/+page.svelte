<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";
  import Rule from "$lib/Rule.svelte";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Team — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The volunteers who organize PGConf.dev — the organizing committee, program committee, and the crew who run the week."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Team</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">About</p>
    <h1>The volunteers who put this on.</h1>
  </hgroup>

  <p class="lede mute text">
    No paid staff. PGConf.dev is organized by a rotating committee of community
    volunteers, with program-committee membership refreshed each year to spread
    the work and the perspective.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#organizing">Organizing committee</a></li>
    <li><a class="li-number" href="#program">Program committee</a></li>
    <li><a class="li-number" href="#volunteers">Volunteers</a></li>
    <li><a class="li-number" href="#contact">Contact</a></li>
  </ol>
</nav>

<section id="organizing">
  <hgroup class="main">
    <p class="section-number">Organizing committee</p>
    <h2>The chairs who run the conference.</h2>
  </hgroup>

  <p class="main">
    The organizing committee handles the program, logistics, and sponsorship.
    Membership rotates between editions to spread the load and keep fresh
    perspective in the room.
  </p>

  <Rule class="(main)">Conference chairs</Rule>

  <div class="grid+12 (main)">
    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Conference chair</p>
          <h3>Committee member name</h3>
        </hgroup>

        <p>
          Maintainer of a major PostgreSQL subsystem. Three years on the
          organizing committee.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Program chair</p>
          <h3>Committee member name</h3>
        </hgroup>

        <p>
          Extension author and longtime contributor to the regression test
          suite.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Logistics chair</p>
          <h3>Committee member name</h3>
        </hgroup>

        <p>
          Volunteer coordinator for two prior PGConf.dev editions; based in
          Montréal.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Sponsorship</p>
          <h3>Committee member name</h3>
        </hgroup>

        <p>
          Coordinates partner agreements, scholarship funding, and the sponsor
          program.
        </p>
      </figcaption>
    </figure>
  </div>
</section>

<section id="program" class="*:main">
  <hgroup>
    <p class="section-number">Program committee</p>
    <h2>Who reviews the talks.</h2>
  </hgroup>

  <aside class=") note">
    <h3 class="over">Membership</h3>
    <p>
      Committee membership rotates each year.
      <a href="#" class="delete">Read about how we pick reviewers →</a>
    </p>
  </aside>

  <p>
    The program committee reviews every proposal at least twice, with conflicts
    of interest declared and blind to author identity until the second pass.
  </p>

  <ul class="edge dedent">
    <li>Committee member · subsystem maintainer</li>
    <li>Committee member · extension author</li>
    <li>Committee member · downstream product engineer</li>
    <li>Committee member · committer</li>
    <li>Committee member · application engineer</li>
    <li>Committee member · academic researcher</li>
    <li>Committee member · DevRel from a sponsor (non-voting)</li>
  </ul>

  <div class="notice-area edge">
    <h3 class="h6">Working with the committee</h3>

    <p>
      Reviewer notes are sent to every proposer — accepted or not. If your talk
      wasn't selected, you'll get specific feedback you can use next year. We
      treat the CFP as a community service, not a gate.
    </p>
  </div>
</section>

<section id="volunteers" class="main">
  <hgroup>
    <p class="section-number">Volunteers</p>
    <h2>The crew who run the week.</h2>
  </hgroup>

  <p>
    Beyond the committee, PGConf.dev is staffed each year by dozens of
    volunteers — the registration desk, room hosts, A/V support, and the social
    program. They keep the conference running, and get a complimentary
    registration in return.
  </p>

  <p>
    <Link href={resolve("/attend/volunteer")}>
      Volunteer at PGConf.dev 2027 →
    </Link>
  </p>
</section>

<section id="contact">
  <div class="main margin-gap">
    <hgroup>
      <p class="section-number">Contact</p>
      <h2>How to reach us.</h2>
    </hgroup>

    <p>
      The committee is small — for most things, the best route is the matching
      email below. We also keep a few public channels open.
    </p>
  </div>

  <div class="grid+14 (main)">
    <div class="note area border">
      <hgroup class="h4">
        <h3>Program</h3>
        <p>CFP questions, schedule, talk logistics.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:program@pgconf.dev">program@pgconf.dev</a>
      </p>
    </div>

    <div class="note area border">
      <hgroup class="h4">
        <h3>Sponsorship</h3>
        <p>Sponsorship inquiries, partner program, invoicing.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:sponsors@pgconf.dev">sponsors@pgconf.dev</a>
      </p>
    </div>

    <div class="note area border">
      <hgroup class="h4">
        <h3>Press &amp; media</h3>
        <p>Press passes, interview requests, photo policy.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:press@pgconf.dev">press@pgconf.dev</a>
      </p>
    </div>

    <div class="note area border">
      <hgroup class="h4">
        <h3>Code of conduct</h3>
        <p>Confidential channel monitored by the CoC committee.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a>
      </p>
    </div>

    <div class="note area border">
      <hgroup class="h4">
        <h3>General</h3>
        <p>Anything else.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:info@pgconf.dev">info@pgconf.dev</a>
      </p>
    </div>

    <div class="note area border">
      <hgroup class="h4">
        <h3>Mailing list</h3>
        <p>Announcements only — about one email a month.</p>
      </hgroup>
      <p class="mono">
        <a href="#" class="delete">Subscribe →</a>
      </p>
    </div>
  </div>
</section>
