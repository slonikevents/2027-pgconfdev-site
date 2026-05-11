PGConf.dev 2027 Static Site
===========================

[![Deploy to GitHub Pages](https://github.com/slonikevents/2027-pgconfdev-site/actions/workflows/main.yaml/badge.svg)](https://github.com/slonikevents/2027-pgconfdev-site/actions/workflows/main.yaml)

This is the source code of the PGConf.dev 2027 static site. The entire site is
rendered with [Svelte], [SvelteKit], and [adapter-static].

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Developing](#developing)
- [Building](#building)
- [Publishing](#publishing)
- [Content](#content)

Prerequisites
-------------

- NodeJS ≥ 20
- `npm`

### macOS

Install with [Homebrew]:

```bash
brew install node
```

### Debian/Ubuntu

Install via `apt`:

```bash
sudo apt install nodejs npm
```

Setup
-----

Clone the repository and navigate into it:

```bash
git clone git@github.com:slonikevents/2027-pgconfdev-site.git
cd 2027-pgconfdev-site
```

Install dependencies:

```bash
npm install
```

On success, the output should resemble:

```
added 238 packages, and audited 239 packages in 2s

found 0 vulnerabilities
```

Developing
----------

To start a development server:

```bash
npm run dev
```

Or to start the server and open the site in a new browser tab:

```bash
npm run dev -- --open
```

The development server supports hot module replacement (HMR). When files change,
it uses a WebSocket connection to push updates or trigger a full browser reload,
so no manual refresh is required, assuming the filesystem supports native watch
events.

Before pushing a change or submitting a PR, run:

```bash
npm run check
npm run format
npm run lint
npm test
```

This ensures your code is properly formatted and free of common issues.

`npm test` runs the component tests in a real browser, through [Vitest]'s
browser mode on WebKit, so install that browser once after `npm install`:

```bash
npx playwright install webkit
```

A test file sits beside the component it covers and ends in `.svelte.test.ts`,
e.g. [`/common/Link/Root.svelte.test.ts`].

Building
--------

The site served by the development server closely matches the production build,
so building isn't typically required during development.

Regardless, to generate a production build:

```bash
npm run build
```

You can preview this with `npm run preview`.

Publishing
----------

Simply push, or submit a pull request, to the `main` branch to publish the site.
The "[Deploy to GitHub Pages]" workflow in GitHub Actions listens for changes on
this branch.

Content
-------

Keep it simple; this site is designed to be editable by non-technical people.
When in doubt, write normal HTML and CSS.

How the source tree is laid out, how to add a page, how to reference a static
asset, and every CSS utility the site is built from are documented on the
site itself, at [`/readme`]. Run the development server and visit
<http://localhost:5173/readme>.

Text should be written in [Standard Canadian English]. In Vim, this is `set
spell spelllang=en_ca`.

Ensure your content is accessible and responsive across both small and large
screens. Target breakpoints are `48rem`, `64rem`, and `80rem`.

Use semantic HTML. Eschew `<div>`, `<span>`, etc. when a [more appropriate
element] exists.

[Svelte]: https://svelte.dev/docs/svelte/overview
[SvelteKit]: https://svelte.dev/docs/kit/introduction
[adapter-static]: https://svelte.dev/docs/kit/adapter-static
[Homebrew]: https://brew.sh/
[Deploy to GitHub Pages]: https://github.com/slonikevents/2027-pgconfdev-site/actions/workflows/main.yaml
[Vitest]: https://vitest.dev/guide/browser/
[`/common/Link/Root.svelte.test.ts`]: /common/Link/Root.svelte.test.ts
[`/readme`]: /site/readme
[Standard Canadian English]: https://en.wikipedia.org/wiki/Standard_Canadian_English
[more appropriate element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
