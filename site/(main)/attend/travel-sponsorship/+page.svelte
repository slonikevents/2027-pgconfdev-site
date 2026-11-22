<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<style>
  .step {
    margin-inline-start: calc(0.5em - 1.5px);
    padding-inline-start: calc(1em - 1.5px);
  }
</style>

<svelte:head>
  <title>Travel Sponsorship — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The PGConf.dev 2027 travel sponsorship program."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Travel Sponsorship</li>
</BreadcrumbNav>

<header class="(main)">
  <hgroup>
    <p class="action">Travel Sponsorship</p>
    <h1>Program Description.</h1>
  </hgroup>
</header>

<hr class="section" />

<SectionNav />

<nav aria-labelledby="on-this-page" class=") note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#overview">Program Overview</a></li>
    <li><a class="li-number" href="#eligibility">Eligibility</a></li>
    <li><a class="li-number" href="#rules">Rules</a></li>
    <li>
      <a class="li-number" href="#applications">Application Process</a>
    </li>
  </ol>
</nav>

<section id="overview" class="*:main">
  <hgroup>
    <p class="section-number">Program Overview</p>
  </hgroup>

  <p class="lede">
    The Travel Sponsorship program provides travel sponsorship to PGConf.dev
    2027 for those who can't easily pay to attend to travel to the conference.
  </p>
</section>

<section id="eligibility" class="*:main">
  <hgroup>
    <p class="section-number">Eligibility</p>
  </hgroup>

  <p class="lede">
    Sponsorship is available for attendees whose employers can't or won't pay
    for them to attend the conference. Attendees should fall into one of the
    following categories
  </p>
  <ol>
    <li>Speakers with an accepted session</li>
    <li>
      People who play an important role in the community such as maintainers of
      an eco-system project
    </li>
    <li>
      People identified as an up-and-coming PostgreSQL hacker or community
      organizer who the community wants to sponsor and encourage to become more
      involved
    </li>
  </ol>
</section>

<section id="rules" class="*:main">
  <hgroup>
    <p class="section-number">Rules</p>
  </hgroup>
  <ul>
    <li>
      Sponsored attendees can not advertise an employer/company on their badge,
      slides or posters
    </li>
    <li>
      Sponsored attendees can not be promoting, or acting on behalf of, their
      employer at the conference venue and at activities arranged by conference
      organizers
    </li>
  </ul>
</section>

<section id="decisions" class="*:main">
  <hgroup>
    <p class="section-number">Decisions</p>
  </hgroup>
  <p>
    Travel sponsorship decisions will be made after the <Link
      href={resolve("/program")}>call-for-papers</Link
    >
    closes. The amount of travel sponsorships available are dependent on the amount
    of money raised through conference sponsorships. Travel sponsorship applicants
    will be informed of decisions as they are made in the February to April time frame.
  </p>
  <p>
    Sponsorship decisions will be made by the travel sponsorship selection
    committee consisting of
  </p>
  <ul>
    <li>TBD</li>
    <li>TBD</li>
    <li>TBD</li>
  </ul>
</section>

<section id="applications" class="*:main">
  <hgroup>
    <p class="section-number">Application Process</p>
  </hgroup>

  <p class="lede">
    We recommend that travel sponsorship applicants apply for the travel grant
    prior to the Jan 12 2027 CFP deadline. Sponsorship Applicants should
    complete the below application.
  </p>

  <Link
    href="https://docs.google.com/forms/d/e/1FAIpQLSe0PZHVKvj_OcTKquAELl9Idbqy4x7XZrF8w7wlUvb3Akyjyg/viewform?usp=header"
    class="button circle delete stroke">Apply</Link
  >
</section>
