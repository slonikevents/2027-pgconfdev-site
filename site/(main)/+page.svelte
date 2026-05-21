<script lang="ts">
  import banner from "./banner.svg";
</script>

<style>
  .banner {
    margin-block-end: 1.5rem;
    text-align: center;

    > img {
      max-height: 67vh;
      min-height: 34vh;
      object-fit: cover;
    }
  }
</style>

<svelte:head>
  <title>PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 will be held on May 11–14 in Montreal, QC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
  <link href="https://mastodon.social/@pgconfdev" rel="me" />
</svelte:head>

<div style:text-align="center" style:margin-block-end="1.5rem">
  <h1>PGConf.dev 2027</h1>
  <h2>
    <time datetime="2027-05-11">May 11</time><sup>th</sup>
    &ndash;
    <time datetime="2027-05-14">14</time><sup>th</sup>, 2027
  </h2>
  <h3 style:margin-block-end="0">Plaza Centre-Ville</h3>
  <h4>Montreal, QC, Canada</h4>
</div>

<div class="banner">
  <img src={banner} fetchpriority="high" alt="Banner with Vancouver Skyline" />
</div>

<p>We're headed back to Montreal in 2027!</p>

<p>
  PGConf.dev is where users, developers, and community organizers come together
  to focus on
  <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>
  development and community growth.
</p>

<p>
  Meet PostgreSQL contributors, learn about upcoming features, and discuss
  development problems with PostgreSQL enthusiasts.
</p>
