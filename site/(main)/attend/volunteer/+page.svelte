<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Volunteer — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Volunteer at PGConf.dev 2027. Help run the conference and get free registration in return."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Volunteer</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Volunteer</p>
    <h1>Help run the conference.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev would not be possible without volunteers. In exchange for at
    least eight hours of shifts, you get a complimentary full-conference
    registration.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#get">What you get</a></li>
    <li><a class="li-number" href="#roles">Volunteer roles</a></li>
    <li><a class="li-number" href="#photography">Photography policy</a></li>
    <li><a class="li-number" href="#apply">Apply</a></li>
  </ol>
</nav>

<aside class=") note area border" aria-labelledby="vol-glance">
  <h2 id="vol-glance" class="over">At a Glance</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Commitment</dt>
      <dd>8 scheduled hours minimum</dd>
    </div>

    <div class="p">
      <dt class="over">In return</dt>
      <dd>Complimentary full-conference registration (CAD $480 value)</dd>
    </div>

    <div class="p">
      <dt class="over">Applications</dt>
      <dd>Open early 2027, alongside early-bird registration</dd>
    </div>
  </dl>
</aside>

<section class="main">
  <div class="insert-area edge">
    <h3 class="h6">Applications open in early 2027</h3>
    <p>
      Volunteer signup opens alongside early-bird registration. Subscribe to the
      mailing list or watch the conference Discord for the announcement.
    </p>
  </div>
</section>

<section id="get" class="main">
  <hgroup>
    <p class="section-number">What you get</p>
    <h2>Free registration for eight hours of work.</h2>
  </hgroup>

  <p class="lede">
    Volunteers who commit to at least eight scheduled hours receive a
    complimentary full-conference registration (value: CAD $480 at early-bird
    rate).
  </p>

  <p>
    Shifts are scheduled in advance. You'll know your assignments before the
    conference, and you'll have plenty of free time to attend sessions, join the
    hallway track, and participate in social events.
  </p>
</section>

<section id="roles">
  <hgroup class="main">
    <p class="section-number">Volunteer roles</p>
    <h2>What volunteers do.</h2>
  </hgroup>

  <div class="grid+16 (main)">
    <div class="note border">
      <hgroup class="h4">
        <h3>Registration desk</h3>
        <p class="mono action">3–4 hr shifts · All days</p>
      </hgroup>
      <p>
        Check in attendees using the QR code system. Distribute badges,
        lanyards, and t-shirts. Answer questions about venue layout, food,
        Wi-Fi, and social events. First point of contact for attendees.
      </p>
    </div>

    <div class="note border">
      <hgroup class="h4">
        <h3>Room host (speaker intro)</h3>
        <p class="mono action">Half-day blocks · Talk days</p>
      </hgroup>
      <p>
        Introduce each speaker, manage timing using the visual cue cards, and
        facilitate Q&amp;A. Two volunteers per room; this role handles
        speaker-facing duties.
      </p>
    </div>

    <div class="note border">
      <hgroup class="h4">
        <h3>Room host (operations)</h3>
        <p class="mono action">Half-day blocks · Talk days</p>
      </hgroup>
      <p>
        Manage room seating, keep doors appropriately open or closed, count
        attendance, and report to the Discord coordination channel. Works
        alongside the speaker-intro host.
      </p>
    </div>

    <div class="note border">
      <hgroup class="h4">
        <h3>A/V support</h3>
        <p class="mono action">Full day · As needed</p>
      </hgroup>
      <p>
        Assist speakers with microphone setup, slide display, and recording
        equipment. Coordinate with the A/V vendor for technical issues. Some
        prior A/V experience helpful but not required.
      </p>
    </div>
  </div>
</section>

<section id="photography">
  <hgroup class="main">
    <p class="section-number">Photography policy</p>
    <h2>The red lanyard rule.</h2>
  </hgroup>

  <aside class=") note">
    <h3 class="over">Red lanyard</h3>
    <p>
      A red lanyard means "do not photograph." When in doubt, don't take the
      shot.
    </p>
  </aside>

  <div class="main">
    <p>
      Attendees who do not wish to be photographed wear a
      <strong>red lanyard</strong>. Volunteers taking photos must not photograph
      anyone wearing a red lanyard — this applies to all photography, including
      candid shots and group photos.
    </p>

    <p>
      If you are unsure whether someone consents to being photographed, don't
      photograph them.
    </p>
  </div>
</section>

<section id="apply" class="main">
  <hgroup>
    <p class="section-number">Apply</p>
    <h2>How to sign up.</h2>
  </hgroup>

  <p>
    Applications open in early 2027 alongside registration. You'll be asked for
    your availability by day and shift, any relevant experience, and your
    preferred roles. Volunteer coordinators will confirm assignments at least
    two weeks before the conference.
  </p>

  <p>
    Questions? Email <Link href={`${resolve("/about/team")}#contact`}
      >info@pgconf.dev</Link
    >.
  </p>

  <p class="section">
    <a
      href="#"
      class="button circle stroke"
      style:color="var(--delete-fg)"
      style:border="1px solid var(--delete-fg)"
    >
      Volunteer application — opens early 2027
    </a>
  </p>
</section>
