# Ben Willcox Portfolio

Employer-facing portfolio for Ben Willcox's data science, machine learning, and
analytics projects. The site is a static Parcel application published with
GitHub Pages.

## Project framing

The portfolio separates three states:

- **Live** for a deployed, usable application.
- **In progress** for implemented work that still has a material proof or
  reliability gap.
- **Planned** inside a project card for work that is visible on a roadmap but
  not presented as complete.

Project claims should stay aligned with the linked repositories and deployed
demos. In particular:

- ValoMapped's external collection is paused; its strongest current evidence is
  the reproducible temporal model evaluation.
- World Cup Draw uses static, versioned inputs and does not claim uniform
  sampling over all legal draws.
- HoopStats has an implemented heuristic box-score extension, but still needs a
  concise public benchmark on a clearly scoped sample.
- Voting Paradigm has live methods, districting, and public preference-replay
  demos. Its Liquid Democracy route is a planned placeholder.

## Local development

Requirements: Node.js 18+ and npm.

```bash
npm ci
npm start
```

Parcel serves the site at the URL printed in the terminal, normally
`http://localhost:1234`.

## Verification

```bash
npm test
npm run gh-pages-build
```

`npm test` checks the portfolio's tab/panel contracts and the deep links used by
the World Cup and Voting Paradigm embeds. The production build copies the
self-contained HoopStats report into `dist/assets/hoopstats/`.

## Résumé asset

`src/assets/resume.pdf` is a PDF export of the canonical generic
[`Ben_Willcox_Resume`](https://docs.google.com/document/d/1vd4lq9OxDnHliTiWZBYCyTGjsc6wZC1cSTn0f9rR33k)
Google Doc. Export from that document rather than editing the tracked PDF
directly.

## Deployment

The repository's GitHub Pages workflow builds with:

```bash
npm run gh-pages-build
```

The published site is
[bendotwillcox.github.io/portfolio](https://bendotwillcox.github.io/portfolio/).

## Credits

The original layout is based on
[Simplefolio](https://github.com/cobidev/simplefolio) and retains its license in
[`LICENSE.md`](LICENSE.md).
