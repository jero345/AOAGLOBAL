# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Decision-makers of small and mid-sized organizations (owners, general managers, operations/finance leads) who feel that their operation limits their business goals: processes that consume capacity, information without a consolidated view, initiatives without an execution path. They arrive from search or a referral, usually on a phone, evaluate quickly whether AOA understands their situation, and decide whether to submit a requirement. Spanish-speaking (formal register, no tuteo) and English-speaking B2B audiences with the same content.

## Product Purpose

aoaglobalservices.com is the single public surface of AOA Global Services LLC, a strategy consulting firm that improves business performance through process optimization and the implementation of business solutions (automation, custom platforms, data and integrations, web). Success = a qualified requirement submitted through the form ("Enviar requerimiento" / "Submit Request") or a direct email to admin@aoaglobalservices.com.

## Positioning

"Estrategia · Procesos · Ejecución" / "Strategy · Processes · Execution". AOA combines business analysis, process optimization and project management to turn strategic priorities into operational improvements: it defines what to change and how to implement it (criterion to prioritize, capacity to implement). The analysis does not stop at recommending; it can also implement the recommended solution. It is not a web/marketing agency and not an "AI shop": AI is a secondary capability inside "Automation and intelligent solutions".

## Operating Context

- One bilingual home (EN at `/`, ES at `/es/`) with anchored sections: challenges, approach, capabilities (`#capabilities`), projects (solution examples), FAQ, contact form (`#contact`). Language derived from the URL; the switch keeps the visible section.
- Secondary SEO pages that must keep their routes: `/ai-consulting`, `/es/consultoria-inteligencia-artificial`, `/ai-consulting-australia`, `/es/consultoria-ia-latinoamerica` (not linked in the main navigation).
- Static prerendered build hosted on Hostinger (manual zip upload); form via Web3Forms. No test submissions to production without authorization.
- The client (Andrea Osorio) reviews on WhatsApp, mostly on her phone: mobile is the first judgment.

## Capabilities and Constraints

- Five capabilities, fixed names and order: Strategy consulting and process optimization; Automation and intelligent solutions; Custom platforms and software; Data, integrations and reporting; Web and digital solutions. Each has a short description, specific capabilities (chips), an approved image and a "Start a Project" action that preselects the form.
- Copy is final and lives in `src/content/{en,es}.ts` under the same keys (source: `AOA_Web_Copy_Final_ES_EN.md`). Text may be rearranged, not rewritten.
- Only three CTAs exist: "Iniciar un proyecto / Start a Project", "Explorar soluciones → / Explore Solutions →", "Enviar requerimiento / Submit Request".
- Section ids, routes, canonical/hreflang, form field names and the Web3Forms backend must not change.
- No countries, cities or team locations on the home; no public prices; no invented clients, metrics, testimonials or certifications; no internal implementation notes published.

## Brand Commitments

- Name: AOA Global Services (legal: AOA Global Services LLC, "US-registered company" only as discreet footer text).
- Palette approved by the client: navy #0B1D3A, deep navy #06111F (footer), ink #111111, slate #6A6A6A, line #D9D9D9, paper #FFFFFF, mist #F4F5F7; accent gold #F5A623 reserved for CTAs and micro-accents. Typeface: Montserrat.
- Approved imagery: `public/img/hero.webp` (hero), the five capability images (`public/img/cap-*.webp`), `public/img/contact.webp`. Mobile hero keeps the image under a translucent navy layer with a gold eyebrow; footer is deep navy.
- Voice: institutional, precise, no hype; Spanish without tuteo.

## Evidence on Hand

- Real: the final copy (ES/EN), the approved images, the contact email and LinkedIn URL. "Solution examples" are types of solution, not client cases.
- Absent (do not fabricate): client names, logos, testimonials, metrics, case studies, certifications, team photos or locations.

## Product Principles

1. Business outcome first, technology second: every block explains the problem and the improvement before the tool.
2. One journey, one action: everything leads to submitting a requirement; no competing CTAs.
3. Say only what can be verified; credibility comes from clarity of method, not from claims.
4. Mobile is the first judgment: composition must read on a phone before it impresses on desktop.
5. Bilingual parity: EN and ES carry the same structure and information.

## Accessibility & Inclusion

Keyboard-operable navigation and accordions, visible focus, AA contrast on all text (Lighthouse a11y 100 is the current bar), `prefers-reduced-motion` respected.
