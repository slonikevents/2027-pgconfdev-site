<!--
  @component Sponsor logos grouped by level, using the shared 2027 sponsor list.
  The compact version omits Gold descriptions for the home page.
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

  [data-tier="gold"] {
    --tier-color: oklch(0.72 0.13 85);
    --column-width: 20rem;
    --logo-height: 12rem;
    --logo-width: 28rem;
  }

  [data-tier="silver"] {
    --tier-color: oklch(0.62 0.02 245);
  }

  [data-tier="bronze"] {
    --tier-color: oklch(0.58 0.09 50);
    --column-width: 12rem;
    --logo-height: 4rem;
    --logo-width: 14rem;
  }

  .compact[data-tier="gold"] {
    --logo-height: 8rem;
    --logo-width: 22rem;
  }

  .compact[data-tier="silver"] {
    --logo-height: 4rem;
    --logo-width: 16rem;
  }

  .compact[data-tier="bronze"] {
    --logo-height: 3rem;
    --logo-width: 12rem;
  }

  h3 {
    font-size: var(--h4-size);
  }

  ul {
    display: grid;
    gap: var(--gap);
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(100%, var(--column-width)), 1fr)
    );
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [data-tier="gold"]:not(.compact) ul {
    grid-template-columns: 1fr;
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
      class="sponsor-tier"
      class:compact
      data-tier={key}
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
