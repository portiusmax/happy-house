export interface InsightData {
  slug: string;
  title: string;
  description: string;
  niche: string;
  readTime: string;
  publishDate: string;
  status: 'published' | 'draft';
  body: string;
}

export const insights: InsightData[] = [
  {
    slug: 'why-seo-matters-for-roofing-companies',
    title: 'Why SEO Matters More Than Ever for Roofing Companies',
    description: 'Roofing companies that rely solely on referrals and lead-gen platforms are leaving money on the table. Here\'s why organic search and AI visibility should be your top priority.',
    niche: 'Roofing',
    readTime: '6 min',
    publishDate: '2026-03-15',
    status: 'published',
    body: `<p>If you run a roofing company, you already know that referrals and word-of-mouth are powerful. But they're not scalable. And they're not predictable.</p>
<p>Search is both. Every day, homeowners in your market are typing "roof repair near me," "roofing contractor [city]," and "how much does a new roof cost" into Google. Increasingly, they're asking these same questions to AI tools like ChatGPT and Google's AI Overviews.</p>
<h2>The shift to AI search</h2>
<p>The biggest change in search over the past two years is the rise of AI-generated answers. When a homeowner asks an AI tool "who are the best roofers in Atlanta," that tool synthesizes information from across the web and recommends specific businesses. If your roofing company isn't structured to appear in these answers, you're invisible to a growing segment of high-intent searchers.</p>
<h2>What roofing companies should do now</h2>
<p>The contractors who invest in SEO and AI visibility now will have a compounding advantage over the next 3-5 years. This means building a technical foundation, producing consistent content, optimizing for AI citations, and maintaining a strong Google Business Profile.</p>
<p>The cost of waiting is real. Every month your competitors invest in search while you don't, the gap widens.</p>`,
  },
  {
    slug: 'aeo-geo-explained-for-contractors',
    title: 'AEO and GEO Explained: What Contractors Need to Know About AI Search',
    description: 'AI tools are recommending contractors to homeowners. Here\'s what AEO and GEO mean, why they matter, and what you can do about it.',
    niche: 'General',
    readTime: '8 min',
    publishDate: '2026-03-10',
    status: 'published',
    body: `<p>Search is changing faster than most contractors realize. Google's AI Overviews, ChatGPT, Perplexity, and Bing Copilot are all answering questions that homeowners used to search Google for. And they're recommending specific businesses in their answers.</p>
<h2>What is AEO?</h2>
<p>AEO stands for Answer Engine Optimization. It's the practice of structuring your content so that AI tools cite your business when answering questions about your services. When someone asks ChatGPT "who's the best HVAC company in Denver," AEO is what determines whether your business appears in that answer.</p>
<h2>What is GEO?</h2>
<p>GEO stands for Generative Engine Optimization. It's the broader discipline of optimizing your entire digital presence for AI-powered search engines. While AEO focuses on getting cited in specific answers, GEO encompasses how AI systems perceive your business overall — your authority, your expertise, and your trustworthiness.</p>
<h2>Why contractors should care</h2>
<p>The contractors who establish authority in AI answers before their competitors will have a durable advantage. AI systems tend to reinforce existing authority — once you're being cited, it compounds. The window for being an early mover is now.</p>
<h2>What you can do</h2>
<p>Structure your content with clear Q&A formats. Use FAQ schema on your website. Build authoritative content around the questions homeowners ask. Ensure your business entity is well-represented across the web. And monitor whether AI tools are mentioning your business.</p>`,
  },
  {
    slug: 'hvac-seo-seasonal-strategy',
    title: 'The Seasonal SEO Strategy Every HVAC Company Needs',
    description: 'HVAC search demand follows predictable seasonal patterns. Here\'s how to build a content strategy that captures peak demand year-round.',
    niche: 'HVAC',
    readTime: '5 min',
    publishDate: '2026-03-05',
    status: 'published',
    body: `<p>HVAC is one of the most seasonal businesses in home services. AC repair searches spike in May and peak through August. Furnace repair searches start climbing in October and peak in January. Heat pump searches are growing year-round as homeowners switch to electric.</p>
<h2>Timing your content</h2>
<p>The biggest mistake HVAC companies make with SEO is publishing content reactively. By the time AC searches are spiking in July, it's too late to rank for them. SEO content takes months to gain authority. You need to publish AC content in February so it's ranking by June.</p>
<h2>Building a 12-month content calendar</h2>
<p>A smart HVAC SEO strategy publishes heating content during spring and summer, and cooling content during fall and winter. This gives each piece of content 3-4 months to build authority before peak demand hits.</p>
<h2>AI search adds another layer</h2>
<p>AI tools don't follow seasonal patterns the same way Google does. A homeowner might ask ChatGPT "how much does AC replacement cost" in December while planning ahead. Your content needs to be authoritative year-round to capture AI citations regardless of season.</p>`,
  },
];
