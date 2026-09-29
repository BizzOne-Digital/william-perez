// TODO: confirm real campaign contact info before public launch
// The email, phone, and Instagram below are flagged placeholders per the
// source campaign one-pager. The client will confirm official contact details
// before the site goes live.

export type CampaignPriority = {
  title: string;
  pillarLetter: string;
  description: string;
  icon: "shield" | "home" | "building";
  initiatives: Array<{ title: string; body: string }>;
  callout?: { stat: string; text: string; source: string };
};

export type SocialLink = {
  platform: "facebook" | "instagram";
  url: string | null;
  handle: string | null;
};

export type CampaignInfo = {
  candidate: string;
  fullName: string;
  name: string;
  race: string;
  district: string;
  electionDate: string;
  headline: string;
  slogan: string;
  email: string;
  phone: string;
  treasurer: string;
  committee: string;
};

export const campaign: CampaignInfo = {
  candidate: "William Perez",
  fullName: "William Perez",
  name: "William Perez for Inglewood City Council 2026",
  race: "Inglewood City Council, District 1",
  district: "District 1",
  electionDate: "November 3, 2026",
  headline: "Putting District 1 First",
  slogan: "One Community. One Voice. One Future — Together.",
  // TODO: confirm real campaign contact info before public launch
  email: "william@votewperez.org",
  // TODO: confirm real campaign contact info before public launch
  phone: "(323) 480-7756",
  treasurer: "William Perez",
  committee: "William Perez for Inglewood City Council 2026",
};

/**
 * The H.A.T. Agenda — 3 real platform pillars with sub-initiatives.
 * Content sourced from the official campaign one-pager.
 */
export const priorities: CampaignPriority[] = [
  {
    title: "Honest Protection for Seniors, Families & Neighborhoods",
    pillarLetter: "H",
    description:
      "Fighting the fraud epidemic hitting our seniors hardest. California lost $1.4 billion to elder fraud in 2025 alone — up 68% from the year before, and the worst total of any state in the country.",
    icon: "shield",
    initiatives: [
      {
        title: "Senior Fraud Prevention Task Force",
        body: "Stand up a council-resolution task force coordinating the city, police, banks, and senior centers on fraud prevention.",
      },
      {
        title: "Bank-Branch Scam Training",
        body: "Bring Senior Scam Stopper seminars and AARP BankSafe teller training to Inglewood bank branches, so tellers are equipped to spot exploitation before money leaves an account.",
      },
      {
        title: "One Clear Hotline",
        body: "Standardize promotion of the LA County Elder Abuse Hotline across every city touchpoint, so residents always know where to turn.",
      },
      {
        title: "Connected Senior Services",
        body: "Use the senior center network to connect seniors with transportation, home-repair, and benefits referrals they already qualify for.",
      },
    ],
    callout: {
      stat: "$200M",
      text: "AARP's BankSafe-trained tellers have helped stop an estimated $200 million in attempted financial exploitation nationally — with trained staff intervening roughly 12× more often than untrained staff.",
      source: "AARP / Virginia Tech pilot study",
    },
  },
  {
    title: "Action on Affordability",
    pillarLetter: "A",
    description:
      "Closing loopholes, cutting hidden costs, restoring assistance. Roughly two-thirds of District 1 households rent, and the average District 1 household earns about $46,400 a year — every dollar of hidden cost matters.",
    icon: "home",
    initiatives: [
      {
        title: "Close the Rent-Cap Loophole",
        body: "Inglewood currently allows annual rent increases of 3.7% for buildings with 5+ units, but 8.7% for buildings with 4 or fewer — a gap that leaves tenants in smaller buildings exposed. William will push to close it. (Source: City of Inglewood, FY2025-26)",
      },
      {
        title: "Cut the Hidden Utility Tax",
        body: "Inglewood's Utility Users Tax adds roughly 10% to electric, gas, and water bills. He'll fight to reduce this hidden charge on every household's basic needs.",
      },
      {
        title: "Restore Rental Assistance",
        body: "Advocate for direct rental assistance and reopening/prioritizing the closed Section 8 / Housing Choice Voucher waitlist — an estimated 84 households are currently at risk of losing existing subsidy.",
      },
      {
        title: "Local-Hire Requirements That Deliver",
        body: "Enforce the city's 35% local-hire requirement on major development projects, so Inglewood residents see real jobs from growth happening in their own backyard.",
      },
    ],
    callout: {
      stat: "$500K",
      text: "Proposed affordability pilot: a Utility Gap Fund ($175K), Housing Stability Fund ($125K), tenant & legal navigation services ($85K), outreach and enrollment ($45K), and enforcement/data tracking ($45K) — every dollar itemized and reported quarterly.",
      source: "William Perez campaign platform",
    },
  },
  {
    title: "Transparency & Accountable City Hall",
    pillarLetter: "T",
    description:
      "Open books, plain language, real oversight. Residents shouldn't need a law degree to understand how the city spends their money. Accountability starts with information residents can actually use.",
    icon: "building",
    initiatives: [
      {
        title: "Publish Signage Revenue",
        body: "Make an itemized public accounting of billboard and digital signage revenue and spending, so residents can see exactly where that money goes.",
      },
      {
        title: "Plain-Language Budget Reports",
        body: "Launch a quarterly budget report written for residents, not accountants — clear categories, clear numbers, clear comparisons.",
      },
      {
        title: "A Town Hall in Every Quadrant",
        body: "Hold quarterly town halls across all four District 1 quadrants, on a predictable schedule, so no neighborhood is an afterthought.",
      },
      {
        title: "Resident Oversight on Major Contracts",
        body: "Push for structured resident input and oversight on the city's largest development and vendor contracts before they're finalized.",
      },
    ],
  },
];

/** The Stakes — 4-stat data block for the Platform page. */
export const stakesStats = [
  {
    stat: "3.7% / 8.7%",
    label: "Annual rent increase allowance",
    detail:
      "For buildings with 5+ units versus 4 or fewer — a loophole that leaves tenants in smaller buildings exposed.",
    source: "City of Inglewood",
  },
  {
    stat: "~2/3",
    label: "District 1 households are renters",
    detail:
      "Living side by side with longtime homeowner families — stability matters for everyone.",
    source: "Campaign analysis",
  },
  {
    stat: "$1.4B",
    label: "Lost to elder fraud in California, 2025",
    detail:
      "Up 68% from the year before, and the highest total of any state in the country.",
    source: "FBI IC3 2025 Annual Report",
  },
  {
    stat: "$46.4K",
    label: "Average District 1 household income",
    detail: "Versus roughly $61,000 countywide — every hidden cost hits harder here.",
    source: "Campaign analysis",
  },
];

/** Quadrant volunteer teams for the Get Involved page. */
export const quadrants = [
  {
    number: "1",
    area: "Northeast District 1",
    focus: "Canvassing, phone banking, and neighborhood outreach.",
  },
  {
    number: "2",
    area: "Northwest District 1",
    focus: "Sign placement, events, and community liaisons.",
  },
  {
    number: "3",
    area: "Southeast District 1",
    focus: "Renter and homeowner outreach, data entry.",
  },
  {
    number: "4",
    area: "Southwest District 1",
    focus: "Senior outreach and town hall logistics.",
  },
];

/** Three Steps to join — mirrored from the existing "How it works" pattern. */
export const joinSteps = [
  {
    step: "01",
    title: "Sign up with your quadrant",
    body: "Tell us where you live in District 1 and we'll connect you with your quadrant team lead and their canvassing schedule.",
  },
  {
    step: "02",
    title: "Pick your commitment",
    body: "Canvass a few hours on a Saturday, host a coffee chat with neighbors, make phone calls, or help with data and sign placement — every hour counts.",
  },
  {
    step: "03",
    title: "Show up and speak up",
    body: "Come to a quarterly town hall in your quadrant, bring a neighbor, and help us hear directly from the people we're fighting for.",
  },
];

/** Instagram and other social links.
 * TODO: confirm real campaign contact info before public launch */
export const socialLinks: SocialLink[] = [
  { platform: "facebook", url: null, handle: null },
  // TODO: confirm real campaign contact info before public launch
  { platform: "instagram", url: "https://instagram.com/perezforinglewood", handle: "@perezforinglewood" },
];

export const marqueeWords = [
  "Honest Protection",
  "Action on Affordability",
  "Transparency at City Hall",
  "District 1",
  "November 3, 2026",
];
