import { createRawSnippet } from "svelte";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-svelte";
import Link from "./Root.svelte";

// $app/state has no actual `page.url` in a component test
vi.mock("$app/state", () => ({
  page: { url: new URL("https://2027.pgconf.dev/active") },
}));

const children = createRawSnippet(() => ({
  render: () => `<span>label</span>`,
}));

describe("Link", () => {
  it('sets aria-current="page" when it targets the active page', async () => {
    const screen = await render(Link, { href: "/active", children });
    const link = screen.getByRole("link");
    await expect.element(link).toHaveAttribute("aria-current", "page");
  });

  it("omits aria-current when it targets another page", async () => {
    const screen = await render(Link, { href: "/inactive", children });
    const link = screen.getByRole("link");
    await expect.element(link).not.toHaveAttribute("aria-current");
  });

  it("omits target when it targets an internal origin", async () => {
    const screen = await render(Link, { href: "/inactive", children });
    const link = screen.getByRole("link");
    await expect.element(link).not.toHaveAttribute("target");
  });

  it('sets target="_blank" when it targets an external origin', async () => {
    const screen = await render(Link, {
      href: "https://example.com/",
      children,
    });
    const link = screen.getByRole("link");
    await expect.element(link).toHaveAttribute("target", "_blank");
  });

  it("omits target when it targets a non-http(s) scheme", async () => {
    const screen = await render(Link, {
      href: "mailto:hi@example.com",
      children,
    });
    const link = screen.getByRole("link");
    await expect.element(link).not.toHaveAttribute("target");
  });
});
