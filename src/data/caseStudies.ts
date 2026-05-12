import jeevansathiLogo from '@/assets/brands/jeevansathi.png';
import heavenLogo from '@/assets/brands/heaven-by-sula.png';
import strangerLogo from '@/assets/brands/stranger-and-sons.png';
import otherSideLogo from '@/assets/brands/other-side.png';
import shortStoryLogo from '@/assets/brands/short-story.png';

export interface CaseStudy {
  slug: string;
  brand: string;
  category: string;
  tag: string;
  logo: string;
  scope: string[];
  objective: string;
  problem: string;
  context: string;
  solution: string[];
  result: string;
  impact: string;
  metaDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'other-side-whiskey',
    brand: 'Other Side Whiskey',
    category: 'Alcobev / Whiskey',
    tag: 'Brand Strategy · Paid Ads · Creative',
    logo: otherSideLogo,
    scope: ['Brand Strategy', 'Creative Content', 'Paid Ads', 'Instagram Growth'],
    objective: 'Grow Instagram followers, increase engagement, and build brand awareness for a new sub-continental whiskey brand.',
    problem: 'A newly launched whiskey brand entering an extremely competitive alcobev market with zero digital presence and no established voice on Instagram.',
    context: 'Indian alcobev brands face strict ad restrictions and intense competition from heritage whiskey labels. The brand needed to carve out a distinct identity for a younger, premium-leaning audience while staying compliant with category guidelines.',
    solution: [
      'Built a niche-led content strategy rooted in the brand’s sub-continental story.',
      'Designed a recurring content framework — hero films, lifestyle stories, and serve-led reels.',
      'Ran tightly targeted paid campaigns on Meta to seed awareness with relevant cohorts.',
      'Layered creative experiments weekly to identify the highest-performing hooks and visuals.',
    ],
    result: 'X% follower growth, Y% engagement rate, and a measurable lift in saves & shares within the first growth sprint. (Final metrics to be added.)',
    impact: 'Established a consistent brand voice on Instagram and an always-on creative engine that continues to compound organic and paid growth.',
    metaDescription: 'How we built brand voice, creative content and paid ads for Other Side Whiskey to drive Instagram growth and engagement.',
  },
  {
    slug: 'stranger-and-sons',
    brand: 'Stranger & Sons',
    category: 'Alcobev / Gin',
    tag: 'Strategy · Creative · Paid Ads',
    logo: strangerLogo,
    scope: ['Strategy', 'Creative Direction', 'Paid Media', 'Community Growth'],
    objective: 'Drive Instagram follower growth and improve engagement for one of India’s most loved craft gin brands.',
    problem: 'Cult-favourite craft gin needing to convert affinity into measurable digital growth and a more engaged community on Instagram.',
    context: 'The craft spirits category is creative-heavy but conversion-light. The brand already had strong recall in bartending circles — the opportunity was to widen reach to the urban premium consumer without diluting the cult identity.',
    solution: [
      'Built a content rhythm balancing brand-world storytelling with serve-forward, conversion-friendly creatives.',
      'Strategised paid amplification to push the highest-performing organic posts to lookalike audiences.',
      'Designed creative campaigns aligned with cocktail culture, occasions and bartender collaborations.',
      'Set up a weekly creative-test loop to refine hooks, formats and CTAs.',
    ],
    result: 'Strong follower growth and engagement uplift on Instagram across the campaign window. (Final numbers to be added.)',
    impact: 'Sharpened the brand’s digital identity and built a repeatable growth engine that married craft storytelling with performance discipline.',
    metaDescription: 'Strategy, creative and paid ads case study for Stranger & Sons Gin — driving Instagram follower growth and engagement.',
  },
  {
    slug: 'heaven-by-sula',
    brand: 'Heaven by Sula',
    category: 'Hospitality / Hotels',
    tag: 'GTM · Influencer Marketing',
    logo: heavenLogo,
    scope: ['GTM Strategy', 'Influencer Marketing', 'Launch Campaign', 'Content Curation'],
    objective: 'Launch Heaven by Sula — a new Nashik property in the Sula Vineyards portfolio — with strong awareness in the wine, travel and lifestyle space.',
    problem: 'A brand-new hotel launch with zero awareness, sitting alongside two established Sula properties (Domaine and Beyond) — needing a launch moment that felt distinctly its own.',
    context: 'Located near the Nashik vineyards, the property targets a premium wine-and-travel audience. Influencer-led discovery is the dominant channel for this cohort, making creator marketing the highest-leverage GTM lever.',
    solution: [
      'Designed a full GTM rooted in curated influencer marketing across travel, lifestyle and food creators.',
      'Built tiered creator cohorts — hero voices for buzz, mid-tier creators for reach, and niche creators for depth.',
      'Crafted content briefs aligned with the property’s positioning within the Sula ecosystem.',
      'Sequenced the rollout for sustained launch momentum across Instagram and YouTube.',
    ],
    result: 'High-quality content reach across Instagram and YouTube during the launch window. (Detailed metrics to be added.)',
    impact: 'Generated strong launch buzz, established Heaven by Sula as a distinct destination within the Sula portfolio, and seeded long-tail discoverability through evergreen creator content.',
    metaDescription: 'GTM and influencer marketing case study for the launch of Heaven by Sula — a new Nashik hotel in the Sula Vineyards portfolio.',
  },
  {
    slug: 'jeevansathi',
    brand: 'JeevanSathi',
    category: 'Matrimony / Consumer Internet',
    tag: 'Influencer Strategy · Co-branded Campaigns',
    logo: jeevansathiLogo,
    scope: ['Strategy', 'Creative Content', 'Influencer Identification', 'Co-branded Campaigns'],
    objective: 'Refresh creative output and drive scaled influencer-led campaigns to make the brand more relatable to a modern matrimony audience.',
    problem: 'A category leader in matrimony needing a fresher, more relatable creative approach and a structured influencer programme to break through younger audience clutter.',
    context: 'The matrimony space is crowded and largely transactional in tone. The opportunity was to lean into culture, real-life stories and creator authenticity to drive emotional resonance and shareable content.',
    solution: [
      'Built a sharper content strategy anchored around relatability, real stories and cultural moments.',
      'Researched and identified niche-fit creators across regions, languages and content styles.',
      'Designed co-branded campaign frameworks with creator-first scripts engineered for higher conversions.',
      'Tested hooks, formats and narratives to refine what drove the strongest watch-through and CTA performance.',
    ],
    result: 'Increased reach and engagement across creator-led campaigns and a scalable influencer playbook for the brand. (Final metrics to be added.)',
    impact: 'Made the brand feel more relatable to a younger matrimony audience and unlocked a repeatable, conversion-aware influencer engine.',
    metaDescription: 'Influencer strategy and co-branded campaign case study for JeevanSathi — relatable creative and creator-led growth.',
  },
  {
    slug: 'short-story',
    brand: 'Short Story',
    category: 'D2C / Lifestyle',
    tag: 'Strategy · Content · Growth',
    logo: shortStoryLogo,
    scope: ['Content Strategy', 'Creative', 'Engagement Growth', 'Niche Positioning'],
    objective: 'Drive engagement and follower growth aligned with the brand’s niche, through sharper content and a focused growth strategy.',
    problem: 'A short-term growth sprint needing a clear, niche-aligned strategy to lift engagement and follower velocity on Instagram.',
    context: 'Crowded D2C lifestyle category where content quality and consistency separate winners from the noise. The brand needed a focused playbook that respected its niche identity.',
    solution: [
      'Defined a niche-led content pillars framework.',
      'Aligned creative output with audience triggers — saves, shares and intent signals.',
      'Built a lightweight, fast-iterating growth loop for the duration of the engagement.',
    ],
    result: 'Engagement and follower growth improvements across the sprint window. (Final metrics to be added.)',
    impact: 'Established a sharper, more confident niche presence on Instagram with a content system the brand can continue running.',
    metaDescription: 'Short-term growth strategy case study for Short Story — niche-led content and engagement uplift.',
  },
];
