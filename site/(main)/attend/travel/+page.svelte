<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Travel &amp; Hotels — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Getting to PGConf.dev 2027 in Montréal — flights, train, métro, and partner hotels."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Travel &amp; hotels</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Travel</p>
    <h1>Getting to Montréal.</h1>
  </hgroup>

  <p class="lede mute text">
    Montréal is well-connected by air and rail. The Plaza Centre-Ville is in the
    heart of downtown, directly on the métro.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#air">By air</a></li>
    <li><a class="li-number" href="#train">By train</a></li>
    <li><a class="li-number" href="#visa">Entry requirements</a></li>
    <li><a class="li-number" href="#hotels">Hotels</a></li>
  </ol>
</nav>

<aside class=") note area border" aria-labelledby="yul-glance">
  <h2 id="yul-glance" class="over">YUL → Venue</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">747 bus</dt>
      <dd>YUL → Lionel-Groulx · 24/7 · CAD $11 (STM pass accepted)</dd>
    </div>

    <div class="p">
      <dt class="over">Métro</dt>
      <dd>Lionel-Groulx → Square-Victoria–OACI · Orange line · 20 min</dd>
    </div>

    <div class="p">
      <dt class="over">Taxi / rideshare</dt>
      <dd>~45 min from airport · CAD $45–55</dd>
    </div>
  </dl>
</aside>

<section id="air" class="main">
  <hgroup>
    <p class="section-number">By air</p>
    <h2>Montréal–Trudeau International Airport (YUL).</h2>
  </hgroup>

  <p class="lede">
    Montréal–Trudeau International Airport (YUL) is the main hub for Montréal,
    served by Air Canada, WestJet, Delta, United, Air France, and most major
    carriers.
  </p>

  <p>
    The best way to get from YUL to the Plaza Centre-Ville is by the
    <strong>747 Express bus</strong> to Lionel-Groulx station, then the Orange line
    to Square-Victoria–OACI — about 45 minutes total, no transfers required from the
    métro. Taxis and rideshare are readily available; typical fare is CAD $45–55.
  </p>
</section>

<section id="train" class="main">
  <hgroup>
    <p class="section-number">By train</p>
    <h2>VIA Rail and Amtrak.</h2>
  </hgroup>

  <p>
    Montréal's Gare Centrale is served by VIA Rail from Québec City, Ottawa,
    Toronto, and Halifax, and by Amtrak's <em>Adirondack</em> (New
    York–Montréal) and <em>Maple Leaf</em> connections. The station is connected underground
    to the Square-Victoria–OACI métro station (Orange line), a short walk from the
    venue.
  </p>
</section>

<section id="visa">
  <hgroup class="main">
    <p class="section-number">Entry requirements</p>
    <h2>Visas and eTAs.</h2>
  </hgroup>

  <div class="main">
    <p>Entry requirements depend on your country of citizenship:</p>

    <ul class="edge dedent">
      <li>
        <strong>U.S. citizens and permanent residents</strong> — entry is visa-free;
        a valid passport or NEXUS card is required.
      </li>
      <li>
        <strong>Citizens of visa-exempt countries</strong> — must apply for an
        <strong>Electronic Travel Authorization (eTA)</strong> before flying to Canada.
        An eTA is CAD $7 and typically approved in minutes, though processing can
        take several days in some cases.
      </li>
      <li>
        <strong>All other visitors</strong> — a temporary resident visa is required.
        Apply well in advance; processing times vary significantly.
      </li>
    </ul>

    <p>
      If you need a formal invitation letter for your visa application, you must
      first register for the conference. Registered attendees can then email
      <Link href={`${resolve("/about/team")}#contact`}>contact@pgconf.dev</Link> and
      we will provide you with a form to fill out so we can issue you an invitation
      letter.
    </p>
  </div>
</section>

<section id="hotels" class="main">
  <hgroup>
    <p class="section-number">Hotels</p>
    <h2>Partner hotels for 2027.</h2>
  </hgroup>

  <p>
    We are negotiating rates at several downtown hotels within walking distance
    of the Plaza Centre-Ville. Partner hotels will be listed here once
    confirmed. Book early — May is peak conference season in Montréal.
  </p>
</section>

<section aria-label="Partner hotels" class="(main)">
  <div class="grid+14">
    <div class="note border">
      <hgroup class="h5">
        <h3>Alt Hotel Montreal</h3>
        <p class="mono action">$239+Tax(19%) Rate valid till April 8 2027</p>
      </hgroup>
      <p>
        <a href="https://www.germainhotels.com/en/alt-hotel/montreal"
          >The Alt Hotel</a
        >
        is located at 120, rue Peel, approximately a 15 minute walk from the
        conference venue. A room with a queen bed is $239+tax(19%) , a corner
        room with a queen bed is $269+tax(19%) and a room with two queen beds is
        $259+tax(19%). You can book
        <a
          href="https://reservation.germainhotels.com/ibe/details.aspx?propertyid=17532&nights=7&checkin=05/08/2027&group=2705POSTGR&lang=en-us&adults=1&childAges="
        >
          online at this link</a
        >
      </p>
    </div>
  </div>
</section>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Book early</h3>
    <p>
      Montréal is a popular conference destination in spring. Even outside our
      partner hotels, downtown options book up quickly in May. We recommend
      confirming accommodation as soon as your registration is confirmed.
    </p>
  </div>
</section>
