# anshuazad.github.io

Personal portfolio — [anshuazad.github.io](https://anshuazad.github.io).
Astro static site, deployed to GitHub Pages by GitHub Actions on push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # validates content frontmatter, outputs to dist/
npm run preview  # serve the built output
```

## Adding a project

1. Copy `src/content/projects/_template.md` to a new file in the same folder.
   The filename becomes the URL (`my-project.md` → `/projects/my-project/`).
   Files starting with `_` are ignored by the loader.
2. Fill in the frontmatter and write the body. The template's section order
   (Problem → Data → Approach → Results → What didn't work → Limitations)
   exists on purpose — the baseline and the failures are what make a writeup
   credible.
3. Set `draft: false` to publish it, and `order` to position it on the home
   page (lower first).
4. Run `npm run build`. The frontmatter is schema-validated, so the build fails
   loudly on a typo rather than shipping a broken page.

Working notes belong in the optional `todo:` frontmatter field, not in an HTML
comment in the body — frontmatter is data and never reaches the page, whereas a
Markdown `<!-- comment -->` is passed straight through to the published HTML
source.

Three stubs (`swing-trading`, `algo-trading`, `routebite`) are checked in as
`draft: true` with frontmatter only. Each carries a `todo:` note pointing at the
source material in its own repo.

## Editing everything else

| What | Where |
| --- | --- |
| Name, headline, pitch, links, résumé | `src/data/profile.ts` |
| Roles and client engagements | `src/data/experience.ts` |
| Skill groups | `src/data/skills.ts` |
| Awards and competitions | `src/data/achievements.ts` |
| Colours, type scale, spacing | `src/styles/global.css` (tokens at the top) |
| Meta tags, Open Graph, JSON-LD | `src/layouts/Base.astro` |

## Résumé

`profile.resume` is `null`, so no résumé link renders. To add one, put the PDF
in `public/` and set `profile.resume` to its path (e.g. `'/resume.pdf'`).

Note: the current source PDF contains a personal phone number. Publishing it
puts that number on an indexable, scrapeable URL — export a version without it
first.

## Social share image

`public/og.png` is the card that renders when the URL is pasted into LinkedIn,
Slack or WhatsApp. It is generated from `tools/og-card.html` — edit that file
and re-run:

```bash
"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
  --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --screenshot=public/og.png \
  "file://$PWD/tools/og-card.html"
```

Any Chromium binary works in place of Brave.
