---
title: RouteBite
blurb: A mobile app that filters restaurants along your driving route by matching your live ETA against dish-level prep times.
period: 2025 – 2026
stack: [React Native, Expo, TypeScript, Supabase, react-native-maps]
metrics:
  - label: Platform
    value: iOS + Android
  - label: Match key
    value: ETA vs prep
repo: https://github.com/anshuazad/routebite
featured: false
draft: false
order: 3
todo: >-
  Body written from the repo README, reframed for a data-science audience —
  leads with the ETA-versus-prep-time matching problem rather than the app
  screens, and treats auth/discovery/checkout as supporting detail. Add real
  numbers once there is usage: match precision, corridor query latency, order
  completion.
---

> **Status:** build is functional; the matching logic described below is
> implemented. No usage numbers yet, so none are claimed.

## Problem

Ordering food on a road trip has a timing problem that map apps do not solve.
Existing tools answer "what restaurants are near me?" — but on a drive, the
useful question is **"what can be ready at the exact moment I arrive?"**

A restaurant 40 minutes ahead with a 10-minute prep time is a good match. The
same restaurant with a 45-minute prep time is a worse match than one further
along the route. Proximity is the wrong ranking key; the right one is the
difference between your arrival time and the dish's readiness time.

## Data

Three sources have to be reconciled in real time:

- **Route geometry and live ETA** per waypoint, from the routing provider via
  `react-native-maps`.
- **Dish-level prep times**, which are per-item rather than per-restaurant —
  the same kitchen may be 8 minutes for one dish and 30 for another.
- **Restaurant and menu records** in Supabase, with a geospatial index so the
  corridor query stays cheap on device.

The leakage-adjacent risk here is not statistical but temporal: ETA and prep
time are both moving while the user browses. A match computed once at page load
is stale within minutes, so freshness has to be part of the design rather than
a refresh button.

## Approach

The core of it is a **corridor query followed by a temporal match**:

1. Buffer the route polyline into a corridor and query candidate restaurants
   inside it, rather than doing a radius search around the user — a radius
   search returns places behind you and misses places ahead.
2. For each candidate, compute **arrival ETA** at its nearest point on the
   route.
3. For each dish, compute **readiness time** as order time plus prep time.
4. Rank by the **absolute gap** between the two, penalising "food waits" and
   "driver waits" differently — a driver waiting is a much worse experience
   than food sitting for two minutes.
5. Re-evaluate as ETA drifts, so the ranking degrades gracefully instead of
   going silently wrong.

Auth, discovery, cart, checkout and order tracking exist and work, but they are
scaffolding around this ranking problem, not the interesting part.

## Results

The matching pipeline runs on-device against live route data and returns a
ranked corridor result. I am not putting precision or latency figures here
until there is real usage to measure them on — synthetic numbers from my own
test drives would not mean anything.

## What didn't work

- **Radius search.** The first version ranked by distance from the user, which
  surfaced restaurants already behind the car. Obvious in hindsight; it took
  driving with it to notice.
- **Restaurant-level prep times.** Averaging prep time per restaurant destroyed
  the signal — the variance within a menu is larger than the variance between
  restaurants. Moving to dish-level was the change that made ranking work.
- **Computing the match once.** Early builds matched at load and cached. On a
  drive with any traffic, the recommendation was wrong by the time the user
  acted on it.

## Limitations

- Prep times are self-reported by restaurants, not measured — the single
  weakest input in the system.
- No live kitchen-load signal, so a busy kitchen looks identical to an idle one.
- Corridor buffering is distance-based, and does not account for whether a
  restaurant is reachable without leaving a highway.
- Single-region data coverage.
