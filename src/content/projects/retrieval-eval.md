---
title: Retrieval Evaluation Harness
blurb: An offline evaluation harness for a retrieval-augmented system, built so that a release can be blocked on evidence.
stack: [Python, pytest, LLM APIs, DuckDB]
thumbnail: /thumbs/retrieval-eval.svg
domain: Placeholder domain
featured: false
draft: false
order: 3
todo: >-
  Placeholder entry. Replace the body with a real project, add `metrics` with
  genuine figures, add `repo` if the source is public, and delete the
  Placeholder note at the top of the body.
---

> **Placeholder entry.** This is a structural template, not a finished
> writeup — it shows the shape a project page takes here. Replace it with a
> real project.

## Problem

Retrieval-augmented systems are easy to demo and hard to trust. Without an
evaluation harness, every release decision comes down to whether the answers
looked good to whoever tried them that morning.

The goal is a harness that can **block a release** — which means it has to
produce a number someone is willing to be held to.

## Data

A fixed evaluation set of questions with known-good answers and known source
documents. State how it was constructed and, importantly, who reviewed it —
an eval set assembled by the same person who built the system inherits that
person's blind spots.

## Approach

**Baseline first.** Measure retrieval alone before measuring the generated
answer: if the right document is not in the retrieved set, no amount of prompt
work fixes the response.

Layer the metrics:

- **Retrieval** — recall@k and MRR against the labelled source documents.
- **Grounding** — whether claims in the answer are supported by retrieved text.
- **Regression gates** — thresholds that fail the build rather than producing
  a dashboard nobody reads.

If an LLM is used as a judge, validate the judge against human labels and
report that agreement. An unvalidated judge is a number, not a measurement.

## Results

Report each layer separately. An end-to-end score that mixes retrieval failure
with generation failure tells you something is wrong but not what to fix.

## What didn't work

Record what failed: a judge prompt that scored fluency rather than accuracy, an
eval set too easy to discriminate between versions, or a metric that improved
while user-reported quality did not.

## Limitations

Eval-set coverage, drift as the corpus changes, and the gap between offline
scores and what users actually experience.
