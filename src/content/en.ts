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
    description:
      'AOA Global Services combines consulting and technology development to improve processes, integrate systems and build business solutions, from analysis through to implementation.',
    primaryCta: 'Explore Solutions',
    secondaryCta: 'Start a Project',
    note: 'For clearly defined requirements, we can provide an initial proposal within 48 business hours.',
    imageAlt: 'Team reviewing a project plan with laptops',
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
    note: 'A defined solution is not required. AOA can begin with an analysis of the problem.',
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
        imageAlt: 'Robotic assistant representing automated processes'
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
