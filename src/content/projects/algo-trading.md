---
title: Intraday Options Backtesting Framework
blurb: A config-driven research framework for an intraday consolidation-breakout strategy on Nifty ATM options.
period: 2024 – 2025
stack: [Python, pandas, PyArrow, Matplotlib, DhanHQ API]
metrics:
  - label: Instrument
    value: Nifty ATM
  - label: Resolution
    value: 1-minute
repo: https://github.com/anshuazad/algo-trading
featured: false
draft: false
order: 2
todo: >-
  Body written from the repo README. Needs a baseline before the Results
  section can say anything: state what the strategy is measured against, and
  apply the same portfolio-level scrutiny the swing-trading post-mortem
  arrived at. Do not publish performance figures from the current evaluator.
---

> **Status:** the framework and its data handling are done and described
> below. Results are deliberately absent — this strategy does not yet have a
> baseline to be measured against, and the [swing-trading
> post-mortem](/projects/swing-trading/) is a direct lesson in what unbaselined
> backtest numbers are worth.

## Problem

Intraday option premium data is noisy and the obvious breakout strategies are
heavily researched. The narrower question this framework was built to answer:
on 1-minute Nifty ATM option premiums, does a **box-consolidation breakout**
carry any signal once the instrument-construction artifacts are removed?

The artifacts turned out to be the interesting part.

## Data

1-minute premium data for Nifty ATM options via the DhanHQ API, stored as
Parquet through PyArrow for fast repeated scans during parameter sweeps.

The important construction decision is the **fixed-strike ATM series**. The
naive approach — rolling the strike as spot moves — produces phantom gaps in
the premium series at every roll, because you are splicing together two
different instruments and calling the discontinuity a price move. A breakout
detector run on that series largely detects its own rolls. Holding the strike
fixed within a session removes the artifact at the cost of drifting away from
true at-the-money as spot moves.

## Approach

Everything is config-driven, so a strategy variant is a YAML change rather than
a code change — which matters when the parameter surface is this large.

- **Box-consolidation detection** on 1-minute premiums: identify a range-bound
  window by high/low containment over a lookback, then arm a breakout trigger
  at the box edges.
- **Cross-signal entry.** The counter-intuitive piece: a CE (call) premium
  breakdown implies falling spot, so the trade it justifies is buying PE
  (puts), not selling CE. Signals are read on one leg and acted on in the
  other.
- **Candle-trailing stop** rather than a fixed-percentage stop, so the exit
  tightens with realised structure instead of a constant.
- A **parameter optimisation layer** sweeping box lookback, breakout
  thresholds, and trail sensitivity.

## Results

Not published yet, on purpose.

The framework produces returns, but it has the same defect the swing-trading
harness had: no baseline. An intraday options strategy needs to be measured
against something — holding the same option through the session, a
volatility-matched alternative, or simply not trading — and until that
comparison is wired in, any figure I put here would be the kind of number I
have already learned to distrust.

## What didn't work

- **Rolling the ATM strike.** The first version rolled strikes with spot and
  produced an encouraging signal that was substantially an artifact of the
  roll discontinuities. Fixing the strike removed most of the apparent edge —
  which is the correct outcome, and the reason the fixed-strike series is now
  the default.
- **Fixed-percentage stops.** On option premiums, a constant percentage is far
  too tight near expiry and far too loose early in the session. The candle
  trail replaced it.
- **Optimising on the full history.** The parameter surface is expressive
  enough to fit almost any window, which is a reason to distrust the sweep, not
  to celebrate it.

## Limitations

- No baseline comparison yet — the blocking gap.
- Single instrument (Nifty ATM) and single regime.
- No slippage or partial-fill modelling on option legs, where both are
  material.
- Parameter optimisation has no walk-forward validation, so reported bests are
  in-sample by construction.
