<script lang="ts">
  import { MessageCircle, Pin, Repeat2, Star } from "@lucide/svelte";
  import Link from "$lib/Link";
  import type { SvelteHTMLElements } from "svelte/elements";
  import type { JSON as Mastodon } from "tsl-mastodon-api";

  type Props = SvelteHTMLElements["article"] & {
    status: Mastodon.Status;
  };
  const { class: klass, status, ...rest }: Props = $props();

  const username = $derived(status.account.username);
  const href = $derived(status.url ?? undefined);
  const [attachment] = $derived(status.media_attachments);
</script>

<style>
  article {
    background-color: var(--static-bg);
    flex-flow: column;
    gap: 1rem;
  }

  [data-attachment] {
    grid-row: span 2;
  }

  .hint {
    color: var(--fg-tint);
  }

  .icon {
    size: 3rem;
  }

  hgroup {
    margin-inline-end: auto;
    overflow-wrap: anywhere;
  }

  footer :global a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--action-fg-active);
    }
  }
</style>

<article
  class={["flex", "border", { "action-acme": status.pinned }, klass]}
  data-attachment={attachment !== undefined}
  {...rest}
>
  {#if status.pinned}
    <p class="hint iconic"><Pin /> Pinned</p>
  {/if}

  <header class="iconic" style:gap="1em">
    <img class="icon" src={status.account.avatar} alt="Avatar of {username}" />

    <hgroup class="h6">
      <h3>{status.account.display_name}</h3>
      <p class="hint mono">@{username}</p>
    </hgroup>

    <a class="hint" {href} target="_blank" rel="noreferrer">
      <time>5d</time>
    </a>
  </header>

  <div class="p" style:flex="auto">
    {@html status.content}

    {#if attachment !== undefined}
      <img src={attachment.preview_url} alt={attachment.description} />
    {/if}
  </div>

  <hr aria-hidden="true" />

  <footer class="flex">
    <Link class="iconic" {href}><MessageCircle /> {status.replies_count}</Link>
    <Link class="iconic" {href}><Repeat2 /> {status.reblogs_count}</Link>
    <Link class="iconic" {href}><Star /> {status.favourites_count}</Link>
  </footer>
</article>
