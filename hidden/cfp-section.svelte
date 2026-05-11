<!--
  CFP callout section, previously on the home page (site/(main)/+page.svelte)
  between the "About the Conference" and "Sponsors" sections. Hidden until the
  CFP opens. Restoring it also requires re-adding the `Circle` import
  (`@lucide/svelte`) to +page.svelte's <script>, which was left in place.
-->

<section
  class="(main) border insert-edge grid-2:1@48-"
  style:align-items="center"
>
  <div class="margin-gap note">
    <hgroup class="h3">
      <p class="iconic insert">
        <Circle class="size--" style="fill: currentColor" />
        Call for Proposals — open through 14 Feb 2027
      </p>
      <h2>Submit a talk, unconference topic, or tutorial.</h2>
    </hgroup>

    <p>
      We're looking for technical talks from contributors at every level — your
      first commit, your hardest debug, the extension you wish existed. Three
      formats: 45-minute talks, 90-minute tutorials, and ad-hoc unconference
      sessions.
    </p>
  </div>

  <Link
    class="button circle"
    href={resolve("/program")}
    style="justify-self: end"
  >
    Submit a proposal
  </Link>
</section>
