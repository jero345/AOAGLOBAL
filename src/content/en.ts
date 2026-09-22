import type { SiteContent } from './types';

/**
 * EN — B2B technology consulting and solutions firm.
 * Institutional tone. No geography, no pricing, no testimonials.
 */
export const en: SiteContent = {
  meta: {
    title: 'AOA Global Services | Strategy & Process Consulting',
    description:
      'Strategy consulting to improve business performance. AOA combines process optimization, project management and implementation of business solutions.',
    ogImageAlt: 'AOA Global Services — strategy consulting to improve business performance',
    localeName: 'English'
  },

  nav: {
    links: [
      { label: 'How We Work', anchor: '#approach' },
      { label: 'Solutions', anchor: '#capabilities' },
      { label: 'Projects', anchor: '#projects' },
      { label: 'FAQs', anchor: '#faq' }
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
    eyebrow: 'Strategy · Processes · Execution',
    title: 'Strategy consulting to improve business performance.',
    description:
      'AOA Global Services combines business analysis, process optimization and project management to turn strategic priorities into operational improvements. We define what needs to change and how to implement it, drawing on management practices and digital solutions that support the business.',
    primaryCta: 'Start a Project',
    secondaryCta: 'Explore Solutions',
    note: 'For clearly defined requirements, we can provide an initial proposal within 48 business hours.',
    imageAlt: 'Professionals reviewing a process map and roadmap on a work table',
    ticker: [
      'Strategy consulting & process optimization',
      'Automation & intelligent solutions',
      'Custom platforms & software',
      'Data, integrations & reporting',
      'Web & digital solutions'
    ]
  },


  challenges: {
    eyebrow: 'Business challenges',
    title: 'When operations stand in the way of business goals.',
    items: [
      {
        title: 'Processes that constrain capacity',
        text: 'Duplicated effort, manual tasks and unclear responsibilities make coordination harder and limit the effective use of resources.'
      },
      {
        title: 'Limited visibility across the business',
        text: 'Scattered data and inconsistent tracking make it difficult to assess projects, budgets and performance.'
      },
      {
        title: 'Initiatives without a clear path to execution',
        text: 'Opportunities for improvement stall without clear priorities, ownership and an implementation plan.'
      }
    ]
  },


  approach: {
    eyebrow: 'Our approach',
    title: 'The insight to prioritize. The capability to deliver.',
    steps: [
      { number: '01', title: 'Understand', description: 'We analyze objectives, processes, responsibilities and information to identify the causes of the problem and opportunities for improvement.' },
      { number: '02', title: 'Design', description: 'We prioritize improvements based on impact and feasibility. We define processes, responsibilities, metrics and an implementation plan.' },
      { number: '03', title: 'Implement', description: 'We coordinate implementation and evaluate progress, integrating or developing tools when the scope calls for them.' }
    ],
    closing: 'Our analysis defines not only what needs to change, but how to implement it and how to evaluate progress.'
  },


  capabilities: {
    eyebrow: 'Solutions',
    title: 'Solutions for business management and performance.',
    intro: 'AOA’s services can be delivered individually or combined within an improvement project, based on its objectives and scope.',
    showDetails: 'View details',
    hideDetails: 'Hide details',
    capabilitiesLabel: 'Capabilities',
    cta: 'Start a Project',
    note: 'A project does not need to begin with a defined solution. It can start with an assessment of a business need.',
    items: [
      {
        slug: 'strategy',
        name: 'Strategy Consulting & Process Optimization',
        description: 'We assess operations and turn business objectives into priorities, processes and improvement plans, with a defined scope, clear responsibilities and performance indicators.',
        capabilities: ['Operational assessment', 'Process analysis and redesign', 'Initiative prioritization', 'Performance indicators', 'Implementation plans'],
        note: 'An engagement can focus on management practices and processes without requiring new technology development.',
        image: '/img/consulting.webp',
        imageAlt: 'Team defining initiative priorities on a board'
      },
      {
        slug: 'automation',
        name: 'Automation & Intelligent Solutions',
        description: 'We redesign workflows and automate tasks to reduce rework, strengthen traceability and free up team capacity.',
        capabilities: ['Workflows', 'Approval management', 'Document processing', 'Tool integration', 'Applied artificial intelligence'],
        note: 'The use of artificial intelligence is assessed in light of the process, information quality, risks and oversight required.',
        image: '/img/automation.webp',
        imageAlt: 'Connected process workflow diagrams on a planning wall'
      },
      {
        slug: 'platforms',
        name: 'Custom Platforms & Software',
        description: 'We design and develop platforms for planning, monitoring and management when operations require capabilities that existing systems do not provide.',
        capabilities: ['Operational platforms', 'Internal tools', 'Portals', 'Planning and monitoring', 'Role-based access'],
        image: '/img/software.webp',
        imageAlt: 'Source code of a platform under development'
      },
      {
        slug: 'data',
        name: 'Data, Integrations & Reporting',
        description: 'We bring together information from multiple sources and define reports and metrics to assess projects, budgets and performance consistently.',
        capabilities: ['Systems integration', 'Information consolidation', 'Management dashboards', 'Operational reporting', 'Performance monitoring'],
        image: '/img/seo.webp',
        imageAlt: 'Operational indicators dashboard on a laptop'
      },
      {
        slug: 'web',
        name: 'Web & Digital Solutions',
        description: 'We combine positioning, design and development to create corporate websites and digital experiences that support the company’s commercial and operational objectives.',
        capabilities: ['Digital strategy', 'Web design and development', 'User experience', 'Forms and integrations', 'SEO', 'Analytics'],
        image: '/img/web.webp',
        imageAlt: 'Design workstation with a corporate website interface on screen'
      }
    ]
  },


  projects: {
    eyebrow: 'Solution examples',
    title: 'Practical applications across business operations.',
    items: [
      {
        title: 'Project planning and control',
        text: 'Structuring project phases, budgets and responsibilities to track progress, identify deviations and inform management decisions.'
      },
      {
        title: 'Internal process optimization',
        text: 'Redesigning activities, controls and approvals to reduce duplication and improve coordination across teams.'
      },
      {
        title: 'Improving digital presence',
        text: 'Developing websites and digital touchpoints aligned with the value proposition, customer experience and commercial objectives.'
      }
    ]
  },


  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Key considerations before starting a project.',
    items: [
      {
        q: 'Do we need to have a solution defined?',
        a: 'No. A business need, a process that requires review or an improvement objective can provide the starting point for analysis. This context helps define the scope and possible approaches.'
      },
      {
        q: 'Does every project require new technology?',
        a: 'No. The solution may focus on processes, responsibilities, controls or performance indicators. Digital tools are introduced when they support implementation and address a defined need.'
      },
      {
        q: 'How are priorities and scope defined?',
        a: 'We assess expected impact, feasibility and dependencies. The proposal sets out objectives, deliverables, responsibilities and milestones to define the engagement and establish how progress will be tracked.'
      },
      {
        q: 'How are improvements evaluated?',
        a: 'Evaluation criteria are agreed before implementation. Depending on the project, we assess process times, rework, information quality, adoption or digital performance, comparing them with the initial baseline when sufficient data is available.'
      },
      {
        q: 'Can AOA implement the recommended solution?',
        a: 'Yes. AOA combines solution design with delivery, whether the project involves process changes, automation, integrations or digital development. Implementation and ongoing support are defined in the agreed scope of work.'
      }
    ]
  },

  contact: {
    eyebrow: 'New projects',
    title: 'Tell us about your project or business challenge.',
    intro: 'Outline the business objective, current situation and expected outcome. This information will guide the initial project assessment.',
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
          { value: 'strategy', label: 'Strategy consulting and process optimization' },
          { value: 'automation', label: 'Automation and intelligent solutions' },
          { value: 'platforms', label: 'Custom Platform or Software' },
          { value: 'data', label: 'Data and integrations' },
          { value: 'web', label: 'Web and digital solutions' },
          { value: 'general', label: 'Not yet defined' }
        ]
      },
      message: {
        label: 'Project context',
        placeholder: 'Describe the current situation, the process or area involved, the expected outcome and any relevant timeframe.',
        required: 'Please describe the project context briefly.',
        minLength: 'Please expand the context so we can assess the request (minimum 20 characters).'
      },
      submit: 'Submit Request',
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

  aiMarketPage: {
    meta: {
      title: 'AI Consulting Australia | AI Solutions for Australian Businesses | AOA Global Services',
      description:
        'AI consulting for Australian businesses. AOA Global Services helps organisations across Australia identify where artificial intelligence improves a process, then designs and implements the solution integrated with existing systems.'
    },
    breadcrumb: 'AI Consulting Australia',
    eyebrow: 'AI consulting · Australia',
    title: 'AI consulting for Australian businesses.',
    intro: [
      'AOA Global Services provides AI consulting and implementation services to organisations across Australia — from Sydney, Melbourne and Brisbane to Perth, Adelaide and regional businesses.',
      'We help Australian companies move from “we should be using AI” to a working solution: assessing the operation, identifying the use cases with real return, and designing, building and integrating the solution with the systems the business already runs on.'
    ],
    principle: {
      title: 'AI where it improves the business — not because it is fashionable.',
      text: 'Many Australian organisations are under pressure to “do something with AI”. Our approach is the opposite of hype: we start from the process, the information available and the outcome you need. Where automation or systems integration solves the problem, we recommend that first. Where AI genuinely adds value, we design and implement it with clear success criteria.'
    },
    includes: {
      eyebrow: 'What is included',
      title: 'AI consulting services for organisations in Australia.',
      items: [
        { title: 'AI opportunity assessment', text: 'A structured review of processes, data and systems to identify where AI delivers a measurable improvement for your organisation.' },
        { title: 'AI strategy and roadmap', text: 'Prioritised use cases, required data, architecture, risks and a realistic implementation plan aligned with business objectives.' },
        { title: 'AI-powered automation', text: 'Workflows that combine rules, integrations and language models to reduce manual work in operations, finance and customer service.' },
        { title: 'AI agents and assistants', text: 'Assistants connected to your organisation’s information for customer enquiries, internal support and request handling.' },
        { title: 'Intelligent document processing', text: 'Extraction, classification and validation of information from invoices, contracts, forms and emails.' },
        { title: 'Integration with existing systems', text: 'Connection with ERP, CRM, accounting platforms and internal tools so AI operates inside the real process.' }
      ]
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'Where AI adds value for Australian organisations.',
      intro: 'Use cases are prioritised by operational impact and by the information already available in the business.',
      items: [
        { title: 'Customer enquiries and service', text: 'Automatic classification, assisted responses and routing to the right team.' },
        { title: 'Operations and back office', text: 'Data capture, reconciliations, validations and document generation.' },
        { title: 'Sales and follow-up', text: 'Lead qualification, interaction summaries and automated follow-up.' },
        { title: 'Reporting and decision support', text: 'Natural-language queries over business data and automatically generated reports.' }
      ]
    },
    industries: {
      eyebrow: 'Industries',
      title: 'Sectors we work with in Australia.',
      items: ['Professional services', 'Logistics and distribution', 'Construction and trades', 'Healthcare and allied health', 'Retail and e-commerce', 'Property and real estate', 'Education and training', 'Manufacturing']
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
      title: 'AI consulting in Australia — common questions.',
      items: [
        { q: 'Do you work with businesses across Australia?', a: 'Yes. We work with organisations in every state and territory. Projects are delivered online, with meetings scheduled in Australian business hours and clear milestones agreed in writing.' },
        { q: 'Is our business too small for AI consulting?', a: 'No. Many of the highest-return use cases are in small and mid-sized businesses with repetitive, information-heavy processes. The assessment tells you quickly whether a project is worthwhile.' },
        { q: 'How do you handle data privacy and the Australian Privacy Principles?', a: 'Solutions are designed with data minimisation, access controls and clear limits on how information is used, so your organisation can meet its obligations under the Privacy Act 1988 and the Australian Privacy Principles.' },
        { q: 'Can AI integrate with the systems we already use?', a: 'Yes. We integrate with ERP, CRM, accounting and industry platforms commonly used in Australia through APIs and integrations, without replacing what already works.' },
        { q: 'How is a project defined and priced?', a: 'Scope, deliverables, timeline and investment are set out in a proposal before we start. Defined requirements can receive an initial proposal within 48 business hours; complex initiatives start with an analysis phase.' },
        { q: 'What happens after implementation?', a: 'Post-implementation support is defined according to the agreed scope and may include maintenance, optimisation, new functionality or integrations as the business evolves.' }
      ]
    },
    cta: {
      title: 'Tell us about your project or business challenge.',
      text: 'Share the process you need to improve. We will review the context and tell you whether artificial intelligence is the right answer for your organisation — and which combination of solutions makes the most sense.',
      button: 'Start a Project',
      secondary: 'See all solutions'
    },
    serviceArea: ['Australia', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Gold Coast']
  },

  privacyPage: {
    meta: { title: 'Privacy Policy | AOA Global Services', description: 'How AOA Global Services LLC collects, uses, protects and shares personal information in connection with its website, communications and services.' },
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    updated: '22 September 2026',
    contentsLabel: 'Contents',
    backLabel: 'Back to home',
    contactLabel: 'Privacy contact',
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          'AOA Global Services LLC (“AOA”, “we”, “us”, “our”, or the “Company”) recognizes the importance of protecting the privacy and personal information of clients, prospective clients, suppliers, collaborators, website users, and others with whom it maintains business or professional relationships.',
          'This Privacy Policy generally describes how AOA collects, uses, stores, protects and, where applicable, shares personal information in connection with its services, communications, and digital platforms. AOA is a limited liability company organized in Wyoming, United States. This Policy applies to AOA’s website, communications, and services unless specific terms or privacy notices apply.'
        ]
      },
      {
        title: 'Information We May Collect',
        paragraphs: [
          'Depending on the relationship with AOA, we may collect names; company, organization and job title; email address; telephone number; country or general location; information voluntarily provided through forms, email, meetings, or other channels; information required for proposals, contracts, projects, or services; billing, payment, and business transaction information; communications; relevant professional or business information; and technical information relating to access to and use of our websites or platforms where collected by systems used by AOA.',
          'AOA seeks to limit collection to personal information reasonably necessary for its activities and services.'
        ]
      },
      {
        title: 'How We Collect Information',
        paragraphs: [
          'We may obtain information directly when an individual or business contacts AOA, requests information or a proposal, engages our services, completes forms, participates in meetings or projects, maintains a business or professional relationship with AOA, or communicates through authorized channels.',
          'We may also receive information through technology providers, public sources, business referrals, or third parties where legitimate and appropriate.'
        ]
      },
      {
        title: 'Purposes for Processing',
        paragraphs: [
          'AOA may use information to respond to inquiries; assess needs; prepare and administer proposals, contracts, and projects; provide consulting, strategy, process optimization, digital solutions, artificial intelligence, automation, web development, and other professional services; manage relationships, billing, payments, and records; provide support; improve services and platforms; maintain security; prevent fraud, abuse, or unauthorized access; comply with legal, regulatory, tax, contractual, or administrative obligations; exercise or defend legal rights; and send business communications where permitted.',
          'AOA will not intentionally use personal information for materially incompatible purposes unless authorized by the individual or another applicable legal basis exists.'
        ]
      },
      {
        title: 'Sensitive Information',
        paragraphs: [
          'As a general rule, AOA does not require sensitive personal information for ordinary website operation or to begin a business relationship. Where a project requires access to confidential, sensitive, or specially protected information, processing may be subject to appropriate safeguards, contractual arrangements, or project-specific conditions.'
        ]
      },
      {
        title: 'Client and Project Information',
        paragraphs: [
          'AOA may receive access to information, documents, databases, systems, or materials provided by clients. Where AOA processes information on behalf of a client, it will use that information primarily to provide the agreed services and in accordance with applicable contractual and legal obligations.',
          'Client information will not intentionally be used for unrelated commercial purposes without authorization or another lawful basis.'
        ]
      },
      {
        title: 'Artificial Intelligence and Technology Tools',
        paragraphs: [
          'As part of its professional services and internal processes, AOA may use digital tools, automation, and artificial intelligence technologies. Where these tools involve personal or client information, AOA will seek to apply reasonable confidentiality, security, and access controls.',
          'AOA will not sell confidential client information for the purpose of training third-party artificial intelligence models. Specific conditions may be established where particularly sensitive information is processed through AI systems.'
        ]
      },
      {
        title: 'Cookies and Similar Technologies',
        paragraphs: [
          'AOA’s website may use cookies and similar technologies necessary for operation, security, performance analysis, or improvement of user experience. Their specific use may change as systems and providers evolve.',
          'Where applicable law requires consent for particular cookies or tracking technologies, AOA will implement reasonable mechanisms to obtain it.'
        ]
      },
      {
        title: 'Service Providers and Third Parties',
        paragraphs: [
          'AOA may use external providers for technology infrastructure and hosting, information storage and processing, email and communications, business administration, payments and billing, security, analytics, development, technical support, and professional services.',
          'These providers may process information to the extent necessary to provide their services or in accordance with their own terms, contracts, and legal obligations.'
        ]
      },
      {
        title: 'International Transfers',
        paragraphs: [
          'AOA is organized in the United States and may provide services to clients in different countries. Information may be stored, processed, or managed in the United States, Australia, or other countries in which AOA, its clients, or its technology providers operate.',
          'Where applicable law imposes specific requirements for international transfers of personal information, AOA will seek to implement the relevant measures.'
        ]
      },
      {
        title: 'Information Security',
        paragraphs: [
          'AOA implements reasonable administrative, organizational, and technological measures intended to protect information under its control against loss, misuse, unauthorized access, alteration, or disclosure. No technological system, transmission method, or storage method can guarantee absolute security.',
          'If a security incident affects personal information, AOA will assess the incident and take any actions and provide any notifications required under applicable law.'
        ]
      },
      {
        title: 'Retention of Information',
        paragraphs: [
          'AOA will retain personal information for as long as reasonably necessary to provide services, maintain business relationships, comply with contractual obligations, maintain records, satisfy legal, tax, or regulatory requirements, resolve disputes, and protect or exercise legal rights. When no longer necessary, AOA may delete or anonymize information, or retain it where legally required or justified.'
        ]
      },
      {
        title: 'Rights Regarding Personal Information',
        paragraphs: [
          'Depending on applicable law and place of residence, individuals may have rights of access, correction or updating, deletion, objection to or restriction of certain processing, withdrawal of consent, information about processing, and submission of privacy complaints.',
          'Requests may be sent to admin@aoaglobalservices.com. AOA may request reasonable information to verify identity before providing access to, modifying, or deleting information.'
        ]
      },
      {
        title: 'Marketing Communications',
        paragraphs: [
          'AOA may send information about its services, updates, or professional content to clients, business contacts, or individuals who have expressed interest, where permitted. Where applicable, recipients may opt out using available mechanisms or by writing to admin@aoaglobalservices.com.',
          'Administrative, contractual, or service-related communications are not necessarily promotional communications.'
        ]
      },
      {
        title: 'Sale of Personal Information',
        paragraphs: [
          'AOA does not operate a business model based on selling clients’ or users’ personal information to third parties. If AOA’s practices materially change in this respect, this Policy will be updated and measures required by applicable law will be taken.'
        ]
      },
      {
        title: 'Minors',
        paragraphs: [
          'AOA’s services are primarily directed to businesses, professionals, and individuals capable of contracting for professional services. AOA does not intentionally direct services to minors or seek to collect minors’ personal information without required authorization.'
        ]
      },
      {
        title: 'Third-Party Links and Services',
        paragraphs: [
          'AOA’s website or communications may contain links to websites, platforms, or services operated by third parties. AOA does not control their privacy practices. Information processed directly by those services is subject to their own terms and privacy policies.'
        ]
      },
      {
        title: 'Applicable Law and International Scope',
        paragraphs: [
          'AOA Global Services LLC is organized in Wyoming, United States, and may conduct activities and provide services internationally. Personal information will be processed subject to privacy and data protection laws that apply according to the nature of processing, services provided, and relevant jurisdiction.',
          'Nothing in this Policy is intended to limit rights that an individual mandatorily holds under applicable law.'
        ]
      },
      {
        title: 'Privacy Inquiries and Complaints',
        paragraphs: [
          'For privacy inquiries, requests, or concerns:',
          'AOA will review requests and complaints and seek to respond within a reasonable period or any period specifically required by applicable law.'
        ],
        contact: ['AOA Global Services LLC', '30 N Gould St, STE R', 'Sheridan, Wyoming 82801', 'United States', 'Email: admin@aoaglobalservices.com']
      },
      {
        title: 'Changes to This Policy',
        paragraphs: [
          'AOA may amend this Privacy Policy when its services, processes, technologies, providers, or legal requirements change. The updated version will be published on the website with its latest revision date.',
          'Where a change is material and applicable law requires additional notice or consent, AOA will take the relevant measures.'
        ]
      }
    ]
  },

  footer: {
    tagline: 'Strategy consulting, process optimization and implementation of business solutions.',
    brandLine: 'Strategy · Processes · Execution',
    solutionsTitle: 'Solutions',
    solutions: [
      { slug: 'strategy', label: 'Strategy Consulting & Process Optimization' },
      { slug: 'automation', label: 'Automation & Intelligent Solutions' },
      { slug: 'platforms', label: 'Custom Platforms' },
      { slug: 'data', label: 'Data & Integrations' },
      { slug: 'web', label: 'Web & Digital Solutions' }
    ],
    aiPageLink: 'AI consulting',
    aiMarketPageLink: 'AI consulting in Australia',
    privacyLink: 'Privacy Policy',
    companyTitle: 'Company',
    companyLinks: [
      { label: 'How We Work', anchor: '#approach' },
      { label: 'Projects', anchor: '#projects' },
      { label: 'FAQs', anchor: '#faq' },
      { label: 'Contact', anchor: '#contact' }
    ],
    contactTitle: 'Contact',
    legal: 'US-registered company',
    rights: 'All rights reserved.'
  }
};
