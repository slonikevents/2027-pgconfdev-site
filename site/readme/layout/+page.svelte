<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import Rule from "$lib/Rule.svelte";
  import Demo from "../Demo.svelte";
  import OnThisPage from "../OnThisPage";
  import T from "../T.svelte";
</script>

<svelte:head>
  <title>Layout — PGConf.dev 2027</title>
</svelte:head>

<OnThisPage class=") note">
  {@const { Link } = OnThisPage}
  <ol>
    <li><Link class="li-number" href="#rule">Rule</Link></li>
    <li><Link class="li-number" href="#counters">Counters</Link></li>
    <li><Link class="li-number" href="#layout">Layout</Link></li>
    <li><Link class="li-number" href="#dedent">Dedent</Link></li>
  </ol>
</OnThisPage>

<hgroup class="main" style:margin-block-start="0">
  <p>README</p>
  <h1>Layout</h1>
  <p>
    Counters, the grid and flex layout system, and the page-layout classes.
    Every reusable class, with the result on top and the markup below.
  </p>
</hgroup>

<section id="rule" class="main">
  <hgroup>
    <h2 class="section-number">Rule</h2>
    <p>Divide sections with a horizontal rule.</p>
  </hgroup>

  <p>
    Use a plain <code>&lt;hr&gt;</code> for an unlabeled divider between
    sections. <T>Rule</T> is a Svelte component for the less common case where the
    divider needs a visible label.
  </p>

  <Demo source="<hr />" />

  <Demo
    source={`
import Rule from "$lib/Rule.svelte";

<Rule>Schedule</Rule>`}
  >
    <Rule>Schedule</Rule>
  </Demo>
</section>

<section id="counters" class="main">
  <hgroup>
    <h2 class="section-number">Counters</h2>
    <p>Automatically number sections and list items.</p>
  </hgroup>

  <p>
    <T>.section-number</T> prepends a section counter to an element in the form
    <code>§ 01 ·</code>. Each use increments automatically, so sections number
    themselves. Use it on the label paragraph inside an
    <code>&lt;hgroup&gt;</code>.
  </p>

  <Demo
    source={`
<hgroup>
<p class="section-number">Introduction</p>
<h2>Getting started</h2>
</hgroup>

<hgroup>
<p class="section-number">Background</p>
<h2>How it works</h2>
</hgroup>`}
    style="counter-reset: section"
  />

  <p>
    <T>.li-number</T> prepends the list item's ordinal in monospace. Use it on navigation
    lists where the number should appear inside the link rather than outside it.
  </p>

  <Demo
    source={`
<nav>
  <ol>
    <li>
      <a class="li-number" href="#">Introduction</a>
    </li>
    <li>
      <a class="li-number" href="#">Background</a>
    </li>
    <li>
      <a class="li-number" href="#">Getting started</a>
    </li>
  </ol>
</nav>`}
  />
</section>

<section id="layout" class="main">
  <hgroup>
    <h2 class="section-number">Layout</h2>
    <p>Flex and grid containers, with responsive variants.</p>
  </hgroup>

  <p>
    All layout classes zero out the block margins of their direct children,
    since <code>gap</code> handles the spacing between items.
  </p>

  <h3>None</h3>

  <p>
    <T>none</T> hides an element (with <code>display: none</code>). Its main use
    is with a <a href="#layout-responsive-variants">responsive variant</a> to show
    or hide content at specific viewport widths.
  </p>

  <h3>Flex</h3>

  <p>
    <T>flex</T> lays out children horizontally (in a flexbox), wrapping as needed.
    Use it for a row of buttons, badges, or other inline-sized elements.
  </p>

  <Demo
    source={`
<div class="flex">
  <button>Speakers</button>
  <button>Schedule</button>
  <button>Venue</button>
  <button>Workshops</button>
</div>`}
  />

  <h3>Grid</h3>

  <p>
    <T>grid-A:B:…</T> creates a fixed grid with one column per number, sized in that
    ratio. So <code>grid-1:2:1</code> is three columns whose middle column is twice
    as wide as those on either side. Use it to build a custom grid layout.
  </p>

  <Demo
    source={`
<div class="grid-1:2:1">
  <p class="area">1fr</p>
  <p class="area">2fr</p>
  <p class="area">1fr</p>
</div>`}
  />

  <p>
    <T>grid/N</T> is the equal-width special case: it divides children into exactly
    <code>N</code>
    equal columns, the same as <code>grid-1:1:…</code>
    repeated <code>N</code> times.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <p class="area">Column 1</p>
  <p class="area">Column 2</p>
  <p class="area">Column 3</p>
</div>`}
  />

  <p>
    <T>grid+N</T> arranges children in a grid, with columns at least
    <code>N</code> rem wide, fitting as many as possible before wrapping. Use it for
    card grids where the number of columns should adapt to the available space.
  </p>

  <Demo
    source={`
<div class="grid+8">
  <p class="area">Speaker A</p>
  <p class="area">Speaker B</p>
  <p class="area">Speaker C</p>
  <p class="area">Speaker D</p>
</div>`}
  />

  <p>
    <T>subgrid</T> lets a spanning grid item's children align with the outer grid's
    column tracks. In the example below, the two children inside the spanning item
    line up with the items in the row above.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <p class="area">Alpha</p>
  <p class="area">Beta</p>
  <p class="area">Gamma</p>
  <div class="subgrid column-span-2">
    <p class="area">Aligns with Alpha</p>
    <p class="area">Aligns with Beta</p>
  </div>
  <p class="area">Gamma</p>
</div>`}
  />

  <h3>Page Grid</h3>

  <p>
    <T>pagegrid</T> turns a page-layout span (one of the
    <Link href={resolve("/readme/page-layout")}>Page Layout</Link>
    classes that covers more than one region, like <code>(main)</code> or
    <code>main)</code>) into a grid with one column per region, so its children
    line up with main and the sidebars. On its own it is a single-column grid;
    the span supplies the extra columns at each breakpoint.
  </p>

  <p>
    The <Link href={resolve("/about")}>About page</Link> timeline uses
    <code>(main main) pagegrid</code>: a fallback between the boxes
    <code>(main</code> and <code>main)</code>, so each row leans into the left
    sidebar on a desktop and the right one on a tablet, with the year in one
    column and its description in the other.
  </p>

  <h3>Column placement</h3>

  <p>
    <T>column-N</T> positions a grid item in column <code>N</code>.
    <T>column-span-N</T> stretches a grid item across <code>N</code> columns. To
    set where an item both starts and ends, add a second value:
    <T>column-2-span-3</T> starts at column 2 and spans 3 columns, while
    <T>column-2-4</T> runs from the start of column 2 to the start of column 4 (covering
    columns 2 and 3). <code>span</code> works in either position.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <p class="area">Column 1</p>
  <p class="area">Column 2</p>
  <p class="area column-1">Forced to column 1</p>
  <p class="area column-span-2">Spans columns 1–2</p>
  <p class="area column-2-span-2">Starts at column 2, spans 2</p>
  <p class="area">Column 3</p>
</div>`}
  />

  <h3 id="layout-responsive-variants">Responsive variants</h3>

  <p>
    Any layout class (and <T>none</T>) can be scoped to a viewport width range
    by appending <code>@min-max</code>. <code>min</code> and <code>max</code>
    are rem values; either can be omitted.
  </p>

  <Demo
    source={`
<!-- Resize viewport to ≥ 48rem to view -->
<p class="none@-48">
  Visible at 48rem and above
</p>

<!-- Side by side when viewport is ≥ 48rem -->
<div class="flex@48-">
  <p class="area">Speakers</p>
  <p class="area">Schedule</p>
  <p class="area">Venue</p>
</div>`}
  />
</section>

<section id="dedent" class="main">
  <hgroup>
    <h2 class="section-number">Dedent</h2>
    <p>Remove list indentation for flex and grid layouts.</p>
  </hgroup>

  <p>
    <T>.dedent</T> removes the markers and start padding from a list. Its main use
    is when you want to lay out list items with <T>flex</T> or <T>grid</T>
    while keeping their list semantics intact.
  </p>

  <Demo
    source={`
<ul class="flex dedent">
  <li><button>Speakers</button></li>
  <li><button>Schedule</button></li>
  <li><button>Venue</button></li>
  <li><button>Workshops</button></li>
</ul>`}
  />

  <p>
    On a <code>&lt;dd&gt;</code> or parent <code>&lt;dl&gt;</code>, it removes
    the start indent from definition values — useful when laying out a
    <code>&lt;dl&gt;</code> in a grid.
  </p>

  <Demo
    source={`
<dl class="grid+12 dedent">
  <div>
    <dt class="over">Date</dt>
    <dd>May 11–14, 2027</dd>
  </div>

  <div>
    <dt class="over">Location</dt>
    <dd>Montréal, QC</dd>
  </div>

  <div>
    <dt class="over">Format</dt>
    <dd>3+ tracks × 4 days</dd>
  </div>
</dl>`}
  />
</section>
