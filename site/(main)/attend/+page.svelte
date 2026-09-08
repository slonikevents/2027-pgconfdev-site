<script>
  import {
    Car,
    DoorOpen,
    Projector,
    Salad,
    Shirt,
    TrainFront,
    Utensils,
    Wifi,
  } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();

  const facadeSource =
    "https://commons.wikimedia.org/wiki/File:Evo_Square_Victoria_02.JPG";
  const concourse =
    "https://plazacentreville.com/assets/img/Corporatif/venue-plaza-photos__venue-plaza-photos__b__024.webp";
  const embeddedMap =
    "https://www.openstreetmap.org/export/embed.html?bbox=-73.56381744146348%2C45.49910356368318%2C-73.56139272451402%2C45.50043083868488&amp;layer=mapnik&amp;marker=45.49976720509503%2C-73.56260508298874";
  const largerMap =
    "https://www.openstreetmap.org/?mlat=45.499767&amp;mlon=-73.562605#map=19/45.499767/-73.562605";
</script>

<style>
  li.iconic {
    align-items: start;

    > :global(.icon) {
      margin-block-start: calc((1lh - 1em) / 2);
    }
  }

  iframe,
  img {
    display: block;
    height: auto;
    width: 100%;
  }

  .photo {
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
</style>

<svelte:head>
  <title>Attend — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Venue, travel, and everything you need to attend PGConf.dev 2027 in Montréal."
  />
</svelte:head>

<BreadcrumbNav />

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Montréal 2027</p>
    <h1>Where We Meet.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev 2027 will be held from May 11<sup>th</sup> to 14<sup>th</sup> at the
    Plaza Centre-Ville in Montréal.
  </p>
</header>

<hr class="section" />

<SectionNav />

<section class="main ) note">
  <h2 class="over">Address</h2>

  <p>
    Inside the EVO Building<br />
    777 Blvd Robert-Bourassa<br />
    Montréal, QC H3C 3Z7
  </p>
</section>

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#venue">Venue</a></li>
    <li><a class="li-number" href="#location">Location &amp; map</a></li>
    <li><a class="li-number" href="#arriving">Getting to the door</a></li>
    <li><a class="li-number" href="#on-site">On site</a></li>
    <li><a class="li-number" href="#accessibility">Accessibility</a></li>
  </ol>
</nav>

<aside class="( main ) note p">
  <h2 class="over">Finding the venue</h2>

  <p>
    The building is signed EVO, not Plaza Centre-Ville. Once you're inside, head
    downstairs to the conference level.
  </p>

  <figure>
    <enhanced:img
      alt="The EVO building, seen from the street"
      loading="lazy"
      sizes="(width >= 48rem) 16rem, min(42rem, 100vw)"
      src="./facade.jpeg?w=2016;1344;672;512;256"
      style:aspect-ratio="16 / 9"
      style:object-fit="cover"
      style:object-position="center 85%"
    />

    <figcaption class="size--">
      <Link href={facadeSource}>Jeangagnon</Link>, cropped,
      <Link href="https://creativecommons.org/licenses/by-sa/3.0/">
        CC BY-SA 3.0
      </Link>.
    </figcaption>
  </figure>
</aside>

<section id="venue" class="*:main">
  <hgroup>
    <p class="section-number">Venue</p>
    <h2>Plaza Centre-Ville.</h2>
  </hgroup>

  <p class="lede">
    The Plaza Centre-Ville is an event venue inside the EVO building in
    Montréal's Quartier international, within a few minutes&rsquo; walk of the
    métro, Gare Centrale, and the downtown core.
  </p>

  <figure>
    <img
      class="photo"
      src={concourse}
      alt="The concourse at the Plaza Centre-Ville: a bar to the left, buffet
      and standing tables in the middle, armchairs and the doors to the Régence
      rooms to the right"
      loading="lazy"
      width="1600"
      height="1067"
    />

    <figcaption>
      <p>
        Fig. 01 — The concourse, looking towards the Régence rooms. Photo
        courtesy of the
        <Link href="https://plazacentreville.com/en/">Plaza Centre-Ville</Link>.
      </p>
    </figcaption>
  </figure>

  <p>
    The conference is organized around a central concourse, where the hallway
    track happens, ringed by the rooms used for talks, discussions, and panels.
  </p>
</section>

<section id="location" class="main">
  <hgroup>
    <p class="section-number">Location &amp; map</p>
    <h2>Quartier international.</h2>
  </hgroup>

  <p>
    The venue sits between Old Montréal and the downtown core. Gare Centrale is
    about five minutes away on foot. The Palais des congrès and Notre-Dame
    Basilica are about ten. So is Sainte-Catherine, with its restaurants and
    bars, to the north.
  </p>

  <figure>
    <iframe
      title="Map of the Plaza Centre-Ville, 777 Boulevard Robert-Bourassa, Montréal"
      loading="lazy"
      src={embeddedMap}
      style:aspect-ratio="16 / 10"
    ></iframe>

    <figcaption>
      Fig. 02 — Plaza Centre-Ville, 777 Blvd Robert-Bourassa, Montréal, QC H3C
      3Z7.&ensp;<Link href={largerMap}>View a larger map</Link>.
    </figcaption>
  </figure>
</section>

<aside class=") note">
  <h2 class="over">Air &amp; rail</h2>

  <p>
    See <Link href={resolve("/attend/travel")}>Travel &amp; Hotels</Link> for flights,
    trains, and the airport bus.
  </p>
</aside>

<aside class=") note">
  <h2 class="over">Underground city</h2>

  <p>
    Square-Victoria–OACI is an entrance to the
    <Link href="https://en.wikipedia.org/wiki/Underground_City,_Montreal">
      RÉSO underground city
    </Link>, the network of pedestrian tunnels that links downtown métro
    stations, malls, hotels, and Gare Centrale without going outside.
  </p>
</aside>

<section id="arriving" class="main">
  <hgroup>
    <p class="section-number">Getting to the door</p>
    <h2>Three minutes from the métro.</h2>
  </hgroup>

  <dl class="dedent">
    <div class="p">
      <dt class="iconic over">
        <TrainFront class="mute" /> Métro
      </dt>
      <dd>
        Take the Orange line to Square-Victoria–OACI. The venue entrance is
        about a three-minute walk south.
      </dd>
    </div>

    <div class="p">
      <dt class="iconic over">
        <Car class="mute" /> Car
      </dt>
      <dd>
        Paid underground parking in the EVO garage, entrance at 800 Rue Gauvin.
        Spaces are first come, first served.
      </dd>
    </div>

    <div class="p">
      <dt class="iconic over">
        <DoorOpen class="mute" /> Entrance
      </dt>
      <dd>
        On Boulevard Robert-Bourassa, between Rue Saint-Antoine Ouest and Rue
        Saint-Jacques.
      </dd>
    </div>
  </dl>
</section>

<section id="on-site" class="main">
  <hgroup>
    <p class="section-number">On site</p>
    <h2>What the venue provides.</h2>
  </hgroup>

  <ul class="dedent">
    <li class="iconic p">
      <Wifi class="mute" />
      Wi-Fi is available throughout the venue.
    </li>
    <li class="iconic p">
      <Projector class="mute" />
      Every session room has a screen, a projector, and microphones.
    </li>
    <li class="iconic p">
      <Utensils class="mute" />
      Breakfast, snacks, and lunch are catered on site every day.
    </li>
    <li class="iconic p">
      <Salad class="mute" />
      The venue kitchen accommodates dietary requirements. Please tell us about yours
      when you register.
    </li>
    <li class="iconic p">
      <Shirt class="mute" />
      Coat check is self-service, on the conference level.
    </li>
  </ul>
</section>

<aside class="main action-area edge">
  <h3 class="h6">Rooms &amp; floor plans</h3>

  <p>
    We are still working out which rooms we are taking and how the tracks are
    laid out. Room assignments and floor plans will be published here once the
    schedule is set, well before the conference.
  </p>
</aside>

<section id="accessibility" class="main">
  <hgroup>
    <p class="section-number">Accessibility</p>
    <h2>Entrances and elevators.</h2>
  </hgroup>

  <p>
    The venue has a wheelchair-accessible entrance and accessible parking, and
    everything on the schedule will be on a single level.
  </p>

  <p>
    Square-Victoria–OACI has escalators but no elevators. The two adjacent
    Orange line stations are both
    <Link
      href="https://www.stm.info/en/info/universal-accessibility/elevator-access-metro"
    >
      served by elevators
    </Link>: Bonaventure is a five-minute walk from the venue, Place-d'Armes
    about ten.
  </p>

  <p>
    If you have specific accessibility requirements, contact us in advance at
    <Link href={`${resolve("/about/team")}#contact`}>contact@pgconf.dev</Link> so
    we can make arrangements.
  </p>
</section>
