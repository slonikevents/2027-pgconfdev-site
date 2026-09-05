<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import Code from "../Code.svelte";
  import OnThisPage from "../OnThisPage";
  import T from "../T.svelte";
</script>

<svelte:head>
  <title>Adding a Page — PGConf.dev 2027</title>
</svelte:head>

<OnThisPage class=") note">
  {@const { Link } = OnThisPage}
  <ol>
    <li>
      <Link class="li-number" href="#create-the-file">Create the file</Link>
    </li>
    <li>
      <Link class="li-number" href="#title-the-page">Title the page</Link>
    </li>
    <li>
      <Link class="li-number" href="#write-the-header">Write the header</Link>
    </li>
    <li>
      <Link class="li-number" href="#wire-up-section-navigation">
        Wire up section navigation
      </Link>
    </li>
    <li>
      <Link class="li-number" href="#add-a-table-of-contents">
        Add a table of contents
      </Link>
    </li>
    <li>
      <Link class="li-number" href="#use-the-margin">Use the margin</Link>
    </li>
    <li>
      <Link class="li-number" href="#write-the-sections"
        >Write the sections</Link
      >
    </li>
    <li><Link class="li-number" href="#add-a-table">Add a table</Link></li>
    <li><Link class="li-number" href="#add-a-callout">Add a callout</Link></li>
    <li>
      <Link class="li-number" href="#check-your-work">Check your work</Link>
    </li>
  </ol>
</OnThisPage>

<section class="main" style:margin-block-start="0">
  <hgroup>
    <p>Tutorial</p>
    <h1>Adding a Page</h1>
    <p>Let's add a page together.</p>
  </hgroup>

  <p class="lede">
    We'll write the
    <Link href={resolve("/attend/registration")}>Registration</Link> page from scratch.
    Follow along in your editor and you'll finish with a page that feels like it belongs.
  </p>

  <p>
    You need to know HTML and CSS. Svelte is mostly ordinary HTML, and the few
    places it isn't are pointed out as they come up.
  </p>

  <p>
    The shape that follows is the one the rest of the site uses, not a hard
    rule. Lay your page out in whatever way best suits its content.
  </p>
</section>

<section id="create-the-file" class="*:main">
  <hgroup>
    <h2 class="section-number">Create the file</h2>
    <p>The directory path is the URL.</p>
  </hgroup>

  <p>
    First, where should the page be located? The site has four main sections:
  </p>

  <dl class="area dedent">
    <div class="p">
      <dt>Program</dt>
      <dd>Talks, tutorials, the schedule, and the call for proposals.</dd>
    </div>

    <div class="p">
      <dt><Link href={resolve("/attend")}>Attend</Link></dt>
      <dd>Getting to the conference and into it: venue, travel, hotels.</dd>
    </div>

    <div class="p">
      <dt><Link href={resolve("/sponsor")}>Sponsor</Link></dt>
      <dd>For the companies who fund the conference.</dd>
    </div>

    <div class="p">
      <dt><Link href={resolve("/about")}>About</Link></dt>
      <dd>The conference itself: who runs it, and the policies it runs by.</dd>
    </div>
  </dl>

  <aside class="( note p">
    <p class="over">Where pages live</p>
    <p>
      Every page lives under <T>site/</T>. The public ones go inside
      <T>(main)</T>. Internal pages, like this tutorial, sit outside it.
    </p>
  </aside>

  <p>
    Let's put the registration page at <T>/attend/registration</T>. To do so,
    we'll create the file:
  </p>

  <pre style:text-align="center"><code>
    site/(main)<span class="action">/attend/registration</span>/+page.svelte
  </code></pre>

  <p>
    A <T>+page.svelte</T> file becomes the page at the URL formed by the
    <span class="action">directories</span> above it.
  </p>

  <aside class="( main insert-area edge note p">
    <p class="over">Preview as you go</p>
    <p>
      <T>npm run dev</T> serves the site on your own machine and reloads it every
      time you save. Start it now and keep the page open beside your editor.
    </p>
  </aside>

  <p>
    A page under <T>attend/</T> inherits that section's navigation. To retrieve it,
    open the file and start with a <T>&lt;script&gt;</T> block:
  </p>

  <!-- The `<\/script>` escape is load-bearing: an unescaped closing tag inside a
  sample ends this component's own script block. -->
  <Code
    source={/* eslint-disable no-useless-escape */ `
<script>
  import { getContext } from '$lib/layout';

  const { BreadcrumbNav, SectionNav } = getContext();
<\/script>`}
  />
</section>

<section id="title-the-page" class="main">
  <hgroup>
    <h2 class="section-number">Title the page</h2>
    <p>What the browser and search engines read.</p>
  </hgroup>

  <p>Under the script block, add:</p>

  <Code
    source={`
<svelte:head>
  <title>Registration — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Registration types, prices, and taxes for PGConf.dev 2027 in Montréal, plus the refund deadline and complimentary registrations for speakers."
  />
</svelte:head>`}
  />

  <p>
    <T>&lt;svelte:head&gt;</T>'s contents are rendered in the document's
    <T>&lt;head&gt;</T>. Give every page a title ending in
    <T>— PGConf.dev 2027</T> and a description, which is the text that shows up in
    search results and link previews.
  </p>

  <p>
    Aim for a description <strong>~140 characters</strong> long. It should be a sentence
    describing what's on the page, not a list of keywords. Make it specific enough
    that it couldn't be pasted onto another page unchanged.
  </p>
</section>

<section id="write-the-header" class="main">
  <hgroup>
    <h2 class="section-number">Write the header</h2>
    <p>Breadcrumbs, label, title, and opening sentence.</p>
  </hgroup>

  <p>Below the head block, add the breadcrumb trail:</p>

  <Code
    source={`
<BreadcrumbNav>
  <li>Registration</li>
</BreadcrumbNav>`}
  />

  <p>Then, add the page's header:</p>

  <Code
    source={`
<header class="(main)">
  ...
</header>`}
  />

  <p>
    <T>(main)</T> is a
    <Link href={resolve("/readme/page-layout#full-width")}>placement class</Link
    >: it spans the header across the full width of the page, margins included.
  </p>

  <p>Within the header, add the page's heading and lede paragraph:</p>

  <Code
    source={`
<hgroup>
  <p class="action">
    Attend · Registration
  </p>
  <h1>Register for PGConf.dev 2027.</h1>
</hgroup>

<p class="lede mute text">
  Three registration types, one price for the whole four days.
</p>`}
  />

  <p>
    A paragraph <em>before</em> the heading labels it and one <em>after</em>
    summarizes it. See
    <Link href={resolve("/readme/text#headings")}>Text › Headings</Link>
    for more information.
  </p>

  <p>
    The other three classes are
    <Link href={resolve("/readme/text")}>text utilities</Link>:
  </p>

  <dl>
    <dt>
      <T>.lede</T> (or <T>.lead</T>)
    </dt>

    <dd>
      Marks the paragraph as a
      <Link href="https://en.wikipedia.org/wiki/Lead_paragraph">lede</Link>,
      i.e. the sentence or two that introduce what follows. It's
      <Link href={resolve("/readme/text#prose")}>
        set a step larger than body text
      </Link> to match that role.
    </dd>

    <dt><T>.mute</T></dt>
    <dd>
      <Link href={resolve("/readme/appearance#color")}>
        Softens the text color
      </Link>, so the paragraph supports the heading above it rather than
      competing with it.
    </dd>

    <dt><T>.text</T></dt>
    <dd>
      <Link href={resolve("/readme/text#prose")}>
        Holds the paragraph to a readable line length
      </Link>. A <T>(main)</T> block spans the full width of the page, which is far
      wider than comfortable prose.
    </dd>
  </dl>

  <p>
    Save and load <T>/attend/registration</T>. We have a page!
  </p>
</section>

<section id="wire-up-section-navigation" class="*:main">
  <hgroup>
    <h2 class="section-number">Wire up section navigation</h2>
    <p>The list of pages beside this one.</p>
  </hgroup>

  <p>
    Next, let's make the page feel like part of its section. Below the header,
    add:
  </p>

  <Code
    source={`
<hr class="section" />

<SectionNav />`}
  />

  <p>
    <T>&lt;hr class="section"&gt;</T> is a horizontal rule with
    <Link href={resolve("/readme/text#spacing")}>section-sized spacing</Link>
    around it.
  </p>

  <p>
    The nav won't list the new page yet, though. To fix this, open
    <T>site/(main)/attend/SectionNav.svelte</T> and add a list item:
  </p>

  <aside class="( main notice-area edge note p">
    <p class="over">Easy to forget</p>
    <p>
      Without this entry the page still works, but nothing on the site links to
      it.
    </p>
  </aside>

  <Code
    source={`
<li>
  <Link href={resolve("/attend/registration")}>Registration</Link>
</li>`}
  />

  <p>
    Two helpers appear there, and we'll eventually want both on our own page:
  </p>

  <dl>
    <dt><T>&lt;Link&gt;</T></dt>
    <dd>
      An <T>&lt;a&gt;</T> with a couple of extras: it marks itself as the current
      page when it points at one, and opens in a new tab when it points off-site.
      Use it for every link you write.
    </dd>

    <dt><T>resolve()</T></dt>
    <dd>
      Builds the path to another page on the site. Give it the full path from
      the root, e.g. <T>resolve("/attend/travel#visa")</T>.
    </dd>
  </dl>
</section>

<section id="add-a-table-of-contents" class="main">
  <hgroup>
    <h2 class="section-number">Add a table of contents</h2>
    <p>Your first block in the margin.</p>
  </hgroup>

  <p>
    Below the section navigation, let's list the sections we're about to write:
  </p>

  <Code
    source={`
<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">
    On this page
  </h2>

  <ol>
    <li>
      <a class="li-number" href="#registration-types">
        Registration types
      </a>
    </li>
    <li>
      <a class="li-number" href="#prices-and-taxes">
        Prices &amp; taxes
      </a>
    </li>
  </ol>
</nav>`}
  />

  <p>
    <T>)</T> is a
    <Link href={resolve("/readme/page-layout#sidebars")}>placement class</Link>
    that puts the nav in the right margin, where every page on the site keeps its
    table of contents.
  </p>

  <dl>
    <dt><T>.note</T></dt>
    <dd>
      Marks the nav as
      <Link href={resolve("/readme/text#prose")}>supporting material</Link>: a
      size smaller and in a muted tone.
    </dd>

    <dt><T>.li-number</T></dt>
    <dd>
      <Link href={resolve("/readme/layout#counters")}>Numbers each item</Link>,
      so the list matches the numbered sections it points at.
    </dd>

    <dt><T>.over</T></dt>
    <dd>
      Sets the heading as an <dfn>eyebrow</dfn> (or <dfn>overline</dfn>): the
      small <Link href={resolve("/readme/text#headings")}>label</Link> that sits over
      the thing it introduces.
    </dd>
  </dl>
</section>

<section id="use-the-margin" class="*:main">
  <hgroup>
    <h2 class="section-number">Use the margin</h2>
    <p>Not everything belongs in the flow of the page.</p>
  </hgroup>

  <p>
    The margins aren't only for navigation. A returning visitor wants the prices
    without reading the page, so let's add a summary aside:
  </p>

  <Code
    source={`
<aside class="main ) note border area" aria-labelledby="at-a-glance">
  ...
</aside>`}
  />

  <p>
    Two <Link href={resolve("/readme/page-layout#placing-a-block")}
      >placements</Link
    >
    this time. <T>)</T> puts the box in the right margin, and <T>main</T> drops it
    into the main column when the window is too narrow for a margin, so it's on the
    page at every width.
  </p>

  <aside class="( main note p">
    <p class="over">Classes compose</p>
    <p>
      <T>.area</T> and <T>.border</T> each stand on their own, and
      <Link href={resolve("/readme/appearance#areas")}>compose</Link>
      for a filled box with an outline, as most of these classes do.
    </p>
  </aside>

  <dl>
    <dt><T>.area</T></dt>
    <dd>
      <Link href={resolve("/readme/appearance#areas")}>
        Fills the block with a tinted surface
      </Link>, so it reads as a unit set apart from the page.
    </dd>

    <dt><T>.border</T></dt>
    <dd>
      <Link href={resolve("/readme/appearance#areas")}>Outlines the block</Link>
      on all sides, the unfilled counterpart to <T>.area</T>.
    </dd>
  </dl>

  <p>Within the aside, write:</p>

  <Code
    source={`
<h2 id="at-a-glance" class="over">At a glance</h2>

<hr />

<dl class="dedent">
  <div class="p">
    <dt class="over">Corporate</dt>
    <dd>CAD $550 · $632.36 with tax</dd>
  </div>

  <div class="p">
    <dt class="over">Student</dt>
    <dd>CAD $75 · $86.23 with tax</dd>
  </div>
</dl>`}
  />

  <p>A <T>&lt;dl&gt;</T> is the right element for label-and-value pairs.</p>

  <dl>
    <dt><T>.p</T></dt>
    <dd>
      Gives each pair
      <Link href={resolve("/readme/text#spacing")}>paragraph spacing</Link>, so
      the pairs read as separate entries rather than one run of text.
    </dd>

    <dt><T>.dedent</T></dt>
    <dd>
      <Link href={resolve("/readme/layout#dedent")}>
        Drops the browser's default indent
      </Link> on definition lists.
    </dd>
  </dl>
</section>

<section id="write-the-sections" class="*:main">
  <hgroup>
    <h2 class="section-number">Write the sections</h2>
    <p>One <T>&lt;section&gt;</T> per idea, each with an <T>id</T>.</p>
  </hgroup>

  <p>
    Now the content: a flat run of <T>&lt;section&gt;</T> elements, one per idea,
    in the order the table of contents promised. Here's the second of the four:
  </p>

  <Code
    source={`
<section id="prices-and-taxes" class="main">
  ...
</section>`}
  />

  <p>
    <T>main</T> keeps the section in the
    <Link href={resolve("/readme/page-layout#the-centre-column")}>
      centre column
    </Link>. Give each one an <T>id</T> that matches its heading, so the link a reader
    guesses is the link that works.
  </p>

  <aside class="( main note p">
    <p class="over">Plain HTML first</p>
    <p>
      Paragraphs, lists, headings, and tables are all styled already. Reach for
      a class only when you want something the plain element doesn't give you.
    </p>
  </aside>

  <p>Within the section, write the heading and the copy:</p>

  <Code
    source={`
<hgroup>
  <p class="section-number">
    Prices &amp; taxes
  </p>
  <h2>What you actually pay.</h2>
</hgroup>

<p class="lede">
  Prices are in Canadian dollars.
</p>

<p>
  Quebec charges two sales taxes, totalling <strong>14.975%</strong>.
</p>`}
  />

  <p>
    <T>.section-number</T> numbers the section for you. See
    <Link href={resolve("/readme/layout#counters")}>Layout › Counters</Link> for more
    information.
  </p>
</section>

<section id="add-a-table" class="main">
  <hgroup>
    <h2 class="section-number">Add a table</h2>
    <p>Rows, columns, and a caption.</p>
  </hgroup>

  <p>The prices are tabular data, so let's put them in a table:</p>

  <Code
    source={`
<table class="stripe">
  <caption>
    Registration prices for PGConf.dev 2027
  </caption>
  <thead>
    <tr>
      <th>Type</th>
      <th>Price</th>
      <th>With tax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Corporate</td>
      <td class="mono">$550</td>
      <td class="mono">$632.36</td>
    </tr>
  </tbody>
</table>`}
  />

  <dl>
    <dt><T>.stripe</T></dt>
    <dd>
      <Link href={resolve("/readme/appearance#tables")}>
        Fills alternating rows
      </Link>, to make a longer table easier to scan.
    </dd>

    <dt><T>.mono</T></dt>
    <dd>
      Sets the figures in the
      <Link href={resolve("/readme/text#prose")}>monospace face</Link>, so the
      columns line up.
    </dd>
  </dl>

  <p>
    See <Link href={resolve("/readme/appearance#tables")}
      >Appearance › Tables</Link
    >
    for more information.
  </p>
</section>

<section id="add-a-callout" class="*:main">
  <hgroup>
    <h2 class="section-number">Add a callout</h2>
    <p>Set one block apart with color.</p>
  </hgroup>

  <aside class="( main notice-area edge note p">
    <p class="over">Before writing CSS</p>
    <p>
      Notice that the page still has no <T>&lt;style&gt;</T> block, and most pages
      don't need one. Look for a utility that already does the job first; if none
      does, add a <T>&lt;style&gt;</T> block, whose CSS applies to this page alone.
    </p>
  </aside>

  <p>
    Let's close the page with somewhere to go for questions. This is where the
    two helpers from earlier come in, so first add their imports to the script
    block at the top of the file:
  </p>

  <Code
    source={`
<script>
  import { resolve } from '$app/paths';
  import Link from '$lib/Link';
<\/script>`}
  />

  <p>Then, let's add the callout:</p>

  <Code
    source={`
<section class="main">
  <div class="action-area edge">
    <h3 class="h6">
      Questions about registration
    </h3>

    <p>
      If you need an invitation letter for a visa, see
      <Link href={resolve("/attend/travel#visa")}>
        entry requirements
      </Link>.
    </p>
  </div>
</section>`}
  />

  <dl>
    <dt><T>.action-area</T></dt>
    <dd>
      <Link href={resolve("/readme/appearance#areas")}>Fills the block</Link>
      in the site's
      <Link href={resolve("/readme/appearance#color")}>action color</Link>.
    </dd>

    <dt><T>.edge</T></dt>
    <dd>
      <Link href={resolve("/readme/appearance#accents")}>Runs a rule</Link>
      down the block's left side.
    </dd>

    <dt><T>.h6</T></dt>
    <dd>
      <Link href={resolve("/readme/text#headings")}
        >Gives the heading the size</Link
      >
      of an <T>&lt;h6&gt;</T> without changing what it is. Pick the heading level
      the document outline calls for, then size it with <T>.h1</T> through
      <T>.h6</T> if you need to.
    </dd>
  </dl>

  <p>
    See <Link href={resolve("/readme/appearance#areas")}
      >Appearance › Areas</Link
    >
    for more information.
  </p>
</section>

<section id="check-your-work" class="main">
  <hgroup>
    <h2 class="section-number">Check your work</h2>
    <p>Before you open a pull request.</p>
  </hgroup>

  <p>
    Resize the window with the page open. The margins appear at 48rem and 64rem,
    so anything you put in one deserves a look at all three widths.
  </p>

  <p>Then, check that:</p>

  <ul>
    <li>
      The <T>&lt;title&gt;</T> ends with <T>— PGConf.dev 2027</T>, and the meta
      description is a sentence of roughly 140 characters.
    </li>

    <li>The page is listed in its section's <T>SectionNav.svelte</T>.</li>

    <li>
      Every section has an <T>id</T> that matches its heading, and the table of contents
      links to each one.
    </li>

    <li>Internal links go through <T>resolve()</T> with a full path.</li>

    <li>
      <T>npm run lint</T> and <T>npm run check</T> pass, and
      <T>npm run format</T> has been run.
    </li>
  </ul>

  <p>
    The finished page is at
    <Link href={resolve("/attend/registration")}>/attend/registration</Link>.
    Read its source beside any other page in <T>site/(main)/</T>; copying a
    neighbour is how the site is maintained.
  </p>
</section>
