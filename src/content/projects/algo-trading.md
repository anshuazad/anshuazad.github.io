---
title: Intraday Options Backtesting Framework
blurb: A config-driven research framework for an intraday consolidation-breakout strategy on Nifty ATM options.
stack: [Python, pandas, PyArrow, Matplotlib, DhanHQ API]
repo: https://github.com/anshuazad/algo-trading
featured: false
draft: true
order: 2
todo: >-
  Source material in the repo README: a fixed-strike ATM series to avoid the
  phantom gaps a rolling strike creates, box-consolidation detection on
  1-minute premium data, the cross-signal entry model (CE breakdown implies
  falling spot, so buy PE), a candle-trailing stop, and the parameter
  optimisation layer. Needs a baseline before it is publishable — state what
  the strategy beats, and apply the same portfolio-level scrutiny the
  swing-trading post-mortem arrived at.
---
