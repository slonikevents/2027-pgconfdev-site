<script>
  import { getContext } from "$lib/layout";

  // import Rule from "$lib/Rule.svelte";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Code of Conduct — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The PGConf.dev 2027 Code of Conduct, how to report an incident, and how to reach the Code of Conduct committee."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Code of Conduct</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">About</p>
    <h1>Code of Conduct.</h1>
  </hgroup>

  <p class="lede mute text">
    Everyone at PGConf.dev is entitled to a conference free of harassment.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#commitment">Our commitment</a></li>
    <li><a class="li-number" href="#harassment">Harassment</a></li>
    <li><a class="li-number" href="#consequences">Consequences</a></li>
    <li><a class="li-number" href="#reporting">Reporting</a></li>
    <li><a class="li-number" href="#support">Support</a></li>
    <li><a class="li-number" href="#scope">Where this applies</a></li>
    <!-- <li><a class="li-number" href="#committee">The committee</a></li> -->
  </ol>
</nav>

<!--
  The clauses of the code of conduct are reproduced verbatim, in their original
  order. Only capitalisation and -our/-or spelling have been normalised. Do not
  reword, reorder, or split a clause across a heading; additional commentary
  belongs in its own block, outside the clause text.
-->

<!--
  Add back in when we actually have a COC committee + email that can be
  reported to
<aside id="report" class="main action-area edge" aria-labelledby="report-title">
  <h2 id="report-title" class="h6">Report an incident</h2>
  <p>
    Email <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a> to reach the
    Code of Conduct committee directly, or speak to any member of conference staff
    during the event.
  </p>
</aside>
-->

<section id="commitment" class="main">
  <hgroup>
    <p class="section-number">Our commitment</p>
    <h2>A harassment-free experience.</h2>
  </hgroup>

  <p class="lede">
    PGConf.dev is dedicated to providing a harassment-free conference experience
    for everyone. We do not tolerate harassment of conference participants in
    any form. Sexual language and imagery is not appropriate for any conference
    venue, including talks.
  </p>

  <p>
    Conference participants violating this policy may be sanctioned or expelled
    from the conference without a refund at the discretion of the Code of
    Conduct committee.
  </p>
</section>

<section id="harassment" class="main">
  <hgroup>
    <p class="section-number">Harassment</p>
    <h2>What harassment includes.</h2>
  </hgroup>

  <p>
    Harassment includes offensive verbal comments related to gender, sexual
    orientation, disability, physical appearance, race, religion, sexual images
    in public spaces, deliberate intimidation, stalking, following, harassing,
    photography or recording, sustained disruption of talks or other events,
    inappropriate physical contact, and unwelcome sexual attention. Participants
    asked to stop any harassing behaviour are expected to comply immediately.
    Failure to comply will result in sanctions and/or ejection from the
    conference without a refund.
  </p>

  <!--
    Add back in when we actually have a COC committee + email that can be
    reported to
  <div class="notice-area edge section">
    <h3 class="h6">Not sure it qualifies?</h3>
    <p>
      Report it anyway. If you're unsure, that's reason enough. A report that
      turns out to be nothing costs nothing.
    </p>
  </div>
  -->
</section>

<section id="consequences" class="main">
  <hgroup>
    <p class="section-number">Consequences</p>
    <h2>What happens next.</h2>
  </hgroup>

  <p>
    If a participant engages in harassing behaviour, the conference organizers
    will work with the Code of Conduct committee to decide what action to take,
    including but not limited to: warning the offender, expulsion from the
    conference with no refund, and/or referral to appropriate authorities.
  </p>
</section>

<section id="reporting" class="main">
  <hgroup>
    <p class="section-number">Reporting</p>
    <h2>How to report.</h2>
  </hgroup>

  <p>
    If you are being harassed, notice that someone else is being harassed, or
    have any other concerns, please contact a member of the conference staff,
    including anyone on the conference committee, or the Code of Conduct
    committee, immediately.
  </p>
</section>

<section id="support" class="main">
  <hgroup>
    <p class="section-number">Support</p>
    <h2>What conference staff can do.</h2>
  </hgroup>

  <p>
    Conference staff will be happy to help participants contact venue security
    or local law enforcement, provide escorts, or otherwise assist those
    experiencing harassment to feel safe for the duration of the conference. We
    value your attendance. Decisions regarding appropriate assistance will be at
    the sole discretion of the conference committee.
  </p>

  <!--
    Add back in when we actually have a COC committee + email that can be
    reported to
  <div class="delete-area edge section">
    <h3 class="h6">In an emergency</h3>
    <p>
      If someone is in immediate danger, call 911 first, then notify conference
      staff. Emergency services take precedence over any conference process.
    </p>
  </div>
  -->
</section>

<section id="scope" class="main">
  <hgroup>
    <p class="section-number">Where this applies</p>
    <h2>At the venue and after hours.</h2>
  </hgroup>

  <p>
    All participants are expected to adhere to this policy at all conference
    venues and conference-related social events.
  </p>
</section>

<!-- Add back in when we have an established COC committee
<section id="committee">
  <hgroup class="main">
    <p class="section-number">The committee</p>
    <h2>Who handles reports.</h2>
  </hgroup>

  <p class="main">
    The Code of Conduct committee operates independently of the organizing
    committee, so a concern about an organizer or committee member can still be
    reported and handled without conflict of interest.
  </p>

  <Rule class="(main)">Members</Rule>

  <div class="grid+12 (main) p">
    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Committee member</p>
          <h3>Committee member name</h3>
        </hgroup>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Committee member</p>
          <h3>Committee member name</h3>
        </hgroup>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup class="h5">
          <p>Committee member</p>
          <h3>Committee member name</h3>
        </hgroup>
      </figcaption>
    </figure>
  </div>

  <p class="main">
    You can reach the Code of Conduct committee through email at
    <a href="mailto:coc2027@pgconf.dev">coc2027@pgconf.dev</a>. Reports sent to
    this address are seen only by the Code of Conduct committee, not the general
    organizing committee.
  </p>
</section>
-->
