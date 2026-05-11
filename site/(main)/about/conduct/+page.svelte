<script>
  import { getContext } from "$lib/layout";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Code of Conduct — PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 Code of Conduct — our commitment to a safe, inclusive conference for everyone."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Code of conduct</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">About</p>
    <h1>Code of Conduct.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev is dedicated to providing a harassment-free conference experience
    for everyone, regardless of gender, sexual orientation, disability, physical
    appearance, body size, race, or religion.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#commitment">Our commitment</a></li>
    <li><a class="li-number" href="#photography">Photography</a></li>
    <li>
      <a class="li-number" href="#exhibitors">Exhibitors &amp; sponsors</a>
    </li>
    <li><a class="li-number" href="#reporting">Reporting</a></li>
    <li><a class="li-number" href="#consequences">Consequences</a></li>
  </ol>
</nav>

<aside class=") note area border" aria-labelledby="report-glance">
  <h2 id="report-glance" class="over">Report an Incident</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">CoC committee</dt>
      <dd class="mono">
        <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a>
      </dd>
      <dd>Confidential — seen only by the CoC committee.</dd>
    </div>

    <div class="p">
      <dt class="over">On-site staff</dt>
      <dd>Identify any staff member at the registration desk.</dd>
      <dd>Staff badge · blue lanyard</dd>
    </div>
  </dl>
</aside>

<section id="commitment" class="main">
  <hgroup>
    <p class="section-number">Our commitment</p>
    <h2>A harassment-free experience.</h2>
  </hgroup>

  <p class="lede">
    We do not tolerate harassment of conference participants in any form.
    Conference participants violating these rules may be sanctioned or expelled
    from the conference at the discretion of the conference organizers.
  </p>

  <p>
    Harassment includes offensive verbal comments related to gender, sexual
    orientation, disability, physical appearance, body size, race, religion,
    sexual images in public spaces, deliberate intimidation, stalking,
    following, harassing photography or recording, sustained disruption of talks
    or other events, inappropriate physical contact, and unwelcome sexual
    attention.
  </p>

  <p>
    Participants asked to stop any harassing behavior are expected to comply
    immediately.
  </p>
</section>

<section id="photography" class="main">
  <hgroup>
    <p class="section-number">Photography</p>
    <h2>The red lanyard rule.</h2>
  </hgroup>

  <p>
    Attendees who do not wish to be photographed should wear a
    <strong>red lanyard</strong>, which will be available at the registration
    desk. Photographers — volunteers, press, and attendees alike — must not
    photograph anyone wearing a red lanyard.
  </p>

  <p>
    If you are uncertain whether someone consents to being photographed, do not
    photograph them.
  </p>
</section>

<section id="exhibitors" class="main">
  <hgroup>
    <p class="section-number">Exhibitors and sponsors</p>
    <h2>The policy applies to booths, too.</h2>
  </hgroup>

  <p>
    Exhibitors in the sponsor hall and similar spaces are also subject to this
    policy. In particular, exhibitors should not use sexualized images,
    activities, or other material. Booth staff should not use sexualized
    clothing, uniforms, or costumes.
  </p>
</section>

<section id="reporting" class="main">
  <hgroup>
    <p class="section-number">Reporting</p>
    <h2>How to report.</h2>
  </hgroup>

  <p>
    If you are being harassed, notice that someone else is being harassed, or
    have any other concerns, please contact a member of conference staff
    immediately. Conference staff can be identified by their staff badge.
  </p>

  <p>
    You may also report incidents confidentially to the Code of Conduct
    committee at the address below. Reports to this address are seen only by the
    CoC committee — not by the general organizing committee.
  </p>
</section>

<section aria-label="Reporting channels" class="(main)">
  <div class="grid+16">
    <div class="note area border">
      <hgroup class="h4">
        <h3>Code of Conduct committee</h3>
        <p>Confidential. Monitored by the CoC committee only.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a>
      </p>
    </div>

    <div class="note area border">
      <hgroup class="h4">
        <h3>On-site staff</h3>
        <p>Identify any staff member at the registration desk or venue.</p>
      </hgroup>
      <p class="mono">Staff badge · blue lanyard</p>
    </div>
  </div>
</section>

<section id="consequences" class="main">
  <hgroup>
    <p class="section-number">Consequences</p>
    <h2>What happens next.</h2>
  </hgroup>

  <p>
    If a participant engages in harassing behavior, the conference organizers
    may take any action they deem appropriate, including warning the offender or
    expulsion from the conference with no refund.
  </p>

  <p>
    We expect participants to follow these rules at all conference venues and
    conference-related social events.
  </p>

  <div class="notice-area edge section">
    <h3 class="h6">Enforcement</h3>
    <p>
      The CoC committee is independent of the organizing committee. Reports are
      handled confidentially. The committee will acknowledge receipt of every
      report within 24 hours.
    </p>
  </div>
</section>
