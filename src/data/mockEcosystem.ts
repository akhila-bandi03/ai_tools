export interface TaskWorkflow {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  recommendedToolSlugs: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeSaved: string;
  stepsCount: number;
  popularScore: number;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string;
  tagline: string;
  headquarters: string;
  founded: number;
  valuation: string;
  flagshipProducts: string[];
  description: string;
  website: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  slug: string;
  category: string;
  eloScore: number;
  benchmarkScore: number; // MMLU / HumanEval composite %
  speedMs: number;
  contextWindow: string;
  monthlyGrowth: string;
  pricingType: string;
}

export interface BusinessFunction {
  id: string;
  title: string;
  icon: string;
  description: string;
  roiMultiplier: string;
  topTools: string[];
  useCases: string[];
}

export interface LearnResource {
  id: string;
  title: string;
  type: 'Guide' | 'Course' | 'E-Book' | 'Prompt Pack';
  author: string;
  readTime: string;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  tags: string[];
}

export const MOCK_TASKS: TaskWorkflow[] = [
  {
    id: 'task-1',
    slug: 'automated-fullstack-dev',
    title: 'Fullstack App Prototyping & Refactoring',
    category: 'Engineering & Code',
    description: 'Autonomous codebase generation, context-aware bug fixing, and unit test generation directly within VSCode/Cursor.',
    recommendedToolSlugs: ['cursor', 'v0', 'chatgpt'],
    difficulty: 'Intermediate',
    timeSaved: '15 hrs / wk',
    stepsCount: 4,
    popularScore: 98,
  },
  {
    id: 'task-2',
    slug: 'citation-backed-research',
    title: 'Citation-Backed Market & Academic Research',
    category: 'Research & Search',
    description: 'Extract peer-reviewed facts, competitive market intelligence, and structured data tables with live web links.',
    recommendedToolSlugs: ['perplexity', 'chatgpt'],
    difficulty: 'Beginner',
    timeSaved: '8 hrs / wk',
    stepsCount: 3,
    popularScore: 94,
  },
  {
    id: 'task-3',
    slug: 'studio-voice-generation',
    title: 'Multilingual Voiceover & Podcast Dubbing',
    category: 'Audio & Voice',
    description: 'Instant ultra-realistic voice cloning with emotion synthesis, breath control, and automated 29-language lip-sync.',
    recommendedToolSlugs: ['elevenlabs'],
    difficulty: 'Beginner',
    timeSaved: '12 hrs / wk',
    stepsCount: 3,
    popularScore: 91,
  },
  {
    id: 'task-4',
    slug: 'cinematic-b-roll',
    title: 'Cinematic B-Roll & Visual Asset Synthesis',
    category: 'Video & Motion',
    description: 'Generate 4K photorealistic cinematic camera pans, physics simulation, and commercial visual effects from prompt.',
    recommendedToolSlugs: ['runway-gen3', 'midjourney'],
    difficulty: 'Intermediate',
    timeSaved: '20 hrs / wk',
    stepsCount: 5,
    popularScore: 96,
  },
  {
    id: 'task-5',
    slug: 'autonomous-lead-enrichment',
    title: 'Enterprise Lead Enrichment & Outreach',
    category: 'Sales & Growth',
    description: 'Find verified decision-maker emails, analyze hiring trends, and draft personalized outreach sequences automatically.',
    recommendedToolSlugs: ['chatgpt', 'perplexity'],
    difficulty: 'Advanced',
    timeSaved: '10 hrs / wk',
    stepsCount: 4,
    popularScore: 89,
  }
];

export const MOCK_COMPANIES: Company[] = [
  {
    id: 'c-1',
    name: 'OpenAI',
    slug: 'openai',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    tagline: 'Creating safe artificial general intelligence that benefits all of humanity.',
    headquarters: 'San Francisco, CA',
    founded: 2015,
    valuation: '$157 Billion',
    flagshipProducts: ['ChatGPT', 'GPT-4o', 'o1', 'DALL-E 3', 'Sora'],
    description: 'Pioneers of generative AI foundational models, transformer architectures, and conversational reasoning agents.',
    website: 'https://openai.com'
  },
  {
    id: 'c-2',
    name: 'Anthropic',
    slug: 'anthropic',
    logo: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=128&auto=format&fit=crop&q=80',
    tagline: 'AI research company dedicated to building reliable, interpretable, and steerable AI systems.',
    headquarters: 'San Francisco, CA',
    founded: 2021,
    valuation: '$40 Billion',
    flagshipProducts: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku', 'Claude Opus'],
    description: 'Creators of the Constitutional AI framework and high-performance Claude reasoning models widely acclaimed by software engineers.',
    website: 'https://anthropic.com'
  },
  {
    id: 'c-3',
    name: 'Anysphere (Cursor)',
    slug: 'anysphere',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    tagline: 'Building the AI-native code editor designed for pair programming with neural models.',
    headquarters: 'San Francisco, CA',
    founded: 2022,
    valuation: '$2.5 Billion',
    flagshipProducts: ['Cursor IDE', 'Composer Agent'],
    description: 'Creators of Cursor, the fastest growing AI-first IDE that integrates multi-file diff generation and semantic codebase indexing.',
    website: 'https://cursor.com'
  },
  {
    id: 'c-4',
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=128&auto=format&fit=crop&q=80',
    tagline: 'Where knowledge begins. An answer engine powered by real-time neural search.',
    headquarters: 'San Francisco, CA',
    founded: 2022,
    valuation: '$9 Billion',
    flagshipProducts: ['Perplexity Pro', 'Pro Search', 'Sonar API'],
    description: 'Next-generation conversational search engine that pairs large language models with real-time web indexation and citation synthesis.',
    website: 'https://perplexity.ai'
  },
  {
    id: 'c-5',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=128&auto=format&fit=crop&q=80',
    tagline: 'Voice AI research creating realistic audio and speech synthesis across 29+ languages.',
    headquarters: 'New York / London',
    founded: 2022,
    valuation: '$3.3 Billion',
    flagshipProducts: ['Eleven Multilingual v2', 'Voice Dubbing', 'Reader App'],
    description: 'Market leader in deep-learning-based natural speech synthesis, emotional inflection, and low-latency conversational audio.',
    website: 'https://elevenlabs.io'
  }
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Claude 3.5 Sonnet',
    slug: 'claude-3-5-sonnet',
    category: 'LLMs & Code Reasoning',
    eloScore: 1342,
    benchmarkScore: 93.7,
    speedMs: 180,
    contextWindow: '200k tokens',
    monthlyGrowth: '+28.4%',
    pricingType: 'Freemium'
  },
  {
    rank: 2,
    name: 'ChatGPT (GPT-4o / o1)',
    slug: 'chatgpt',
    category: 'General AI & Multimodal',
    eloScore: 1338,
    benchmarkScore: 92.3,
    speedMs: 210,
    contextWindow: '128k tokens',
    monthlyGrowth: '+18.1%',
    pricingType: 'Freemium'
  },
  {
    rank: 3,
    name: 'Cursor (Composer Agent)',
    slug: 'cursor',
    category: 'Developer Tools',
    eloScore: 1315,
    benchmarkScore: 91.8,
    speedMs: 140,
    contextWindow: 'Full Repository',
    monthlyGrowth: '+44.2%',
    pricingType: 'Freemium'
  },
  {
    rank: 4,
    name: 'Perplexity Pro',
    slug: 'perplexity',
    category: 'Search & Research',
    eloScore: 1290,
    benchmarkScore: 89.6,
    speedMs: 190,
    contextWindow: 'Live Search Index',
    monthlyGrowth: '+31.0%',
    pricingType: 'Freemium'
  },
  {
    rank: 5,
    name: 'ElevenLabs Voice v2',
    slug: 'elevenlabs',
    category: 'Speech & Audio',
    eloScore: 1278,
    benchmarkScore: 96.2,
    speedMs: 120,
    contextWindow: 'Ultra-low Latency',
    monthlyGrowth: '+22.5%',
    pricingType: 'Freemium'
  },
  {
    rank: 6,
    name: 'Runway Gen-3 Alpha',
    slug: 'runway-gen3',
    category: 'Generative Video',
    eloScore: 1264,
    benchmarkScore: 88.4,
    speedMs: 4200,
    contextWindow: '4K Temporal',
    monthlyGrowth: '+19.8%',
    pricingType: 'Paid'
  }
];

export const MOCK_BUSINESS_FUNCTIONS: BusinessFunction[] = [
  {
    id: 'bf-1',
    title: 'Software Engineering & QA',
    icon: 'Terminal',
    description: 'Accelerate development velocity, automated test suites, and multi-file code refactors with AI agents.',
    roiMultiplier: '3.4x Engineering Velocity',
    topTools: ['Cursor', 'v0 by Vercel', 'ChatGPT', 'Claude 3.5 Sonnet'],
    useCases: ['Autonomous bug triaging', 'Legacy code translation', 'Automated documentation synthesis', 'Instant UI prototyping']
  },
  {
    id: 'bf-2',
    title: 'Marketing & Content Strategy',
    icon: 'Megaphone',
    description: 'Scale personalized campaign assets, SEO-optimized editorial, and dynamic brand visuals without agency delays.',
    roiMultiplier: '5.2x Content Output',
    topTools: ['Midjourney', 'ElevenLabs', 'Perplexity', 'ChatGPT'],
    useCases: ['Multi-channel ad variation', 'Localized voice dubbing in 29 languages', 'Competitive search gap analysis', 'Product photo synthesis']
  },
  {
    id: 'bf-3',
    title: 'Customer Support & Success',
    icon: 'Headphones',
    description: 'Deploy 24/7 intelligent resolution agents with conversational voice and real-time knowledge base syncing.',
    roiMultiplier: '68% Resolution Automation',
    topTools: ['ChatGPT', 'ElevenLabs', 'Claude 3.5 Sonnet'],
    useCases: ['Autonomous ticket resolution', 'Sentiment escalation routing', 'Voice bot customer support', 'Knowledge base auto-updates']
  },
  {
    id: 'bf-4',
    title: 'Legal, Compliance & Operations',
    icon: 'Scale',
    description: 'Contract analysis, risk mitigation, and automated clause comparison across vendor agreements.',
    roiMultiplier: '75% Faster Contract Review',
    topTools: ['Claude 3.5 Sonnet', 'ChatGPT', 'Perplexity'],
    useCases: ['Vendor NDA redlining', 'Regulatory compliance monitoring', 'Executive summary extraction', 'Policy auditing']
  }
];

export const MOCK_LEARN_RESOURCES: LearnResource[] = [
  {
    id: 'lr-1',
    title: 'The 2026 AI Developer Playbook: Cursor, MCP & Autonomous Agents',
    type: 'Guide',
    author: 'AI Orbit Research Team',
    readTime: '12 min read',
    level: 'Intermediate',
    description: 'Comprehensive guide to configuring Model Context Protocol (MCP), multi-file Composer agents, and repo indexing in production.',
    tags: ['Coding', 'Cursor', 'Agents', 'Workflows']
  },
  {
    id: 'lr-2',
    title: 'Mastering LLM Reasoning & Prompt Engineering Masterclass',
    type: 'Course',
    author: 'Elena Rostova, ML Lead',
    readTime: '4 Modules (2 hrs)',
    level: 'All Levels',
    description: 'Learn few-shot prompting, structured JSON schema outputs, chain-of-thought verification, and temperature tuning.',
    tags: ['Prompting', 'ChatGPT', 'Claude', 'Foundations']
  },
  {
    id: 'lr-3',
    title: 'The Enterprise AI Executive Handbook 2026',
    type: 'E-Book',
    author: 'AI Orbit Strategy Labs',
    readTime: '45 pages PDF',
    level: 'Advanced',
    description: 'How Fortune 500 teams evaluate ROI, data privacy, on-premise model hosting, and vendor lock-in mitigation.',
    tags: ['Enterprise', 'ROI', 'Strategy', 'Business']
  },
  {
    id: 'lr-4',
    title: '50 Production Prompts for High-Impact Product Teams',
    type: 'Prompt Pack',
    author: 'David Chen',
    readTime: 'Instant Copy Kit',
    level: 'Beginner',
    description: 'Battle-tested prompts for PRD drafting, user persona generation, competitor tear-downs, and sprint backlog estimation.',
    tags: ['Prompts', 'Product', 'Cheatsheet']
  }
];
