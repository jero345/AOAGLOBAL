import type { SiteContent } from './types';

// DATOS DE EJEMPLO: testimonios, precios y plazos son ficticios.
// Reemplazar por los reales antes de publicar (ver docs/EDITAR-CONTENIDO.md).

/**
 * EN — written for the Australian market.
 * Angle: access to an engineering team that ships fast, with a local point of contact.
 * Australian spelling (optimise, organisation, specialise). Second person "you".
 */
export const en: SiteContent = {
  meta: {
    title: 'AOA Global Services | Business technology, quoted and delivered fast',
    description:
      'Tell us what your business needs. Get an estimate within 48 hours and have it built by a full-stack team — one local point of contact in Australia, no vendor juggling.',
    ogImageAlt: 'AOA Global Services — business technology, quoted and delivered fast',
    localeName: 'English'
  },

  nav: {
    links: [
      { label: 'How it works', anchor: '#how-it-works' },
      { label: 'Services', anchor: '#services' },
      { label: 'Pricing', anchor: '#pricing' },
      { label: 'FAQ', anchor: '#faq' }
    ],
    cta: 'Get an estimate',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavLabel: 'Main navigation',
    mobileNavLabel: 'Mobile navigation',
    langSwitcherLabel: 'Language',
    langSuggest: {
      text: 'Este sitio también está disponible en español.',
      accept: 'Ver en español',
      dismiss: 'Stay in English'
    },
    floatingCta: 'Get an estimate'
  },

  hero: {
    eyebrow: 'Technology for businesses that can’t wait',
    title: 'Your business is moving faster than your technology.',
    subtitle:
      'Tell us what you need. You get an estimate within 48 hours and a team that builds it — website, platform, automation or SEO — with one local contact in Australia.',
    primaryCta: 'Tell us your requirement',
    secondaryCta: 'See services & pricing',
    card: {
      label: 'What happens after you write to us',
      steps: [
        { title: 'You describe the requirement', detail: '5 fields. No calls required.' },
        { title: 'You get an estimate', detail: 'Scope, price range and timeline within 48 h.' },
        { title: 'We build it online', detail: 'Weekly demos. One point of contact.' }
      ],
      footer: 'No commitment until you approve the proposal.'
    }
  },

  diagnosis: {
    eyebrow: 'Does this sound familiar?',
    title: 'If any of these is true, it’s already costing you money.',
    intro: 'These are the six problems we get asked to solve most often. Each one has a price tag.',
    items: [
      {
        problem: 'Your team spends hours on manual processes.',
        cost: 'Every hour re-typing data into spreadsheets is an hour not spent selling or serving customers.'
      },
      {
        problem: 'Your website doesn’t generate a single lead.',
        cost: 'It’s a brochure, not an asset. Visitors leave and buy from whoever made it easy.'
      },
      {
        problem: 'You’re invisible on Google.',
        cost: 'Your competitor shows up first for the searches your customers actually type.'
      },
      {
        problem: 'Your data lives in scattered spreadsheets.',
        cost: 'No single source of truth means decisions get made on gut feel — or not at all.'
      },
      {
        problem: 'You juggle a designer, a developer and an agency.',
        cost: 'Three vendors, three invoices, and nobody accountable for the final result.'
      },
      {
        problem: 'Tech projects get quoted in weeks and delivered in months.',
        cost: 'While you wait, the problem the project was meant to fix keeps compounding.'
      }
    ],
    transition: 'None of this needs a big IT department. It needs one team that quotes fast and delivers.'
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'From requirement to working solution in three steps.',
    steps: [
      {
        number: '01',
        title: 'Tell us your requirement',
        description: 'Fill in the form below in plain language. If a short call helps, your local contact books it at a time that suits you.'
      },
      {
        number: '02',
        title: 'Receive an estimate and proposal',
        description: 'Within 48 hours you get a scope, a price range and a timeline. You decide whether to proceed — no pressure, no lock-in.'
      },
      {
        number: '03',
        title: 'We build and deliver it online',
        description: 'The engineering team builds while you get weekly demos. You approve, we hand over, and everything stays in your name.'
      }
    ],
    highlightTitle: 'One point of contact. No chain of vendors.',
    highlightText:
      'You deal with one person in Australia who understands your business. Behind them sits a full-stack team in Colombia that designs, builds and supports the solution. Nobody else to hire.',
    cta: 'Start with your requirement'
  },

  services: {
    eyebrow: 'Services',
    title: 'What we solve — and what you get.',
    description: 'Five services, each scoped around a business outcome rather than a deliverable list.',
    problemLabel: 'The problem',
    whatLabel: 'What we do',
    outcomeLabel: 'What you get',
    quoteCta: 'Quote this service',
    items: [
      {
        slug: 'web',
        name: 'Website design & development',
        problem: 'Your site looks fine but nobody enquires through it.',
        what: 'We design and build a fast, mobile-first website around one job: turning visitors into enquiries.',
        outcome: 'A site that loads in under two seconds, ranks, and sends qualified leads to your inbox.'
      },
      {
        slug: 'seo',
        name: 'SEO & search visibility',
        problem: 'Customers search for what you do and find someone else.',
        what: 'Technical fixes, on-page optimisation and content targeted at the searches that bring buyers.',
        outcome: 'Measurable growth in qualified organic traffic, reported monthly.'
      },
      {
        slug: 'software',
        name: 'Custom platforms & software',
        problem: 'Off-the-shelf tools don’t fit how your business actually runs.',
        what: 'We build web platforms, portals and internal tools tailored to your process — from data model to deployment.',
        outcome: 'One system your team actually uses, with your data in one place.'
      },
      {
        slug: 'automation',
        name: 'Automation & applied AI',
        problem: 'Repetitive work eats the hours your team should spend on customers.',
        what: 'We connect your tools and automate the workflow: intake, follow-ups, reporting, document handling, AI assistants.',
        outcome: 'Hours back every week, fewer errors, and processes that run without chasing anyone.'
      },
      {
        slug: 'consulting',
        name: 'Digital transformation consulting',
        problem: 'You know technology should help, but not where to start or what it should cost.',
        what: 'A short, structured diagnostic of your operation with a prioritised roadmap and realistic budgets.',
        outcome: 'A clear plan you can execute — with us or with anyone else.'
      }
    ]
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Transparent starting prices. No surprises.',
    subtitle:
      'Every project is quoted on scope, but we never start from zero with you. These are the real starting points.',
    fromLabel: 'From USD',
    secondaryCurrencyNote: '≈ AUD',
    timelineLabel: 'Typical delivery',
    deliverableLabel: 'What’s included',
    featuredBadge: 'Most requested',
    disclaimer:
      'Prices in USD. AUD figures are indicative only and vary with the exchange rate. Your estimate is fixed before we start.',
    cta: 'Quote this service',
    plans: [
      {
        slug: 'web',
        name: 'Website design & development',
        problem: 'For businesses whose site isn’t bringing in enquiries.',
        deliverables: [
          'Conversion-focused design, mobile-first',
          'Up to 8 pages, contact and quote forms',
          'Technical SEO foundation and analytics',
          'Training to edit content yourself'
        ],
        priceUsd: '1,800',
        priceAud: '2,700',
        timeline: '3–4 weeks',
        featured: false
      },
      {
        slug: 'seo',
        name: 'SEO & search visibility',
        problem: 'For businesses that competitors outrank on Google.',
        deliverables: [
          'Technical audit and fixes',
          'Keyword strategy for buyer searches',
          'On-page optimisation and content plan',
          'Monthly ranking and traffic report'
        ],
        priceUsd: '900 / month',
        priceAud: '1,350 / month',
        timeline: 'First results in 60–90 days',
        featured: false
      },
      {
        slug: 'software',
        name: 'Custom platforms & software',
        problem: 'For operations that have outgrown spreadsheets and generic tools.',
        deliverables: [
          'Discovery and functional specification',
          'Web platform or internal tool, built to spec',
          'User roles, dashboards and integrations',
          'Deployment, documentation and handover'
        ],
        priceUsd: '6,500',
        priceAud: '9,800',
        timeline: '6–10 weeks',
        featured: true
      },
      {
        slug: 'automation',
        name: 'Automation & applied AI',
        problem: 'For teams losing hours to repetitive manual work.',
        deliverables: [
          'Process mapping of the workflow to automate',
          'Integrations between your existing tools',
          'AI assistants where they save real time',
          'Monitoring and a runbook for your team'
        ],
        priceUsd: '2,500',
        priceAud: '3,800',
        timeline: '2–4 weeks',
        featured: false
      },
      {
        slug: 'consulting',
        name: 'Digital transformation consulting',
        problem: 'For leaders who need a plan before they spend.',
        deliverables: [
          'Diagnostic of processes, tools and data',
          'Prioritised roadmap with budgets',
          'Vendor-neutral recommendations',
          'Executive summary for decision-makers'
        ],
        priceUsd: '1,500',
        priceAud: '2,300',
        timeline: '2 weeks',
        featured: false
      }
    ]
  },


  socialProof: {
    eyebrow: 'Results',
    title: 'What clients got — in their words.',
    items: [
      {
        quote: 'We had three vendors and no results. Within six weeks we had one team, a new site and enquiries coming in every day.',
        author: 'Sarah Whitfield',
        role: 'Operations Director',
        company: 'Coastline Freight, Brisbane',
        result: '+38% enquiries in 90 days'
      },
      {
        quote: 'The estimate arrived in two days and the platform in seven weeks. Our team finally stopped living in spreadsheets.',
        author: 'Daniel Moreno',
        role: 'General Manager',
        company: 'Andina Distribución',
        result: '15 hours saved per week'
      },
      {
        quote: 'They explained what SEO would and would not do before we paid a cent. Six months later we rank first for our main service.',
        author: 'Priya Nair',
        role: 'Founder',
        company: 'Harbour Dental Group, Melbourne',
        result: '#1 on Google for 4 key searches'
      }
    ]
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'The questions people ask before they write to us.',
    items: [
      {
        q: 'Why are your prices more competitive than a local agency?',
        a: 'Because the engineering happens in Colombia, where a senior full-stack team costs less to run than in Sydney or Melbourne — without cutting seniority. You still get a local contact in Australia. The saving is structural, not a discount.'
      },
      {
        q: 'Who do I actually talk to during the project?',
        a: 'One person: your local contact in Australia. They own your project from estimate to handover, join the weekly demos and translate business needs into technical decisions. You never have to chase a developer.'
      },
      {
        q: 'How long does it really take?',
        a: 'You get an estimate within 48 hours of your requirement. Delivery depends on scope — typical ranges are listed on each pricing card — and the timeline is agreed in writing before we start. We don’t quote in weeks and deliver in months.'
      },
      {
        q: 'What if I need changes after delivery?',
        a: 'Every project includes a post-delivery adjustment window (30 days). After that you can book changes on demand or a monthly support plan. Nothing is locked behind us: the code and accounts are yours.'
      },
      {
        q: 'How do you handle time zones and communication?',
        a: 'Your local contact works Australian business hours. The engineering team’s day starts as yours ends, so work progresses overnight and you see results in the morning. Live overlap for calls and demos: 7:00–10:00 AEST, every business day.'
      },
      {
        q: 'Does the website or platform stay in my name?',
        a: 'Yes. Domain, hosting, code repository and any third-party accounts are registered to your business from day one. If you ever want to move to another provider, you can — with everything you paid for.'
      },
      {
        q: 'Do I need to hire anyone else to make this work?',
        a: 'No. Design, development, deployment and support are all covered by the team. If your project needs a specialist we don’t have, we bring them in and remain accountable for the result.'
      }
    ]
  },

  contact: {
    eyebrow: 'Get an estimate',
    title: 'Tell us your requirement. Estimate within 48 hours.',
    subtitle: 'Five fields. No sales call unless you want one.',
    reassurance: ['Reply within 48 business hours', 'No commitment until you approve', 'Your data stays confidential'],
    form: {
      name: { label: 'Your name', placeholder: 'e.g. Sarah Mitchell', required: 'Please enter your name' },
      company: { label: 'Company', placeholder: 'e.g. Mitchell & Co Logistics', required: 'Please enter your company' },
      email: {
        label: 'Work email',
        placeholder: 'e.g. sarah@company.com.au',
        required: 'Please enter your email',
        invalid: 'Please enter a valid email address'
      },
      service: {
        label: 'What do you need?',
        placeholder: 'Select a service',
        required: 'Please select a service',
        generalOption: 'Not sure yet — help me decide'
      },
      message: {
        label: 'Describe the requirement',
        placeholder: 'What’s the problem, what would “solved” look like, and when do you need it?',
        required: 'Please describe what you need',
        minLength: 'A few more details help us quote accurately (min. 20 characters)'
      },
      submit: 'Send my requirement',
      submitting: 'Sending…',
      success: {
        title: 'Received. Thank you.',
        text: 'Your local contact will reply with an estimate within 48 business hours. Check your inbox (and spam folder, just in case).'
      },
      error: {
        title: 'Something went wrong.',
        text: 'Your message wasn’t sent. Please try again or email us directly.'
      },
      missingKey: 'The form is not configured yet (missing Web3Forms key). Please email us directly.',
      privacy: 'We only use your details to reply to this request.',
      subjectPrefix: 'New estimate request'
    },
    direct: {
      title: 'Prefer email?',
      email: 'contact@aoaglobalservices.com'
    }
  },

  footer: {
    tagline: 'Business technology, quoted in 48 hours and delivered online. Local contact in Australia, engineering team in Colombia.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    companyLinks: [
      { label: 'How it works', anchor: '#how-it-works' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Get an estimate', anchor: '#contact' }
    ],
    contactTitle: 'Contact',
    rights: 'All rights reserved.'
  }
};
