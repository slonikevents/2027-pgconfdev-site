<!--
  @component Sponsor logos grouped by level, using the shared 2027 sponsor list.
  The compact version shows logos without descriptions on the home page.
-->

<script lang="ts">
  import Link from "$lib/Link";
  import { SPONSORS, type SponsorList } from "./sponsors";

  const {
    sponsors = SPONSORS,
    compact = false,
  }: { sponsors?: SponsorList; compact?: boolean } = $props();

  const id = $props.id();
  const levels = [
    { key: "gold", name: "Gold" },
    { key: "silver", name: "Silver" },
    { key: "bronze", name: "Bronze" },
  ] as const;
</script>

<style>
  .sponsor-tier {
    --column-width: 16rem;
    --logo-height: 8rem;
    --logo-width: 20rem;
    margin-block: var(--gap);
    border-block-start: 3px solid var(--tier-color);
    padding-block-start: var(--gap);
  }

  .sponsor-tier + .sponsor-tier {
    margin-block-start: var(--margin);
  }

  .tier-gold {
    --logo-height: 12rem;
    --logo-width: 28rem;
  }

  .tier-bronze {
    --logo-height: 4rem;
    --logo-width: 14rem;
  }

  .compact.tier-gold {
    --column-width: 24rem;
    --logo-height: 10rem;
    --logo-width: 24rem;
  }

  .compact.tier-silver {
    --logo-height: 4rem;
    --logo-width: 12rem;
  }

  .compact.tier-bronze {
    --column-width: 12rem;
    --logo-height: 2.5rem;
    --logo-width: 8rem;
  }

  h3 {
    color: var(--tier-color);
  }

  ul {
    display: grid;
    gap: var(--gap);
    grid-template-columns: minmax(0, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tier-bronze ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .compact ul {
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(100%, var(--column-width)), 1fr)
    );
  }

  li {
    margin: 0;
    min-inline-size: 0;
  }

  .logo {
    background: white;
    border: 1px solid var(--border);
  }

  .logo :global(a) {
    display: grid;
    place-items: center;
    padding: 1rem;
  }

  img {
    block-size: var(--logo-height);
    inline-size: 100%;
    max-inline-size: var(--logo-width);
    object-fit: contain;
  }

  p {
    margin-block: 1rem 0;
  }
</style>

{#each levels as { key, name } (key)}
  {#if sponsors[key].length > 0}
    <section
      class="sponsor-tier tier-{key}"
      class:compact
      aria-labelledby={`${id}-${key}`}
    >
      <h3 id={`${id}-${key}`}>{name} Sponsors</h3>
      <ul role="list">
        {#each sponsors[key] as sponsor (sponsor.name)}
          <li>
            <div class="logo">
              <Link href={sponsor.url}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
            {#if key === "gold" && !compact && sponsor.description}
              <p>{sponsor.description}</p>
            {/if}
          </li>
        {/each}
      </ul>
    </section>
  {/if}
{/each}
