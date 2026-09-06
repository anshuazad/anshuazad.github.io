---
title: Swing Trading Research Harness
blurb: A backtesting harness rebuilt evaluator-first, after four strategies that looked profitable turned out to be losing to buy-and-hold.
stack: [Python, pandas, NumPy, Optuna, DhanHQ API]
repo: https://github.com/anshuazad/swing-trading
featured: true
draft: true
order: 1
todo: >-
  Write this up first — it is the strongest project here, because an honest
  negative result with a diagnosis beats a working model. Source material is
  already in the repo README: no portfolio or cash constraint, equity stepping
  only on exits (which hid open-position drawdown), raw net P&L as the
  objective, a held-out bar of merely net > 0, and a 2022-2026 window with no
  real drawdown. The controlling number: equal-weight buy-and-hold of the same
  48 stocks returned +86% while NIFTY returned +38%. Metrics to fill in: the
  +86% baseline, the strategies' real numbers after the harness was fixed, and
  the max drawdown the old harness concealed. Follow _template.md.
---
