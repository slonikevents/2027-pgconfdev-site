import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import staticAdapter from "@sveltejs/adapter-static";

/**
 * Wraps `@sveltejs/adapter-static`, running Pagefind on the static site. The
 * search bundle is emitted into both the adapter output (`pages`, for deploy)
 * and `<kit.outDir>/output/client` (so `vite preview` serves it).
 *
 * @param {Parameters<typeof staticAdapter>[0]} [options]
 * @returns {import("@sveltejs/kit").Adapter}
 */
export default function (options) {
  const { pages = "build" } = options ?? {};

  const instance = staticAdapter(options);

  /** @param {import("@sveltejs/kit").Builder} builder */
  async function adapt(builder) {
    await instance.adapt(builder);

    const { createIndex, close } = await import("pagefind");
    let { errors, index } = await createIndex();
    if (index === undefined || errors.length > 0)
      throw new Error(errors.join("\n"));

    const { base } = builder.config.kit.paths;
    for (const name of await readdir(pages, { recursive: true })) {
      if (!name.endsWith(".html")) continue;

      var url = `${base}/${name}`;
      url = url.replace(/(?<=\/)index\.html$/, "");
      url = url.replace(/\.html$/, "");

      const content = await readFile(join(pages, name), "utf8");

      const { errors } = await index.addHTMLFile({ url, content });
      if (errors.length > 0) throw new Error(errors.join("\n"));
    }

    const client = builder.getClientDirectory();
    await Promise.all([
      index.writeFiles({ outputPath: join(client, "pagefind") }),
      index.writeFiles({ outputPath: join(pages, "pagefind") }),
    ]);
    await close();
  }

  return { ...instance, name: "adapter-pagefind", adapt };
}
