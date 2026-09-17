import type { SiteContent } from './types';

/**
 * EN — B2B technology consulting and solutions firm.
 * Institutional tone. No geography, no pricing, no testimonials.
 */
export const en: SiteContent = {
  meta: {
    title: 'AOA Global Services | Technology Consulting & Business Solutions',
    description:
      'AOA Global Services combines consulting and technology delivery to improve processes, integrate systems and build custom business solutions.',
    ogImageAlt: 'AOA Global Services — technology that transforms how organizations operate',
    localeName: 'English'
  },

  nav: {
    links: [
      { label: 'How We Work', anchor: '#approach' },
      { label: 'Solutions', anchor: '#capabilities' },
      { label: 'Projects', anchor: '#projects' },
      { label: 'Questions', anchor: '#faq' }
    ],
    cta: 'Start a Project',
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
    floatingCta: 'Start a Project'
  },

  hero: {
    eyebrow: 'Strategy · Technology · Execution',
    title: 'Technology that transforms how organizations operate.',
    description:
      'AOA Global Services combines consulting and technology development to improve processes, integrate systems and build business solutions, from analysis through to implementation.',
    primaryCta: 'Start a Project',
    secondaryCta: 'Explore Solutions',
    note: 'For clearly defined requirements, we can provide an initial proposal within 48 business hours.',
    imageAlt: 'Illustration of a digital platform with dashboards, charts and connected integrations',
    ticker: [
      'Technology strategy & transformation',
      'Automation & intelligent solutions',
      'Custom platforms & software',
      'Data, integrations & reporting',
      'Web & digital solutions'
    ]
  },

  challenges: {
    eyebrow: 'Business challenges',
    title: 'As operations evolve, technology needs to evolve with them.',
    items: [
      {
        title: 'Processes that limit the operation',
        text: 'Manual tasks and poorly adapted tools make management harder and reduce team capacity.'
      },
      {
        title: 'Disconnected systems and information',
        text: 'Scattered data makes it difficult to track performance, budgets and project progress.'
      },
      {
        title: 'Technology initiatives without clear direction',
        text: 'The organization needs to define what to improve, what to integrate and where to invest before building a solution.'
      }
    ]
  },

  approach: {
    eyebrow: 'Our approach',
    title: 'From strategy to implementation.',
    steps: [
      { number: '01', title: 'Understand', description: 'We assess the business, its processes and the expected outcome.' },
      { number: '02', title: 'Design', description: 'We define the solution, the requirements and the scope.' },
      { number: '03', title: 'Implement', description: 'We develop, integrate and validate the solution.' }
    ],
    closing: 'Consulting, development and implementation coordinated within a single project.'
  },

  capabilities: {
    eyebrow: 'Solutions',
    title: 'Five capabilities to transform processes, information and operations.',
    showDetails: 'View details',
    hideDetails: 'Hide details',
    capabilitiesLabel: 'Capabilities',
    cta: 'Start a Project',
    items: [
      {
        slug: 'strategy',
        name: 'Technology Strategy & Transformation',
        description: 'We assess processes and systems to define priorities, requirements and an implementation roadmap.',
        capabilities: ['Assessment', 'Process Design', 'Technology Strategy', 'Solution Design', 'Roadmaps'],
        image: '/img/consulting.webp',
        imageAlt: 'Team defining initiative priorities on a board'
      },
      {
        slug: 'automation',
        name: 'Automation & Intelligent Solutions',
        description: 'We optimize workflows and automate tasks to reduce manual work and improve operational capacity.',
        capabilities: ['Automation', 'Workflows', 'Document Processing', 'Integrations', 'Applied AI'],
        image: '/img/automation.webp',
        imageAlt: 'Connected process workflow diagrams on a planning wall'
      },
      {
        slug: 'platforms',
        name: 'Custom Platforms & Software',
        description: 'We design internal platforms and management tools adapted to each organization’s processes, users and data.',
        capabilities: ['Operational Platforms', 'Business Software', 'Portals', 'Dashboards', 'Internal Tools'],
        image: '/img/software.webp',
        imageAlt: 'Source code of a platform under development'
      },
      {
        slug: 'data',
        name: 'Data, Integrations & Reporting',
        description: 'We integrate systems and data to make it easier to track operations, performance and results.',
        capabilities: ['Integrations', 'APIs', 'Data Flows', 'Dashboards', 'Reporting', 'Analytics'],
        image: '/img/seo.webp',
        imageAlt: 'Operational indicators dashboard on a laptop'
      },
      {
        slug: 'web',
        name: 'Web & Digital Solutions',
        description: 'We develop corporate websites and digital experiences aligned with the company’s commercial and operational objectives.',
        capabilities: ['Web Development', 'UX/UI', 'SEO', 'Analytics', 'Landing Pages', 'Portals', 'Digital Experiences'],
        image: '/img/web.webp',
        imageAlt: 'Design workstation with a corporate website interface on screen'
      }
    ]
  },

  projects: {
    eyebrow: 'Projects & solutions',
    title: 'Technology applied to real operational needs.',
    items: [
      {
        title: 'Operational platforms',
        text: 'Solutions that bring planning, information, monitoring, management and reporting into a single technology layer.'
      },
      {
        title: 'Process automation',
        text: 'Workflows designed to reduce manual activity, structure information and improve the consistency of recurring processes.'
      },
      {
        title: 'Digital ecosystems',
        text: 'Digital experiences connected with lead generation, content management, forms, analytics and internal processes.'
      }
    ]
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Key considerations before starting a technology project.',
    items: [
      {
        q: 'How is a project defined and managed?',
        a: 'A project can begin with a defined requirement or with the analysis of a business need. From that context, scope, responsibilities, deliverables and follow-up milestones are agreed.'
      },
      {
        q: 'Can AOA work with our existing systems?',
        a: 'Yes. We assess the current tools and integration options before recommending new development or replacements.'
      },
      {
        q: 'How do you determine which processes to automate?',
        a: 'We analyze the workflow, dependencies, available data and the expected outcome to identify where automation can deliver a concrete improvement.'
      },
      {
        q: 'How are results evaluated?',
        a: 'Criteria are agreed according to the project objective and may include efficiency, information quality, operational visibility, adoption or digital performance.'
      },
      {
        q: 'What happens after implementation?',
        a: 'Post-implementation support is defined according to the agreed scope and may include maintenance, optimization, new functionality or integrations.'
      }
    ]
  },

  contact: {
    eyebrow: 'New projects',
    title: 'Tell us about your project or business challenge.',
    intro: 'Share the objective of the project or the process that needs to improve. We will review the context to define the next step.',
    imageAlt: 'Two professionals reviewing the context of a project',
    form: {
      name: { label: 'Name', placeholder: 'First and last name', required: 'Please enter your name.' },
      company: { label: 'Organization', placeholder: 'Organization name', required: 'Please enter the organization name.' },
      email: {
        label: 'Work email',
        placeholder: 'name@organization.com',
        required: 'Please enter a work email.',
        invalid: 'The email format is not valid.'
      },
      projectType: {
        label: 'Project type',
        placeholder: 'Select an option',
        required: 'Please select a project type.',
        options: [
          { value: 'strategy', label: 'Technology Strategy & Transformation' },
          { value: 'automation', label: 'Automation & Intelligent Solutions' },
          { value: 'platforms', label: 'Custom Platform or Software' },
          { value: 'data', label: 'Data & Integrations' },
          { value: 'web', label: 'Web & Digital Solutions' },
          { value: 'general', label: 'To Be Defined' }
        ]
      },
      message: {
        label: 'Project context',
        placeholder: 'Briefly describe the current situation, the objective of the project, the processes or systems involved and any relevant timeframe.',
        required: 'Please describe the project context briefly.',
        minLength: 'Please expand the context so we can assess the request (minimum 20 characters).'
      },
      submit: 'Submit Requirement',
      submitting: 'Sending…',
      success: {
        title: 'Thank you. We have received your project information.',
        text: 'Our team will review the requirement and contact you to define the appropriate next step.'
      },
      error: {
        title: 'The request could not be sent.',
        text: 'Please try again or email us directly.'
      },
      missingKey: 'The form is not enabled yet. Please email us directly.',
      privacy: 'The information provided will be used solely to assess and respond to this enquiry.',
      subjectPrefix: 'New project'
    },
    direct: {
      title: 'Direct contact',
      email: 'admin@aoaglobalservices.com'
    }
  },

  aiPage: {
    meta: {
      title: 'AI Consulting for Businesses | AOA Global Services',
      description:
        'AI consulting services for businesses: we identify where artificial intelligence improves a process, design the solution and implement it integrated with your systems. Automation, AI agents and intelligent document processing.'
    },
    breadcrumb: 'AI Consulting',
    eyebrow: 'AI consulting',
    title: 'AI consulting for businesses.',
    intro: [
      'AOA Global Services helps organizations adopt artificial intelligence where it produces a concrete result: more efficient processes, better-structured information and better-supported decisions.',
      'Our AI consulting starts from the business, not the technology. We assess the operation, identify the use cases with real return, and design and implement the solution integrated with existing systems.'
    ],
    principle: {
      title: 'AI when it improves a process — not because it is fashionable.',
      text: 'We do not apply artificial intelligence because it is in fashion. We use it when it concretely improves a process, a decision or a business capability. In many cases the best solution combines automation, data integration and only the AI component that genuinely adds value.'
    },
    includes: {
      eyebrow: 'What is included',
      title: 'AI consulting and implementation services.',
      items: [
        { title: 'AI opportunity assessment', text: 'Review of processes, available information and systems to identify where artificial intelligence delivers a measurable improvement.' },
        { title: 'Solution design', text: 'Definition of the use case, required data, architecture, risks and success criteria before any development.' },
        { title: 'AI-powered automation', text: 'Workflows that combine rules, integrations and language models to reduce manual work.' },
        { title: 'AI agents and assistants', text: 'Assistants connected to the organization’s information for customer service, internal support, request handling or operational queries.' },
        { title: 'Intelligent document processing', text: 'Extraction, classification and validation of information from invoices, contracts, forms and emails.' },
        { title: 'Integration with existing systems', text: 'Connection with ERP, CRM, databases and internal tools so AI operates inside the real process, not in isolation.' }
      ]
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'Where AI usually adds value in an organization.',
      intro: 'Use cases are prioritized by operational impact and feasibility with the information available.',
      items: [
        { title: 'Customer service and request handling', text: 'Automatic classification, assisted responses and routing to the right team.' },
        { title: 'Operations and back office', text: 'Data capture, reconciliations, validations and document generation.' },
        { title: 'Sales and follow-up', text: 'Opportunity qualification, interaction summaries and automated follow-up.' },
        { title: 'Information and reporting', text: 'Natural-language queries over business data and automatically generated reports.' }
      ]
    },
    process: {
      eyebrow: 'How we work',
      title: 'From opportunity to a solution in operation.',
      steps: [
        { title: 'Understand', text: 'We assess the process, the available data and the expected outcome.' },
        { title: 'Design', text: 'We define the use case, the solution, the scope and the evaluation criteria.' },
        { title: 'Implement', text: 'We develop, integrate and validate the solution with the team that will use it.' }
      ],
      note: 'For clearly defined requirements, we can provide an initial proposal within 48 business hours. More complex projects begin with an analysis phase.'
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Common questions about AI consulting.',
      items: [
        { q: 'What does an AI consultancy do?', a: 'It identifies which processes AI can genuinely improve, defines the right solution (data, model, integrations, risks) and supports implementation until it operates inside the business.' },
        { q: 'Does my company need AI?', a: 'Not always. We assess the process and the available information first. If the improvement can be achieved with automation or systems integration, we recommend that before adding AI unnecessarily.' },
        { q: 'What data is needed for an AI project?', a: 'It depends on the use case. Many projects work with the information that already exists in documents, emails and systems; part of the assessment is determining whether it is sufficient and how to structure it.' },
        { q: 'Can AI integrate with our current systems?', a: 'Yes. We design the solution to connect with ERP, CRM, databases and internal tools through integrations and APIs, without replacing what already works.' },
        { q: 'How do you control quality and security in an AI solution?', a: 'We define evaluation criteria, human validation where appropriate, limits on how information is used, and continuous monitoring of the solution’s behavior.' },
        { q: 'How long does an AI consulting project take?', a: 'An initial assessment usually takes a few weeks. Implementation depends on scope; it is agreed in writing together with deliverables and milestones before starting.' }
      ]
    },
    cta: {
      title: 'Tell us about your project or business challenge.',
      text: 'Share the process you need to improve. We will review the context and tell you whether artificial intelligence is the right answer — and which combination of solutions makes the most sense.',
      button: 'Start a Project',
      secondary: 'See all solutions'
    }
  },

  footer: {
    tagline: 'Technology consulting and solutions designed to improve processes, information and operational capability.',
    brandLine: 'Strategy · Technology · Execution',
    solutionsTitle: 'Solutions',
    solutions: [
      { slug: 'strategy', label: 'Technology Strategy & Transformation' },
      { slug: 'automation', label: 'Automation & Intelligent Solutions' },
      { slug: 'platforms', label: 'Custom Platforms' },
      { slug: 'data', label: 'Data & Integrations' },
      { slug: 'web', label: 'Web & Digital Solutions' }
    ],
    aiPageLink: 'AI consulting',
    companyTitle: 'Company',
    companyLinks: [
      { label: 'How We Work', anchor: '#approach' },
      { label: 'Projects', anchor: '#projects' },
      { label: 'Frequently Asked Questions', anchor: '#faq' },
      { label: 'Contact', anchor: '#contact' }
    ],
    contactTitle: 'Contact',
    legal: 'US-registered company',
    rights: 'All rights reserved.'
  }
};
