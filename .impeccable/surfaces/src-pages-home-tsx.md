---
version: 1
slug: "src-pages-home-tsx"
primary_target: "src/pages/Home.tsx"
related_targets: []
---

# Surface brief — Home (`/`, `/es/`)

Scope: the bilingual home, all sections, both viewports. Visitor mode: Persuade.
Audience: SMB decision-makers evaluating on a phone whether AOA understands their operation; job = decide to submit a requirement. Proof on hand: method (3 steps), five capabilities with approved images, solution examples; no clients/metrics.
Constraints: same brand (navy/gold/Montserrat, approved images, mobile hero banner), same copy keys, same section ids/routes/CTAs, five capabilities in order.

Grounded structural candidates, ordered by resonance: 1 capability index with sticky image · 2 diagnostic-first hero · 3 method spine · 4 problem↔solution pairs · 5 proposal document with sticky index · 6 manifesto chapters · 7 horizontal capability rail. Dealt: 7, 5, 4. Index 7 fails product clarity on named grounds (a horizontal rail hides four of the five capabilities on the phone, the client's first judgment, and scroll-jacks desktop). Index 4 needs 3→5 mappings the copy does not state. Locked: index 5. Challengers declined (all replace the fixed palette/material).

## Direction contract

seed: d3aadc49 (surface, persuade, kind: pick)

THESIS: The home reads like the opening pages of an AOA proposal — six numbered chapters (Desafíos, Enfoque, Soluciones, Ejemplos, Preguntas, Nuevos proyectos) with an index that follows the reader — instead of a stacked-cards landing page.

OWN-WORLD: Existing palette untouched. Chapter numerals in Montserrat 700 at display size, hairline rules in `line`, numbered lists instead of icon cards, one gold rule per chapter head, paper/mist alternation, navy only for the last chapter (the requirement). Images stay in their approved frames; the capability image sits in a sticky column on desktop and as a small thumbnail on the phone.

STORY: "They understand my situation (01), they have a method (02), these are the five things they can do (03), this is what it looks like in practice (04), my doubts (05), I send my requirement (06)."

FIRST VIEWPORT: Desktop: cover spread — brand line, H1 at display size across 7 columns, description, primary CTA + explore link, and beneath them the chapter index (01–06) as the way in; the approved image on the right in its floating frame. Mobile: the approved navy banner unchanged, chapter index compact below the fold.

SIGNATURE INTERACTION: The sticky chapter index on desktop marks the chapter in view; in chapter 03 the sticky image swaps (grayscale→colour) to the capability under the cursor or in view; expanding a capability keeps its `Ver detalles` semantics.

HONEST RISK: A document grammar can read static; pacing (numeral scale, the navy final chapter, the quiet pull-quote after 02) must carry the energy. Mobile must not gain a permanent sticky strip.
