import { Project, Service, ProcessStep, SkillCategory, PricingTier, QuickFixItem } from '../types/portfolio';

// Local assets imported as modules for reliable Vite bundling & GitHub Pages hosting
import HERO_GRAPHIC_URL from '../assets/images/abstract_hero_graphic_1791049344374.jpg';
import BUS_TRACKING_IMAGE from '../assets/images/bus_tracking_preview_1791049302856.jpg';
import WELLNESS_IMAGE from '../assets/images/wellness_companion_preview_1791049320089.jpg';
import NEXT_PROJECT_IMAGE from '../assets/images/next_project_preview_1791049333073.jpg';

// Behance Designs from user profile https://www.behance.net/gnikil
import MUSIC_APP_UI_IMAGE from '../assets/images/music_app_ui_mockup_1791050756281.jpg';
import SNEAKER_APP_IMAGE from '../assets/images/sneaker_app_ui_mockup_1791050769477.jpg';
import FOOD_DELIVERY_IMAGE from '../assets/images/food_delivery_ui_mockup_1791050782442.jpg';
import GAMING_HUB_IMAGE from '../assets/images/gaming_hub_ui_mockup_1791050794555.jpg';

export {
  HERO_GRAPHIC_URL,
  BUS_TRACKING_IMAGE,
  WELLNESS_IMAGE,
  NEXT_PROJECT_IMAGE,
  MUSIC_APP_UI_IMAGE,
  SNEAKER_APP_IMAGE,
  FOOD_DELIVERY_IMAGE,
  GAMING_HUB_IMAGE,
};

export const BEHANCE_PROFILE_URL = 'https://www.behance.net/gnikil';
export const CONTACT_EMAIL = 'nikilg782@gmail.com';
export const GITHUB_URL = 'https://github.com/Nikil95';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/nikil-g-4b3a73288/';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'College Bus Live Tracking System',
    subtitle: 'Real-time transit telemetry & student route navigator',
    description: 'A real-time college bus tracking platform designed to help students track buses, routes, stops and estimated arrival times.',
    category: 'engineering',
    tags: ['React', 'JavaScript', 'PHP', 'MySQL', 'GPS'],
    imageSrc: BUS_TRACKING_IMAGE,
    features: [
      'Live GPS map markers with low-latency coordinates polling',
      'Dynamic ETA calculations based on distance and route traffic',
      'Student notification subscriptions for morning & evening pickups',
      'Fleet admin control dashboard for driver routes and schedules'
    ],
    challenge: 'Students regularly missed transport due to unpredictable morning traffic delays and uncoordinated campus bus schedules.',
    solution: 'Engineered a lightweight client-server architecture with GPS telemetry feed, cached route polylines in MySQL, and an intuitive mobile-friendly React interface.',
    githubUrl: 'https://github.com/Nikil95',
    liveUrl: '#',
    isPlaceholder: false
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Mental Health & Wellness Companion',
    subtitle: 'Holistic mood tracking & cognitive wellness workspace',
    description: 'A web application focused on mood tracking, journaling, wellness activities and interactive user experiences.',
    category: 'engineering',
    tags: ['React', 'Python', 'AI', 'UI/UX'],
    imageSrc: WELLNESS_IMAGE,
    features: [
      'Visual mood calendar with trend analysis and daily patterns',
      'Encrypted personal journaling with reflective prompt generation',
      'Guided breathing exercise visualizer with bio-rhythm pacing',
      'Privacy-first local storage architecture with optional sync'
    ],
    challenge: 'Most mental wellness apps feel clinical, stressful, or data-invasive, causing high drop-off after the first few days.',
    solution: 'Designed an ultra-calm, distraction-free interface utilizing soft dark aesthetics, restorative animations, and thoughtful interactive prompts.',
    githubUrl: 'https://github.com/Nikil95',
    liveUrl: '#',
    isPlaceholder: false
  },
  {
    id: 'project-design-01',
    number: '03',
    title: 'Music App UI — Desktop Streaming',
    subtitle: 'Atmospheric audio player & artist discography dashboard',
    description: 'A dark mode music streaming interface designed for desktop audio lovers, featuring custom waveform visualizers, curated playlists, and artist bio exploration.',
    category: 'design',
    tags: ['Figma', 'UI/UX', 'Dark Mode', 'Design System'],
    imageSrc: MUSIC_APP_UI_IMAGE,
    features: [
      'Atmospheric dark-mode listening experience with refined contrast',
      'Sidebar navigation for playlists, albums, and recommended artists',
      'Mini-player with live waveform scrub and audio spectrum indicators',
      'Comprehensive design system in Figma with fluid auto-layout components'
    ],
    challenge: 'Desktop music apps often suffer from cluttered sidebars and poor hierarchy that distract from the pure listening experience.',
    solution: 'Created an editorial, distraction-free layout with focal album artwork, subtle glow accents, and intuitive playback controls.',
    behanceUrl: 'https://www.behance.net/gallery/196418503/Music-app-UI',
    isPlaceholder: false
  },
  {
    id: 'project-design-02',
    number: '04',
    title: 'Sneaker & Streetwear E-Commerce Mobile App',
    subtitle: 'Drop announcements, 360 preview & quick checkout',
    description: 'A high-energy mobile shopping interface crafted for sneakerheads, featuring exclusive drop countdowns, high-res product galleries, and frictionless 1-tap checkout.',
    category: 'design',
    tags: ['Mobile UI', 'Figma', 'E-Commerce', 'Interaction'],
    imageSrc: SNEAKER_APP_IMAGE,
    features: [
      'Bold product display cards with colorway switchers',
      'Sticky bottom sheet for rapid size selection and instant buy',
      'Drop calendar with push reminder toggle for limited releases',
      'Tactile micro-interactions for adding favorites and bag management'
    ],
    challenge: 'Limited release sneaker drops require split-second purchase decisions without UI lag or confusing confirmation flows.',
    solution: 'Streamlined checkout down to two thumb-friendly taps, supported by striking editorial product framing.',
    behanceUrl: 'https://www.behance.net/gnikil',
    isPlaceholder: false
  },
  {
    id: 'project-design-03',
    number: '05',
    title: 'Seasonal Salads & Food Ordering App',
    subtitle: 'Fresh culinary delivery experience with smart menus',
    description: 'Clean, appetizing mobile food ordering app focused on seasonal organic salads, daily chef specials, and real-time delivery tracking.',
    category: 'design',
    tags: ['Mobile UX', 'Food Delivery', 'Figma', 'Prototyping'],
    imageSrc: FOOD_DELIVERY_IMAGE,
    features: [
      'High-impact visual dish cards highlighting nutritional macros',
      'Special offers carousel with personalized combo recommendations',
      'Live order tracker with step-by-step prep and courier dispatch',
      'Interactive ingredient customizer for dietary preferences'
    ],
    challenge: 'Food apps often overwhelm users with endless menus, leading to decision fatigue and abandoned orders.',
    solution: 'Categorized dishes by dietary mood and seasonal harvest with clean white-space cards and mouth-watering presentation.',
    behanceUrl: 'https://www.behance.net/gnikil',
    isPlaceholder: false
  },
  {
    id: 'project-design-04',
    number: '06',
    title: 'Game Island — Gaming Hub Platform',
    subtitle: 'Game launcher, player stats & community leaderboard',
    description: 'A futuristic desktop gaming platform interface featuring real-time player telemetry, popular games carousel, and esports community matches.',
    category: 'design',
    tags: ['Desktop UI', 'Gaming', 'Dashboard', 'Figma'],
    imageSrc: GAMING_HUB_IMAGE,
    features: [
      'Comprehensive player statistics dashboard with win-rate telemetry',
      'Vibrant game library carousel with quick-launch integration',
      'Live tournament brackets and community squad matchmaking',
      'Custom theme personalization with high-contrast accenting'
    ],
    challenge: 'Consolidating game launch, discord chat, and ranked telemetry without high cognitive load during competitive gaming.',
    solution: 'Engineered a modular Bento grid layout prioritizing active game status and immediate friend activity.',
    behanceUrl: 'https://www.behance.net/gnikil',
    isPlaceholder: false
  },
  {
    id: 'project-placeholder',
    number: '07',
    title: 'Your Next Project',
    subtitle: 'From initial concept to production-ready software',
    description: "Maybe it's yours. Let's build something useful together.",
    category: 'engineering',
    tags: ['Tailwind CSS', 'TypeScript', 'Full-Stack', 'UI Design'],
    imageSrc: NEXT_PROJECT_IMAGE,
    features: [
      'Tailored engineering to your exact goals and specifications',
      'Clean, maintainable codebase ready to scale and hand over',
      'High-converting modern UI with sub-second page performance',
      'Direct, asynchronous developer communication without intermediaries'
    ],
    challenge: 'Turning an ambitious product vision or client website into a polished, accessible reality without scope bloat.',
    solution: 'Collaborative development with clear milestones, Figma fidelity, and fast deployment.',
    isPlaceholder: true
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'websites',
    title: 'Websites',
    description: 'Modern responsive websites for businesses, portfolios and personal brands.',
    iconName: 'layout',
    deliverables: ['Custom landing pages', 'Portfolio & studio websites', 'High-conversion copy layouts', 'Mobile & tablet optimization']
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Interactive applications using modern frontend and backend technologies.',
    iconName: 'cpu',
    deliverables: ['Single page applications', 'Custom dashboards & portals', 'API & database integration', 'State management & auth']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps (Flutter)',
    description: 'Cross-platform iOS and Android mobile applications built with Flutter and Dart.',
    iconName: 'smartphone',
    deliverables: ['Cross-platform iOS & Android', 'Smooth 60fps UI & custom widgets', 'REST API & database integration', 'App store preparation & build']
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    description: 'Clean interfaces and landing pages designed in Figma.',
    iconName: 'palette',
    deliverables: ['Figma design systems', 'Component libraries', 'Interactive wireframe prototypes', 'Design-to-code translation']
  },
  {
    id: 'improvements',
    title: 'Website & App Improvements',
    description: 'Responsive fixes, UI improvements, performance improvements and frontend bug fixing.',
    iconName: 'wrench',
    deliverables: ['Cross-device responsive fixes', 'Page speed & asset optimization', 'Tailwind & Flutter refactoring', 'Bug hunting & patch release']
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the idea, goals and requirements.',
    detail: 'We discuss your project objectives, target audience, technical needs, and timeline to ensure crystal clarity before writing a line of code.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the structure and visual direction.',
    detail: 'I craft clean wireframes and high-fidelity interface mockups in Figma, focusing on whitespace, typography, and intuitive user paths.'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the responsive website or application.',
    detail: 'Using modern React, TypeScript, Flutter, and clean architecture, I build robust, accessible components with smooth micro-interactions.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Test, deploy and hand over the final product.',
    detail: 'Rigorous cross-browser testing, SEO checklist, performance audit, live deployment on your chosen host, and thorough documentation handover.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Mobile',
    skills: [
      { name: 'Flutter', description: 'Cross-platform iOS & Android apps, reactive UI, custom widgets', featured: true },
      { name: 'Dart', description: 'Async programming, stream architecture, null-safety', featured: true }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', description: 'Component architecture, custom hooks, SPA state', featured: true },
      { name: 'JavaScript', description: 'ESNext, async programming, DOM APIs, event loop', featured: true },
      { name: 'HTML', description: 'Semantic structure, accessibility (a11y), SEO tags' },
      { name: 'CSS', description: 'Modern Flexbox, Grid, CSS custom properties, responsive design' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', description: 'REST APIs, Express middleware, server-side utilities', featured: true },
      { name: 'Python', description: 'Automation scripts, backend services, data logic', featured: true },
      { name: 'PHP', description: 'Server scripts, form handling, dynamic endpoints' }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', description: 'Relational schema design, indexed queries, normalization', featured: true }
    ]
  },
  {
    category: 'Design',
    skills: [
      { name: 'Figma', description: 'Interface layout, auto-layout, design tokens, prototypes', featured: true },
      { name: 'Canva', description: 'Graphic assets, visual collateral, quick social cards' }
    ]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    badge: '🌱 Starter Website',
    title: 'Starter Website',
    price: '₹2,000',
    priceSubtitle: 'Starting from — final price depends on project scope.',
    description: 'For individuals, students and small businesses that need a simple online presence.',
    features: [
      'Up to 3–4 pages',
      'Responsive mobile design',
      'Contact / WhatsApp button',
      'Basic animations & smooth scrolling',
      'Deployment assistance (Vercel / Netlify)'
    ],
    ctaText: 'Get Started →',
    type: 'Website'
  },
  {
    id: 'business',
    badge: '🚀 Business Website',
    title: 'Business Website',
    price: '₹5,000',
    priceSubtitle: 'Starting from — final price depends on project scope.',
    description: 'For small businesses that need a more polished professional website.',
    features: [
      'Up to 6–8 pages',
      'Custom responsive design',
      'Contact form & WhatsApp integration',
      'Basic SEO setup & metadata tags',
      'Deployment on custom domain',
      'Basic post-launch support & walkthrough'
    ],
    ctaText: 'Discuss Your Project →',
    highlighted: true,
    type: 'Website'
  },
  {
    id: 'custom-app',
    badge: '⚡ Web & Flutter Mobile App',
    title: 'Custom Web / Flutter App',
    price: "Let's Talk",
    priceSubtitle: 'Price based on requirements.',
    description: 'For dashboards, custom web applications, or cross-platform iOS & Android apps built with Flutter.',
    features: [
      'Custom UI/UX & component library',
      'Frontend (React) or Mobile (Flutter)',
      'Backend development (Node.js/Python/PHP)',
      'Database integration (MySQL/Firebase)',
      'Authentication & API integration',
      'Deployment, app build & documentation'
    ],
    ctaText: 'Request a Quote →',
    type: 'Web / Mobile Application'
  }
];

export const QUICK_FIX_ITEMS: QuickFixItem[] = [
  { title: 'Responsive design fixes', description: 'Fixing awkward breaks, mobile overflow, and tablet alignment' },
  { title: 'CSS & styling issues', description: 'Resolving positioning, flexbox bugs, and font rendering inconsistencies' },
  { title: 'UI improvements', description: 'Polishing typography, spacing hierarchy, contrast, and visual rhythm' },
  { title: 'Bug fixes', description: 'Diagnosing JavaScript console errors, broken hooks, and event failures' },
  { title: 'Landing-page changes', description: 'Adding sections, updating copy, swap banners, and CTA adjustments' },
  { title: 'Small feature additions', description: 'Integrating modals, contact forms, dark mode toggles, or filter tabs' }
];

export const MONTHLY_SUPPORT_FEATURES = [
  {
    title: 'Website updates',
    detail: 'Routine page adjustments, new portfolio entries, and copy updates.'
  },
  {
    title: 'Content changes',
    detail: 'Adding blog posts, updating product information, and image replacements.'
  },
  {
    title: 'Bug fixes',
    detail: 'Prompt troubleshooting of unexpected styling or script malfunctions.'
  },
  {
    title: 'Ongoing maintenance',
    detail: 'Dependency updates, security checks, and hosting uptime monitoring.'
  }
];
