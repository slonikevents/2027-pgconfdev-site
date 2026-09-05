<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";
  import Rule from "$lib/Rule.svelte";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  caption {
    margin-block: calc(2em / 3);
  }

  tbody > tr:where(:last-child) {
    border-block-end: 3px solid var(--border);
  }
</style>

<svelte:head>
  <title>Registration — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Registration types, prices, and taxes for PGConf.dev 2027 in Montréal, plus the cancellation and refund policy and complimentary registrations for speakers."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Registration</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Registration</p>
    <h1>Register for PGConf.dev 2027.</h1>
  </hgroup>

  <p class="lede mute text">
    Three registration types, one ticket for all four days. Prices are in
    Canadian dollars.
  </p>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") note">
  <h2 id="on-this-page" class="over">On This Page</h2>
  <ol>
    <li>
      <a class="li-number" href="#registration-types">Registration types</a>
    </li>
    <li>
      <a class="li-number" href="#prices-and-taxes">Prices &amp; taxes</a>
    </li>
    <li>
      <a class="li-number" href="#refunds">Cancellations &amp; refunds</a>
    </li>
    <li><a class="li-number" href="#speakers">Speakers</a></li>
    <li><a class="li-number" href="#students">Students</a></li>
  </ol>
</nav>

<section class="main action-area edge">
  <h3 class="h6">Questions about registration?</h3>

  <p>
    If you need an invitation letter for a visa, see
    <Link href={resolve("/attend/travel#visa")}>entry requirements</Link>. For
    anything else, email
    <Link href={resolve("/about/team#contact")}>contact@pgconf.dev</Link>.
  </p>
</section>

<aside class="main ) note border area" aria-labelledby="at-a-glance">
  <h2 id="at-a-glance" class="over">At a Glance</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Corporate</dt>
      <dd>CAD $550</dd>
    </div>

    <div class="p">
      <dt class="over">Individual</dt>
      <dd>CAD $350</dd>
    </div>

    <div class="p">
      <dt class="over">Student</dt>
      <dd>CAD $75</dd>
    </div>

    <div class="p">
      <dt class="over">Taxes</dt>
      <dd>14.975% (GST + QST)</dd>
    </div>

    <div class="p">
      <dt class="over">Refund deadline</dt>
      <dd>
        <time datetime="2027-04-11">April 11<sup>th</sup>, 2027</time>
      </dd>
    </div>
  </dl>
</aside>

<section id="registration-types" class="*:main">
  <hgroup>
    <p class="section-number">Registration types</p>
    <h2>Which one applies to you.</h2>
  </hgroup>

  <p class="lede">
    Every registration covers the same four days of the conference, including
    all programming, catering, and associated events. The three types differ
    only in price and eligibility.
  </p>

  <ul class="(main grid+14 dedent">
    <li class="note border">
      <hgroup class="h5">
        <h3>Corporate</h3>
        <p class="mono action">CAD $550</p>
      </hgroup>

      <p>
        For attendees whose employer is paying for, or reimbursing, the ticket.
        Only corporate registrations include the attendee's
        <strong class="insert">company name</strong> on their badge.
      </p>
    </li>

    <li class="note border">
      <hgroup class="h5">
        <h3>Individual</h3>
        <p class="mono action">CAD $350</p>
      </hgroup>

      <p>
        For attendees paying out of pocket who won't be reimbursed by an
        employer.
      </p>
    </li>

    <li class="note border">
      <hgroup class="h5">
        <h3>Student</h3>
        <p class="mono action">CAD $75</p>
      </hgroup>

      <p>
        For students, with proof of enrollment required. The number of student
        registrations is limited, so register early.
      </p>
    </li>
  </ul>
</section>

<section id="prices-and-taxes" class="*:main">
  <hgroup>
    <p class="section-number">Prices &amp; taxes</p>
    <h2>What you actually pay.</h2>
  </hgroup>

  <p>
    Prices are in Canadian dollars. The <strong>with tax</strong> column is what you're
    charged at checkout.
  </p>

  <aside class="( main note p">
    <p class="over">Quebec sales tax</p>

    <p>
      Two sales taxes apply to a conference ticket: the federal GST at 5% and
      the Quebec QST at 9.975%, totalling <strong>14.975%</strong>. Both are
      added at checkout rather than included in the listed price.
    </p>
  </aside>

  <figure>
    <table class="stripe" style="caption-side: bottom;">
      <caption>Registration prices for PGConf.dev 2027</caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Price</th>
          <th>With Tax</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Corporate</td>
          <td class="mono">$550</td>
          <td class="mono">$632.36</td>
        </tr>
        <tr>
          <td>Individual</td>
          <td class="mono">$350</td>
          <td class="mono">$402.41</td>
        </tr>
        <tr>
          <td>Student</td>
          <td class="mono">$75</td>
          <td class="mono">$86.23</td>
        </tr>
        <tr>
          <td>Speaker</td>
          <td colspan="2">
            <Rule style="margin-block: 0">Free</Rule>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
</section>

<section id="refunds" class="main">
  <hgroup>
    <p class="section-number">Cancellations &amp; refunds</p>
    <h2>
      Refundable until <time datetime="2027-04-11">April 11</time>.
    </h2>
  </hgroup>

  <p>
    A ticket can be refunded up until
    <strong>
      <time datetime="2027-04-11">April 11<sup>th</sup>, 2027</time>
    </strong>. After that date no refunds are available.
  </p>

  <p>
    To cancel a paid registration, email
    <Link href={resolve("/about/team#contact")}>contact@pgconf.dev</Link> with the
    name and email address on the registration.
  </p>

  <p class="edge notice-area">
    One exception: a registration we've issued a
    <strong>visa invitation letter</strong> for cannot be refunded, whatever the date.
    The letter tells Canadian immigration authorities that you're expected at the
    conference, so please request one only if you intend to come.
  </p>
</section>

<section id="speakers" class="main">
  <hgroup>
    <p class="section-number">Speakers</p>
    <h2>Complimentary registrations.</h2>
  </hgroup>

  <p>
    An accepted talk comes with a complimentary registration, reserve list talks
    included. If you've already bought a ticket when your talk is accepted,
    we'll refund it.
  </p>
</section>

<section id="students" class="main">
  <hgroup>
    <p class="section-number">Students</p>
    <h2>Proof of enrollment.</h2>
  </hgroup>

  <p>
    The student rate is open to anyone enrolled at a school, college, or
    university, at any level and in any field. It isn't limited to computer
    science programs.
  </p>

  <p>
    Register as a student first, and we'll email you for proof of enrollment: a
    current student ID, or a similar document showing you're enrolled for the
    2026 to 2027 academic year. If you aren't sure whether you qualify, email
    <Link href={resolve("/about/team#contact")}>contact@pgconf.dev</Link> before you
    register and we'll give you a definitive answer.
  </p>

  <p>
    The number of student tickets is limited. Once they're gone the individual
    rate of CAD $350 applies, so register early.
  </p>
</section>
