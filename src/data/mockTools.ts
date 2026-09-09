import { Tool, EcosystemStats } from '../types/tool';

export const INITIAL_STATS: EcosystemStats = {
  totalTools: 12480,
  totalCategories: 48,
  verifiedTools: 8420,
  monthlyUsers: '4.2M+',
  activeToday: 142,
};

export const CATEGORIES = [
  'All',
  'LLMs & Chat',
  'Coding & Dev',
  'Image & Art',
  'Video & 3D',
  'Audio & Voice',
  'Productivity & Agents',
  'Research & Search',
];

export const MOCK_TOOLS: Tool[] = [
  {
    id: 'tool-chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    logo: 'https://logo.clearbit.com/openai.com',
    brandColor: '#10a37f',
    tagline: 'Leading conversational AI model by OpenAI with GPT-4o intelligence',
    description: 'ChatGPT is OpenAI’s flagship AI assistant, powered by GPT-4o and o1 reasoning models. It excels at complex reasoning, coding, writing, multimodality (voice, images, charts), canvas collaboration, and custom GPT extensions.',
    category: 'LLMs & Chat',
    tags: ['Conversational', 'GPT-4o', 'Reasoning', 'Vision', 'Voice Mode'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 3420,
    bookmarksCount: 18450,
    websiteUrl: 'https://chatgpt.com',
    launchYear: 2022,
    companyName: 'OpenAI',
    companyUrl: 'https://openai.com',
    apiAvailable: true,
    contextWindow: '128k tokens',
    features: [
      'Advanced multimodal reasoning (text, audio, vision)',
      'Canvas interactive coding & writing workspace',
      'Real-time voice mode with human-like latency',
      'Custom GPTs marketplace & workspace knowledge files',
      'Web search browsing with real-time citations',
      'DALL-E 3 image generation embedded directly in conversation'
    ],
    pros: [
      'Top-tier general benchmark scores across logic, coding, and writing',
      'Instant real-time web search and citation verification',
      'Extensive ecosystem of plugins, GPTs, and integrations',
      'Extremely generous free tier with GPT-4o mini and periodic GPT-4o access'
    ],
    cons: [
      'Token rate limits on Plus plan during peak global hours',
      'Deep reasoning o1 models can have slower response latency'
    ],
    pricingTiers: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Access to GPT-4o mini and limited daily access to GPT-4o.',
        features: ['GPT-4o mini intelligence', 'Limited GPT-4o access', 'Data analysis & file uploads', 'Browse the web'],
        ctaText: 'Start Free'
      },
      {
        name: 'Plus',
        price: '$20',
        period: '/ month',
        description: 'Full unlimited access to standard GPT-4o and advanced reasoning models.',
        features: ['5x more messages on GPT-4o', 'Access to OpenAI o1 reasoning', 'Real-time Voice Mode', 'Canvas code & writing editor', 'Create custom GPTs'],
        isPopular: true,
        ctaText: 'Upgrade to Plus'
      },
      {
        name: 'Team',
        price: '$25',
        period: '/ user / mo',
        description: 'Dedicated workspace for teams with administrative control.',
        features: ['Higher message caps', 'Team workspace admin console', 'No training on your business data', 'Share custom GPTs internally'],
        ctaText: 'Start Team Plan'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'annual',
        description: 'Enterprise-grade security, dedicated account management, and SOC2 compliance.',
        features: ['Unlimited high-speed GPT-4o', 'Expanded context window', 'Enterprise SSO & SCIM', 'Custom retention & HIPAA compliance'],
        ctaText: 'Contact Sales'
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        authorName: 'Alex Rivera',
        userRole: 'Staff Software Architect',
        rating: 5,
        date: '2 days ago',
        title: 'The gold standard for daily engineering workflows',
        comment: 'GPT-4o and the interactive Canvas mode have transformed how I draft system design documents and debug race conditions. The voice mode is also incredibly natural for rubber-ducking architecture.',
        helpfulCount: 84
      },
      {
        id: 'rev-2',
        authorName: 'Sarah Jenkins',
        userRole: 'Growth & Product Lead',
        rating: 5,
        date: '1 week ago',
        title: 'Unbeatable value for market research',
        comment: 'The browsing capability combined with file analysis saves our team 15+ hours every week preparing competitive intelligence briefs.',
        helpfulCount: 42
      }
    ],
    promptExample: {
      task: 'System Architecture Analysis',
      input: 'Explain the difference between event sourcing and CQRS, and give a pragmatic Node.js/Kafka implementation pattern.',
      outputSnippet: 'CQRS (Command Query Responsibility Segregation) separates read and write models, while Event Sourcing persists state changes as an immutable append-only event log. Together with Kafka, commands write events to topic `order-events`, and read projectors materialize denormalized Postgres query tables...'
    },
    alternatives: [
      { name: 'Claude 3.5 Sonnet', slug: 'claude-3-5-sonnet', category: 'LLMs & Chat', pricingType: 'Freemium', comparisonNote: 'Often superior in nuanced coding and technical writing' },
      { name: 'Perplexity AI', slug: 'perplexity-ai', category: 'Research & Search', pricingType: 'Freemium', comparisonNote: 'Optimized specifically for citation-backed real-time web research' }
    ]
  },
  {
    id: 'tool-cursor',
    name: 'Cursor',
    slug: 'cursor',
    logo: 'https://logo.clearbit.com/cursor.com',
    brandColor: '#1a1a1a',
    tagline: 'The AI-first code editor built on VS Code with agentic Composer capabilities',
    description: 'Cursor is an AI-powered code editor fork of VS Code engineered to maximize developer velocity. Features multi-file edits via Composer, codebase-wide semantic indexing, and seamless inline AI tab completions.',
    category: 'Coding & Dev',
    tags: ['IDE', 'VS Code', 'Composer', 'Agentic', 'Codebase Indexing'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.95,
    reviewCount: 2890,
    bookmarksCount: 22300,
    websiteUrl: 'https://cursor.com',
    launchYear: 2023,
    companyName: 'Anysphere',
    companyUrl: 'https://anysphere.inc',
    apiAvailable: false,
    contextWindow: '200k tokens',
    features: [
      'Composer: Agentic multi-file code generation and refactoring',
      'Semantic Codebase Indexing: AI understands your entire repo architecture',
      'Next-edit prediction with lightning fast inline tab completion',
      'Instant VS Code extension compatibility & one-click settings import',
      'Built-in Claude 3.5 Sonnet, GPT-4o, and custom model switching',
      'Terminal execution and auto-debugging of build errors'
    ],
    pros: [
      'Drastically faster than VS Code Copilot for multi-file architectural modifications',
      'Maintains full familiarity with existing VS Code keybindings and theme extensions',
      'Understands references across entire monorepos effortlessly',
      'Composer agent mode can implement complete feature branches independently'
    ],
    cons: [
      'Pro plan fast-request credits can deplete rapidly during intense coding sessions',
      'Occasional memory overhead when indexing massive multi-gigabyte repositories'
    ],
    pricingTiers: [
      {
        name: 'Hobby',
        price: '$0',
        period: 'forever',
        description: 'Ideal for trying out Cursor with basic AI assistance.',
        features: ['2,000 completions', '50 slow premium requests', 'Full VS Code extension ecosystem', 'Codebase indexing'],
        ctaText: 'Download Cursor'
      },
      {
        name: 'Pro',
        price: '$20',
        period: '/ month',
        description: 'For professional software engineers seeking maximal productivity.',
        features: ['Unlimited completions', '500 fast premium requests / mo', 'Unlimited slow requests', '10 Claude 3.5 Sonnet Opus requests / day', 'Multi-file Composer mode'],
        isPopular: true,
        ctaText: 'Start 14-Day Trial'
      },
      {
        name: 'Business',
        price: '$40',
        period: '/ user / mo',
        description: 'Designed for engineering organizations requiring privacy and centralized billing.',
        features: ['Everything in Pro', 'Zero-data retention guarantee', 'Admin dashboard & usage stats', 'Centralized billing', 'SAML SSO'],
        ctaText: 'Get Business'
      }
    ],
    reviews: [
      {
        id: 'rev-c1',
        authorName: 'Elena Rostova',
        userRole: 'Senior Full Stack Engineer',
        rating: 5,
        date: '3 days ago',
        title: 'I cannot write code without Cursor anymore',
        comment: 'Composer is pure magic. I described a new Stripe webhook handler with idempotent event logging, and it updated 4 files, added unit tests, and handled TypeScript typings in 30 seconds.',
        helpfulCount: 112
      },
      {
        id: 'rev-c2',
        authorName: 'Marcus Thorne',
        userRole: 'DevOps Lead',
        rating: 5,
        date: '1 week ago',
        title: 'Codebase indexing is vastly superior to GitHub Copilot',
        comment: 'It accurately picks up internal utility functions that standard chat models would never have guessed.',
        helpfulCount: 56
      }
    ],
    promptExample: {
      task: 'Full Feature Refactor via Composer',
      input: 'Convert our session-based auth in server/routes/auth.ts to JWT with refresh token rotation and update user schema.',
      outputSnippet: 'Cursor Composer identified 3 related files: `server/routes/auth.ts`, `server/models/User.ts`, `server/middleware/auth.ts`. Generating atomic diffs with bcrypt hash verification and cookie signing...'
    },
    alternatives: [
      { name: 'GitHub Copilot', slug: 'github-copilot', category: 'Coding & Dev', pricingType: 'Paid', comparisonNote: 'Native GitHub integration but lacks multi-file agentic Composer autonomy' },
      { name: 'v0 by Vercel', slug: 'v0-by-vercel', category: 'Coding & Dev', pricingType: 'Freemium', comparisonNote: 'Focused on generative React/Next.js frontend UI components' }
    ]
  },
  {
    id: 'tool-claude-3-5',
    name: 'Claude 3.5 Sonnet',
    slug: 'claude-3-5-sonnet',
    logo: 'https://logo.clearbit.com/anthropic.com',
    brandColor: '#d97706',
    tagline: 'Anthropic’s state-of-the-art LLM with industry-leading coding and Artifacts UI',
    description: 'Claude 3.5 Sonnet sets the industry benchmark for code generation, complex reasoning, and multimodal document interpretation. The interactive Artifacts UI allows developers to preview React apps, SVG diagrams, and games side-by-side in real-time.',
    category: 'LLMs & Chat',
    tags: ['Anthropic', 'Artifacts', 'Coding', '200k Context', 'Vision'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.93,
    reviewCount: 3100,
    bookmarksCount: 19800,
    websiteUrl: 'https://claude.ai',
    launchYear: 2024,
    companyName: 'Anthropic',
    companyUrl: 'https://anthropic.com',
    apiAvailable: true,
    contextWindow: '200k tokens',
    features: [
      'Interactive Artifacts window for live code, SVG, and HTML previews',
      'Top ranking on HumanEval and SWE-bench coding leaderboards',
      'Massive 200,000 token context window (~150,000 words)',
      'Superior visual document transcription and chart understanding',
      'Projects workspace with custom instructions and reference knowledge',
      'Computer use API capabilities for autonomous desktop navigation'
    ],
    pros: [
      'Arguably the most articulate and coherent code writing model on the market',
      'Artifacts interface makes rapid web prototyping instant and delightful',
      'Virtually zero sycophancy or hallucinated function signatures',
      'Massive context window handles entire codebases or 500-page PDF documents'
    ],
    cons: [
      'Free tier message limits can be reached quickly during heavy work sessions',
      'No built-in live web browsing search comparable to ChatGPT or Perplexity'
    ],
    pricingTiers: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Standard daily access to Claude 3.5 Sonnet on web and mobile.',
        features: ['Claude 3.5 Sonnet access', 'Artifacts interactive preview', 'Document & image analysis', 'Standard context limits'],
        ctaText: 'Use Claude Free'
      },
      {
        name: 'Pro',
        price: '$20',
        period: '/ month',
        description: '5x usage limits and priority access during peak traffic.',
        features: ['5x more messages than free tier', 'Priority access during peak hours', 'Create Projects with pinned documents', 'Early access to new features'],
        isPopular: true,
        ctaText: 'Upgrade to Pro'
      },
      {
        name: 'Team',
        price: '$25',
        period: '/ member / mo',
        description: 'Collaborative projects and shared knowledge for cross-functional teams.',
        features: ['Higher per-user capacity', 'Centralized billing and admin seat management', 'Shared team Projects', 'Early access to collaboration tools'],
        ctaText: 'Start Team Plan'
      }
    ],
    reviews: [
      {
        id: 'rev-cl1',
        authorName: 'David Zhang',
        userRole: 'Principal Frontend Engineer',
        rating: 5,
        date: '4 days ago',
        title: 'Artifacts is the single best UX in AI history',
        comment: 'Building dashboards and interactive SVG charts directly inside the Claude chat window cuts my prototyping cycle down from hours to minutes. Unmatched coding quality.',
        helpfulCount: 97
      }
    ],
    promptExample: {
      task: 'Interactive Dashboard Prototype',
      input: 'Create a full React component for a Crypto Portfolio Tracker with sparkline charts and live profit/loss calculations.',
      outputSnippet: '```tsx\nimport React, { useState } from "react";\nimport { TrendingUp, ArrowUpRight } from "lucide-react";\n// Rendered seamlessly in Claude Artifacts\nexport default function CryptoPortfolio() { ... }\n```'
    },
    alternatives: [
      { name: 'ChatGPT', slug: 'chatgpt', category: 'LLMs & Chat', pricingType: 'Freemium', comparisonNote: 'Has live internet browsing and real-time voice mode' },
      { name: 'Cursor', slug: 'cursor', category: 'Coding & Dev', pricingType: 'Freemium', comparisonNote: 'Embeds Claude 3.5 directly inside your VS Code filesystem' }
    ]
  },
  {
    id: 'tool-midjourney',
    name: 'Midjourney v6',
    slug: 'midjourney-v6',
    logo: 'https://logo.clearbit.com/midjourney.com',
    brandColor: '#1d1d1f',
    tagline: 'World-renowned photorealistic and creative generative AI imagery',
    description: 'Midjourney is the benchmark for high-fidelity text-to-image generation. Version 6 features hyper-photorealistic skin textures, accurate typographic rendering, consistent character styles, and web-based canvas inpainting.',
    category: 'Image & Art',
    tags: ['Generative Art', 'Photorealism', 'Typography', 'Inpainting', 'Design'],
    pricingType: 'Paid',
    startingPrice: '$10 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.88,
    reviewCount: 2450,
    bookmarksCount: 16700,
    websiteUrl: 'https://midjourney.com',
    launchYear: 2022,
    companyName: 'Midjourney, Inc.',
    companyUrl: 'https://midjourney.com',
    apiAvailable: false,
    contextWindow: 'N/A',
    features: [
      'Unsurpassed photographic lighting, textures, and composition',
      'Text rendering directly inside generated graphic artwork',
      'Dedicated Web UI editor with brush inpainting & pan out',
      'Consistent character generation via --cref and style reference --sref',
      'Vary region and pan controls for endless canvas expansion',
      'High-resolution upscalers tuned for print and commercial media'
    ],
    pros: [
      'Best-in-class aesthetic quality and cinematic composition',
      'Understands subtle nuances in film stock, focal lengths, and artistic mediums',
      'Web interface now available for all active subscribers (no Discord required)',
      'Vibrant community showcase and searchable prompt inspiration'
    ],
    cons: [
      'No permanent free tier available',
      'No official direct REST API for external automated pipelines'
    ],
    pricingTiers: [
      {
        name: 'Basic',
        price: '$10',
        period: '/ month',
        description: 'For casual creators looking to generate beautiful images.',
        features: ['3.3 fast GPU hours / month (~200 images)', 'General commercial terms', 'Access to member gallery', '3 concurrent fast jobs'],
        ctaText: 'Subscribe Basic'
      },
      {
        name: 'Standard',
        price: '$30',
        period: '/ month',
        description: 'Unlimited generations in Relax mode and 15 fast hours.',
        features: ['15 fast GPU hours / month', 'Unlimited Relax mode generations', 'General commercial terms', 'Access to web alpha generator'],
        isPopular: true,
        ctaText: 'Subscribe Standard'
      },
      {
        name: 'Pro',
        price: '$60',
        period: '/ month',
        description: 'Stealth generation mode and 30 fast GPU hours.',
        features: ['30 fast GPU hours / month', 'Stealth mode (private generations)', '12 concurrent fast jobs', 'Unlimited Relax mode'],
        ctaText: 'Subscribe Pro'
      }
    ],
    reviews: [
      {
        id: 'rev-m1',
        authorName: 'Claire Laurent',
        userRole: 'Creative Director',
        rating: 5,
        date: '5 days ago',
        title: 'V6 is a monumental leap in photorealism',
        comment: 'We use Midjourney for all our preliminary mood boards and client presentation assets. The typography rendering and character references have saved our studio tens of thousands in stock photography licenses.',
        helpfulCount: 71
      }
    ],
    promptExample: {
      task: 'Photorealistic Editorial Portrait',
      input: 'cinematic medium shot portrait of a cyberpunk female engineer in Tokyo rainy neon alleyway, Hasselblad 50mm, f/1.8, bokeh --ar 16:9 --v 6.1 --style raw',
      outputSnippet: 'Midjourney v6.1 rendered 4 cinematic variations featuring authentic water droplet reflections, accurate focal falloff, and realistic textile fabric.'
    },
    alternatives: [
      { name: 'FLUX.1', slug: 'flux-1', category: 'Image & Art', pricingType: 'Open Source', comparisonNote: 'Open weights alternative offering comparable realism and prompt obedience' },
      { name: 'Runway Gen-3', slug: 'runway-gen-3', category: 'Video & 3D', pricingType: 'Freemium', comparisonNote: 'Generates cinematic video sequences from images and text' }
    ]
  },
  {
    id: 'tool-elevenlabs',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    logo: 'https://logo.clearbit.com/elevenlabs.io',
    brandColor: '#1d1d1d',
    tagline: 'World-leading AI voice cloning, realistic text-to-speech, and audio effects',
    description: 'ElevenLabs provides ultra-realistic speech synthesis with unmatched human intonation, pauses, accents, and emotional cadence. Offers instant voice cloning, multilingual dubbing, sound effect generation, and conversational AI agents.',
    category: 'Audio & Voice',
    tags: ['Voice Cloning', 'Text to Speech', 'Dubbing', 'Audio API', 'Sound Effects'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.87,
    reviewCount: 1840,
    bookmarksCount: 14200,
    websiteUrl: 'https://elevenlabs.io',
    launchYear: 2022,
    companyName: 'ElevenLabs Inc.',
    companyUrl: 'https://elevenlabs.io',
    apiAvailable: true,
    contextWindow: 'N/A',
    features: [
      'Ultra-realistic human-like emotional intonation and cadence',
      'Instant voice cloning from a 1-minute audio sample',
      'Professional Voice Cloning (PVC) for studio-grade audio replication',
      'Cross-lingual dubbing preserving the original speaker voice in 32 languages',
      'Generative sound effects from descriptive text prompts',
      'Low-latency WebSocket streaming API for real-time conversational agents'
    ],
    pros: [
      'Completely indiscernible from human voiceovers when tuned properly',
      'Exceptional developer API with SDKs in Python, Node.js, and Swift',
      'Generous free plan to test voice synthesis directly in the browser',
      'Audio native Dubbing Studio for YouTube creators and film localization'
    ],
    cons: [
      'Character quotas can be consumed fast on high-volume podcast generation',
      'Requires strict voice verification to prevent unauthorized celebrity clones'
    ],
    pricingTiers: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'For hobbyists testing realistic voice synthesis.',
        features: ['10,000 characters / month (~10 mins audio)', 'Create up to 3 custom voices', 'Access to 32 languages', 'API access included'],
        ctaText: 'Get Started'
      },
      {
        name: 'Starter',
        price: '$5',
        period: '/ month',
        description: 'Ideal for creators producing short podcasts and video voiceovers.',
        features: ['30,000 characters / month', 'Instant Voice Cloning', 'Commercial license included', 'Up to 10 custom voices'],
        isPopular: true,
        ctaText: 'Start for $5'
      },
      {
        name: 'Creator',
        price: '$22',
        period: '/ month',
        description: 'For YouTubers, authors, and content teams.',
        features: ['100,000 characters / month', 'Professional Voice Cloning (PVC)', 'Higher quality audio output (192kbps)', 'Up to 30 custom voices'],
        ctaText: 'Upgrade to Creator'
      }
    ],
    reviews: [
      {
        id: 'rev-e1',
        authorName: 'Julian Vance',
        userRole: 'Audiobook Producer',
        rating: 5,
        date: '1 week ago',
        title: 'Revolutionized our localization pipeline',
        comment: 'We dubbed an entire 12-episode video course into Spanish, Japanese, and German while keeping the instructor’s original pitch and voice timber intact. The students could not believe it was AI.',
        helpfulCount: 48
      }
    ],
    promptExample: {
      task: 'Dynamic Narrative Voiceover',
      input: 'The deep rumble of thunder rolled across the valley. [whispering] He knew there was no turning back.',
      outputSnippet: 'Synthesized 24-bit studio FLAC audio with realistic breath pauses, dynamic acoustic timbre, and emotional transition.'
    },
    alternatives: [
      { name: 'Whisper', slug: 'whisper', category: 'Audio & Voice', pricingType: 'Open Source', comparisonNote: 'OpenAI open-weights speech-to-text transcription engine' },
      { name: 'Suno AI', slug: 'suno-ai', category: 'Audio & Voice', pricingType: 'Freemium', comparisonNote: 'Specialized in generating full musical songs with vocals and instrumentation' }
    ]
  },
  {
    id: 'tool-perplexity',
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    logo: 'https://logo.clearbit.com/perplexity.ai',
    brandColor: '#f97316',
    tagline: 'Conversational answer engine with verified real-time sources and Pro search',
    description: 'Perplexity AI replaces traditional search engines with synthesized, direct answers backed by inline citations. Features Pro Search for multi-step reasoning, file uploads, Collections, and access to top underlying models like Claude 3.5 Sonnet and GPT-4o.',
    category: 'Research & Search',
    tags: ['Search Engine', 'Citations', 'Pro Search', 'Research', 'Academic'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.91,
    reviewCount: 2190,
    bookmarksCount: 15300,
    websiteUrl: 'https://perplexity.ai',
    launchYear: 2022,
    companyName: 'Perplexity AI, Inc.',
    companyUrl: 'https://perplexity.ai',
    apiAvailable: true,
    contextWindow: '128k tokens',
    features: [
      'Inline numbered citations to authoritative web sources',
      'Pro Search: Autonomous multi-query research with follow-up questions',
      'Model toggle: Switch seamlessly between Claude 3.5 Sonnet, GPT-4o, and Sonar',
      'Focus modes: Academic research, YouTube, Reddit, Writing, or Computational',
      'Perplexity Pages: Turn search threads into published articles and reports',
      'Perplexity API with grounding citation endpoints for enterprise'
    ],
    pros: [
      'Saves hours of scrolling through SEO-spam search engine results',
      'Every fact is directly hyperlinked to primary source articles',
      'Pro plan includes $5/mo API credits and unlimited file analysis',
      'Focus filter allows searching exclusively peer-reviewed academic papers'
    ],
    cons: [
      'Occasionally synthesizes outdated info if indexed news sites have stale data',
      'Pro search limit on free tier is 5 queries every 4 hours'
    ],
    pricingTiers: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Fast, unlimited standard searches with sources.',
        features: ['Unlimited Quick searches', '5 Pro Searches every 4 hours', 'Standard AI models', 'Collection organization'],
        ctaText: 'Search Free'
      },
      {
        name: 'Pro',
        price: '$20',
        period: '/ month',
        description: 'Comprehensive research engine with 300+ daily Pro queries.',
        features: ['300+ Pro Searches per day', 'Choose AI model (Claude 3.5, GPT-4o)', 'Unlimited document & PDF uploads', '$5 monthly API credit', 'Perplexity Pages publisher'],
        isPopular: true,
        ctaText: 'Get Perplexity Pro'
      }
    ],
    reviews: [
      {
        id: 'rev-p1',
        authorName: 'Dr. Anita Roy',
        userRole: 'Biotech Research Fellow',
        rating: 5,
        date: '6 days ago',
        title: 'Has replaced Google completely for literature reviews',
        comment: 'The academic focus mode combined with Claude 3.5 Sonnet extracts precise methodology findings from 20 papers in minutes with direct links to PubMed and ArXiv.',
        helpfulCount: 65
      }
    ],
    promptExample: {
      task: 'Competitive Landscape Analysis',
      input: 'Compare the market share and pricing of open-source vector databases (Milvus, Qdrant, Chroma, Weaviate) in 2026.',
      outputSnippet: 'Perplexity executed 4 search steps across GitHub, VentureBeat, and corporate benchmark blogs: [1] Milvus leads enterprise scale deployments with distributed architecture... [2] Qdrant shows highest RPS throughput in Rust...'
    },
    alternatives: [
      { name: 'ChatGPT', slug: 'chatgpt', category: 'LLMs & Chat', pricingType: 'Freemium', comparisonNote: 'Broader conversational persona and custom GPT extensions' },
      { name: 'Phind', slug: 'phind', category: 'Coding & Dev', pricingType: 'Freemium', comparisonNote: 'Search engine optimized specifically for developers and technical documentation' }
    ]
  },
  {
    id: 'tool-v0',
    name: 'v0 by Vercel',
    slug: 'v0-by-vercel',
    logo: 'https://logo.clearbit.com/vercel.com',
    brandColor: '#10a37f',
    tagline: 'Generative UI system by Vercel creating production-ready React & Tailwind code',
    description: 'v0 is Vercel’s AI-powered design-to-code engine. It produces copy-pasteable React, Next.js, and Tailwind CSS components from plain English prompts or Figma screenshots, complete with interactive state and shadcn/ui primitives.',
    category: 'Coding & Dev',
    tags: ['React', 'Next.js', 'Tailwind', 'UI/UX', 'shadcn/ui', 'Vercel'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.85,
    reviewCount: 1620,
    bookmarksCount: 17100,
    websiteUrl: 'https://v0.dev',
    launchYear: 2023,
    companyName: 'Vercel',
    companyUrl: 'https://vercel.com',
    apiAvailable: true,
    contextWindow: '128k tokens',
    features: [
      'Generates modern React components with Tailwind CSS & shadcn/ui',
      'Interactive live canvas with responsive viewport resizing and inspect mode',
      'One-click command `npx shadcn add "v0-block-url"` into your local repo',
      'Figma screenshot to working React code in seconds',
      'Chat-based iterative design improvements and state wiring',
      'One-click deploy to Vercel previews'
    ],
    pros: [
      'Produces extraordinarily clean, modular React component code',
      'Adheres strictly to modern accessibility (ARIA) and responsive patterns',
      'Seamless workflow with shadcn/ui and Radix primitives',
      'Significantly speeds up frontend MVP development'
    ],
    cons: [
      'Daily generation credits on free tier are limited',
      'Requires frontend developer polish to connect backend API databases'
    ],
    pricingTiers: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'For developers exploring generative React interfaces.',
        features: ['200 credits / month', 'Public generations', 'npx CLI code import', 'Community templates'],
        ctaText: 'Start Building'
      },
      {
        name: 'Premium',
        price: '$20',
        period: '/ month',
        description: 'For frontend engineers and designers creating production apps.',
        features: ['5,000 credits / month', 'Private generations', 'Figma screenshot-to-code', 'Priority generation queue', 'Custom design systems'],
        isPopular: true,
        ctaText: 'Upgrade to Premium'
      }
    ],
    reviews: [
      {
        id: 'rev-v1',
        authorName: 'Tariq Al-Mansoor',
        userRole: 'Founder & Frontend Dev',
        rating: 5,
        date: '1 week ago',
        title: 'Shaved weeks off our SaaS landing page launch',
        comment: 'I gave v0 a rough wireframe and it returned pixel-perfect React components with Lucide icons and dark mode styling. Copy-pasted via npx into Next.js seamlessly.',
        helpfulCount: 52
      }
    ],
    promptExample: {
      task: 'Generate Billing & Invoices Dashboard Table',
      input: 'Create a dark-themed billing management table with invoice status badges, downloadable PDF buttons, payment method card, and filter tabs.',
      outputSnippet: '```tsx\nimport { Badge } from "@/components/ui/badge";\nimport { Table, TableBody, TableCell... } from "@/components/ui/table";\n// Generated complete responsive component ready for shadcn/ui\n```'
    },
    alternatives: [
      { name: 'Cursor', slug: 'cursor', category: 'Coding & Dev', pricingType: 'Freemium', comparisonNote: 'Full IDE for entire application logic rather than isolated UI components' },
      { name: 'Lovable', slug: 'lovable', category: 'Coding & Dev', pricingType: 'Freemium', comparisonNote: 'Generates full full-stack web applications with Supabase database backend' }
    ]
  },
  {
    id: 'tool-runway-gen3',
    name: 'Runway Gen-3 Alpha',
    slug: 'runway-gen-3',
    logo: 'https://logo.clearbit.com/runwayml.com',
    brandColor: '#7c3aed',
    tagline: 'State-of-the-art AI video generation with unmatched temporal consistency',
    description: 'Runway Gen-3 Alpha represents the cutting edge of generative video. It delivers high-fidelity cinematic video clips with precise camera motion control, dynamic lighting transitions, realistic physics, and character choreography.',
    category: 'Video & 3D',
    tags: ['Video Generation', 'Text to Video', 'Motion Brush', 'Cinematography', 'VFX'],
    pricingType: 'Freemium',
    startingPrice: '$12 / mo',
    isVerified: true,
    isFeatured: false,
    rating: 4.82,
    reviewCount: 1410,
    bookmarksCount: 12900,
    websiteUrl: 'https://runwayml.com',
    launchYear: 2024,
    companyName: 'Runway AI, Inc.',
    companyUrl: 'https://runwayml.com',
    apiAvailable: true,
    contextWindow: 'N/A',
    features: [
      'High-definition cinematic video generation up to 10 seconds per clip',
      'Advanced Motion Brush for selective directional physics control',
      'Camera Director controls (pan, tilt, zoom, truck, pedestal)',
      'Image-to-Video with precise first-frame and last-frame anchoring',
      'Text-to-Video with nuanced lighting, atmospheric fog, and motion blur',
      'Runway Gen-3 API for programmatic video workflows'
    ],
    pros: [
      'Temporal consistency avoids warping or morphing artifacts',
      'Cinematic camera controls give creators true director capabilities',
      'Fast rendering times compared to traditional 3D rendering pipelines',
      'Active community with curated prompt cookbooks'
    ],
    cons: [
      'Video generation consumes credits rapidly',
      'Complex character physics like precise hand gestures occasionally glitch'
    ],
    pricingTiers: [
      {
        name: 'Standard',
        price: '$12',
        period: '/ month',
        description: 'For individual filmmakers and digital creators.',
        features: ['625 credits / month (~125s of Gen-3 video)', 'Export at 4K resolution', 'Remove watermark', 'Up to 3 concurrent generations'],
        ctaText: 'Subscribe Standard'
      },
      {
        name: 'Pro',
        price: '$28',
        period: '/ month',
        description: 'Higher credit quota and custom AI voice/style training.',
        features: ['2,250 credits / month', 'Custom model training', 'Priority generation queue', 'All Gen-3 camera features'],
        isPopular: true,
        ctaText: 'Subscribe Pro'
      }
    ],
    reviews: [
      {
        id: 'rev-r1',
        authorName: 'Mateo Rossi',
        userRole: 'VFX & Commercial Director',
        rating: 5,
        date: '2 weeks ago',
        title: 'Camera controls make this a real filmmaker tool',
        comment: 'Being able to set pan and dolly speed while anchoring the start frame from Midjourney is an incredible superpower for commercial pitch videos.',
        helpfulCount: 39
      }
    ],
    promptExample: {
      task: 'Cinematic Drone Shot',
      input: 'FPV drone dive down a futuristic neon cyber-city skyscraper at twilight, speed ramp into slow motion as hovercars zoom past, reflections on wet glass --camera pan-right',
      outputSnippet: 'Rendered 10-second 4K ProRes cinematic video with dynamic depth of field and consistent light reflections.'
    },
    alternatives: [
      { name: 'Midjourney v6', slug: 'midjourney-v6', category: 'Image & Art', pricingType: 'Paid', comparisonNote: 'Generates still images that can be fed into Runway for video animation' },
      { name: 'Suno AI', slug: 'suno-ai', category: 'Audio & Voice', pricingType: 'Freemium', comparisonNote: 'Provides audio soundtrack generation to pair with video clips' }
    ]
  },
  {
    id: 'tool-whisper',
    name: 'Whisper',
    slug: 'whisper',
    logo: 'https://logo.clearbit.com/openai.com',
    brandColor: '#20b2aa',
    tagline: 'OpenAI’s open-source multilingual speech recognition and translation model',
    description: 'Whisper is a general-purpose speech recognition model trained on 680,000 hours of multilingual, multitask supervised audio data. It handles accents, background noise, and technical jargon with human-level transcription accuracy.',
    category: 'Audio & Voice',
    tags: ['Open Source', 'Speech to Text', 'Transcription', 'Multilingual', 'OpenAI'],
    pricingType: 'Open Source',
    startingPrice: '$0 (Free Apache 2.0)',
    isVerified: true,
    isFeatured: false,
    rating: 4.92,
    reviewCount: 3820,
    bookmarksCount: 24100,
    websiteUrl: 'https://github.com/openai/whisper',
    launchYear: 2022,
    companyName: 'OpenAI',
    companyUrl: 'https://openai.com',
    apiAvailable: true,
    contextWindow: 'N/A',
    features: [
      '100% Free & Open Source under MIT / Apache 2.0 license',
      'Robust multilingual transcription across 98+ languages',
      'Direct spoken audio translation into English text',
      'Word-level timestamps for subtitle alignment (.srt, .vtt)',
      'Runs locally offline on Apple Silicon (whisper.cpp) and NVIDIA GPUs',
      'Available via OpenAI hosted API at $0.006 per minute'
    ],
    pros: [
      'Completely free to run locally on your own hardware with zero data privacy concerns',
      'Extremely high accuracy even in noisy environments or with heavy accents',
      'Massive open-source ecosystem (whisper.cpp, faster-whisper, Insanely Fast Whisper)',
      'Outputs accurate punctuation, capitalization, and speaker separation'
    ],
    cons: [
      'Running large-v3 model locally requires dedicated GPU VRAM (4GB - 10GB)',
      'Can occasionally hallucinate repetitive phantom phrases during silent audio gaps'
    ],
    pricingTiers: [
      {
        name: 'Open Source',
        price: '$0',
        period: 'free forever',
        description: 'Download weights from GitHub or Hugging Face and run anywhere.',
        features: ['Full model weights (tiny, base, small, medium, large-v3)', 'Permissive MIT / Apache 2.0 license', '100% offline privacy', 'Zero recurring subscriptions'],
        isPopular: true,
        ctaText: 'View on GitHub'
      },
      {
        name: 'Hosted API',
        price: '$0.006',
        period: '/ minute',
        description: 'Serverless managed cloud API hosted directly by OpenAI.',
        features: ['Zero infrastructure setup', 'Large-v3 speed optimized on cloud clusters', 'Direct REST API integration', 'File uploads up to 25MB'],
        ctaText: 'Use OpenAI API'
      }
    ],
    reviews: [
      {
        id: 'rev-w1',
        authorName: 'Dr. Liam Fischer',
        userRole: 'Podcast Producer & Data Scientist',
        rating: 5,
        date: '3 weeks ago',
        title: 'The gold standard of open-source transcription',
        comment: 'We transcribe hundreds of hours of medical interviews locally on an M3 Max MacBook using whisper.cpp. It delivers 99% accuracy with zero HIPAA data leakage concerns.',
        helpfulCount: 88
      }
    ],
    promptExample: {
      task: 'Local CLI Audio Transcription',
      input: 'whisper interview_sample.mp3 --model large-v3 --language en --output_format srt',
      outputSnippet: 'Transcribing 45:12 audio: 100% [==============================] elapsed 01:24. Generated `interview_sample.srt` with precision millisecond timestamps.'
    },
    alternatives: [
      { name: 'ElevenLabs', slug: 'elevenlabs', category: 'Audio & Voice', pricingType: 'Freemium', comparisonNote: 'Specialized in generating speech from text rather than transcribing audio' }
    ]
  },
  {
    id: 'tool-suno',
    name: 'Suno AI',
    slug: 'suno-ai',
    logo: 'https://logo.clearbit.com/suno.com',
    brandColor: '#6366f1',
    tagline: 'Generate complete, broadcast-quality songs with vocals, lyrics, and instruments',
    description: 'Suno AI enables anyone to produce full, radio-ready songs across any musical genre in seconds. Generates original melodies, expressive multi-part vocals, intricate instrumentals, and structured song arrangements from a simple genre or lyrical prompt.',
    category: 'Audio & Voice',
    tags: ['Music Generation', 'Vocals', 'Songwriting', 'Audio', 'Generative Sound'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: false,
    rating: 4.81,
    reviewCount: 1250,
    bookmarksCount: 11400,
    websiteUrl: 'https://suno.com',
    launchYear: 2023,
    companyName: 'Suno, Inc.',
    companyUrl: 'https://suno.com',
    apiAvailable: false,
    contextWindow: 'N/A',
    features: [
      'Full song generation up to 4 minutes with verse, chorus, bridge, and outro',
      'Realistic human vocal performances with dynamic vibrato and harmonies',
      'Custom lyrics mode or AI-generated lyrics from thematic ideas',
      'Song extension and remixing to branch into new stylistic variations',
      'Audio inpainting to replace specific vocal lines or instrumental solos',
      'Download high-quality audio stems and WAV files on Pro plans'
    ],
    pros: [
      'Astounding musical fidelity spanning synthwave, metal, jazz, pop, and classical',
      'Extremely intuitive interface with instant playback and sharing',
      'Generous free credits provided daily to experiment with new song ideas',
      'Commercial ownership of generated songs on Pro and Premier subscriptions'
    ],
    cons: [
      'Free tier audio does not grant commercial monetization rights',
      'Occasional minor audio compression artifacts in dense orchestral climaxes'
    ],
    pricingTiers: [
      {
        name: 'Basic',
        price: '$0',
        period: 'forever',
        description: 'For casual music experimentation.',
        features: ['50 credits / day (10 songs)', 'Non-commercial terms', 'Standard generation queue', 'Shared public library'],
        ctaText: 'Make a Song'
      },
      {
        name: 'Pro',
        price: '$10',
        period: '/ month',
        description: 'For content creators and independent musicians.',
        features: ['2,500 credits / month (500 songs)', 'Commercial terms (keep your songs)', 'Priority generation queue', 'Stem audio separation'],
        isPopular: true,
        ctaText: 'Upgrade to Pro'
      }
    ],
    reviews: [
      {
        id: 'rev-s1',
        authorName: 'Maya Sterling',
        userRole: 'Game Audio Designer',
        rating: 5,
        date: '1 week ago',
        title: 'Game changer for indie game soundtracks',
        comment: 'Generated background tavern acoustic folk tracks for our RPG in an afternoon. The vocal harmonies sound completely real.',
        helpfulCount: 34
      }
    ],
    promptExample: {
      task: 'Lo-Fi Chillhop Song Creation',
      input: 'chill lo-fi hip hop beat with warm rhodes piano, vinyl crackle, mellow female breathy vocal humming, 85 bpm, nostalgic rainy evening vibe',
      outputSnippet: 'Suno generated 2 full-length tracks with structured intros, verse development, and relaxing ambient rain textures.'
    },
    alternatives: [
      { name: 'ElevenLabs', slug: 'elevenlabs', category: 'Audio & Voice', pricingType: 'Freemium', comparisonNote: 'Best for spoken narration and voice acting rather than full musical tracks' }
    ]
  },
  {
    id: 'tool-devin',
    name: 'Devin by Cognition',
    slug: 'devin-ai',
    logo: 'https://logo.clearbit.com/cognition.ai',
    brandColor: '#ec4899',
    tagline: 'The first autonomous AI software engineer capable of building and fixing repos',
    description: 'Devin is an autonomous software engineer designed to execute complex end-to-end engineering tasks. Equipped with its own sandbox shell, browser, code editor, and planner, Devin can plan, debug, write tests, and deploy real-world pull requests independently.',
    category: 'Productivity & Agents',
    tags: ['Autonomous Agent', 'Software Engineer', 'Sandboxed Shell', 'SWE-bench', 'DevOps'],
    pricingType: 'Paid',
    startingPrice: '$500 / mo',
    isVerified: true,
    isFeatured: true,
    rating: 4.79,
    reviewCount: 940,
    bookmarksCount: 13500,
    websiteUrl: 'https://cognition.ai',
    launchYear: 2024,
    companyName: 'Cognition Labs',
    companyUrl: 'https://cognition.ai',
    apiAvailable: true,
    contextWindow: 'Massive agent memory',
    features: [
      'Full sandboxed development environment with terminal, browser, and editor',
      'Autonomous problem resolution: Reads docs, writes code, tests, and fixes build errors',
      'Resolves real open-source GitHub issues and submits clean pull requests',
      'Interactive chat to steer Devin during task execution',
      'Learns new unfamiliar APIs and libraries on the fly from documentation',
      'Enterprise integrations with Jira, GitHub, Slack, and Linear'
    ],
    pros: [
      'Truly autonomous execution rather than simple snippet completion',
      'Can run test suites and iteratively debug until all assertions pass',
      'Massive time saver for boilerplate repo migrations and dependency upgrades',
      'Detailed visual step-by-step logs of every action taken'
    ],
    cons: [
      'High price point intended for corporate engineering teams',
      'Complex architectural decisions still require senior engineer oversight'
    ],
    pricingTiers: [
      {
        name: 'Team',
        price: '$500',
        period: '/ month',
        description: 'For high-velocity engineering teams automating backlog chores.',
        features: ['Autonomous task runs', 'Sandboxed compute sessions', 'GitHub PR integration', 'Slack alerting', 'Standard support'],
        ctaText: 'Request Access'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'annual',
        description: 'Dedicated VPC deployment, compliance, and custom tool integrations.',
        features: ['Unlimited engineering agent runs', 'VPC / On-prem security', 'SOC2 compliance & audit logs', 'Dedicated machine learning engineer support'],
        ctaText: 'Contact Enterprise'
      }
    ],
    reviews: [
      {
        id: 'rev-d1',
        authorName: 'Samir Patel',
        userRole: 'VP of Engineering',
        rating: 5,
        date: '2 weeks ago',
        title: 'Handles all our tedious framework migrations',
        comment: 'Devin migrated 40 microservices from Node 18 to Node 22, updated deprecated packages, and resolved broken unit tests autonomously while our team slept.',
        helpfulCount: 62
      }
    ],
    promptExample: {
      task: 'Fix Open Source Issue in Repo',
      input: 'Investigate issue #412 in our repo: Redis connection pool exhaustion under high concurrency. Write a reproduction test, fix the leak, and verify all tests pass.',
      outputSnippet: 'Devin cloned repo, spun up local Redis container, reproduced leak with load test, patched connection pool cleanup, ran 148 unit tests (100% passing), and submitted PR #413.'
    },
    alternatives: [
      { name: 'Cursor', slug: 'cursor', category: 'Coding & Dev', pricingType: 'Freemium', comparisonNote: 'Developer-driven pair programming IDE rather than headless autonomous agent' }
    ]
  },
  {
    id: 'tool-phind',
    name: 'Phind',
    slug: 'phind',
    logo: 'https://logo.clearbit.com/phind.com',
    brandColor: '#3b82f6',
    tagline: 'The AI search engine built specifically for developers and technical documentation',
    description: 'Phind is an intelligent search engine tuned specifically for developers. It directly answers technical questions with copy-ready code snippets, references current official documentation, and integrates directly with VS Code.',
    category: 'Research & Search',
    tags: ['Developer Search', 'Code Search', 'Documentation', 'VS Code Extension'],
    pricingType: 'Freemium',
    startingPrice: '$0 / mo',
    isVerified: true,
    isFeatured: false,
    rating: 4.83,
    reviewCount: 1540,
    bookmarksCount: 9800,
    websiteUrl: 'https://phind.com',
    launchYear: 2023,
    companyName: 'Phind, Inc.',
    companyUrl: 'https://phind.com',
    apiAvailable: true,
    contextWindow: '64k tokens',
    features: [
      'Specialized developer-focused ranking algorithm and web crawler',
      'Direct links to StackOverflow, GitHub issues, and official library docs',
      'VS Code extension for in-editor questions and code explanations',
      'Phind-70B model optimized for code understanding and debugging',
      'Pair programmer mode with interactive follow-up clarification',
      'Code terminal execution in browser'
    ],
    pros: [
      'Far less hallucination on obscure software libraries than generic search engines',
      'Generous free tier with fast search results',
      'Clean syntax-highlighted code output with one-click copy',
      'Understands recent framework breaking changes and migration docs'
    ],
    cons: [
      'Not suited for non-technical or lifestyle queries',
      'UI is spartan and focused solely on code answers'
    ],
    pricingTiers: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Unlimited standard searches for developers.',
        features: ['Unlimited standard searches', 'Fast code responses', 'VS Code extension integration', 'Official documentation citations'],
        ctaText: 'Use Free'
      },
      {
        name: 'Pro',
        price: '$20',
        period: '/ month',
        description: 'Access to Phind-70B and Claude 3.5 Sonnet developer models.',
        features: ['Unlimited fast Pro searches', 'Claude 3.5 Sonnet & GPT-4o selection', 'Higher context limits for large files', 'Priority server processing'],
        isPopular: true,
        ctaText: 'Upgrade to Pro'
      }
    ],
    reviews: [
      {
        id: 'rev-ph1',
        authorName: 'Kenji Sato',
        userRole: 'Systems Programmer',
        rating: 5,
        date: '2 weeks ago',
        title: 'Solves obscure Rust compiler errors instantly',
        comment: 'When rustc throws lifetime errors that Google has no answers for, Phind accurately cites the exact RFC and suggests the correct Pin/Box idiom.',
        helpfulCount: 41
      }
    ],
    promptExample: {
      task: 'Rust Async Lifetime Debugging',
      input: 'How do I resolve "borrowed value does not live long enough" when spawning a Tokio task inside an async trait method?',
      outputSnippet: 'To spawn a Tokio task from an async trait, the closure requires `\'static` ownership. Wrap your state in `Arc<T>` and clone before passing into `tokio::spawn(async move { ... })`...'
    },
    alternatives: [
      { name: 'Perplexity AI', slug: 'perplexity-ai', category: 'Research & Search', pricingType: 'Freemium', comparisonNote: 'Broader general search engine with academic and news focus' }
    ]
  }
];
