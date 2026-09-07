---
title: Customer Churn Prediction
blurb: A churn model built baseline-first, where the reported lift is measured against the simplest rule that already worked.
stack: [Python, pandas, scikit-learn, XGBoost]
thumbnail: /thumbs/churn-prediction.svg
domain: Placeholder domain
featured: true
draft: false
order: 1
todo: >-
  Placeholder entry. Replace the body with a real project, add `metrics` with
  genuine figures, add `repo` if the source is public, and delete the
  Placeholder note at the top of the body.
---

> **Placeholder entry.** This is a structural template, not a finished
> writeup — it shows the shape a project page takes here. Replace it with a
> real project.

## Problem

Subscription businesses lose revenue to churn that is often predictable weeks
before it happens. The question worth answering is not "can we predict churn"
— usually yes — but **whether a model beats the retention team's existing
heuristic** by enough to justify running it.

Name the person who would act on the output. If no one would change a decision
based on it, the model is not worth building.

## Data

State the source, the row count, and the time span. Then state the leakage
risks explicitly:

- **Target leakage** — features recorded after the churn event, such as a
  cancellation-flow interaction.
- **Look-ahead bias** — aggregates computed over the full history rather than
  only data available at prediction time.
- **Train/test contamination** — the split must be by time, and often by
  customer, so the same account cannot appear on both sides.

## Approach

**Baseline first.** The dumb thing any reasonable person would try: flag
accounts with no activity in 30 days. Report that number before anything else,
because every later result is measured against it.

Then the model: feature engineering, class-imbalance handling, and a threshold
chosen from the cost of a false positive versus a missed churner — not from
maximising F1 by default.

## Results

State the metric, the baseline it beats, and the confidence interval. A single
number with no comparison and no uncertainty is not a result.

## What didn't work

The most credible section on the page. Record the approaches that failed and
why — an oversampling strategy that inflated validation scores, a feature that
turned out to be leakage, a threshold that looked good offline and was
unusable in practice.

## Limitations

Where the model should not be trusted: population drift, segments with thin
data, and the horizon beyond which the prediction decays.
