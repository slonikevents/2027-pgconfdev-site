# Design Decisions

12-column grid. 8 on tablet. 4 on mobile.

Standard spacing is 1.5rem; spacing is in increments of 0.25rem:

1. 1.5rem gap between columns
2. 1.5rem margin after each block of content
3. 1.25em between paragraphs

Standard line-height is 1.5

# Color System Design Decisions

## 1. Four seed colors

The system has four seed colors, one per semantic role. The seeds themselves are CSS custom properties named `--action`, `--notice`, `--positive`, and `--negative`. They are not used directly — every visible color is derived from them.

- **`--action` — interaction.** What you act on. Links, buttons, focus rings, selection. The color that signals "this is actionable" or "the system is addressing you." The action seed also drives the neutral substrate (page background, text at all levels, surfaces, borders, code background) via heavy chroma reduction — every neutral carries a faint residue of the action hue for cohesion.
- **`--notice` — attention.** What you should notice. `<mark>`, warnings, "new" badges, importance signals. Non-interactive — meant to be seen, not clicked.
- **`--positive` — affirmation.** What succeeded or is true. `<ins>`, success states, confirmation. Descriptive, not directive.
- **`--negative` — refutation.** What failed or is gone. `<del>`, errors, danger states. Descriptive, not directive.

## 2. Seeds are hue anchors

A seed establishes:

- **Hue** authoritatively.
- **Lightness** loosely, as a sanity anchor.
- **Chroma** loosely, as an offset reference for derivation recipes — not as a constraint.

Seeds are never used directly. Every visible color is a derivation.

## 3. Token inventory: 17 derived tokens

Names follow the convention `--<job>-<role>[-<modifier>]`, where neutral tokens omit the job prefix (they are the unmarked default).

### Neutral

- `--bg` — page background
- `--bg-tint` — alternate neutral surface (banded sections, card fills, footers, inputs)
- `--fg` — body text
- `--fg-mute` — secondary text
- `--fg-tint` — tertiary text
- `--border` — dividers and outlines

### Code

- `--code-bg` — inline and block code background

### Action

- `--action-fg` — interactive foreground (links, button bg, focus)
- `--action-fg-hover` — interaction state
- `--action-bg-mute` — soft action wash (selection, button hover surface)

### Notice

- `--notice-fg` — foreground (badges, accent labels)
- `--notice-bg` — loud notice background (`<mark>`)
- `--notice-bg-mute` — quiet notice wash (warning callouts)

### Positive

- `--positive-fg` — affirmation foreground (`<ins>`, success text)
- `--positive-bg-mute` — soft affirmation wash (success callouts)

### Negative

- `--negative-fg` — refutation foreground (`<del>`, error text)
- `--negative-bg-mute` — soft refutation wash (error callouts)

## 4. Suffix vocabulary

Three suffixes, each doing a distinct job:

- `mute` — one step quieter than the default. Used on foregrounds and on hued backgrounds.
- `tint` — a softer parallel variant of the default. On text foregrounds it means two steps quieter (`--fg-tint`); on backgrounds it means a parallel neutral surface (`--bg-tint`).
- `hover` — interaction state. Only on `--action-fg`.

## 5. Derivation recipes use relative mixes, not absolute deltas

Derivation recipes are expressed as mixes toward `--ink`, `--bg`, or `transparent` — not as absolute lightness deltas in oklch. This keeps recipes:

- **Mode-portable.** The same formula works in light and dark mode because the mix partner is what flips.
- **Hue-portable.** The same formula produces consistent perceptual results across the four seeds because each seed's own lightness scales the result.

Per-seed overrides are allowed only where the perceptual mismatch is too large to absorb.

## Seed values

The `--action` seed is fixed (preserved from input #336791, with chroma boosted from 0.0875 to 0.12 for usable presence in derived tokens). The other three seeds below are **provisional starting points** to be hand-tuned against real content.

```css
--action: oklch(0.4973 0.12 245.25);

/* Provisional — tune by hand */
--notice: oklch(0.8 0.14 80.25);
--negative: oklch(0.58 0.14 28.82);
--positive: oklch(0.58 0.14 142.14);
```

## Substrate anchors

```css
:root {
  --fg: oklch(0.2 0.01 245.25);
  --bg: white;
}

@media (prefers-color-scheme: dark) {
  :root {
    --fg: oklch(0.95 0.01 245.25);
    --bg: oklch(0.15 0.01 245.25);
  }
}
```

## Open items

- Hand-tune the notice, positive, and negative seeds against real content
- Derivation recipes for all 17 tokens (mix percentages, hover deltas, etc.)
- Per-seed validation against real content on a sample page
- Possible dark-mode seed lifts (seeds may need lightness boosts on dark `--bg`)

## Example Starting Point

```css
:root {
  /* Substrate anchors */
  --bg: light-dark(white, oklch(0.15 0.01 245.25));
  --ink: light-dark(oklch(0.15 0.01 245.25), white);
  --fg: light-dark(oklch(0.2 0.01 245.25), oklch(0.95 0.01 245.25));

  /* Seeds (provisional — tune by hand) */
  --action: oklch(0.4973 0.12 245.25);
  --notice: oklch(0.8 0.14 80.25);
  --negative: oklch(0.58 0.14 28.82);
  --positive: oklch(0.58 0.14 142.14);

  /* ---- Neutral ---- */
  /* Parallel neutral surface: a hair toward ink from --bg */
  --bg-tint: color-mix(in oklch, var(--bg), var(--ink) 4%);

  /* Text steps: --fg is the anchor; mute and tint mix toward --bg */
  --fg-mute: color-mix(in oklch, var(--fg), var(--bg) 35%);
  --fg-tint: color-mix(in oklch, var(--fg), var(--bg) 60%);

  /* Dividers: heavy mix toward bg from ink */
  --border: color-mix(in oklch, var(--ink), var(--bg) 80%);

  /* ---- Code ---- */
  --code-bg: color-mix(in oklch, var(--bg), var(--action) 6%);

  /* ---- Action ---- */
  --action-fg: light-dark(
    var(--action),
    color-mix(in oklch, var(--action), white 35%)
  );
  --action-fg-hover: light-dark(
    color-mix(in oklch, var(--action), var(--ink) 15%),
    color-mix(in oklch, var(--action), white 50%)
  );
  --action-bg-mute: color-mix(in oklch, var(--action) 12%, transparent);

  /* ---- Notice ---- */
  --notice-fg: light-dark(
    color-mix(in oklch, var(--notice), var(--ink) 35%),
    var(--notice)
  );
  --notice-bg: var(--notice);
  --notice-bg-mute: color-mix(in oklch, var(--notice) 18%, transparent);

  /* ---- Positive ---- */
  --positive-fg: light-dark(
    var(--positive),
    color-mix(in oklch, var(--positive), white 25%)
  );
  --positive-bg-mute: color-mix(in oklch, var(--positive) 15%, transparent);

  /* ---- Negative ---- */
  --negative-fg: light-dark(
    var(--negative),
    color-mix(in oklch, var(--negative), white 25%)
  );
  --negative-bg-mute: color-mix(in oklch, var(--negative) 15%, transparent);
}
```
