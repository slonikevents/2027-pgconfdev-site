<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
  const topicRequests =
    "https://github.com/slonikevents/pgconf-dev-audience-topics/discussions/categories/topic-requests";
</script>

<svelte:head>
  <title>Talk Solicitation Program — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Help shape PGConf.dev 2027: request talk topics, suggest speakers, and support community ideas through our GitHub discussion forum."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Talk Solicitation Program</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Program · Talk Solicitation Program</p>
    <h1>Tell us what you want to hear.</h1>
  </hgroup>

  <p class="lede mute text">
    Help shape the PGConf.dev program by suggesting topics and speakers, sharing
    problems worth discussing, and supporting ideas from the community.
  </p>

  <p>
    <Link class="button circle" href={topicRequests}>
      Join the topic request discussion forum
    </Link>
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#what-this-is-for">What this is for</a></li>
    <li><a class="li-number" href="#how-it-works">How it works</a></li>
    <li>
      <a class="li-number" href="#speaker-suggestions">Speaker suggestions</a>
    </li>
    <li><a class="li-number" href="#what-votes-mean">What votes mean</a></li>
    <li><a class="li-number" href="#formal-proposals">Formal proposals</a></li>
  </ol>
</nav>

<section id="what-this-is-for" class="main">
  <hgroup>
    <p class="section-number">What this is for</p>
    <h2>Bring the audience's ideas into the program.</h2>
  </hgroup>

  <p>
    Alongside the regular speaker proposal process, the Talk Solicitation
    Program collects community ideas and interest through GitHub Discussions. We
    want to hear about:
  </p>

  <ul>
    <li>Topics you want covered.</li>
    <li>Problems and solutions you want speakers to discuss.</li>
    <li>Themes that feel timely and relevant.</li>
    <li>People who would be good speakers for those topics.</li>
  </ul>
</section>

<section id="how-it-works" class="main">
  <hgroup>
    <p class="section-number">How it works</p>
    <h2>Find an idea, support it, or add your own.</h2>
  </hgroup>

  <ol>
    <li>
      Search the <Link href={topicRequests}>Topic Requests discussions</Link>
      for your topic. Upvote requests you would like to see and add comments to suggest
      improvements.
    </li>
    <li>
      If your topic is not already covered, create a discussion. Describe what
      you want to see, why it is relevant to PGConf.dev, timely, and useful to
      the intended audience, and suggest one or more suitable speakers.
    </li>
    <li>Organizers review the most relevant and highly supported topics.</li>
    <li>
      They may invite suitable speakers to submit talks through the regular
      PGConf.dev proposal process.
    </li>
  </ol>

  <p>
    If you need help structuring a request, start with the
    <Link
      href="https://github.com/slonikevents/pgconf-dev-audience-topics/blob/main/docs/topic-request-template.md"
    >
      topic request template
    </Link>. Please avoid creating multiple discussions about roughly similar
    topics. See the
    <Link
      href="https://github.com/slonikevents/pgconf-dev-audience-topics/blob/main/docs/moderation-guidelines.md"
    >
      moderation guidelines
    </Link>
    for participating in the forum.
  </p>
</section>

<section id="speaker-suggestions" class="main">
  <hgroup>
    <p class="section-number">Speaker suggestions</p>
    <h2>Help us find the right voices.</h2>
  </hgroup>

  <p>
    Speaker suggestions help organizers identify who might be a good fit for a
    requested topic. A speaker's consent is welcome, but is not required to
    suggest them.
  </p>

  <p>
    Organizers may contact suggested speakers separately. Speakers can also
    choose to submit proposals themselves through the regular CFP.
  </p>
</section>

<section id="what-votes-mean" class="main">
  <hgroup>
    <p class="section-number">What votes mean</p>
    <h2>Interest is a signal, not a guarantee.</h2>
  </hgroup>

  <p>
    Discussion upvotes help measure community interest, but
    <strong>do not automatically guarantee a talk slot</strong>. Organizers also
    consider relevance to PGConf.dev, topic balance across the program, and
    speaker availability.
  </p>
</section>

<section id="formal-proposals" class="main">
  <hgroup>
    <p class="section-number">Formal proposals</p>
    <h2>The regular CFP still applies.</h2>
  </hgroup>

  <p>
    GitHub Discussions surfaces community demand and identifies topics worth
    pursuing. It does not replace formal talk submissions or speaker proposals,
    which continue through the
    <Link href={resolve("/program")}>Call for Proposals</Link>.
  </p>
</section>

<section class="main action-area edge">
  <hgroup class="h3">
    <p class="over">Have a topic in mind?</p>
    <h2>Join the conversation.</h2>
  </hgroup>

  <p>
    Browse existing requests, support the topics you care about, or suggest a
    new one in the Talk Solicitation Program discussion forum.
  </p>

  <p>
    <Link class="button circle" href={topicRequests}>
      Go to the discussion forum
    </Link>
  </p>
</section>
