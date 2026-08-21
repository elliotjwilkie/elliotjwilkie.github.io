# Teen Medic Talks

A static site built with [Eleventy](https://www.11ty.dev/). Pages live in `src/`,
blog posts are Markdown files in `src/posts/`, and there's a browser-based
editor at `/admin` (powered by [Decap CMS](https://decapcms.org/)) so you can
publish without touching code.

Full step-by-step setup is in the chat where this was built. Quick reference:

## Local preview
```
npm install
npm start        # serves at http://localhost:8080 with live reload
```

## Build
```
npm run build     # outputs static files to _site/
```

## Structure
- `src/index.njk`, `src/blog.njk`, `src/gallery.njk` — the three main pages
- `src/posts/*.md` — one file per blog post, add a new one to publish
- `src/_data/gallery.json` — the list of gallery photos
- `src/_includes/base.njk`, `post.njk` — shared layouts
- `src/css/style.css` — all site styling
- `src/admin/` — the Decap CMS editor (`config.yml` needs your GitHub repo name)
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on every push to `main`
