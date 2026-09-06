---
title: Swing Trading Research Harness
blurb: A backtesting harness rebuilt evaluator-first, after four strategies that looked profitable turned out to be losing to buy-and-hold.
period: 2024 – 2026
stack: [Python, pandas, NumPy, Optuna, DhanHQ API]
metrics:
  - label: Baseline
    value: +86%
  - label: NIFTY, same window
    value: +38%
  - label: Universe
    value: 48 stocks
repo: https://github.com/anshuazad/swing-trading
featured: true
draft: false
order: 1
todo: >-
  Body is written from the repo README and is honest about what is not yet
  measured. Still to fill in: the four strategies' returns after the harness
  rebuild, and the max drawdown the old equity curve concealed. Replace the
  "being regenerated" paragraph in Results once those are in.
---

> **Status:** the harness rebuild is complete and the post-mortem below is
> final. The re-run numbers for the four strategies are still being
> regenerated — this page states what is known and marks what is not.

## Problem

I had four swing-trading strategies that all showed positive net P&L over a
2022–2026 backtest. The question I had not actually asked was the only one that
mattered: **did any of them beat simply buying the same stocks and holding
them?**

They did not. Equal-weight buy-and-hold of the same 48-stock universe returned
**+86%** over the window, against **+38%** for NIFTY. Every strategy that
looked profitable in isolation was losing to the boring alternative — and the
harness I had built was structurally incapable of telling me that.

## Data

Daily OHLCV for a 48-stock NSE universe pulled via the DhanHQ API, covering
2022 through 2026. The universe was fixed up front rather than screened on
in-sample performance, which avoids the most obvious selection-bias trap but
does leave survivorship exposure — every name in it still exists today.

The window is the more serious limitation. 2022–2026 on this universe contains
no sustained drawdown, so it cannot distinguish a strategy that manages risk
from one that simply never had its risk tested.

## Approach

**Baseline first — and that was the whole lesson.** The rebuild inverted the
original design: the evaluator is now the primary artifact and strategies are
plugins to it, rather than the evaluator being a scorecard bolted on afterwards.

Concretely, the new harness:

- enforces a **portfolio and cash constraint**, so a strategy cannot take
  positions it could not have afforded;
- **steps equity on every bar**, not only on exits;
- reports against the **buy-and-hold baseline** as the default comparison,
  with raw net P&L demoted to a secondary figure;
- treats a held-out result as passing only if it beats that baseline on a
  risk-adjusted basis, not merely `net > 0`.

Parameter search uses Optuna, but the objective is now baseline-relative, which
materially changes what it selects for.

## Results

The controlling number is the baseline: **+86% equal-weight buy-and-hold versus
+38% for NIFTY** across the same 48 names and the same window. Any strategy on
this universe has to clear +86% before it is interesting at all.

The four strategies' post-rebuild figures are being regenerated under the
corrected harness and will be published here with the max-drawdown numbers the
old equity curve concealed. I would rather leave this section incomplete than
restate figures I now know were produced by a broken evaluator.

## What didn't work

Four specific defects in the original harness, each of which independently
flattered the results:

1. **No portfolio or cash constraint.** Strategies could hold more concurrent
   positions than the account could fund, quietly inflating returns.
2. **Equity stepped only on exits.** The equity curve moved when a trade
   closed, so open-position drawdown was invisible. Max drawdown was therefore
   not merely wrong, it was unmeasurable.
3. **Raw net P&L as the optimisation objective.** With no baseline term, the
   search happily converged on strategies that made money more slowly than
   holding.
4. **A held-out bar of `net > 0`.** A threshold that a rising market clears on
   its own is not a test.

The common thread: every defect made the evaluator more permissive. None of
them would have produced a false negative, which is exactly why none of them
got caught.

## Limitations

- One market, one window, no regime with a real drawdown.
- Survivorship bias in the fixed universe.
- Daily bars only — no intraday slippage or partial-fill modelling.
- Transaction costs are modelled as a flat per-trade figure rather than
  measured impact.
