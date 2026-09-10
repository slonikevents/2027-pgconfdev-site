<script>
  import { Building2, MapPin } from "@lucide/svelte";
  import { Mastodon } from "$lib/icon";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";
  import Avatar from "./Avatar";

  const { BreadcrumbNav, SectionNav } = getContext();
</script>

<svelte:head>
  <title>Team — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The volunteers who organize PGConf.dev — the organizing committee behind the 2027 conference, and how to reach them."
  />
</svelte:head>

<BreadcrumbNav>
  <li>Team</li>
</BreadcrumbNav>

<SectionNav class="( main)" />

<section class="main)">
  <h1>The Organizing Committee.</h1>

  <p class="lede mute text">
    No paid staff. These volunteers handle the program, logistics, and
    sponsorship between them.
  </p>

  <div class="grid-3:4@-30 grid+12@30-">
    <Avatar name="Andrey Borodin">
      <hgroup class="h5">
        <p class="delete">Responsibility TBD</p>
        <h2>Andrey Borodin</h2>
      </hgroup>

      <ul class="dedent">
        <li class="iconic">
          <MapPin /> Yekaterinburg, RU
        </li>
      </ul>
    </Avatar>

    <Avatar name="Kaiting Chen">
      <hgroup class="h5">
        <p>Operations · Tech</p>
        <h2>Kaiting Chen</h2>
      </hgroup>

      <ul class="dedent">
        <li class="iconic"><Building2 />Domino Data Lab</li>
        <li class="iconic"><MapPin />Philadelphia, PA</li>
      </ul>
    </Avatar>

    <Avatar name="Jonathan Katz">
      <hgroup class="h5">
        <p>Sponsors</p>
        <h2>Jonathan Katz</h2>
      </hgroup>

      <ul class="dedent">
        <li class="iconic"><Building2 />Databricks</li>
        <li class="iconic"><MapPin />New York, NY</li>
      </ul>
    </Avatar>

    <Avatar name="Tristan Partin">
      <hgroup class="h5">
        <p class="delete">Responsibility TBD</p>
        <h2>Tristan Partin</h2>
      </hgroup>

      <ul class="dedent">
        <!-- Affiliation -->
        <li class="iconic"><MapPin />Austin, TX</li>
      </ul>
    </Avatar>

    <Avatar name="Melanie Plageman">
      <hgroup class="h5">
        <p>Content</p>
        <h2>Melanie Plageman</h2>
      </hgroup>

      <ul class="dedent">
        <li class="iconic">
          <Building2 /> Microsoft
        </li>
        <li class="iconic">
          <MapPin /> Philadelphia, PA
        </li>
      </ul>
    </Avatar>

    <Avatar name="Gwen Shapira">
      <hgroup class="h5">
        <p>Marketing</p>
        <h2>Gwen Shapira</h2>
      </hgroup>

      <ul class="dedent">
        <li class="iconic">
          <Building2 /> Nile
        </li>
        <li class="iconic">
          <MapPin /> Cupertino, CA
        </li>
      </ul>
    </Avatar>

    <Avatar name="Steve Singer">
      <hgroup class="h5">
        <p>Finance · Legal</p>
        <h2>Steve Singer</h2>
      </hgroup>

      <ul class="dedent">
        <li class="iconic">
          <Building2 /> Nav Technologies
        </li>
        <li class="iconic">
          <MapPin /> Toronto, ON
        </li>
      </ul>
    </Avatar>
  </div>
</section>

<section id="contact" class="main)">
  <h2>How to reach us.</h2>

  <p class="text">
    We'd love to hear from you with questions, comments, or anything else about
    the conference.
  </p>

  <p class="mono">
    <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a>
  </p>

  <p class="text">
    Schedule changes, deadlines, and travel notes get posted to
    <Link href={Mastodon.href}>@pgconfdev</Link> on Mastodon as they happen. During
    the conference itself, the registration desk is staffed the whole time the venue
    is open, and is the fastest way to find an organizer.
  </p>
</section>
