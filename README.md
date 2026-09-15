# MDEV

International market development ([mdev.thermalunderground.org](https://mdev.thermalunderground.org); also nested at AADOE `/mdev/`).

Home is the energy program chooser. Geothermal opens the animated world map; country profiles keep market briefs and list military bases where the public inventory has them.

## Routes

- `/` — program chooser
- `/geothermal/` — geothermal world map
- `/geothermal/markets` — country index
- `/geothermal/markets/:slug` — country profile (+ military bases)
- `/geothermal/developments` — recent developments

## Run locally

```
npm install
npm run dev
```

Preview defaults to `http://127.0.0.1:4177/`.
