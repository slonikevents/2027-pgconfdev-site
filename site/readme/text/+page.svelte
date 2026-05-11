<script lang="ts">
  import Demo from "../Demo.svelte";
  import OnThisPage from "../OnThisPage";
  import T from "../T.svelte";
</script>

<svelte:head>
  <title>Text — PGConf.dev 2027</title>
</svelte:head>

<OnThisPage class=") note">
  {@const { Link } = OnThisPage}
  <ol>
    <li><Link class="li-number" href="#headings">Headings</Link></li>
    <li><Link class="li-number" href="#prose">Prose</Link></li>
    <li><Link class="li-number" href="#size">Size</Link></li>
    <li><Link class="li-number" href="#spacing">Spacing</Link></li>
  </ol>
</OnThisPage>

<hgroup class="main" style:margin-block-start="0">
  <p>README</p>
  <h1>Text</h1>
  <p>
    Every reusable class, with the result on top and the markup below. Copy a
    snippet and go.
  </p>
</hgroup>

<section id="headings" class="main">
  <hgroup>
    <h2 class="section-number">Headings</h2>
    <p>Structure headings with labels and summaries.</p>
  </hgroup>

  <p>
    An <T>&lt;hgroup&gt;</T> ties a heading together with secondary text that titles
    it, instead of leaving that text as a separate paragraph.
  </p>

  <p>
    A paragraph <em>before</em> the heading acts as a label that categorizes it,
    i.e. the section or kind of thing the heading belongs to. A paragraph
    <em>after</em> it acts as a summary or subtitle.
  </p>

  <p>
    The role comes from position, so you add no classes inside an
    <T>&lt;hgroup&gt;</T>.
  </p>

  <Demo
    source={`
<hgroup>
  <p>Getting started</p>
  <h2>Install the CLI</h2>
  <p>A short summary of what the section covers.</p>
</hgroup>

<p>
  Body text after the group, shown at the normal size for comparison.
</p>`}
  />

  <p>
    The same two roles are available as classes for framing content that isn't a
    heading, such as a figure or statistic. <T>.over</T> is a label that introduces
    what follows, and <T>.deck</T> is a summary subordinate to the text above it.
  </p>

  <p>
    When the thing being titled is an actual heading, use an
    <T>&lt;hgroup&gt;</T> instead; its spacing is tuned for headings, while
    <T>.over</T> and <T>.deck</T> are not.
  </p>

  <Demo
    source={`
<p class="over">Total raised</p>
<p class="lead" style="margin-block-end: 0;">$48,000</p>
<p class="deck">From 320 backers in the first week.</p>`}
  />

  <h3>Adjacent headings</h3>

  <p>
    A heading or <T>&lt;hgroup&gt;</T> immediately followed by a lower-level heading
    or <T>&lt;hgroup&gt;</T> collapses the second one's top margin, so the pair reads
    as a unit rather than two separate blocks.
  </p>

  <Demo
    source={`
<hgroup>
  <p>Session</p>
  <h2>Query optimization</h2>
</hgroup>
<h3>Prerequisites</h3>
<p>Body text after the subheading, at normal spacing.</p>`}
  />

  <h3>Styling other elements as headings</h3>

  <p>
    <T>.h1</T> through <T>.h6</T> apply the size and margin of the corresponding heading
    to any element, for when you want a heading's visual weight on something that
    isn't semantically a heading.
  </p>

  <Demo
    source={`
<figure>
  <div class="h2">600</div>
  <figcaption class="over">
    An impressive number
  </figcaption>
</figure>`}
  />

  <p>
    To resize an actual heading inside an <T>&lt;hgroup&gt;</T>, put the class
    on the <T>&lt;hgroup&gt;</T> rather than the heading. It resizes the heading within,
    and the group's spacing follows the new size.
  </p>

  <Demo
    source={`
<hgroup class="h4">
  <p>Getting started</p>
  <h2>Install the CLI</h2>
</hgroup>`}
  />
</section>

<section id="prose" class="*:main">
  <hgroup>
    <h2 class="section-number">Prose</h2>
    <p>Set the style and width of body text.</p>
  </hgroup>

  <p>
    <T>.lead</T> (or <T>.lede</T>) marks the opening paragraph of a section,
    i.e. the sentence or two that introduce or summarize what follows. It gives
    that paragraph extra weight to match its role.
  </p>

  <Demo
    source={`
<p class="lead">
  PGConf.dev brings PostgreSQL contributors together for three days of talks, unconference sessions, and hallway-track hacking.
</p>

<p>
  The first day centers on scheduled talks; the remaining two open up to unconference sessions and hallway-track hacking.
</p>`}
  />

  <p>
    <T>.mono</T> sets text in the monospace typeface. Use it only for text that isn't
    code, as <code>&lt;code&gt;</code>, <code>&lt;kbd&gt;</code>, and
    <code>&lt;samp&gt;</code> already render monospace on their own. Good cases are
    a label or a run of figures you want aligned.
  </p>

  <Demo
    source={`
<p>
  Doors open at <span class="mono">09:00</span> — find us at booth <span class="mono">B12</span>.
</p>`}
  />

  <p>
    <T>.note</T> marks content as supplementary, i.e. an aside, caveat, or footnote
    that supports the main text without being part of its main line of argument. It
    sets the text a step smaller and in a muted tone, while headings keep their size.
  </p>

  <Demo
    source={`
<div class="note">
  <h4>Heads up</h4>

  <p>
    The prose inside a note shrinks and mutes, marking it as a supporting detail rather than part of the main text.
  </p>

  <ul>
    <li>Paragraphs and lists are diminished.</li>
    <li>The heading above keeps its normal size.</li>
  </ul>
</div>`}
  />

  <p>
    <T>.text</T> constrains a block's inline size to a comfortable reading width.
    The main column applies this automatically, so use it only on elements that sit
    outside the normal text flow but should still wrap at the same line length.
  </p>

  <div class="(main)">
    <Demo
      source={`
<p class="text">
  A paragraph constrained to a comfortable reading width, even when its container is wider than the main column.
</p>`}
    />
  </div>
</section>

<section id="size" class="*:main">
  <hgroup>
    <h2 class="section-number">Size</h2>
    <p>Scale text up or down relative to its surroundings.</p>
  </hgroup>

  <p>
    The size scale changes how large text renders relative to its surroundings
    without changing what the text means (a purely presentational adjustment).
    Reach for it only when no semantic element like <T>.lead</T>, <T>.deck</T>,
    or a heading already carries the meaning you want.
  </p>

  <p>
    It runs two steps each way: <T>.size+</T> and <T>.size++</T> enlarge,
    <T>.size-</T> and <T>.size--</T> shrink.
  </p>

  <aside class="( main note p">
    <p class="over"><T>.note</T> / <T>&lt;small&gt;</T></p>
    <p>
      If you're combining <T>.size-</T> with <T>.mute</T>, you probably want
      <T>.note</T> or <T>&lt;small&gt;</T> for secondary content.
    </p>
  </aside>

  <Demo
    source={`
<p class="size++">Two steps larger</p>
<p class="size+">One step larger</p>
<p>Default body size</p>
<p class="size-">One step smaller</p>
<p class="size--">Two steps smaller</p>`}
  />
</section>

<section id="spacing" class="main">
  <hgroup>
    <h2 class="section-number">Spacing</h2>
    <p>Control the block margin of any element.</p>
  </hgroup>

  <p>
    Most block elements have default margins. These classes apply those same
    spacings to any element.
  </p>

  <h3>Paragraph and section</h3>

  <p>
    <T>.p</T> spaces an element like a <code>&lt;p&gt;</code>. Use it on a
    container (like a <code>&lt;div&gt;</code>) that wraps prose and should flow
    with surrounding paragraphs.
  </p>

  <Demo
    source={`
<div class="p">
  A <code>&lt;div&gt;</code> spaced like a paragraph.
</div>

<p>
  The next paragraph follows at the same gap.
</p>`}
  />

  <p>
    <T>.section</T> gives an element the same margin as
    <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and similar
    landmark elements, setting it apart as a major block of content.
  </p>

  <Demo
    source={`
<p>A paragraph before the block.</p>

<p class="section">
  A block with section-level spacing.
</p>

<p>A paragraph after the block.</p>`}
  />

  <h3>Gap</h3>

  <p>
    <T>.margin-gap</T> spaces an element by <code>var(--gap)</code>, which is
    larger than the standard paragraph spacing. Use it on layout blocks, grid
    rows, and dividers that need the standard gap unit of separation.
  </p>

  <Demo
    source={`
<div class="margin-gap">First block.</div>

<hr class="margin-gap" />

<div class="margin-gap">Second block.</div>`}
  />
</section>
