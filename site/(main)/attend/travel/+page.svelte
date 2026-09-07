<script>
  import { Bus, Car, Footprints, TrainFront } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  .step {
    margin-inline-start: calc(0.5em - 1.5px);
    padding-inline-start: calc(1em - 1.5px);
  }
</style>

<svelte:head>
  <title>Travel &amp; Hotels — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Getting to PGConf.dev 2027 in Montréal: flights and trains, the métro and buses, entry requirements and eTAs, and partner hotels downtown."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Travel &amp; Hotels</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Travel</p>
    <h1>Getting to Montréal.</h1>
  </hgroup>

  <p class="lede mute text">
    Montréal is easy to reach by air and rail. Entering Canada takes a little
    paperwork, and downtown hotels fill up early.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#by-air">By air</a></li>
    <li><a class="li-number" href="#by-train">By train</a></li>
    <li>
      <a class="li-number" href="#entry-requirements">Entry requirements</a>
    </li>
    <li><a class="li-number" href="#hotels">Hotels</a></li>
  </ol>
</nav>

<section id="by-air" class="*:main">
  <hgroup>
    <p class="section-number">By air</p>
    <h2>Montréal–Trudeau International Airport (YUL).</h2>
  </hgroup>

  <p class="lede">
    YUL is Montréal's main hub, served by Air Canada, WestJet, and most major
    U.S. and European carriers.
  </p>

  <p>
    Getting downtown is straightforward by transit or by taxi. Both options
    start on the arrivals level: follow the signs for
    <em>Ground Transportation</em> out of baggage claim.
  </p>

  <aside class="main ) note" aria-labelledby="rem">
    <h3 id="rem" class="over">A train from the airport?</h3>

    <p>
      The <Link href="https://rem.info/en/">REM</Link>, Montréal's light metro,
      is building a branch from YUL to Gare Centrale. Once it opens, it will
      make the trip in 26 minutes, direct.
    </p>

    <p>
      It's scheduled to open sometime in 2027. If it's running by May, we'll
      update this page.
    </p>
  </aside>

  <div>
    <h3>By transit · 45–50 min · CAD $11.25</h3>

    <h4 class="h6 iconic">
      <Bus aria-hidden="true" /> 747 bus · 30–35 min
    </h4>

    <p class="edge step">
      Board either route 1 or 2 at <strong>door 28</strong> and ride to
      <strong class="action">Lionel-Groulx</strong> station. Buy your fare before
      you board, at the vending machines or the STM counter by that door.
    </p>

    <h4 class="h6 iconic">
      <TrainFront aria-hidden="true" />
      Orange line · 4 stops
    </h4>

    <p class="edge step">
      Take the Orange line toward Montmorency and get off at
      <strong class="action">Square-Victoria–OACI</strong>. Your 747 fare covers
      this leg and stays valid across the entire STM network for 24 hours.
    </p>

    <h4 class="h6 iconic">
      <Footprints aria-hidden="true" /> Walk · 3 min
    </h4>

    <p class="edge step">Head south from the station to the venue door.</p>
  </div>

  <aside class="notice-area acme" style:margin-block="var(--gap)">
    <h4 class="h5">Arriving late?</h4>

    <p>
      The métro stops running at 12:45 a.m., or half an hour later on Saturday
      nights, while the 747 bus runs all night.
    </p>

    <p>
      On a late arrival, take <strong>route 1</strong> and stay on past
      Lionel-Groulx, getting off at
      <strong class="action">René-Lévesque / Union</strong>. From there it's a
      seven-minute walk to the venue, southeast along Boulevard Robert-Bourassa.
    </p>

    <p>
      If you'd rather not walk at that hour, a taxi from
      <strong>door 23</strong> is a fixed $56.70 overnight.
    </p>
  </aside>

  <h3>By taxi or rideshare · 20–30 min · CAD $49.45+</h3>

  <p>Allow extra time during rush hour.</p>

  <p>
    Taxis queue at <strong>door 23</strong>. Fares to downtown are fixed at CAD
    $49.45, or $56.70 between 11 p.m. and 5 a.m.
  </p>

  <p>Rideshares pick up from a separate area. Fares vary.</p>
</section>

<section id="by-train" class="*:main">
  <hgroup>
    <p class="section-number">By train</p>
    <h2>VIA Rail and Amtrak.</h2>
  </hgroup>

  <p class="lede">
    Intercity trains arrive at Gare Centrale, in the heart of downtown and a
    five-minute walk from the venue.
  </p>

  <aside class="main ) note" aria-labelledby="underground-city">
    <h3 id="underground-city" class="over">Underground city</h3>

    <p>
      If the weather isn't cooperating, you can walk from Gare Centrale to the
      venue without going outside through the
      <Link href="https://en.wikipedia.org/wiki/Underground_City,_Montreal">
        RÉSO underground city
      </Link>.
    </p>
  </aside>

  <p>
    <Link href="https://www.viarail.ca/en">VIA Rail</Link> runs from Québec City,
    Ottawa, Toronto, and Halifax.
  </p>

  <p>
    From the United States, <Link href="https://www.amtrak.com/">Amtrak</Link>'s
    <em>Adirondack</em> comes up from New York; any other routing connects onto VIA.
  </p>
</section>

<!-- "May in Montréal" aside hidden — see hidden/may-weather-aside.svelte -->
<!-- "Getting around" hidden — see hidden/getting-around-section.svelte -->

<section id="entry-requirements" class="*:main">
  <hgroup>
    <p class="section-number">Entry requirements</p>
    <h2>Visas and eTAs.</h2>
  </hgroup>

  <p class="lede">
    Most international visitors need a visa or an Electronic Travel
    Authorization (eTA) to enter Canada. This
    <Link href="https://ircc.canada.ca/english/visit/visas.asp">visa tool</Link>
    will tell you which applies.
  </p>

  <dl class="dedent action-area edge">
    <dt class="h6">U.S. citizens and permanent residents</dt>
    <dd>
      No visa or eTA is required. Citizens need a valid passport; requirements
      for lawful permanent residents
      <Link
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html#american-traveller"
        >depend on how they arrive</Link
      >.
    </dd>

    <dt class="h6">
      Citizens of <Link
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html#need-eta"
      >
        visa-exempt countries
      </Link>
    </dt>
    <dd>
      You need an
      <Link
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html"
      >
        eTA
      </Link>. Most applications are approved within minutes, although some take
      several days.
    </dd>

    <dt class="h6">All other visitors</dt>
    <dd>
      You need a <Link
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/about-visitor-visa.html"
      >
        visitor visa
      </Link>. Applications can take a long time to process, so start as soon as
      you've decided to attend.
    </dd>
  </dl>

  <h3 class="h6">Invitation letters</h3>

  <p>
    Registered attendees who need an invitation letter should email
    <Link href={resolve("/about/team#contact")}>contact@pgconf.dev</Link>.
  </p>
</section>

<section id="hotels" class="*:main">
  <hgroup>
    <p class="section-number">Hotels</p>
    <h2>Partner hotels for 2027.</h2>
  </hgroup>

  <p class="lede">
    We are negotiating rates at several downtown hotels within walking distance
    of the Plaza Centre-Ville. Partner hotels will be listed here once
    confirmed.
  </p>

  <ul class="(main grid+14 dedent" aria-label="Partner hotels">
    <li class="note border">
      <hgroup class="h5">
        <h3>Hotel to be confirmed</h3>
        <p class="mono action">Rate TBD · Deadline TBD</p>
      </hgroup>
      <p>Partner hotel details will be posted by March 2027.</p>
    </li>
    <li class="note border">
      <hgroup class="h5">
        <h3>Hotel to be confirmed</h3>
        <p class="mono action">Rate TBD · Deadline TBD</p>
      </hgroup>
      <p>Partner hotel details will be posted by March 2027.</p>
    </li>
    <li class="note border">
      <hgroup class="h5">
        <h3>Hotel to be confirmed</h3>
        <p class="mono action">Rate TBD · Deadline TBD</p>
      </hgroup>
      <p>Partner hotel details will be posted by March 2027.</p>
    </li>
  </ul>

  <div class="action-area edge">
    <h3 class="h6">Book early</h3>
    <p>
      May is peak conference season in Montréal, and downtown hotels — partner
      or not — book up quickly. We recommend confirming your accommodation as
      soon as your registration is.
    </p>
  </div>
</section>
