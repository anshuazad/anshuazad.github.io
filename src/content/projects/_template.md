---
title: Project name
blurb: One sentence that leads with the outcome, not the method.
period: Month Year – Month Year
stack: [Python, pandas, scikit-learn]
metrics:
  - label: ROC-AUC
    value: 0.83 vs 0.71 baseline
  - label: Dataset
    value: 1.2M rows
repo: https://github.com/anshuazad/repo-name
featured: false
draft: true
order: 99
---

## Problem

What was actually broken or unknown, and who would care about the answer. One
paragraph. If you cannot name someone who would use the result, pick a
different project.

## Data

Source, size, and time span. State the leakage risks up front — look-ahead
bias, target leakage, train/test contamination — and how the split avoids them.

## Approach

**Baseline first.** Name the dumb thing that any reasonable person would try
(predict the mean, buy and hold, keyword match) and its score. Everything after
this is measured against that number.

Then the actual approach, and why this method over the obvious alternatives.

## Results

The honest comparison against the baseline. Report the metric that matches the
decision being made, not the one that looks best. Include a confidence interval
or a variance estimate — a single number from a single split is not a result.

## What didn't work

The section almost nobody writes, and the reason a reader will trust the rest.
Failed approaches, and what the failure taught you about the problem.

## Limitations

Where this breaks, what you would need to deploy it, and what you would do with
another two weeks.
