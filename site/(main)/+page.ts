import type { JSON as Mastodon } from "tsl-mastodon-api";
import type { PageLoad } from "./$types";

const limit = 6;

export const load: PageLoad = ({ fetch }) => {
  async function retrieve(
    ...args: ConstructorParameters<typeof URLSearchParams>
  ): Promise<Mastodon.Status[]> {
    const origin =
      "https://mastodon.social/api/v1/accounts/111687888257105600/statuses";
    const search = new URLSearchParams(...args);
    const source = Object.assign(new URL(origin), { search });

    const response = await fetch(source);
    if (!response.ok)
      throw new Error(`Failed to load statuses: ${response.status}`);
    return await response.json();
  }

  const statuses = Promise.all([
    retrieve({ pinned: "true", limit: String(limit) }),
    retrieve({
      exclude_reblogs: "true",
      exclude_replies: "true",
      limit: String(limit),
    }),
  ]).then(([pinnedStatuses, recentStatuses]) => {
    const result = new Map<string, Mastodon.Status>();

    // Pinned is stupidly unset on anonymous requests
    for (const status of pinnedStatuses)
      result.set(status.id, Object.assign(status, { pinned: true }));

    // Don't clobber pinned with a more recent status
    for (const status of recentStatuses) {
      if (!result.has(status.id)) result.set(status.id, status);
    }

    return [...result.values()].slice(0, limit);
  });

  // See https://svelte.dev/docs/kit/load#Streaming-with-promises
  return { statuses: statuses.catch(() => []) };
};
