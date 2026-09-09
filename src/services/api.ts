import { Tool, EcosystemStats, Review } from '../types/tool';
import { MOCK_TOOLS, INITIAL_STATS } from '../data/mockTools';

const API_BASE = '/api';

export async function fetchStats(): Promise<EcosystemStats> {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Backend offline, using fallback stats:', err);
  }
  return INITIAL_STATS;
}

export async function fetchTools(params: {
  search?: string;
  category?: string;
  pricing?: string;
  sort?: string;
}): Promise<Tool[]> {
  try {
    const query = new URLSearchParams();
    if (params.search) query.set('search', params.search);
    if (params.category && params.category !== 'All') query.set('category', params.category);
    if (params.pricing && params.pricing !== 'All') query.set('pricing', params.pricing);
    if (params.sort) query.set('sort', params.sort);

    const res = await fetch(`${API_BASE}/tools?${query.toString()}`);
    if (res.ok) {
      const data = await res.json();
      return data.tools;
    }
  } catch (err) {
    console.warn('Backend offline, filtering locally from mock data:', err);
  }

  // Local fallback filter
  let result = [...MOCK_TOOLS];
  if (params.category && params.category !== 'All') {
    result = result.filter(t => t.category.toLowerCase() === params.category!.toLowerCase());
  }
  if (params.pricing && params.pricing !== 'All') {
    result = result.filter(t => t.pricingType.toLowerCase() === params.pricing!.toLowerCase());
  }
  if (params.search) {
    const q = params.search.toLowerCase().trim();
    result = result.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q)) ||
      t.companyName.toLowerCase().includes(q)
    );
  }
  if (params.sort === 'Highest Rated') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (params.sort === 'Most Bookmarked') {
    result.sort((a, b) => b.bookmarksCount - a.bookmarksCount);
  } else if (params.sort === 'Recently Added') {
    result.sort((a, b) => b.launchYear - a.launchYear);
  } else {
    result.sort((a, b) => (b.bookmarksCount + b.reviewCount * 5) - (a.bookmarksCount + a.reviewCount * 5));
  }
  return result;
}

export async function fetchToolBySlug(slug: string): Promise<Tool | null> {
  try {
    const res = await fetch(`${API_BASE}/tools/${slug}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Backend offline, checking local mock tools:', err);
  }

  const found = MOCK_TOOLS.find(t => t.slug.toLowerCase() === slug.toLowerCase() || t.id.toLowerCase() === slug.toLowerCase());
  return found || null;
}

export async function submitTool(payload: {
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  pricingType: string;
  startingPrice: string;
  websiteUrl: string;
  companyName: string;
}): Promise<Tool> {
  try {
    const res = await fetch(`${API_BASE}/tools`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      return await res.json();
    }
    const errData = await res.json();
    throw new Error(errData.error || 'Failed to submit tool');
  } catch (err: any) {
    console.warn('Backend submit error, creating locally:', err);
    // Create local mock tool
    const newTool: Tool = {
      id: `tool-${Date.now()}`,
      name: payload.name,
      slug: payload.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      logo: payload.websiteUrl ? `https://logo.clearbit.com/${new URL(payload.websiteUrl).hostname}` : `https://logo.clearbit.com/openai.com`,
      tagline: payload.tagline,
      description: payload.description || payload.tagline,
      category: payload.category,
      tags: payload.tags,
      pricingType: payload.pricingType as any,
      startingPrice: payload.startingPrice || '$0 / mo',
      isVerified: true,
      rating: 5.0,
      reviewCount: 1,
      bookmarksCount: 1,
      websiteUrl: payload.websiteUrl,
      launchYear: new Date().getFullYear(),
      companyName: payload.companyName || payload.name,
      apiAvailable: true,
      features: ['Instant setup', 'Web application', 'Developer friendly'],
      pros: ['Modern user experience', 'Fast response latency'],
      cons: ['Recently launched'],
      pricingTiers: [
        { name: 'Standard', price: payload.startingPrice || '$0', period: 'monthly', description: 'Standard plan', features: ['Core features access'], ctaText: 'Get Started' }
      ],
      reviews: [],
      alternatives: []
    };
    MOCK_TOOLS.unshift(newTool);
    return newTool;
  }
}

export async function submitReview(slug: string, payload: {
  authorName: string;
  userRole?: string;
  rating: number;
  title: string;
  comment: string;
}): Promise<{ review: Review; updatedRating: number; reviewCount: number }> {
  try {
    const res = await fetch(`${API_BASE}/tools/${slug}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Backend offline, submitting review locally:', err);
  }

  const tool = MOCK_TOOLS.find(t => t.slug === slug);
  const newReview: Review = {
    id: `rev-${Date.now()}`,
    authorName: payload.authorName,
    userRole: payload.userRole || 'AI Enthusiast',
    rating: payload.rating,
    date: 'Just now',
    title: payload.title,
    comment: payload.comment,
    helpfulCount: 0,
  };

  if (tool) {
    tool.reviews.unshift(newReview);
    tool.reviewCount += 1;
    const total = tool.reviews.reduce((a, r) => a + r.rating, 0);
    tool.rating = Number((total / tool.reviews.length).toFixed(2));
    return { review: newReview, updatedRating: tool.rating, reviewCount: tool.reviewCount };
  }

  return { review: newReview, updatedRating: 5.0, reviewCount: 1 };
}

export async function toggleBookmark(slug: string, increment: boolean): Promise<number> {
  try {
    const res = await fetch(`${API_BASE}/tools/${slug}/bookmark`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ increment }),
    });
    if (res.ok) {
      const data = await res.json();
      return data.bookmarksCount;
    }
  } catch (err) {
    console.warn('Backend bookmark toggle fallback:', err);
  }
  const tool = MOCK_TOOLS.find(t => t.slug === slug);
  if (tool) {
    tool.bookmarksCount = Math.max(0, tool.bookmarksCount + (increment ? 1 : -1));
    return tool.bookmarksCount;
  }
  return 0;
}
