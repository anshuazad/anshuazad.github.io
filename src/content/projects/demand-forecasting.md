---
title: Retail Demand Forecasting
blurb: A SKU-level forecasting pipeline evaluated with rolling-origin backtests rather than a single held-out split.
stack: [Python, pandas, statsmodels, LightGBM]
thumbnail: /thumbs/demand-forecasting.svg
domain: Placeholder domain
featured: false
draft: false
order: 2
todo: >-
  Placeholder entry. Replace the body with a real project, add `metrics` with
  genuine figures, add `repo` if the source is public, and delete the
  Placeholder note at the top of the body.
---

> **Placeholder entry.** This is a structural template, not a finished
> writeup — it shows the shape a project page takes here. Replace it with a
> real project.

## Problem

Inventory decisions need a forecast per SKU per location, and the cost of
error is asymmetric: understocking loses a sale, overstocking ties up capital
and may end in markdown. A forecast optimised for symmetric error is
optimising the wrong thing.

## Data

Transaction history at SKU-location-week granularity, plus a calendar of
promotions and holidays. Note the sparsity — a long tail of SKUs will have too
few observations to model individually, and how you handle them matters more
than the model choice.

## Approach

**Baseline first.** Seasonal naive: this week last year, or a trailing median.
Many production forecasting systems do not beat it, and publishing that number
first keeps the rest of the work honest.

Evaluation uses **rolling-origin backtests** across multiple forecast origins,
not one held-out tail. A single split on time series measures luck as much as
skill.

## Results

Report error by horizon, not just in aggregate — one-week and eight-week
accuracy are different products. Compare against the seasonal-naive baseline
at every horizon.

## What didn't work

Record the failures: a global model that lost to per-series models on
high-volume SKUs, promotional features that leaked, or a hierarchy
reconciliation step that improved aggregate error while making store-level
forecasts worse.

## Limitations

New products with no history, structural breaks the model cannot see, and the
horizon past which the forecast is no better than the baseline.
