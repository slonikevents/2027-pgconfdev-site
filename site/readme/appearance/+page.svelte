<script lang="ts">
  import {
    AtSign,
    Calendar,
    Check,
    Clock,
    ExternalLink,
    MapPin,
  } from "@lucide/svelte";
  import Link from "$lib/Link";
  import Demo from "../Demo.svelte";
  import OnThisPage from "../OnThisPage";
  import T from "../T.svelte";
</script>

<style>
  :global .\*\:margin-gap > * {
    margin-block: 0 var(--gap);

    &:where(:last-child) {
      margin-block-end: 0;
    }
  }
</style>

<svelte:head>
  <title>Appearance — PGConf.dev 2027</title>
</svelte:head>

<OnThisPage class=") note">
  {@const { Link } = OnThisPage}
  <ol>
    <li><Link class="li-number" href="#color">Color</Link></li>
    <li><Link class="li-number" href="#icons">Icons</Link></li>
    <li><Link class="li-number" href="#buttons">Buttons</Link></li>
    <li><Link class="li-number" href="#areas">Areas</Link></li>
    <li><Link class="li-number" href="#accents">Accents</Link></li>
    <li><Link class="li-number" href="#tables">Tables</Link></li>
  </ol>
</OnThisPage>

<hgroup class="main" style:margin-block-start="0">
  <p>README</p>
  <h1>Appearance</h1>
  <p>
    Every reusable class, with the result on top and the markup below. Copy a
    snippet and go.
  </p>
</hgroup>

<section id="color" class="*:main">
  <hgroup>
    <h2 class="section-number">Color</h2>
    <p>Carry meaning with the color of text and elements.</p>
  </hgroup>

  <h3>Muted text</h3>

  <p>
    <T>.mute</T> renders text in a secondary tone for content that belongs on the
    page but should not compete with the main text (captions, metadata, incidental
    notes). It changes color only, leaving size and weight alone.
  </p>

  <aside class="( main note p">
    <p class="over"><T>.note</T> / <T>&lt;small&gt;</T></p>
    <p>
      If you're combining <T>.mute</T> with <T>.size-</T>, you probably want
      <T>.note</T> or <T>&lt;small&gt;</T> for secondary content.
    </p>
  </aside>

  <Demo
    source={`
<p>Full-strength body text carries the main message.</p>

<p class="mute">
  Muted text steps back for secondary detail.
</p>`}
  />

  <h3>Semantic colors</h3>

  <p>
    Each class names a role, not a color. You apply the one whose meaning fits
    the text, and the system colors it from a fixed palette:
  </p>

  <dl>
    <dt><T>.action</T></dt>
    <dd>Something you can act on, like a link or button.</dd>

    <dt><code class="notice">.notice</code></dt>
    <dd>
      Something to notice but not act on, like a warning or a "new" badge.
    </dd>

    <dt><code class="insert">.insert</code></dt>
    <dd>
      Something added or confirmed, like a success message. The color of
      <code>&lt;ins&gt;</code> text.
    </dd>

    <dt><code class="delete">.delete</code></dt>
    <dd>
      Something removed or failed, like an error. The color of
      <code>&lt;del&gt;</code> text.
    </dd>
  </dl>

  <p>
    Links and buttons are action-colored automatically, so you don't apply
    <T>.action</T> to them. Use it to mark something else as a call to action, as
    this page does on class names to signal that you can copy them.
  </p>

  <p>
    <T>&lt;ins&gt;</T> and <T>&lt;del&gt;</T> are colored automatically too — no class
    needed.
  </p>

  <Demo
    source={`
<p>
  Registration closes <del>Friday</del> <ins>Thursday</ins>.
</p>`}
  />

  <Demo
    source={`
<p class="action">
  Action, for links and buttons.
</p>

<p class="notice">
  Notice, for highlights and warnings.
</p>

<p class="insert">
  Insert, for success and confirmation.
</p>

<p class="delete">
  Delete, for errors and removals.
</p>`}
  />

  <p>
    Each class also defines a matching muted shade, so <T>.mute</T> text nested inside
    takes on the same hue instead of neutral gray.
  </p>

  <Demo
    source={`
<p class="action">
  Action text, with <span class="mute">muted detail that keeps the same hue</span>.
</p>`}
  />
</section>

<section id="icons" class="main">
  <hgroup>
    <h2 class="section-number">Icons</h2>
    <p>Size and align inline icons.</p>
  </hgroup>

  <h3>Icon and label</h3>

  <p>
    This project uses <Link href="https://lucide.dev/">Lucide</Link>
    icons. Find one in the
    <Link href="https://lucide.dev/icons/">gallery</Link>, convert its name to
    PascalCase (e.g. <code>map-pin</code> → <code>MapPin</code>), import it from
    <code>"@lucide/svelte"</code>, and drop it in as a Svelte component.
  </p>

  <Demo
    source={`import { MapPin } from "@lucide/svelte";

<MapPin />`}
  >
    <MapPin />
  </Demo>

  <p>
    <T>.iconic</T> lays an icon and a label out on one line, vertically centered with
    a small gap.
  </p>

  <Demo
    class="*:margin-gap"
    source={`
<p class="iconic">
  <MapPin />
  <span>Vancouver, BC</span>
</p>

<p class="iconic">
  <Calendar />
  <span>June 9–11, 2027</span>
</p>

<p class="iconic">
  <Clock />
  <span>Open at 09:00</span>
</p>

<p class="iconic">
  <Check />
  <span>Ticket Confirmed</span>
</p>`}
  >
    <p class="iconic">
      <MapPin />
      <span>Vancouver, BC</span>
    </p>
    <p class="iconic">
      <Calendar />
      <span>June 9–11, 2027</span>
    </p>
    <p class="iconic">
      <Clock />
      <span>Open at 09:00</span>
    </p>
    <p class="iconic">
      <Check />
      <span>Ticket Confirmed</span>
    </p>
  </Demo>

  <p>
    <T>.inline-iconic</T> is the inline counterpart of <T>.iconic</T>: it aligns
    an icon with its label the same way, but flows within a line of text instead
    of starting its own. Use it for a link whose label carries an icon.
  </p>

  <Demo
    source={`
<p>
  Check the <a class="inline-iconic" href="#">schedule <ExternalLink /></a> before you arrive, or follow us on <a class="inline-iconic" href="#">Mastodon <AtSign class="size-" /></a>.
</p>`}
  >
    <p>
      Check the
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a class="inline-iconic" href="#">schedule <ExternalLink /></a>
      before you arrive, or follow us on
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a class="inline-iconic" href="#">Mastodon <AtSign /></a>.
    </p>
  </Demo>

  <h3>Color and size</h3>

  <p>
    Icons inherit the text color and size of their surroundings, so the
    <a href="#color">semantic color classes</a> and the size scale apply to them just
    as they do to text.
  </p>

  <Demo
    source={`
<p class="iconic">
  <Check class="insert size+" />
  <span>Registration confirmed</span>
</p>`}
  >
    <p class="iconic">
      <Check class="insert size+" />
      <span>Registration confirmed</span>
    </p>
  </Demo>
</section>

<section id="buttons" class="main">
  <hgroup>
    <h2 class="section-number">Buttons</h2>
    <p>Style links and elements as clickable buttons.</p>
  </hgroup>

  <p>
    A <T>&lt;button&gt;</T> element is styled automatically. To make any other element
    look like a button, add <T>.button</T>.
  </p>

  <Demo
    source={`
<button>Register now</button>
<a class="button" href="#">Learn more</a>`}
  />

  <h3>Stroke</h3>

  <p>
    <T>.stroke</T> gives a button an outlined look instead of a filled one, for secondary
    actions that should not compete with the primary call to action.
  </p>

  <Demo
    source={`
<button>Register now</button>
<button class="stroke">Learn more</button>`}
  />

  <h3>Circle</h3>

  <p>
    <T>.circle</T> gives a button fully rounded corners, for pill-shaped or icon-only
    circular buttons.
  </p>

  <Demo
    source={`
<button class="circle">Register</button>
<button class="circle stroke">Register</button>`}
  />

  <h3>Size</h3>

  <p>
    The size scale grows or shrinks a button relative to the default, changing
    its padding without changing the size of its text.
  </p>

  <p>
    It runs two steps each way: <T>.button+</T> and <T>.button++</T> enlarge,
    <T>.button-</T> and <T>.button--</T> shrink.
  </p>

  <Demo
    class="flex"
    style="align-items: center"
    source={`
<button class="button++">Register</button>
<button class="button+">Register</button>
<button>Register</button>
<button class="button-">Register</button>
<button class="button--">Register</button>`}
  >
    <button class="button++">Register</button>
    <button class="button+">Register</button>
    <button>Register</button>
    <button class="button-">Register</button>
    <button class="button--">Register</button>
  </Demo>

  <h3>Color roles</h3>

  <p>
    Buttons default to the action color. The other
    <a href="#color">semantic color classes</a> override it, coloring the fill (or
    stroke) to match the role.
  </p>

  <Demo
    source={`
<p>
  <button>Default</button>
  <button class="notice">Notice</button>
  <button class="insert">Insert</button>
  <button class="delete">Delete</button>
</p>

<p>
  <button class="stroke">Default</button>
  <button class="stroke notice">Notice</button>
  <button class="stroke insert">Insert</button>
  <button class="stroke delete">Delete</button>
</p>`}
  />

  <h3>With an icon</h3>

  <p>
    <T>.iconic</T> composes naturally with buttons, placing an icon and label on one
    line.
  </p>

  <Demo
    class="flex"
    source={`
<button class="iconic">
  <Check />
  <span>Confirm registration</span>
</button>

<button class="circle iconic stroke">
  <Check />
  <span>Confirm registration</span>
</button>`}
  >
    <button class="iconic">
      <Check />
      <span>Confirm registration</span>
    </button>
    <button class="circle iconic stroke">
      <Check />
      <span>Confirm registration</span>
    </button>
  </Demo>
</section>

<section id="areas" class="main">
  <hgroup>
    <h2 class="section-number">Areas</h2>
    <p>Enclose a group of content.</p>
  </hgroup>

  <h3>Filled area</h3>

  <p>
    <T>.area</T> fills a block with the neutral tinted surface and adds padding, setting
    a group of content apart from the page without a hard border. Use it for cards,
    asides, and banded sections.
  </p>

  <Demo
    source={`
<p class="area">
  Everything here reads as one unit, lifted off the page by a soft fill.
</p>`}
  />

  <h3>Outlined box</h3>

  <p>
    <T>.border</T> outlines a block on all sides and adds the same padding; it's the
    unfilled counterpart to <T>.area</T>.
  </p>

  <Demo
    source={`
<p class="border">
  An outlined box, the unfilled counterpart to an area.
</p>`}
  />

  <h3>Band</h3>

  <p>
    <T>.band</T> brackets a block with a rule above and below, for a full-width strip
    that sets a run of content off without enclosing its sides.
  </p>

  <Demo
    source={`
<p class="band">
  A band, bracketed by a rule above and below.
</p>`}
  />

  <h3>Semantic areas</h3>

  <p>
    Each role from the <a href="#color">color section</a> has an area form that
    fills the block with that role's color, for callouts: <T>.action-area</T>,
    <T>.notice-area</T>, <T>.insert-area</T>, and <T>.delete-area</T>. Each one
    also retunes the fill and border colors inside, so a nested border or accent
    rule takes the same role.
  </p>

  <Demo
    source={`
<p class="action-area">
  Registration is open. Reserve your seat before prices rise.
</p>

<p class="notice-area">
  The early-bird deadline is this Friday.
</p>

<p class="insert-area">
  Your proposal was received. We'll be in touch soon.
</p>

<p class="delete-area">
  Payment failed. Check your card details and try again.
</p>`}
  />

  <h3>Combining</h3>

  <p>
    These forms stack. Add <T>.border</T> to an <T>.area</T> for a filled box with
    an outline; on a semantic area the outline takes the role's color, since each
    area retunes the border.
  </p>

  <Demo
    source={`
<p class="area border">
  A filled area with an outline.
</p>

<p class="action-area border">
  On a semantic area, the outline takes the role's color.
</p>`}
  />
</section>

<section id="accents" class="*:main">
  <hgroup>
    <h2 class="section-number">Accents</h2>
    <p>Mark a block with a rule along one edge.</p>
  </hgroup>

  <h3>Rules</h3>

  <p>
    An accent rule draws a bold line along one edge of a block and insets the
    content behind it, marking it as set apart with less weight than a filled
    area.
  </p>

  <p>
    <T>.acme</T> puts the rule across the top. It suits a pull quote or the head of
    a section.
  </p>

  <Demo
    source={`
<p class="acme">A rule across the top.</p>`}
  />

  <p>
    <T>.edge</T> puts it down the left side, the usual treatment for a blockquote.
  </p>

  <Demo
    source={`
<blockquote class="edge">
  <p>
    A side rule marks a quote without boxing it in.
  </p>

  <footer>
    <cite>&mdash; Someone</cite>
  </footer>
</blockquote>`}
  />

  <h3>Colored accents</h3>

  <p>
    Prefix a role to either shape to color the rule, carrying the same meanings
    as the <a href="#color">color</a> section.
  </p>

  <Demo
    class="*:margin-gap"
    source={`
<p class="acme">Neutral</p>
<p class="action-acme">Action</p>
<p class="notice-acme">Notice</p>
<p class="insert-acme">Insert</p>
<p class="delete-acme">Delete</p>`}
  />

  <Demo
    source={`
<p class="edge">Neutral</p>
<p class="action-edge">Action</p>
<p class="notice-edge">Notice</p>
<p class="insert-edge">Insert</p>
<p class="delete-edge">Delete</p>`}
  />

  <h3>Combining</h3>

  <p>
    Accents compose with the areas from the previous section. Because each area
    resets the default accent color to its own role, a plain <T>.edge</T> on a
    <T>.notice-area</T> takes the area's color:
  </p>

  <aside class="( main note p">
    <p class="over">Variants override</p>
    <p>
      A colored variant still wins: <T>.action-edge</T> stays action-colored inside
      a <T>.notice-area</T>, since it sets the rule color directly instead of
      inheriting the area's.
    </p>
  </aside>

  <Demo
    source={`
<p class="notice-area edge">
  A neutral edge takes the area's color.
</p>`}
  />

  <p>
    A <T>.band</T> takes a top accent the same way, with <T>.acme</T> or a colored
    variant (<T>.edge</T> also works but is nonsense).
  </p>

  <Demo
    source={`
<p class="band action-acme">
  A band whose top rule is promoted to an action accent.
</p>`}
  />
</section>

<section id="tables" class="main">
  <hgroup>
    <h2 class="section-number">Tables</h2>
    <p>Present tabular data with automatic row borders.</p>
  </hgroup>

  <p>
    A plain <code class="action">&lt;table&gt;</code> gets full-width layout, a
    heavy rule below <code>&lt;thead&gt;</code>, and a hairline between each
    <code>&lt;tbody&gt;</code> row.
  </p>

  <Demo
    source={`
<table>
  <caption>Workshop registrations</caption>
  <thead>
    <tr>
      <th>Session</th>
      <th>Speaker</th>
      <th>Seats left</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Query optimization</td>
      <td>Álvaro Herrera</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Extension development</td>
      <td>Peter Eisentraut</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Logical replication</td>
      <td>Amit Kapila</td>
      <td>12</td>
    </tr>
  </tbody>
</table>`}
  />

  <p>
    <T>.stripe</T> fills alternating rows with the tinted surface, making longer tables
    easier to scan row by row.
  </p>

  <Demo
    source={`
<table class="stripe">
  <thead>
    <tr>
      <th>Session</th>
      <th>Speaker</th>
      <th>Seats left</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Query optimization</td>
      <td>Álvaro Herrera</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Extension development</td>
      <td>Peter Eisentraut</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Logical replication</td>
      <td>Amit Kapila</td>
      <td>12</td>
    </tr>
  </tbody>
</table>`}
  />
</section>
