<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import OnThisPage from "../OnThisPage";
  import T from "../T.svelte";
</script>

<style>
  .dashed {
    border-style: dashed;
  }

  /* Footprint pictures: a mini three-column page with the used cells filled. */
  .on,
  .off {
    block-size: 1.75rem;
    border-radius: 2px;
  }

  .on {
    background-color: var(--action-fg);
  }

  .off {
    border: 1px dashed var(--border);
  }

  .timeline {
    grid-auto-flow: dense;
  }
</style>

<svelte:head>
  <title>Page Layout — PGConf.dev 2027</title>
</svelte:head>

<OnThisPage class=") note">
  {@const { Link } = OnThisPage}
  <ol>
    <li>
      <Link class="li-number" href="#the-three-regions">The three regions</Link>
    </li>
    <li>
      <Link class="li-number" href="#placing-a-block">Placing a block</Link>
    </li>
    <li>
      <Link class="li-number" href="#the-centre-column">The centre column</Link>
    </li>
    <li><Link class="li-number" href="#full-width">Full width</Link></li>
    <li><Link class="li-number" href="#sidebars">Sidebars</Link></li>
    <li>
      <Link class="li-number" href="#spanning-into-one-sidebar">
        Spanning one sidebar
      </Link>
    </li>
    <li>
      <Link class="li-number" href="#place-a-blocks-children">
        The <code>*:</code> variant
      </Link>
    </li>
    <li>
      <Link class="li-number" href="#matching-other-classes-to-the-bands">
        Breakpoint aliases
      </Link>
    </li>
  </ol>
</OnThisPage>

<section class="main" style:margin-block-start="0">
  <hgroup>
    <p>README</p>
    <h1>Page Layout</h1>
    <p>
      Place a top-level block in the centre column, in a sidebar, or spanning
      the whole page.
    </p>
  </hgroup>

  <p>
    Every page on this site, this one included, is built from a handful of
    placement classes. They decide whether a block sits in the centre column,
    rides in a sidebar, or stretches across the page, and how it rearranges as
    the window grows and shrinks.
  </p>
</section>

<section id="the-three-regions" class="main">
  <hgroup>
    <h2 class="section-number">The three regions</h2>
    <p>An always-on main column, plus a left and right sidebar.</p>
  </hgroup>

  <p>
    The main column is always there. The right sidebar appears once the window
    reaches 48rem, and the left one joins it at 64rem.
  </p>

  <p>
    In placement classes, each region has a name: <code>(</code> is the left
    sidebar, <code>)</code> is the right, and <code>main</code> is the centre.
  </p>

  <div class="grid/4 note p" style:gap="0.5rem" style:text-align="center">
    <div class="border dashed" style:padding-inline="0.5rem">
      <T class="size++">(</T> <br /> <small>≥ 64rem</small>
    </div>

    <div class="border column-span-2">
      <T class="size++">main</T> <br /> <small>always</small>
    </div>

    <div class="border dashed" style:padding-inline="0.5rem">
      <T class="size++">)</T> <br /> <small>≥ 48rem</small>
    </div>
  </div>

  <p>
    The left sidebar has a higher minimum viewport width than the right, so the
    right is always present whenever the left is. That leaves only three states:
  </p>

  <ul>
    <li><strong>Main alone</strong> on a phone</li>
    <li>
      <strong>Main</strong> and the <strong>right sidebar</strong> on a tablet
    </li>
    <li><strong>All three</strong> on a desktop</li>
  </ul>
</section>

<section id="placing-a-block" class="main">
  <hgroup>
    <h2 class="section-number">Placing a block</h2>
    <p>List one or more placements; the block uses the best that fits.</p>
  </hgroup>

  <p>
    A block is placed by listing one or more <em>placement classes</em>, each
    one a possible placement that specifies a <strong>run</strong> of adjoining
    regions the block should occupy. Neither <code>(</code> nor <code>)</code>
    may appear more than once across them.
  </p>

  <p>
    You write the classes on a direct child of a page's
    <code>&lt;main&gt;</code>. For example:
  </p>

  <figure class="margin-gap">
    <p class="h2" style:text-align="center">
      <code>
        &lt;div class="<span class="insert">(</span><span class="action"
          >main</span
        > <span class="notice">)</span>"&gt;
      </code>
    </p>

    <figcaption style:text-align="center">
      <code class="insert">(</code> + <code class="action">main</code> = left
      sidebar joined to centre

      <br />

      <code class="notice">)</code> = right sidebar
    </figcaption>
  </figure>

  <p>
    Where more than one placement fits, the block prefers the
    <strong class="insert">left sidebar</strong>, then the
    <strong class="notice">right sidebar</strong>, then
    <strong class="action">main</strong>. So this <code>&lt;div&gt;</code> spans
    the <span class="insert">left sidebar</span> and
    <span class="action">centre</span> on a desktop, drops into the
    <span class="notice">right sidebar</span> on a tablet, and sits in
    <span class="action">main</span> on a phone.
  </p>

  <p>
    A block fills the part of its run that
    <strong>exists at the current width</strong>, and no more — you never set
    widths or breakpoints yourself. Consequently, on a phone, where there are no
    sidebars, <T>(main</T> and <T>main</T> are identical.
  </p>
</section>

<section id="the-centre-column" class="*:main">
  <hgroup>
    <h2 class="section-number">The centre column: <code>main</code></h2>
    <p>The default home for text, leaving the sidebars free.</p>
  </hgroup>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="on column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption style:text-align="center">
      <T>main</T> &mdash; the centre column alone.
    </figcaption>
  </figure>

  <p>
    <T>main</T> keeps a block in the centre column and leaves the sidebars free. Use
    it for body copy, article sections, anything text-heavy.
  </p>

  <div class="border dashed p">
    <p class="over">class "main"</p>
    <h3 class="h4">A working conference for the people building Postgres</h3>

    <p>
      PGConf.dev was founded in 2024 to fill a specific gap: a yearly room where
      PostgreSQL contributors and the developers integrating Postgres into other
      systems could spend four days together, without the conference circuit's
      usual layer of polish.
    </p>

    <p>
      The format borrows from academic conferences: proposals are reviewed by a
      program committee, talks are technical, and a third of the schedule is
      unconference.
    </p>
  </div>
</section>

<section id="full-width" class="*:main">
  <hgroup>
    <h2 class="section-number">Full width: <code>(main)</code></h2>
    <p>A band across the whole content area, sidebars included.</p>
  </hgroup>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="on column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="center">
      <T>(main)</T> &mdash; all three regions.
    </figcaption>
  </figure>

  <p>
    <T>(main)</T> is a box that spans the <em>whole</em> content area, soaking
    up the sidebars when they exist. Reach for it on headers, footers, heroes,
    and full-bleed sections. The example is live; widen past 64rem to watch
    <code>(main)</code> extend past <code>main</code> into the sidebar space.
  </p>

  <div class="(main) border dashed p">
    <p class="over">class "(main)"</p>
    <div class="grid+12">
      <figure>
        <div class="action h2">~600</div>
        <figcaption class="over">Attendees</figcaption>
      </figure>
      <figure>
        <div class="action h2">3</div>
        <figcaption class="over">Parallel tracks</figcaption>
      </figure>
      <figure>
        <div class="action h2">42</div>
        <figcaption class="over">Talks &amp; tutorials</figcaption>
      </figure>
      <figure>
        <div class="action h2">4</div>
        <figcaption class="over">Days</figcaption>
      </figure>
    </div>
  </div>

  <p>
    A <code>(main)</code> box is a single block by default. That is far wider
    than a comfortable line length, so when its contents are running text, add
    the <T>.text</T>
    <Link href={resolve("/readme/text#prose")}>class</Link> to hold them at a readable
    width.
  </p>

  <p>
    When you want the contents laid out in cards or columns instead, put a grid
    inside it (for example, <code>grid+16</code> or <code>grid/3@)</code>),
    exactly as the <Link href={resolve("/")}>landing page</Link> does for its sponsor
    and gallery sections.
  </p>
</section>

<section id="sidebars" class="*:main">
  <hgroup>
    <h2 class="section-number">Sidebars: <code>(</code> and <code>)</code></h2>
    <p>Navigation and asides that ride alongside the main column.</p>
  </hgroup>

  <p>
    Use <T>(</T> and <T>)</T> to place a block beside your content, e.g. an "On this
    page" table of contents, a section navigation, a pull quote, or an at-a-glance
    box.
  </p>

  <aside class="( note border dashed p">
    <p class="over">Section nav</p>
    <p>
      A <T>(</T> aside. It appears in the left sidebar when the viewport width ≥ 64rem.
    </p>
  </aside>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="off column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption>
      <T>(</T> &mdash; the left sidebar alone.
    </figcaption>
  </figure>

  <aside class=") note border dashed p">
    <p class="over">On this page</p>
    <p>
      A <T>)</T> aside. It appears in the right sidebar when the viewport width ≥
      48rem.
    </p>
  </aside>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="off column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="right">
      <T>)</T> &mdash; the right sidebar alone.
    </figcaption>
  </figure>

  <p>
    To keep a sidebar block visible when its sidebar is absent, add
    <code>main</code> as a second placement, usually with the
    <Link href={resolve("/readme/text#spacing")}>p</Link> utility for spacing. These
    placements are typically paired with
    <Link href={resolve("/readme/text#prose")}>note</Link>, for the diminutive
    sidebar styling.
  </p>
</section>

<section id="spanning-into-one-sidebar" class="*:main">
  <hgroup>
    <h2 class="section-number">Spanning into one sidebar</h2>
    <p>
      <code>(main</code> and <code>main)</code> extend a box into just one side.
    </p>
  </hgroup>

  <p>
    Between <code>main</code> and <code>(main)</code> sit the two half-spans:
  </p>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="on column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption>
      <T>(main</T> &mdash; left sidebar + main.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="on column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="right">
      <T>main)</T> &mdash; main + right sidebar.
    </figcaption>
  </figure>

  <p>
    Each is a single block that widens to take in its sidebar when there is room
    and stays in the centre when there isn't.
  </p>

  <p>
    Reach for them when a band should lean into one margin but not both, such as
    a call-for-proposals banner or a sponsors strip.
  </p>

  <div class="main) border dashed p">
    <p class="over">class "main)"</p>
    <h3 class="h4">Call for proposals</h3>
    <p>
      Submit a talk, tutorial, or unconference topic by 14 February. This banner
      runs from main into the right sidebar, so on a desktop it extends wider
      than the centre column.
    </p>
  </div>

  <div class="(main border dashed p">
    <p class="over">class "(main"</p>
    <h3 class="h4">Sponsors</h3>
    <p>
      PGConf.dev is non-profit; sponsors cover the venue, A/V, and scholarships.
      The same band extending the other way, from the left sidebar through main.
    </p>
  </div>

  <p>
    A half-span is most useful paired with
    <Link href={resolve("/readme/layout")}>pagegrid</Link>, which turns its
    regions into aligned grid columns. The timeline below, lifted from the
    <Link href={resolve("/about")}>About page</Link>, is a
    <code>(main main) pagegrid</code> band: each row lines its year up in one column
    and its description in the next. Widen past 48rem to see the columns split.
  </p>

  <div class="(main main) margin-gap pagegrid timeline">
    <figure class="column-1@( column-2@) border dashed">
      <div class="action h2">2024</div>
      <figcaption class="over">Vancouver, BC</figcaption>
    </figure>

    <div class="border dashed note">
      <h4>The first PGConf.dev</h4>
      <p>
        ~450 attendees · 38 talks · the first unconference day · the format
        proves itself
      </p>
    </div>
  </div>

  <div class="(main main) margin-gap pagegrid timeline">
    <figure class="column-1@( column-2@) border dashed">
      <div class="action h2">2025</div>
      <figcaption class="over">Montréal, QC</figcaption>
    </figure>

    <div class="border dashed note">
      <h4>Second year, expanded program</h4>
      <p>
        ~580 attendees · tutorial day added · scholarships program launches with
        22 funded seats
      </p>
    </div>
  </div>
</section>

<section id="place-a-blocks-children" class="*:main">
  <hgroup>
    <h2 class="section-number">Place a block's children: <code>*:</code></h2>
    <p>Lay out an article with asides beside it, in one wrapper.</p>
  </hgroup>

  <p>
    Prefix any placement with <T>*:</T> to apply it to a block's
    <em>children</em> instead of the block itself.
  </p>

  <p>
    <T>*:main</T> is the handy one. Wrap a section in it and every child lands in
    the main column; then drop a <code>(</code> or <code>)</code> on the asides
    you want pushed into a margin. The
    <Link href={resolve("/about")}>About page</Link> uses it to set a marginal note
    beside its history text:
  </p>

  <aside class="( border dashed note">
    <p class="over">Aside</p>
    <p>A <code>(</code> child of a <T>*:main</T> section.</p>
  </aside>

  <pre><code
      >{`<section class="*:main">
  <hgroup>...</hgroup>

  <aside class="( note">...</aside>

  <p><!-- in main --></p>
</section>`}</code
    ></pre>

  <p>
    Widen past 64rem to watch the aside move into the left sidebar.
    <code>*:main</code> gives the paragraphs <code>main</code>, but the aside's
    own <code>(</code> overrides that and places it in the sidebar instead.
  </p>
</section>

<section id="matching-other-classes-to-the-bands" class="main">
  <hgroup>
    <h2 class="section-number">Matching other classes to the bands</h2>
    <p>Use <code>@)</code> and <code>@(</code> as breakpoint shorthands.</p>
  </hgroup>

  <p>
    Any responsive variant (see the
    <Link href={resolve("/readme/layout")}>Layout</Link> page) can be tied to the
    page layout's breakpoints. <T>@)</T> means "when the right sidebar is visible"
    and is identical to <code>@48-</code>. <T>@(</T> means "when the left sidebar
    is visible" and is identical to <code>@64-</code>.
  </p>

  <p>
    So <code>grid/3@)</code> becomes three columns exactly when the right sidebar
    arrives. Using these instead of raw rem values keeps a block tied to the page
    layout if the breakpoints ever move.
  </p>
</section>
