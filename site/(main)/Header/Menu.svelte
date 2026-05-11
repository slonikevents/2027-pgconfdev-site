<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { tick } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";
  import { getContext } from "./context";

  type Props = SvelteHTMLElements["ul"] & { name: string };
  const { name, class: klass, children, ...rest }: Props = $props();
  const id = $props.id();

  const context = getContext();
  const open = $derived(context.menu === id ? true : undefined);

  let button: HTMLButtonElement;

  async function toggle(button: HTMLButtonElement) {
    context.menu = context.menu === id ? null : id;

    const source = button.getBoundingClientRect().top;
    await tick();
    const target = button.getBoundingClientRect().top;
    if (target < 0) window.scrollBy(0, target - source);
  }
</script>

<style>
  div {
    position: relative;
  }

  button {
    --bg-tint: var(--static-bg-tint);
    --fg: inherit;
    box-shadow: none;
    justify-content: space-between;
    margin-inline: calc(-2em * var(--button-size));
    width: stretch;

    > :global(.icon) {
      transition-property: transform;
    }

    &[aria-expanded="true"] > :global(.icon) {
      transform: rotate(180deg);
    }
  }

  ul {
    margin-block: 0.5em;
    padding-block: 0.5em;

    @media (width >= 48rem) {
      box-shadow: 0 1.5rem 3rem -1.5rem
        color-mix(in oklch, var(--static-fg) 40%, transparent);
      overflow: auto;
      position: absolute;

      padding-block: 1.125em;
      right: calc(-0.5 * var(--gap));
      width: 15rem;
    }
  }
</style>

<svelte:window
  onclick={(e) => {
    const target = e.target as Element;
    if (!open) return;
    if (button.contains(target) || target.closest(`#menu-${id}`) !== null)
      return;
    context.menu = null;
  }}
/>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class={["note", klass]}
  onkeydown={(e) => {
    if (!open || e.key !== "Escape") return;
    context.menu = null;
    button.focus();
    e.stopPropagation();
  }}
>
  <button
    aria-controls="menu-{id}"
    aria-expanded={open === true}
    aria-labelledby="name-{id}"
    bind:this={button}
    class="iconic stroke"
    onclick={(e) => toggle(e.currentTarget)}
  >
    <span id="name-{id}">{name}</span>
    <ChevronDown />
  </button>

  <ul
    class="band@-48 action-acme@48- border@48- static-area@48-"
    hidden={!open}
    id="menu-{id}"
    {...rest}
  >
    {@render children?.()}
  </ul>
</div>
