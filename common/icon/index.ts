// @ts-ignore - https://github.com/sveltejs/svelte/issues/5817
import GitHubIcon, { href as githubHref } from "./GitHub.svelte";
// @ts-ignore - https://github.com/sveltejs/svelte/issues/5817
import LinkedInIcon, { href as linkedinHref } from "./LinkedIn.svelte";
// @ts-ignore - https://github.com/sveltejs/svelte/issues/5817
import MastodonIcon, { href as mastodonHref } from "./Mastodon.svelte";

export const GitHub = Object.assign(GitHubIcon, { href: githubHref });
export const LinkedIn = Object.assign(LinkedInIcon, { href: linkedinHref });
export const Mastodon = Object.assign(MastodonIcon, { href: mastodonHref });
