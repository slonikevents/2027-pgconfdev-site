<script lang="ts">
  import { resolve } from "$app/paths";
  import { GitHub } from "$lib/icon";
  import Link from "$lib/Link";
  import OnThisPage from "./OnThisPage";
  import T from "./T.svelte";

  // The `<\/script>` escapes are load-bearing: an unescaped closing tag inside
  // these samples ends this component's own script block.
  /* eslint-disable no-useless-escape */

  const pageSource = `<script>
  import view from './view.png';
<\/script>

<style>
  img {
    border-radius: var(--border-radius);
    margin: 1rem;
    max-width: 100%;
  }
</style>

<h1>Info</h1>

<p>This is some information that should be on this page.</p>

<img src={view} alt="View of this info" />`;

  const assetSource = `<script>
  import schedule from './schedule.pdf';
<\/script>

<a href={schedule} download>Schedule</a>`;

  /* eslint-enable no-useless-escape */
</script>

<svelte:head>
  <title>Readme — PGConf.dev 2027</title>
</svelte:head>

<aside class="main ) border note p">
  <p class="over">Repository</p>

  <p class="iconic">
    <GitHub />
    <Link href={GitHub.href}>slonikevents/2027-pgconfdev-site</Link>
  </p>

  <p>
    The project readme there covers what this page doesn't: prerequisites, local
    setup, and how a change reaches the live site.
  </p>
</aside>

<section class="main" style:margin-block-start="0">
  <hgroup>
    <p>README</p>
    <h1>Overview</h1>
    <p>How this site is put together, and how to add to it.</p>
  </hgroup>

  <p class="lede">
    Keep it simple; this site is designed to be editable by non-technical
    people. When in doubt, write normal HTML and CSS.
  </p>
</section>

<OnThisPage class=") note">
  {@const { Link } = OnThisPage}
  <ol>
    <li><Link class="li-number" href="#structure">Structure</Link></li>
    <li><Link class="li-number" href="#adding-a-page">Adding a page</Link></li>
    <li><Link class="li-number" href="#static-assets">Static assets</Link></li>
    <li>
      <Link class="li-number" href="#style-reference">Style reference</Link>
    </li>
  </ol>
</OnThisPage>

<section id="structure" class="main">
  <hgroup>
    <h2 class="section-number">Structure</h2>
    <p>What each file in the source tree is.</p>
  </hgroup>

  <p>
    Each <T>.svelte</T> file is a
    <Link href="https://svelte.dev/docs/svelte/svelte-files">
      Svelte component
    </Link> made up of HTML, CSS, and TypeScript. CSS is scoped to the component by
    default.
  </p>

  <p>
    SvelteKit uses the file structure in <T>site/</T> as the source of the site's
    pages.
  </p>

  <ul>
    <li>
      Each <T>+page.svelte</T> file in <T>site/</T> defines a page on the site.
    </li>
    <li>
      The site-wide layout is defined in <T>site/+layout.svelte</T>.
    </li>
    <li>
      Files without a <T>+</T> prefix are helper components or static assets used
      within pages and layouts. Helper components should begin with a capital letter.
    </li>
    <li>You shouldn't need to modify files outside <T>site/</T>.</li>
  </ul>

  <p>
    For details on how SvelteKit uses different file types to construct the
    site, see
    <Link href="https://svelte.dev/docs/kit/routing#page">
      SvelteKit routing
    </Link>.
  </p>

  <div class="notice-area edge p">
    <p class="over">Public vs Private</p>

    <p>
      Public pages go in <T>site/(main)/</T>. These are the pages of the
      conference site proper: the ones a visitor reaches from the site's own
      navigation. An internal page, like this readme, sits outside the group.
      The public layout at <T>site/(main)/+layout.svelte</T> supplies the header and
      footer. A private page, like this readme, sits outside the group and gets neither.
    </p>

    <p>
      The parentheses keep <T>(main)</T> out of the URL, so a page at <T
        >site/(main)/info/</T
      > is served at <T>/info</T>.
    </p>
  </div>
</section>

<section id="adding-a-page" class="main">
  <hgroup>
    <h2 class="section-number">Adding a page</h2>
    <p>A directory, a <T>+page.svelte</T>, and the content.</p>
  </hgroup>

  <p>
    To add a new page, create a directory in <T>site/(main)/</T> matching the URL
    path where the page should appear, and add a <T>+page.svelte</T> file inside it
    with the page's content.
  </p>

  <p>
    For example, to create a page at <T>/info</T>, add the file
    <T>site/(main)/info/+page.svelte</T> with content such as:
  </p>

  <pre><code>{pageSource}</code></pre>
</section>

<section id="static-assets" class="main">
  <hgroup>
    <h2 class="section-number">Static assets</h2>
    <p>Import the file, then interpolate it.</p>
  </hgroup>

  <p>
    Static assets such as images or PDFs must be imported and referenced using
    interpolation. For example, to include a PDF:
  </p>

  <pre><code>{assetSource}</code></pre>
</section>

<section id="style-reference" class="main">
  <hgroup>
    <h2 class="section-number">Style reference</h2>
    <p>What this site is built from, documented page by page.</p>
  </hgroup>

  <p>
    Nothing here is a component library. Every class is a small, composable
    utility layered over plain semantic HTML, so a page is written as ordinary
    markup first and then adjusted with the classes below.
  </p>

  <p>
    Before writing new CSS, look for a utility that already does the job. If
    none does, the styles live in <T>site/system.css</T> and
    <T>site/page.css</T>, and a new utility belongs there rather than in a
    component.
  </p>

  <dl class="dedent section">
    <div class="p">
      <dt>
        <Link href={resolve("/readme/page-layout")}>Page Layout</Link>
      </dt>
      <dd>
        The three-column page grid, the <T>(</T> and <T>)</T> margin columns, and
        the classes that place a block across them.
      </dd>
    </div>

    <div class="p">
      <dt><Link href={resolve("/readme/text")}>Text</Link></dt>
      <dd>
        Headings and <T>&lt;hgroup&gt;</T>, prose roles such as <T>.lede</T> and
        <T>.note</T>, the size scale, and vertical spacing.
      </dd>
    </div>

    <div class="p">
      <dt><Link href={resolve("/readme/appearance")}>Appearance</Link></dt>
      <dd>
        Color, icons, buttons, areas, accents, and tables, i.e. everything that
        gives an element its surface.
      </dd>
    </div>

    <div class="p">
      <dt><Link href={resolve("/readme/layout")}>Layout</Link></dt>
      <dd>
        Rules, counters, the grid and flex layout system, and <T>.dedent</T>.
      </dd>
    </div>
  </dl>
</section>
