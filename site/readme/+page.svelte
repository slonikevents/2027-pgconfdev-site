<script lang="ts">
  import { resolve } from "$app/paths";
  import { GitHub } from "$lib/icon";
  import Link from "$lib/Link";
  import Code from "./Code.svelte";
  import OnThisPage from "./OnThisPage";
  import T from "./T.svelte";
</script>

<svelte:head>
  <title>Readme — PGConf.dev 2027</title>
</svelte:head>

<div class="main ) section">
  <Link class="button circle iconic" href={GitHub.href}>
    <GitHub /> <span class="size-">Edit on GitHub</span>
  </Link>
</div>

<OnThisPage class=") note section">
  {@const { Link } = OnThisPage}
  <ol>
    <li><Link class="li-number" href="#structure">Structure</Link></li>
    <li><Link class="li-number" href="#static-assets">Static assets</Link></li>
    <li>
      <Link class="li-number" href="#style-reference">Style reference</Link>
    </li>
  </ol>
</OnThisPage>

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

  <p>
    To add a page, follow
    <Link href={resolve("/readme/adding-a-page")}>Adding a Page</Link>, which
    builds one from an empty file step by step.
  </p>
</section>

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

  <p>
    For details on how SvelteKit uses different file types to construct the
    site, see
    <Link href="https://svelte.dev/docs/kit/routing#page">
      SvelteKit routing
    </Link>.
  </p>
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

  <Code
    source={/* eslint-disable no-useless-escape */ `
<script>
  import schedule from './schedule.pdf';
<\/script>

<a href={schedule} download>Schedule</a>`}
  />
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

  <p>Before writing new CSS, look for a utility that already does the job.</p>

  <dl class="dedent">
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
