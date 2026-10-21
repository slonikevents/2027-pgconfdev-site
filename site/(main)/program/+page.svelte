<script>
  import {
    BookOpen,
    BriefcaseBusiness,
    CalendarClock,
    CalendarDays,
    FileImage,
    Lightbulb,
    LockKeyhole,
    MessagesSquare,
    Presentation,
    UsersRound,
  } from "@lucide/svelte";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav } = getContext();
</script>

<style>
  .iconic {
    align-items: baseline;
  }

  /* Center the icon on the text's cap box instead of its line box */
  .iconic > :global(.icon) {
    translate: 0 calc((1em - 1cap) / 2);
  }

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
    <Link class="button circle" href="https://www.pgevents.ca/events/pgconfdev2027/callforpapers/new/">
      Submit a proposal
    </Link>

    <Link class="button circle stroke" href="https://www.pgevents.ca/events/pgconfdev2027/callforpapers/">
      Manage your submissions
    </Link>
  </p>
</header>

<section class="band" aria-label="Formats">
  <dl class="(main) grid/2@30- grid/3@48- dedent" style:gap="var(--margin)">
    <div class="p">
      <dt class="h6 iconic">
        <Presentation /> <a href="#presentations">Presentations</a>
      </dt>
      <dd class="deck">
        Share knowledge, experience, research, or a new idea in a structured 25
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

<section class="( main) section">
  <h2 class="h5 iconic">
    <CalendarDays /> <span>Important dates</span>
  </h2>

  <dl class="grid+14 dedent">
    <div class="p">
      <dt class="over">Main CFP closes</dt>
      <dd><time datetime="2027-01-12T23:59-05:00">January 12, 2027</time></dd>
      <dd><small>11:59 PM Montréal time</small></dd>
    </div>

    <div class="p">
      <dt class="over">CFP responses sent</dt>
      <dd>
        <time datetime="2027-02-02">February 2, 2027</time>
      </dd>
    </div>

    <div class="p">
      <dt class="over">Discussion round 2 closes</dt>
      <dd><time datetime="2027-04-13">April 13, 2027</time></dd>
    </div>

    <div class="p">
      <dt class="over">Round 2 responses sent</dt>
      <dd><time datetime="2027-04-27">April 27, 2027</time></dd>
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
    <h3>How the timeline works</h3>
  </hgroup>

  <p>
    The main CFP covers presentations, workshops, panels, and other ideas. The
    program committee reviews those proposals together and sends responses after
    the main round closes.
  </p>

  <p>
    Community discussions can also be submitted in a second round for
    late-breaking topics. Proposals not selected in the first round roll over
    automatically.
  </p>

  <p>
    Posters follow their own interest and final-PDF deadlines, listed with the
    poster details below.
  </p>
</section>

<section id="presentations" class="*:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <Presentation /> Presentations
    </h3>
    <p>Submit a presentation</p>
  </hgroup>

  <aside class="main ) note p">
    <div class="over iconic">
      <CalendarClock /> <span>Submission deadline</span>
    </div>
    <p><time datetime="2027-01-12">January 12, 2027</time></p>
  </aside>

  <p class="lede">
    Presentations are structured sessions where community members share
    knowledge, experiences, or new ideas with the PostgreSQL community.
  </p>

  <p>
    Propose a presentation as either a 25- or 50-minute talk. Do not submit the
    same proposal to both tracks.
  </p>

  <dl class="main grid+14 dedent section">
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

  <p>
    This could be a failed project, a proof-of-concept feature, performance
    work, database research, an architectural problem, a community concern, a
    how-to, a missing feature, or an unmet user need.
  </p>
</section>

<section id="community-discussions" class="area *:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <UsersRound /> <span>Community discussions</span>
    </h3>
    <p>Lead a community discussion</p>
  </hgroup>

  <aside class="main ) note p">
    <div class="over iconic">
      <CalendarClock /> <span>Discussion rounds</span>
    </div>

    <dl class="dedent">
      <div class="p">
        <dt class="over">Round 1</dt>
        <dd><time datetime="2027-01-12">January 12, 2027</time></dd>
      </div>
      <div class="p">
        <dt class="over">Round 2</dt>
        <dd>
          <time datetime="2027-04-13">April 13, 2027</time>
        </dd>
      </div>
      <div class="p">
        <dt class="over">Round 2 responses</dt>
        <dd>
          <time datetime="2027-04-27">April 27, 2027</time>
        </dd>
      </div>
    </dl>
  </aside>

  <p class="lede">
    Community Discussion Sessions are interactive meetings where you can work
    through issues related to Postgres, its ecosystem, and its community.
  </p>

  <p>
    Do not feel limited to subjects from previous years. We want new ideas that
    expand the conversation.
  </p>

  <p>
    Community discussions have two types: open and closed. Choose the type that
    best fits your session when submitting your proposal. Neither type is
    recorded.
  </p>

  <dl class="main grid+14 dedent section">
    <div class="insert-acme">
      <dt class="h6 iconic">
        <BriefcaseBusiness /> Open
      </dt>

      <dd class="deck p">
        <p>
          A small number of seats are reserved for key, invited participants.
        </p>

        <p>
          The rest are open, with seating arranged to maximize collaboration
          among the invited attendees.
        </p>
      </dd>

      <dd class="deck p">
        <em>Example:</em>

        <Link href="https://2026.pgconf.dev/session/727">
          Multithreading Working Group
        </Link>
      </dd>
    </div>

    <div class="notice-acme">
      <dt class="h6 iconic">
        <LockKeyhole /> Closed
      </dt>

      <dd class="deck p">
        An invite-only, focused, productive, and private discussion among people
        already involved in the topic.
      </dd>

      <dd class="deck p">
        <em>Example:</em> PostgreSQL Security Team Meeting
      </dd>
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

  <p>
    Proposals not accepted in the first round roll over to the second
    automatically, so submitting early improves your chances.
  </p>
</section>

<section id="workshops" class="*:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <BookOpen /> Workshops
    </h3>
    <p>Teach a workshop</p>
  </hgroup>

  <aside class="main ) note p">
    <div class="over iconic">
      <CalendarClock /> <span>Submission deadline</span>
    </div>
    <p><time datetime="2027-01-12">January 12, 2027</time></p>
  </aside>

  <p class="lede">
    Have an idea for educating current and future Postgres hackers and extension
    developers? Propose a hands-on practical training or collaborative workshop.
  </p>

  <p>
    For a past example, see
    <Link href="https://2026.pgconf.dev/session/553">
      How to read and write the SQL standard
    </Link>
    from 2026.
  </p>

  <p class="deck">
    Accepted workshops confer at most two complimentary registrations.
  </p>
</section>

<section id="panels" class="area *:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <MessagesSquare /> Panels
    </h3>
    <p>Convene a panel</p>
  </hgroup>

  <aside class="main ) note p">
    <div class="over iconic">
      <CalendarClock /> <span>Submission deadline</span>
    </div>
    <p><time datetime="2027-01-12">January 12, 2027</time></p>
  </aside>

  <p class="lede">
    Bring together experts to weigh in on an important community topic, from
    deciding how to move part of the project forward to sharing lessons about
    community organizing and growing new leaders.
  </p>

  <p>
    List proposed panelists. The list need not be final, but confirm that
    everyone named is open to participating.
  </p>

  <p>
    For a past example, see
    <Link href="https://2026.pgconf.dev/session/558">
      Beyond the Source: The Human Architecture of PostgreSQL
    </Link>
    from 2026.
  </p>

  <p class="deck">Panels do not confer complimentary registration.</p>
</section>

<section id="posters" class="*:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <FileImage /> Posters
    </h3>
    <p>Share a poster</p>
  </hgroup>

  <aside class="main ) note p">
    <div class="over iconic">
      <CalendarClock /> <span>Poster deadlines</span>
    </div>

    <dl class="dedent">
      <div class="p">
        <dt class="over">Interest</dt>
        <dd>
          <time datetime="2027-03-15">March 15, 2027</time>
        </dd>
      </div>
      <div class="p">
        <dt class="over">Final PDF</dt>
        <dd>
          <time datetime="2027-04-19">April 19, 2027</time>
        </dd>
      </div>
    </dl>
  </aside>

  <p class="lede">
    Present your work visually and use it to attract co-authors, reviewers, and
    collaborators, or simply to improve discussion around a patch, extension,
    tool, or community initiative.
  </p>

  <p>
    Boards are A1 size (594 × 841 mm), and capacity is limited to 20–30 posters.
    Posters are displayed during dedicated coffee and poster-session breaks.
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

  <p>
    When expressing interest, include your name, topic, and whether you expect
    to attend in person.
  </p>

  <p class="deck">Accepted posters do not confer complimentary registration.</p>
</section>

<section id="other" class="area *:main">
  <hgroup>
    <p>Content type</p>
    <h3 class="iconic">
      <Lightbulb /> Other ideas
    </h3>
    <p>Pitch another idea</p>
  </hgroup>

  <aside class="main ) note p">
    <div class="over iconic">
      <CalendarClock /> <span>Submission deadline</span>
    </div>
    <p><time datetime="2027-01-12">January 12, 2027</time></p>
  </aside>

  <p class="lede">
    From Community Office Hours to a group run, propose an idea that enriches
    the conference and connects its community.
  </p>

  <p>
    Do not feel limited to previous formats or subjects. We want ideas that
    expand the conversation and improve the experience.
  </p>

  <p>
    Our new
    <Link
      href="https://github.com/slonikevents/pgconf-dev-audience-topics/discussions/categories/topic-requests"
    >
      topic request forum
    </Link>
    lets you request a talk, support an idea, or gauge interest in one you might submit,
    so speakers and the program committee can see what people want.
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
      <Link href="https://www.pgevents.ca/events/pgconfdev2026/schedule/">
        PGConf.dev 2026 schedule
      </Link>
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
