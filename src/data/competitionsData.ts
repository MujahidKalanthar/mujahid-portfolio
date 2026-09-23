export interface FullCompetition {
  id: number;
  title: string;
  organizer: string;
  result: '2nd' | '3rd' | 'Finalist' | 'Semi Finals';
  resultCategory: 'Podium' | 'Finalist' | 'Semi Finalist';
  city: string;
  region: string;
  year: string;
  category: 'Strategy' | 'Marketing' | 'Finance' | 'Product' | 'Innovation' | 'Civic Tech' | 'Crisis';
  pitchDeckPath?: string;
  description?: string;
}

export interface CityLocation {
  id: string;
  name: string;
  subtitle: string;
  coordinates: { x: number; y: number }; // SVG map percentage coordinates
  eventsCount: number;
  podiumsCount: number;
  isInternship?: boolean;
}

export const CITIES_DATA: CityLocation[] = [
  { id: 'riyadh', name: 'Riyadh', subtitle: 'Saudi Arabia · QTC Software Dev Intern', coordinates: { x: 23.4, y: 43.76 }, eventsCount: 1, podiumsCount: 0, isInternship: true },
  { id: 'prayagraj', name: 'Prayagraj', subtitle: 'MNNIT Allahabad · Education & Case Clash', coordinates: { x: 71.82, y: 41.87 }, eventsCount: 2, podiumsCount: 1 },
  { id: 'hyderabad', name: 'Hyderabad', subtitle: 'NMIMS Hyderabad · 5 Competitions', coordinates: { x: 67.19, y: 62.42 }, eventsCount: 5, podiumsCount: 4 },
  { id: 'delhi', name: 'New Delhi', subtitle: 'SRCC, DDUC, IIT Delhi, SSCBS, MCD', coordinates: { x: 65.43, y: 33.4 }, eventsCount: 8, podiumsCount: 0 },
  { id: 'jaipur', name: 'Jaipur', subtitle: 'LNMIIT · Ideathon Finalist', coordinates: { x: 63.47, y: 37.96 }, eventsCount: 1, podiumsCount: 0 },
  { id: 'jammu', name: 'Jammu', subtitle: 'IIT Jammu · Pitchers 4.0 Finalist', coordinates: { x: 62.19, y: 22.04 }, eventsCount: 1, podiumsCount: 0 },
  { id: 'patna', name: 'Patna', subtitle: 'IIT Patna · CaseCrux & Pitch It Up', coordinates: { x: 76.35, y: 41.45 }, eventsCount: 2, podiumsCount: 0 },
  { id: 'chennai', name: 'Chennai', subtitle: 'IIT Madras · Startup Series & Product Construct', coordinates: { x: 69.65, y: 73.0 }, eventsCount: 2, podiumsCount: 0 },
  { id: 'bengaluru', name: 'Bengaluru', subtitle: 'IISc Bangalore · Pravega Innovation Summit', coordinates: { x: 65.96, y: 73.27 }, eventsCount: 1, podiumsCount: 0 },
  { id: 'kanpur', name: 'Kanpur', subtitle: 'IIT Kanpur · Vittraj Finance Competition', coordinates: { x: 69.73, y: 39.19 }, eventsCount: 1, podiumsCount: 0 },
  { id: 'kolkata', name: 'Kolkata', subtitle: 'IIM Calcutta · Product Alchemy', coordinates: { x: 80.79, y: 49.31 }, eventsCount: 1, podiumsCount: 0 },
  { id: 'pune', name: 'Pune', subtitle: 'SIBM Pune · Strategia', coordinates: { x: 60.82, y: 59.58 }, eventsCount: 1, podiumsCount: 0 },
  { id: 'kashipur', name: 'Kashipur', subtitle: 'IIM Kashipur · Arthart & Arthashastra', coordinates: { x: 67.84, y: 31.78 }, eventsCount: 2, podiumsCount: 0 },
  { id: 'lucknow', name: 'Lucknow', subtitle: 'IIM Lucknow · Investwise 2025-26', coordinates: { x: 70.58, y: 38.14 }, eventsCount: 1, podiumsCount: 0 },
];

export const ALL_COMPETITIONS: FullCompetition[] = [
  {
    id: 1,
    title: "Case Clash",
    organizer: "Motilal Nehru National Institute of Technology (MNNIT), Allahabad",
    result: "2nd",
    resultCategory: "Podium",
    city: "Prayagraj",
    region: "Uttar Pradesh",
    year: "2025",
    category: "Strategy",
    pitchDeckPath: "/pitchdecks/Cash Clash - MNNIT.pdf",
    description: "2nd Place podium finish in MNNIT's flagship case competition analyzing unit economics and operational scaling."
  },
  {
    id: 2,
    title: "Game of Brands: Eco Edition",
    organizer: "Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad",
    result: "2nd",
    resultCategory: "Podium",
    city: "Hyderabad",
    region: "Telangana",
    year: "2025",
    category: "Marketing",
    pitchDeckPath: "/pitchdecks/Game of Brands - NMIMS.pdf",
    description: "2nd Place national finish designing sustainable product positioning and brand strategy."
  },
  {
    id: 3,
    title: "Mentorship Trifecta",
    organizer: "Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad",
    result: "2nd",
    resultCategory: "Podium",
    city: "Hyderabad",
    region: "Telangana",
    year: "2025",
    category: "Strategy",
    description: "2nd Place national mentorship & case challenge solving strategic growth bottlenecks."
  },
  {
    id: 4,
    title: "Ship 'N' Route",
    organizer: "Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad",
    result: "3rd",
    resultCategory: "Podium",
    city: "Hyderabad",
    region: "Telangana",
    year: "2025",
    category: "Strategy",
    description: "3rd Place national podium in supply-chain and route optimization logistics competition."
  },
  {
    id: 5,
    title: "The Summoning",
    organizer: "Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad",
    result: "3rd",
    resultCategory: "Podium",
    city: "Hyderabad",
    region: "Telangana",
    year: "2025",
    category: "Crisis",
    pitchDeckPath: "/pitchdecks/The summoning - NMIMS.pdf",
    description: "3rd Place national podium solving high-stakes corporate crisis simulation."
  },
  {
    id: 6,
    title: "Ideathon",
    organizer: "LNM Institute of Information Technology (LNMIIT), Jaipur",
    result: "Finalist",
    resultCategory: "Finalist",
    city: "Jaipur",
    region: "Rajasthan",
    year: "2025",
    category: "Innovation",
    description: "National Finalist pitching tech innovation and product feasibility."
  },
  {
    id: 7,
    title: "Pitchers 4.0",
    organizer: "Indian Institute of Technology (IIT), Jammu",
    result: "Finalist",
    resultCategory: "Finalist",
    city: "Jammu",
    region: "Jammu & Kashmir",
    year: "2025",
    category: "Innovation",
    description: "National Finalist presenting SaveOnCare healthcare billing transparency platform."
  },
  {
    id: 8,
    title: "Shri Ram Crisis Mania",
    organizer: "Shri Ram College of Commerce (SRCC), University of Delhi",
    result: "Finalist",
    resultCategory: "Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Crisis",
    pitchDeckPath: "/pitchdecks/Shri Ram Crisis Mania - SRCC.pdf",
    description: "National Finalist in SRCC's flagship crisis management and policy simulation."
  },
  {
    id: 9,
    title: "KROSS CARTEL: National Marketing Case Competition",
    organizer: "Deen Dayal Upadhyaya College (DDUC), University of Delhi",
    result: "Finalist",
    resultCategory: "Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Marketing",
    pitchDeckPath: "/pitchdecks/KROSS CARTEL - DDUC.pdf",
    description: "National Finalist presenting D2C retention analytics and NLP customer sentiment platform."
  },
  {
    id: 10,
    title: "Beyond the Wall Street",
    organizer: "Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad",
    result: "Finalist",
    resultCategory: "Finalist",
    city: "Hyderabad",
    region: "Telangana",
    year: "2025",
    category: "Finance",
    description: "National Finalist in financial valuation and capital allocation challenge."
  },
  {
    id: 11,
    title: "CaseCrux: The Case Study Challenge",
    organizer: "Indian Institute of Technology (IIT), Patna",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Patna",
    region: "Bihar",
    year: "2025",
    category: "Strategy",
    pitchDeckPath: "/pitchdecks/CaseCrux - IITP.pdf",
    description: "National Semi-Finalist solving technology adoption and market entry strategy."
  },
  {
    id: 12,
    title: "Startup Series",
    organizer: "Indian Institute of Technology (IIT), Madras",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Chennai",
    region: "Tamil Nadu",
    year: "2025",
    category: "Innovation",
    description: "National Semi-Finalist in IIT Madras venture pitch and business model challenge."
  },
  {
    id: 13,
    title: "eDC's Blueprint 6.0",
    organizer: "Indian Institute of Technology (IIT), Delhi",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Innovation",
    description: "National Semi-Finalist in IIT Delhi entrepreneurship cell startup blueprint competition."
  },
  {
    id: 14,
    title: "Pitch It Up",
    organizer: "Indian Institute of Technology (IIT), Patna",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Patna",
    region: "Bihar",
    year: "2025",
    category: "Innovation",
    description: "National Semi-Finalist pitching product concept and go-to-market plan."
  },
  {
    id: 15,
    title: "Pravega Innovation Summit (PIS)",
    organizer: "Indian Institute of Science (IISc), Bangalore",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Bengaluru",
    region: "Karnataka",
    year: "2025",
    category: "Innovation",
    description: "National Semi-Finalist in IISc Bangalore's premier scientific & technical innovation summit."
  },
  {
    id: 16,
    title: "Vittraj: Nationwide Finance Case Study Competition",
    organizer: "Indian Institute of Technology (IIT), Kanpur",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Kanpur",
    region: "Uttar Pradesh",
    year: "2025",
    category: "Finance",
    pitchDeckPath: "/pitchdecks/Vittraj - IITK.pdf",
    description: "National Semi-Finalist in financial analysis and corporate restructuring case."
  },
  {
    id: 17,
    title: "Product Alchemy - ProdExpo 5.0",
    organizer: "Indian Institute of Management (IIM), Calcutta",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Kolkata",
    region: "West Bengal",
    year: "2026",
    category: "Product",
    pitchDeckPath: "/pitchdecks/Product Alchemy - IIMC.pdf",
    description: "National Semi-Finalist in IIM Calcutta's flagship product management & feature teardown event."
  },
  {
    id: 18,
    title: "India Innovates 2026",
    organizer: "Municipal Corporation of Delhi (MCD)",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2026",
    category: "Civic Tech",
    pitchDeckPath: "/pitchdecks/India Innovates - Delhi Muncipal Corporation.pdf",
    description: "National Semi-Finalist in civic technology and municipal infrastructure optimization."
  },
  {
    id: 19,
    title: "Strategia",
    organizer: "Symbiosis Institute of Business Management (SIBM), Pune",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Pune",
    region: "Maharashtra",
    year: "2025",
    category: "Strategy",
    pitchDeckPath: "/pitchdecks/Strategia - SIBM.pdf",
    description: "National Semi-Finalist in strategic consulting and business pivot planning."
  },
  {
    id: 20,
    title: "Arthart 5.0",
    organizer: "Indian Institute of Management (IIM), Kashipur",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Kashipur",
    region: "Uttarakhand",
    year: "2025",
    category: "Finance",
    pitchDeckPath: "/pitchdecks/Arthat 5.0 - IIMK.pdf",
    description: "National Semi-Finalist in macroeconomic forecasting and financial markets challenge."
  },
  {
    id: 21,
    title: "Investwise 2025-26",
    organizer: "Indian Institute of Management (IIM), Lucknow",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Lucknow",
    region: "Uttar Pradesh",
    year: "2026",
    category: "Finance",
    pitchDeckPath: "/pitchdecks/Investowise 2025-26 - IIML.pdf",
    description: "National Semi-Finalist in portfolio management and investment strategy."
  },
  {
    id: 22,
    title: "Arthashastra 7.0",
    organizer: "Indian Institute of Management (IIM), Kashipur",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Kashipur",
    region: "Uttarakhand",
    year: "2025",
    category: "Strategy",
    pitchDeckPath: "/pitchdecks/Arthashastra 7.0 - IIMK.pdf",
    description: "National Semi-Finalist in strategic economics and policy formulation."
  },
  {
    id: 23,
    title: "Product Construct 2026",
    organizer: "Indian Institute of Technology (IIT), Madras",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "Chennai",
    region: "Tamil Nadu",
    year: "2026",
    category: "Product",
    pitchDeckPath: "/pitchdecks/Product Construct - IITM.pdf",
    description: "National Semi-Finalist in product design roadmap and UX strategy."
  },
  {
    id: 24,
    title: "Shri Ram Case Conundrum",
    organizer: "Shri Ram College of Commerce (SRCC), University of Delhi",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Strategy",
    description: "National Semi-Finalist in corporate strategy and competitive positioning."
  },
  {
    id: 25,
    title: "Shri Ram Policy Quest",
    organizer: "Shri Ram College of Commerce (SRCC), University of Delhi",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Strategy",
    pitchDeckPath: "/pitchdecks/Shri Ram Policy Quest - SRCC.pdf",
    description: "National Semi-Finalist in public policy formulation and trade economic analysis."
  },
  {
    id: 26,
    title: "Shri Ram Vyapar",
    organizer: "Shri Ram College of Commerce (SRCC), University of Delhi",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Strategy",
    pitchDeckPath: "/pitchdecks/Shri Ram Vyapar - SRCC.pdf",
    description: "National Semi-Finalist in business negotiation and commercial strategy."
  },
  {
    id: 27,
    title: "Mark-O-Nova x EY: The Marketing Deception",
    organizer: "Shaheed Sukhdev College of Business Studies (SSCBS), University of Delhi",
    result: "Semi Finals",
    resultCategory: "Semi Finalist",
    city: "New Delhi",
    region: "Delhi NCR",
    year: "2025",
    category: "Marketing",
    pitchDeckPath: "/pitchdecks/Mark-O-Nova - Shaheed Sukhdev college.pdf",
    description: "National Semi-Finalist in EY-sponsored marketing strategy and consumer behavior audit."
  }
];
