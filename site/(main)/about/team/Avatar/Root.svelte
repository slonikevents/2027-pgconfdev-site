<!--
  @component

  A `<figure>` that captions a person's photo.

  The selected photo is the `.jpeg` or `.png` file in this directory with base
  `name`, e.g. `Gwen Shapira.jpeg` for `name="Gwen Shapira"`. If no such file
  exists, a placeholder icon is displayed instead. Photos should be square and
  at least 400px × 400px.

  The figure's caption is rendered from `children`.
-->

<script module lang="ts">
  import type { Picture } from "@sveltejs/enhanced-img";

  const source: Record<string, Picture> = Object.fromEntries(
    Object.entries(
      import.meta.glob<Picture>("./*.{jpeg,png}", {
        eager: true,
        import: "default",
        query: { enhanced: true, w: "192;400" },
      }),
    ).map(([path, picture]) => [
      path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf(".")),
      picture,
    ]),
  );

  const sizes = [
    "(width >= 48rem) 16rem",
    "(width >= 30rem) 18rem",
    "clamp(8rem, 40vw, 12rem)",
  ].join(", ");
</script>

<script lang="ts">
  import { UserRound } from "@lucide/svelte";
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["figure"] & { name: string };
  const { class: klass, name, children, ...rest }: Props = $props();

  const src = $derived(source[name]);
</script>

<style>
  div {
    color: var(--fg-tint);
    display: grid;

    > :global(*) {
      grid-area: 1 / 1;
    }

    > :global(svg) {
      place-self: center;
      size: 60%;
    }
  }

  enhanced\:img {
    inline-size: 100%;
  }
</style>

<figure class={["column-span-2@-30", "subgrid@-30", klass]} {...rest}>
  <div class="square">
    <UserRound />

    {#if src}
      <enhanced:img alt="" loading="lazy" {sizes} {src} />
    {/if}
  </div>

  <figcaption>
    {@render children?.()}
  </figcaption>
</figure>
