<script>
  import {
    BookOpen,
    BriefcaseBusiness,
    CalendarClock,
    CalendarDays,
    FileImage,
    Lightbulb,
    LockKeyhole,
    MessageCircle,
    MessagesSquare,
    Presentation,
    UsersRound,
  } from "@lucide/svelte";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav } = getContext();
</script>

<style>
  section.area {
    margin-block: 0;
    padding-block: var(--margin);
    padding-inline: 0;
  }
</style>

<svelte:head>
  <title>Call for Proposals — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Propose a presentation, community discussion, workshop, panel, poster, or another idea for PGConf.dev 2027 in Montréal."
  />
</svelte:head>

<BreadcrumbNav />

<header class="(main)">
  <hgroup>
    <p class="action">Call for Proposals · PGConf.dev 2027</p>
    <h1>Submit content to PGConf.dev 2027.</h1>
  </hgroup>

  <p class="lede mute text">
    If you do something that makes PostgreSQL great, or would like to start, we
    want your ideas. Share your work, teach a skill, or bring people together.
  </p>

  <p class="flex">
    <button class="circle" disabled>Submit a proposal</button>
    <button class="circle stroke" disabled>Manage your submissions</button>
  </p>
</header>

<section class="band" aria-label="Formats">
  <dl class="(main) grid/2@30- grid/3@48- dedent" style:gap="var(--margin)">
    <div class="p">
      <dt class="h6 iconic">
        <Presentation /> <a href="#presentations">Presentations</a>
      </dt>
      <dd class="deck">
        Share knowledge, experience, research, or a new idea in a structured 25-
        or 50-minute talk.
      </dd>
    </div>

    <div class="p">
      <dt class="h6 iconic">
        <UsersRound />
        <a href="#community-discussions">Community discussions</a>
      </dt>
      <dd class="deck">
        Work through systemic community and technical challenges together.
      </dd>
    </div>

    <div class="p">
      <dt class="h6 iconic">
        <BookOpen /> <a href="#workshops">Workshops</a>
      </dt>
      <dd class="deck">
        Teach a practical skill or lead a collaborative working session.
      </dd>
    </div>

    <div class="p">
      <dt class="h6 iconic">
        <MessagesSquare /> <a href="#panels">Panels</a>
      </dt>
      <dd class="deck">
        Bring experienced voices together around an important community topic.
      </dd>
    </div>

    <div class="p">
      <dt class="h6 iconic">
        <FileImage /> <a href="#posters">Posters</a>
      </dt>
      <dd class="deck">
        Present work visually and find co-authors, reviewers, or collaborators.
      </dd>
    </div>

    <div class="p">
      <dt class="h6 iconic">
        <Lightbulb /> <a href="#other">Other ideas</a>
      </dt>
      <dd class="deck">
        Propose office hours, a group activity, or a format we have not tried.
      </dd>
    </div>
  </dl>
</section>

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#why-submit">Why submit</a></li>
    <li><a class="li-number" href="#timeline">Timeline</a></li>
    <li><a class="li-number" href="#presentations">Content types</a></li>
    <li><a class="li-number" href="#rules">Rules &amp; tips</a></li>
  </ol>
</nav>

<section class="( main section">
  <h2 class="h5 iconic">
    <CalendarDays /> Important dates
  </h2>

  <dl class="grid+8 dedent">
    <div class="p">
      <dt class="over">Main CFP closes</dt>
      <dd><time datetime="2027-01-10T23:59-05:00">January 10, 2027</time></dd>
      <dd><small>11:59 PM Montréal time</small></dd>
    </div>

    <div class="p">
      <dt class="over">CFP responses sent</dt>
      <dd>
        <time class="delete" datetime="2027-02-01">February 1, 2027</time>
      </dd>
    </div>

    <div class="p">
      <dt class="over">Discussion round 2 closes</dt>
      <dd><time class="delete" datetime="2027-04-13">April 13, 2027</time></dd>
    </div>

    <div class="p">
      <dt class="over">Round 2 responses sent</dt>
      <dd><time class="delete" datetime="2027-04-27">April 27, 2027</time></dd>
    </div>
  </dl>
</section>

<section id="why-submit" class="main">
  <hgroup>
    <p class="section-number">Why submit</p>
    <h2>Show us what you’re working on.</h2>
  </hgroup>

  <p class="lede">
    The program comes from work happening across PostgreSQL: patches and
    extensions, production lessons, research, education, community organizing,
    and ideas still taking shape.
  </p>

  <p>
    You do not need a finished success story. Share what you learned, ask for
    feedback, teach something useful, or gather the people needed to move an
    idea forward.
  </p>
</section>

<section id="timeline" class="main">
  <hgroup>
    <p class="section-number">Timeline</p>
    <h2>How the timeline works</h2>
  </hgroup>

  <p>
    The main CFP covers presentations, workshops, panels, and other ideas. The
    program committee reviews those proposals together and sends responses after
    the main round closes.
  </p>

  <p>
    Community discussions can also be submitted in a second round for
    late-breaking topics. Proposals not selected in the first round roll over
    automatically. Posters follow their own interest and final-PDF deadlines,
    listed with the poster details below.
  </p>
</section>

<section id="presentations" class="*:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <Presentation class="action" /> Presentations
    </h3>
    <p><a href="#">Submit a presentation</a></p>
  </hgroup>

  <p class="lede">
    Presentations are structured sessions where community members share
    knowledge, experiences, or new ideas with the PostgreSQL community.
  </p>

  <aside class="main ) note">
    <h4 class="over iconic"><CalendarClock /> Submission deadline</h4>
    <p><time datetime="2027-01-10T23:59-05:00">January 10, 2027</time></p>
  </aside>

  <p class="edge delete-area">
    Propose a presentation as either a 25- or 50-minute talk. Do not submit the
    same proposal to both tracks.
  </p>

  <dl class="main grid+8 dedent section">
    <div class="action-acme">
      <dt class="h5">25-minute talk</dt>
      <dd>
        A short overview of a contribution, proof of concept, investigation, or
        concise set of insights.
      </dd>
    </div>
    <div class="acme">
      <dt class="h5">50-minute talk</dt>
      <dd>
        A deeper exploration, narrative, or educational session with a clear
        story arc for research, lessons learned, or systemic analysis.
      </dd>
    </div>
  </dl>

  <aside class="main ( note">
    <h4 class="over">Complementary Registration</h4>

    <p>
      Accepted talks confer at most two complimentary registrations.
      Twenty-five-minute talks with multiple speakers are unlikely to be
      accepted.
    </p>
  </aside>

  <p>Presentations are meant to:</p>
  <ul>
    <li>Showcase technical contributions and research.</li>
    <li>Share lessons learned from successes and failures.</li>
    <li>Highlight community initiatives and needs.</li>
    <li>Surface new perspectives or practical techniques.</li>
  </ul>

  <h4>What could you present?</h4>

  <p>
    Failed projects, proof-of-concept features, performance work, database
    research, architectural problems, community concerns, how-tos, missing
    features, and user needs.
  </p>
</section>

<section id="community-discussions" class="area *:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <UsersRound /> <span>Community discussions</span>
    </h3>
    <p><a href="#">Lead a community discussion</a></p>
  </hgroup>

  <p class="lede">
    Community Discussion Sessions are interactive meetings where you can work
    through issues related to Postgres, its ecosystem, and its community.
  </p>

  <aside class="main ) note">
    <h4 class="over iconic"><CalendarClock /> Discussion rounds</h4>
    <dl class="dedent">
      <div class="p">
        <dt class="over">Round 1</dt>
        <dd><time datetime="2027-01-10T23:59-05:00">January 10, 2027</time></dd>
      </div>
      <div class="p">
        <dt class="over">Round 2</dt>
        <dd>
          <time class="delete" datetime="2027-04-13">April 13, 2027</time>
        </dd>
      </div>
      <div class="p">
        <dt class="over">Round 2 responses</dt>
        <dd>
          <time class="delete" datetime="2027-04-27">April 27, 2027</time>
        </dd>
      </div>
    </dl>
  </aside>

  <p>
    These sessions build on the Developer Meeting, Community Summit, and
    Extension Ecosystem Summit formats. Do not feel limited to subjects that
    have appeared there before. We want new ideas that expand the conversation.
  </p>

  <p>
    <strong>TODO</strong> Explain that there are three formats and why there are three
    formats.
  </p>

  <dl class="(main) grid/3@48- dedent section">
    <div class="insert-area edge margin-gap">
      <dt class="h6 iconic">
        <MessageCircle /> Open discussion
      </dt>

      <dd class="deck">
        <p>Every seat is open to anyone, subject only to room capacity.</p>
      </dd>

      <dd><em>Example: The future of pg_stat_statements</em></dd>
    </div>

    <div class="action-area edge margin-gap">
      <dt class="h6 iconic">
        <BriefcaseBusiness /> Working group
      </dt>
      <dd class="deck">
        <p>A small number of seats are reserved for invited participants.</p>

        <p>
          The rest are open, with seating arranged to maximize collaboration
          among the invited attendees.
        </p>
      </dd>
      <dd>
        <em>Example: Can the community support additional batch executors?</em>
      </dd>
    </div>

    <div class="notice-area edge margin-gap">
      <dt class="h6 iconic">
        <LockKeyhole /> Closed session
      </dt>
      <dd class="deck">
        An invite-only, focused, productive, and private discussion among people
        already involved in the topic.
      </dd>
      <dd><em>Example: The security committee discussing a recent CVE</em></dd>
    </div>
  </dl>

  <aside class="main ( note">
    <h4 class="over">Complementary Registration</h4>

    <p>
      Community Discussion Sessions do not confer complimentary registration.
    </p>
  </aside>

  <p>
    Please list every invited participant in the proposal and
    <strong>secure their consent</strong>
    before submitting. Organizers will try to avoid conflicts between sessions with
    overlapping key attendees.
  </p>

  <div class="edge">
    <h4 class="h6">Submission notes</h4>
    <ul>
      <li>
        Proposals not accepted in the first round automatically roll over to the
        second, so submitting early improves your chances.
      </li>
      <li>Community Discussion Sessions will not be recorded.</li>
    </ul>
  </div>
</section>

<section id="workshops" class="*:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic"><BookOpen /> Workshops</h3>
    <p><a href="#">Teach a workshop</a></p>
  </hgroup>

  <p class="lede">
    Have an idea for educating current and future Postgres hackers and extension
    developers? Propose a hands-on practical training or collaborative workshop.
  </p>

  <aside class="main ) note">
    <h4 class="over iconic"><CalendarClock /> Submission deadline</h4>
    <p><time datetime="2027-01-10T23:59-05:00">January 10, 2027</time></p>
  </aside>

  <div class="note p">
    <h4 class="over">A previous example</h4>
    <p>
      <Link href="https://2026.pgconf.dev/session/553">
        How to read and write the SQL standard
      </Link>
    </p>
  </div>

  <p class="deck">
    Accepted workshops confer at most two complimentary registrations.
  </p>
</section>

<section id="panels" class="area *:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic"><MessagesSquare class="action" /> Panels</h3>
    <p><a href="#">Convene a panel</a></p>
  </hgroup>

  <p class="lede">
    Bring together experts to weigh in on an important community topic, from
    deciding how to move part of the project forward to sharing lessons about
    community organizing and growing new leaders.
  </p>

  <aside class="main ) note">
    <h4 class="over iconic"><CalendarClock /> Submission deadline</h4>
    <p><time datetime="2027-01-10T23:59-05:00">January 10, 2027</time></p>
  </aside>

  <p>
    List proposed panelists. The list need not be final, but confirm that
    everyone named is open to participating.
  </p>

  <aside class="note p">
    <h4 class="over">An example</h4>

    <p>
      <Link href="https://2026.pgconf.dev/session/558">
        Beyond the Source: The Human Architecture of PostgreSQL
      </Link>
    </p>
  </aside>

  <p class="deck">
    Accepted talks confer at most two complimentary registrations.
    Twenty-five-minute talks with multiple speakers are unlikely to be accepted.
  </p>
</section>

<section id="posters" class="*:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <FileImage class="action" /> Posters
    </h3>
    <p><a href="#">Share a poster</a></p>
  </hgroup>

  <p class="lede">
    Present your work visually and use it to attract co-authors, reviewers, and
    collaborators, or simply to improve discussion around a patch, extension,
    tool, or community initiative.
  </p>

  <aside class="main ) note">
    <h4 class="over iconic"><CalendarClock /> Poster deadlines</h4>
    <dl class="dedent">
      <div class="p">
        <dt class="over">Interest</dt>
        <dd>
          <time class="delete" datetime="2027-03-15">March 15, 2027</time>
        </dd>
      </div>
      <div class="p">
        <dt class="over">Final PDF</dt>
        <dd>
          <time class="delete" datetime="2027-04-19">April 19, 2027</time>
        </dd>
      </div>
    </dl>
  </aside>

  <aside class="main ) note">
    <h4 class="over">The board</h4>
    <p><strong>A1 size</strong><br />594 × 841 mm</p>
    <p>Capacity is limited to 20–30 posters.</p>
  </aside>

  <p>
    Posters will be displayed during dedicated coffee and poster-session breaks.
    On-site presenters receive priority locations, but remote authors are
    welcome: we can print and display a poster and, in some cases, mail it back.
  </p>

  <p>
    Core patches, bug fixes, extensions, tools, research, and community
    initiatives such as CI, testing, and diversity are all in scope. Commercial
    products are acceptable when they offer substantive technical content.
    Disclose closed-source work. Submissions that read as advertisements are
    unlikely to be accepted.
  </p>

  <h4 class="h6">Your poster should include</h4>
  <ul>
    <li>A visual representation of the patch or project.</li>
    <li>The PGConf.dev 2027 conference logo.</li>
    <li>What attention or collaboration the project needs.</li>
    <li>
      Contact details, such as a QR code to the project or an email address.
    </li>
  </ul>

  <div class="edge p">
    <h4 class="h6">Submission notes</h4>
    <p>
      Include your name, topic, and whether you expect to attend in person when
      expressing interest.
    </p>
  </div>

  <p class="deck">Accepted posters do not confer complimentary registration.</p>
</section>

<section id="other" class="area *:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <Lightbulb class="action" /> Other ideas
    </h3>
    <p><a href="#">Pitch another idea</a></p>
  </hgroup>

  <p class="lede">
    From Community Office Hours to a group run, propose an idea that enriches
    the conference and connects its community.
  </p>

  <aside class="main ) note">
    <h4 class="over iconic"><CalendarClock /> Submission deadline</h4>
    <p><time datetime="2027-01-10T23:59-05:00">January 10, 2027</time></p>
  </aside>

  <p>
    Do not feel limited to previous formats or subjects. We want ideas that
    expand the conversation and improve the experience.
  </p>
</section>

<section id="rules" class="main">
  <hgroup>
    <p class="section-number">Rules &amp; tips</p>
    <h2>Increase your chances of acceptance.</h2>
  </hgroup>

  <ul>
    <li>Disclose any part of a session that concerns closed-source code.</li>
    <li>
      Talks about a company's product are unlikely to be accepted unless they
      focus on how PostgreSQL could change to make the product easier to extend
      and support.
    </li>
    <li>
      Explain in your bio what uniquely positions you to deliver the proposed
      content.
    </li>
    <li>
      Community Discussion Sessions and panels should include people from
      multiple companies.
    </li>
    <li>
      Browse the
      <a href="https://www.pgevents.ca/events/pgconfdev2026/schedule/">
        PGConf.dev 2026 schedule
      </a>
      to see what was accepted last year and find more inspiration.
    </li>
  </ul>
</section>

<section class="main action-area edge">
  <hgroup class="h3">
    <p class="over">Questions about the CFP?</p>
    <h2>Talk to the program team.</h2>
  </hgroup>

  <p>
    Email <a href="mailto:program@pgconf.dev">program@pgconf.dev</a> with questions
    about formats, fit, or the submission process.
  </p>
</section>
