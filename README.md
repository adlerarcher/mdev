# MDEV

International market development companion to [The Thermal Underground](https://thermalunderground.org).

Live: [mdev.thermalunderground.org](https://mdev.thermalunderground.org)

## Run locally

```
npm install
npm run dev
```

## Deploy

Pushes to `main` build and deploy via GitHub Actions Pages.

### DNS

At the DNS host for `thermalunderground.org`, add:

```
CNAME  mdev  →  adlerarcher.github.io
```

Then in the repo: **Settings → Pages → Custom domain** `mdev.thermalunderground.org` (also set via `public/CNAME`), wait for verification, and enforce HTTPS.
