import type { SiteContent } from './types';

/**
 * EN — final copy (editorial review). B2B technology consulting and solutions firm.
 * Institutional tone. No geography, no pricing, no testimonials.
 */
export const en: SiteContent = {
  meta: {
    title: 'AOA Global Services | Technology Consulting & Business Solutions',
    description:
      'AOA Global Services combines consulting and technology delivery to improve processes, integrate systems and build custom business solutions.',
    ogImageAlt: 'AOA Global Services — technology to transform how organizations operate',
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
    title: 'Technology to transform how organizations operate.',
    paragraphs: [
      'AOA Global Services combines consulting expertise with technology delivery to improve processes, connect information and build solutions aligned with real business needs.',
      'From a focused initiative to a complete business platform, we connect strategy and execution within a single project.'
    ],
    primaryCta: 'Explore Solutions',
    secondaryCta: 'Start a Project',
    note: 'For clearly defined requirements, we can provide an initial proposal within 48 business hours.',
    imageAlt: 'Earth at night seen from orbit, city lights connected across continents',
    ticker: [
      'Technology strategy & transformation',
      'Automation & intelligent solutions',
      'Custom platforms & software',
      'Data, integrations & reporting',
      'Web & digital solutions'
    ],
    card: {
      label: 'From need to project',
      steps: [
        { title: 'Context', detail: 'We understand the business need, the process involved and the outcome the organization needs to achieve.' },
        { title: 'Definition', detail: 'We establish scope, requirements, approach and an execution plan.' },
        { title: 'Implementation', detail: 'We design, develop and integrate the solution through to implementation.' }
      ],
      footer: 'Each project is structured around its complexity, objectives and requirements.'
    }
  },

  challenges: {
    eyebrow: 'Business challenges',
    title: 'As operations evolve, technology needs to evolve with them.',
    intro:
      'As an organization grows, so does the complexity of its processes, systems and information. What once worked can become a constraint on the ability to operate, make decisions and scale.',
    items: [
      {
        title: 'Processes that no longer scale',
        text: 'Manual workflows, repetitive tasks and operational dependencies reduce capacity and increase the risk of error.'
      },
      {
        title: 'Fragmented information',
        text: 'Data is distributed across systems, files and teams, making it difficult to establish a consistent view of the operation.'
      },
      {
        title: 'Disconnected systems',
        text: 'Individual tools may work well on their own but fail to operate as an integrated ecosystem.'
      },
      {
        title: 'Limited visibility',
        text: 'Information exists, but it is not always available in a form that supports performance management, identifies issues or enables better decisions.'
      },
      {
        title: 'Technology that no longer fits the operating model',
        text: 'Standard solutions become less effective as organizational processes and requirements increase in complexity.'
      },
      {
        title: 'Technology initiatives without clear direction',
        text: 'Technology investment loses impact when business needs, priorities and execution are not clearly connected.'
      }
    ],
    closing: [
      'The answer is not always more technology.',
      'In many cases, it starts with improving the process, connecting information more effectively or making better use of the systems already in place.'
    ]
  },

  approach: {
    eyebrow: 'Our approach',
    title: 'From strategy to implementation.',
    intro: 'AOA brings together business analysis, solution design and technology delivery within one operating model.',
    steps: [
      {
        number: '01',
        title: 'Understand',
        description: 'We assess the context, processes, existing systems and the outcome the organization needs to achieve.'
      },
      {
        number: '02',
        title: 'Design',
        description: 'We define the solution, requirements, priorities and the approach required to move into execution.'
      },
      {
        number: '03',
        title: 'Implement',
        description: 'We develop, configure and integrate the required components through to implementation.'
      }
    ],
    closing: [
      'The depth of each phase depends on the project.',
      'A clearly defined requirement can move directly into execution. More complex challenges may require an initial analysis and design phase.'
    ],
    model: {
      title: 'Integrated project direction.',
      paragraphs: [
        'Technology initiatives often involve processes, data, systems, user experience and development.',
        'AOA coordinates these capabilities under one project direction to maintain alignment between the business need, the solution design and its implementation.'
      ],
      highlight: 'One vision. Defined scope. An integrated solution.',
      pillars: [
        {
          image: '/img/strategy.webp',
          alt: 'Working session with the business team',
          label: 'Consulting',
          text: 'Understanding the business and defining the initiative.'
        },
        {
          image: '/img/team.webp',
          alt: 'Technical team building a solution',
          label: 'Technology',
          text: 'Solution design, development and integration.'
        },
        {
          image: '/img/implementation.webp',
          alt: 'Reviewing a solution before deployment',
          label: 'Implementation',
          text: 'Project delivery, validation and deployment.'
        }
      ]
    }
  },

  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Solutions designed to improve processes, information and operations.',
    intro:
      'Every initiative starts from a different business context. AOA’s capabilities can be combined within one project or applied individually depending on the needs of the organization.',
    challengeLabel: 'The challenge',
    whatLabel: 'What we do',
    outcomeLabel: 'Outcome',
    capabilitiesLabel: 'Capabilities',
    cta: 'Start a Project',
    undecided: {
      title: 'When the problem is clear, but the solution isn’t.',
      paragraphs: [
        'A technology project does not need to begin with a technical specification.',
        'AOA can assess the current situation and determine which combination of process improvement, integration, automation or development makes the most sense for the organization.'
      ],
      cta: 'Start a Project'
    },
    items: [
      {
        slug: 'strategy',
        name: 'Technology Strategy & Transformation',
        challenge: 'The organization needs to evolve its processes, systems or capabilities but lacks clarity on what should change first.',
        what: 'We assess operations, processes, information and existing systems to identify opportunities, priorities and viable technology solutions.',
        outcome: 'A structured initiative with clear priorities and a technology direction aligned with the business.',
        capabilities: ['Assessment', 'Process Design', 'Technology Strategy', 'Solution Design', 'Roadmaps'],
        image: '/img/consulting.webp',
        imageAlt: 'Team defining initiative priorities on a board'
      },
      {
        slug: 'automation',
        name: 'Automation & Intelligent Solutions',
        challenge: 'Repetitive processes, high volumes of information and manual activity limit operational capacity.',
        what: 'We design solutions that automate tasks, structure information and improve workflows using integrations, automation and intelligent technologies where they create measurable value.',
        outcome: 'Greater operational capacity, more efficient processes and better use of information.',
        capabilities: ['Automation', 'Workflows', 'Document Processing', 'Integrations', 'Applied AI'],
        image: '/img/automation.webp',
        imageAlt: 'Robotic assistant representing automated processes'
      },
      {
        slug: 'platforms',
        name: 'Custom Platforms & Software',
        challenge: 'Existing solutions no longer adequately support the way the organization operates.',
        what: 'We design and develop platforms, internal systems, portals and management tools around specific business requirements.',
        outcome: 'Technology built around the organization’s processes, users and data.',
        capabilities: ['Operational Platforms', 'Business Software', 'Portals', 'Dashboards', 'Internal Tools'],
        image: '/img/software.webp',
        imageAlt: 'Source code of a platform under development'
      },
      {
        slug: 'data',
        name: 'Data, Integrations & Reporting',
        challenge: 'Information is distributed across multiple systems without a sufficiently integrated view of the operation.',
        what: 'We connect systems, APIs and data sources to structure information flows, reporting and analytical tools.',
        outcome: 'More consistent information, greater operational visibility and better tools for decision-making.',
        capabilities: ['Integrations', 'APIs', 'Data Flows', 'Dashboards', 'Reporting', 'Analytics'],
        image: '/img/seo.webp',
        imageAlt: 'Operational indicators dashboard on a laptop'
      },
      {
        slug: 'web',
        name: 'Web & Digital Solutions',
        challenge: 'The organization’s digital presence does not fully reflect its positioning or support its commercial and operational objectives.',
        what: 'We design and develop corporate websites, landing pages, portals and digital experiences focused on performance, visibility and conversion.',
        outcome: 'A professional, measurable digital presence designed to evolve with the business.',
        capabilities: ['Web Development', 'UX/UI', 'SEO', 'Analytics', 'Landing Pages', 'Portals', 'Digital Experiences'],
        image: '/img/web.webp',
        imageAlt: 'Design workstation with a corporate website interface on screen'
      }
    ]
  },

  projects: {
    eyebrow: 'Projects & solutions',
    title: 'Technology applied to real operational needs.',
    capabilitiesLabel: 'Capabilities',
    items: [
      {
        title: 'Operational platforms',
        text: 'Solutions that bring planning, information, monitoring, management and reporting into a single technology layer.',
        capabilities: ['Processes', 'Integrations', 'Data', 'Dashboards', 'Reporting', 'Automation']
      },
      {
        title: 'Process automation',
        text: 'Workflows designed to reduce manual activity, structure information and improve the consistency of recurring processes.',
        capabilities: ['Automation', 'Workflow Design', 'Integrations', 'Document Processing', 'Applied AI where appropriate']
      },
      {
        title: 'Digital ecosystems',
        text: 'Digital experiences connected with lead generation, content management, forms, analytics and internal processes.',
        capabilities: ['Web', 'UX/UI', 'SEO', 'Analytics', 'Integrations']
      }
    ]
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Key considerations before starting a technology project.',
    items: [
      {
        q: 'What types of projects does AOA deliver?',
        a: 'We work on projects involving technology transformation, automation, systems integration, business platforms, data and digital solutions.'
      },
      {
        q: 'Do we need to have the solution defined before starting a project?',
        a: 'No. A project can begin with a clearly defined requirement or with a business challenge that still requires analysis and structure.'
      },
      {
        q: 'How is project scope defined?',
        a: 'Scope is established based on business objectives, the processes involved, existing systems, functional requirements, dependencies and the overall complexity of the project.'
      },
      {
        q: 'Can AOA work with our existing systems?',
        a: 'Yes. We first assess the existing technology environment and tools. Where appropriate, we prioritize integration and extension of existing capabilities before recommending unnecessary replacement.'
      },
      {
        q: 'How do you determine whether a process should be automated?',
        a: 'We assess the current process, workload, dependencies, available information and the expected outcome. Automation is recommended when it can produce a clear improvement in efficiency, consistency or operational capacity.'
      },
      {
        q: 'How are projects managed?',
        a: 'Each project is structured around defined scope, responsibilities, deliverables, milestones and governance appropriate to its level of complexity.'
      },
      {
        q: 'How do you evaluate the outcome of an implementation?',
        a: 'Success criteria are defined according to the objectives of the project and may include efficiency, reduced manual work, information quality, operational visibility, management capability, adoption or digital performance.'
      },
      {
        q: 'What happens after implementation?',
        a: 'Solutions can be maintained, optimized or expanded through additional functionality, integrations or automation as the organization’s needs evolve.'
      }
    ]
  },

  contact: {
    eyebrow: 'New projects',
    title: 'Tell us about your project or business challenge.',
    paragraphs: [
      'Share a defined initiative, a process that needs to evolve or a challenge for which the right technology solution has not yet been determined.',
      'We will review the context and identify the most appropriate next step.'
    ],
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
