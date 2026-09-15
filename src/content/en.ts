import type { SiteContent } from './types';

// SAMPLE DATA: testimonials are fictional. Replace with real ones before launch.

/**
 * EN — international consulting and technology firm.
 * Neutral, executive tone. No geography, no pricing.
 */
export const en: SiteContent = {
  meta: {
    title: 'AOA Global Services | Strategy, technology and AI to move business forward',
    description:
      'AOA Global Services combines consulting, artificial intelligence and software development to optimize processes, connect information and build solutions tailored to how each organization operates.',
    ogImageAlt: 'AOA Global Services — technology designed to move business forward',
    localeName: 'English'
  },

  nav: {
    links: [
      { label: 'Solutions', anchor: '#services' },
      { label: 'How we work', anchor: '#how-it-works' },
      { label: 'Our work', anchor: '#results' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Contact', anchor: '#contact' }
    ],
    cta: 'Start a project',
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
    floatingCta: 'Start a project'
  },

  hero: {
    eyebrow: 'Strategy · Technology · AI · Execution',
    title: 'Technology designed to move the business forward.',
    paragraphs: [
      'AOA Global Services combines consulting, artificial intelligence and software development to optimize processes, connect information and build solutions tailored to how each organization operates.',
      'From a specific need to a complete enterprise platform, we define the solution and take it through to execution.'
    ],
    primaryCta: 'Explore solutions',
    secondaryCta: 'Request a proposal',
    noteTitle: 'Already have a defined requirement?',
    noteText: 'We can present an initial proposal within 48 business hours.',
    imageAlt: 'Earth at night seen from orbit, city lights connected across continents',
    ticker: [
      'Strategy & technology transformation',
      'AI & automation',
      'Custom platforms',
      'Data & integrations',
      'Web & digital solutions',
      'One point of contact'
    ],
    card: {
      label: 'How a project moves forward with AOA',
      steps: [
        { title: 'You share the requirement', detail: 'A specific need, or a challenge without a defined answer yet.' },
        { title: 'We define scope and objectives', detail: 'Context, complexity and the expected outcome.' },
        { title: 'Proposal and execution', detail: 'Clear scope, timeline, deliverables and investment before we start.' }
      ],
      footer: 'One point of contact for the whole project.'
    }
  },

  diagnosis: {
    eyebrow: 'Sound familiar?',
    title: 'If any of this is happening in your organization, it already has a cost.',
    intro: 'These are the situations we are most often asked to resolve. None of them shows up on an invoice; all of them affect the result.',
    items: [
      {
        problem: 'Manual processes consuming the team’s hours.',
        cost: 'Every hour moving data between spreadsheets is an hour not spent on customers or decisions.'
      },
      {
        problem: 'A website that generates no opportunities.',
        cost: 'It works as a brochure, not a commercial asset. Visitors arrive and leave without a trace.'
      },
      {
        problem: 'Information scattered across tools.',
        cost: 'Without a single source of truth, decisions are made on incomplete or outdated data.'
      },
      {
        problem: 'Vendors that don’t talk to each other.',
        cost: 'Designer, developer and agency working apart: nobody is accountable for the final result.'
      },
      {
        problem: 'Technology initiatives that never reach implementation.',
        cost: 'Assessments and proposals stay in documents while operations continue unchanged.'
      },
      {
        problem: 'Generic tools that don’t fit the operation.',
        cost: 'The team adapts its work to the software instead of the software adapting to the business.'
      }
    ],
    transition: 'None of these problems is solved with more tools. They are solved with clear direction and the capacity to execute.'
  },

  howItWorks: {
    eyebrow: 'How we work',
    title: 'From requirement to a solution in operation.',
    steps: [
      {
        number: '01',
        title: 'We understand the requirement',
        description: 'It may be a specific need or a still-open challenge. We analyze context, objectives and complexity before proposing anything.'
      },
      {
        number: '02',
        title: 'We define the proposal',
        description: 'Scope, timeline, deliverables and investment are clearly established before we start. For complex projects, this stage may include an analysis phase.'
      },
      {
        number: '03',
        title: 'We execute and implement',
        description: 'Strategy, development, automation and implementation within a single process, with visible progress and one point of contact.'
      }
    ],
    model: {
      title: 'One direction. Integrated capabilities.',
      paragraphs: [
        'Every project combines business vision, design and technology capability within a single process.',
        'AOA coordinates strategy, development, automation and implementation with a clear working structure and a single point of contact.'
      ],
      highlight: 'Less fragmentation. More clarity. Greater accountability for the result.',
      cta: 'Request a proposal',
      capabilities: [
        {
          image: '/img/strategy.webp',
          alt: 'Strategy working session with the team',
          label: 'Strategy & design',
          text: 'Business vision, solution definition and architecture.'
        },
        {
          image: '/img/team.webp',
          alt: 'Technical team building a solution',
          label: 'Development & execution',
          text: 'Build, automation, integration and implementation.'
        }
      ]
    }
  },

  services: {
    eyebrow: 'Solutions',
    title: 'Five capabilities. One process.',
    description: 'Each solution is defined from how the organization actually operates, not from a fixed catalog.',
    problemLabel: 'The situation',
    whatLabel: 'What we do',
    outcomeLabel: 'What you get',
    detailsLabel: 'Typical scope',
    exploreCta: 'Explore solution',
    collapseCta: 'Close',
    undecided: {
      title: 'Not sure which solution you need?',
      text: 'Describe the situation. We tell you what is required — and what isn’t — before defining any scope.',
      cta: 'Tell us your challenge'
    },
    items: [
      {
        slug: 'strategy',
        name: 'Strategy & Technology Transformation',
        problem: 'Technology should be driving the business, but it isn’t clear where to start or what to prioritize.',
        what: 'An assessment of processes, tools and data, with a prioritized, realistic roadmap.',
        outcome: 'A clear transformation plan, aligned with business objectives and ready to execute.',
        details: [
          'Assessment of operations, systems and information flows',
          'Technology roadmap prioritized by impact',
          'Architecture definition and tool selection',
          'Leadership support throughout implementation'
        ],
        cta: 'Tell us your challenge',
        image: '/img/consulting.webp',
        imageAlt: 'Team planning a roadmap with sticky notes on a wall'
      },
      {
        slug: 'ai',
        name: 'Artificial Intelligence & Automation',
        problem: 'Repetitive work consumes the time the team should spend on decisions and customers.',
        what: 'We automate workflows and apply AI where it creates real value: intake, follow-up, documents, service and analysis.',
        outcome: 'Processes that run without manual intervention, with fewer errors and more capacity for the team.',
        details: [
          'Business process mapping and automation',
          'AI assistants and agents embedded in operations',
          'Intelligent processing of documents and requests',
          'Monitoring, control and continuous improvement of workflows'
        ],
        cta: 'Request a proposal',
        image: '/img/automation.webp',
        imageAlt: 'Humanoid robot assistant'
      },
      {
        slug: 'platforms',
        name: 'Custom Platforms & Software',
        problem: 'Generic tools don’t reflect how the organization really operates.',
        what: 'We design and build web platforms, portals and internal tools shaped to the process, from data model to deployment.',
        outcome: 'A system the team uses every day, with centralized information under the organization’s control.',
        details: [
          'Functional discovery and solution design',
          'Web platforms, customer portals and internal tools',
          'Roles, permissions, dashboards and integrations',
          'Deployment, documentation and handover'
        ],
        cta: 'Request a proposal',
        image: '/img/software.webp',
        imageAlt: 'Source code on a developer laptop'
      },
      {
        slug: 'data',
        name: 'Data, Integrations & Reporting',
        problem: 'The information exists, but it is spread across systems that don’t communicate.',
        what: 'We connect data sources, integrate systems and build reporting that shows the real state of the business.',
        outcome: 'A single source of truth and dashboards that support decisions with reliable information.',
        details: [
          'Integration across ERP, CRM, e-commerce and internal tools',
          'Unified data model and information quality',
          'Dashboards and automated reporting',
          'Alerts and indicators for leadership'
        ],
        cta: 'Request a proposal',
        image: '/img/seo.webp',
        imageAlt: 'Laptop showing a business indicators dashboard'
      },
      {
        slug: 'web',
        name: 'Web & Digital Solutions',
        problem: 'The digital presence doesn’t reflect the organization’s level or generate opportunities.',
        what: 'We design and develop results-oriented websites and digital experiences, with a solid technical base and search visibility.',
        outcome: 'A fast, measurable digital asset aligned with the commercial strategy.',
        details: [
          'Corporate and commercial website design and development',
          'Content architecture and search optimization (SEO)',
          'Forms, integrations and analytics',
          'Maintenance and continuous evolution'
        ],
        cta: 'Request a proposal',
        image: '/img/web.webp',
        imageAlt: 'Designer workstation with a website layout on screen'
      }
    ]
  },

  investment: {
    eyebrow: 'Investment',
    title: 'Every project is defined by its scope, complexity and objectives.',
    points: [
      {
        title: 'A proposal before we start',
        text: 'Before beginning, scope, timeline, deliverables and investment are clearly established.'
      },
      {
        title: 'A fast response for defined requirements',
        text: 'Projects with defined requirements can receive an initial proposal within 48 business hours.'
      },
      {
        title: 'Analysis first when complexity requires it',
        text: 'For consulting, transformation, AI, integrations or complex platforms, an analysis phase may be needed first.'
      }
    ],
    note: 'We never propose an investment without understanding the scope.'
  },

  socialProof: {
    eyebrow: 'Our work',
    title: 'What the organizations we work with achieved.',
    items: [
      {
        quote: 'We had three vendors and no results. Within weeks we had one team, a new platform and opportunities coming in every day.',
        author: 'Sarah Whitfield',
        role: 'Operations Director',
        company: 'Coastline Freight',
        result: '+38% opportunities in 90 days'
      },
      {
        quote: 'The proposal arrived with a clear scope and the platform was delivered on the agreed timeline. Our team stopped running on spreadsheets.',
        author: 'Daniel Moreno',
        role: 'General Manager',
        company: 'Andina Distribución',
        result: '15 hours recovered per week'
      },
      {
        quote: 'They explained what each decision would and would not do before we committed. Six months later we are the reference in our segment.',
        author: 'Priya Nair',
        role: 'Founder',
        company: 'Harbour Dental Group',
        result: 'First position for key searches'
      }
    ]
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'What people usually ask before writing to us.',
    items: [
      {
        q: 'How is the investment for a project defined?',
        a: 'Every project is defined by its scope, complexity and objectives. Before we start, scope, timeline, deliverables and investment are clearly set out in a proposal. We do not propose an investment without understanding the scope.'
      },
      {
        q: 'How long does it take to receive a proposal?',
        a: 'For clearly defined requirements, we can present an initial proposal within 48 business hours. For consulting, transformation, AI, integrations or complex platforms, an analysis phase may be needed first.'
      },
      {
        q: 'Who do I talk to during the project?',
        a: 'A single point of contact, responsible for the project from proposal to implementation. That person coordinates strategy, development and automation, and translates business needs into technical decisions.'
      },
      {
        q: 'How is the work coordinated across different time zones?',
        a: 'We operate under a global delivery model: progress meetings are scheduled in your organization’s hours, and follow-up runs continuously through shared channels with documented deliveries.'
      },
      {
        q: 'What if I need changes after delivery?',
        a: 'Every project includes an adjustment period after implementation. After that, the solution can evolve through new phases or a support and continuous-improvement arrangement, depending on what the organization needs.'
      },
      {
        q: 'Does the solution belong to my organization?',
        a: 'Yes. Domains, infrastructure, code repositories and third-party accounts are registered to your organization from the start. The solution is yours, with no dependency on AOA.'
      },
      {
        q: 'Do I need to hire anyone else to make this work?',
        a: 'No. Strategy, design, development, automation and implementation are coordinated within a single process. If a project requires an additional specific capability, AOA brings it in and remains accountable for the result.'
      }
    ]
  },

  contact: {
    eyebrow: 'Request a proposal',
    title: 'Tell us what you need to improve, transform or build.',
    paragraphs: [
      'It may be a specific solution, a process that needs to evolve, or a challenge for which there is no defined technology answer yet.',
      'If the requirement is sufficiently defined, we can present an initial proposal within 48 business hours.'
    ],
    reassurance: ['Proposal with defined scope, timeline and investment', 'No commitment until the proposal is approved', 'Information handled in confidence'],
    imageAlt: 'Two professionals reviewing a requirement together',
    form: {
      name: { label: 'Name', placeholder: 'e.g. Sarah Mitchell', required: 'Please enter your name' },
      company: { label: 'Organization', placeholder: 'e.g. Mitchell & Co Logistics', required: 'Please enter your organization' },
      email: {
        label: 'Work email',
        placeholder: 'e.g. sarah@company.com',
        required: 'Please enter your email',
        invalid: 'Please enter a valid email address'
      },
      service: {
        label: 'Area of interest',
        placeholder: 'Select an option',
        required: 'Please select an area of interest',
        generalOption: 'Not defined yet — I need guidance'
      },
      message: {
        label: 'Describe the requirement',
        placeholder: 'What is the current situation, what result do you expect, and in what timeframe?',
        required: 'Please describe briefly what you need',
        minLength: 'A little more context lets us respond precisely (min. 20 characters)'
      },
      submit: 'Send requirement',
      submitting: 'Sending…',
      success: {
        title: 'Requirement received.',
        text: 'We will review it and reply with next steps. If it is sufficiently defined, you will receive an initial proposal within 48 business hours.'
      },
      error: {
        title: 'It could not be sent.',
        text: 'Please try again or email us directly.'
      },
      missingKey: 'The form is not configured yet. Please email us directly.',
      privacy: 'Your details are used only to respond to this request.',
      subjectPrefix: 'New requirement'
    },
    direct: {
      title: 'Prefer to write directly?',
      email: 'admin@aoaglobalservices.com'
    }
  },

  footer: {
    tagline: 'Strategy, technology and artificial intelligence to transform how organizations operate.',
    legalLine: 'US-registered · Global delivery',
    servicesTitle: 'Services',
    companyTitle: 'AOA',
    companyLinks: [
      { label: 'How we work', anchor: '#how-it-works' },
      { label: 'Our work', anchor: '#results' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Request a proposal', anchor: '#contact' }
    ],
    contactTitle: 'Contact',
    rights: 'All rights reserved.'
  }
};
