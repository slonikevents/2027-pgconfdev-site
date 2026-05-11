<!--
  "Getting around" section, previously on the travel page
  (site/(main)/attend/travel/+page.svelte) between the "By train" section and
  the "Entry requirements" section. Hidden until we've confirmed the STM fare
  details for 2027. Restoring it also requires:

  - re-adding the `Bike`, `PlaneLanding`, and `Ticket` imports (`@lucide/svelte`)
    to +page.svelte's <script>, and
  - re-adding the `<li>` for `#getting-around` to the "On this page" nav.
-->

<section id="getting-around" class="*:main">
  <hgroup>
    <p class="section-number">Getting around</p>
    <h2>The métro, buses, and BIXI.</h2>
  </hgroup>

  <p>
    Montréal's transit network, the
    <Link href="https://www.stm.info/en">STM</Link>, runs the métro and city
    buses. Four métro lines cover downtown; the Orange line serves
    Square-Victoria–OACI, at the venue's door.
  </p>

  <dl class="dedent">
    <div class="p iconic">
      <dt class="iconic over">
        <Ticket class="mute" aria-hidden="true" /> Fares &amp; passes
      </dt>
      <dd>
        Buy fares at any métro station on a reusable OPUS card or a disposable
        L'Occasionnelle card. Single fares and one- and three-day passes are all
        sold; for a four-day stay a multi-day pass is usually the best value.
        See
        <Link href="https://www.stm.info/en/info/fares">current STM fares</Link
        >.
      </dd>
    </div>

    <div class="p iconic">
      <dt class="iconic over">
        <PlaneLanding class="mute" aria-hidden="true" /> From the airport
      </dt>
      <dd>
        The 747 bus fare (CAD $11) doubles as a 24-hour pass on the whole
        network, so it also covers your first day of getting around once you've
        landed.
      </dd>
    </div>

    <div class="p iconic">
      <dt class="iconic over">
        <Bike class="mute" aria-hidden="true" /> By bike
      </dt>
      <dd>
        <Link href="https://bixi.com/en">BIXI</Link> bike-share is running by May,
        with docks throughout downtown and the Quartier international.
      </dd>
    </div>
  </dl>
</section>
