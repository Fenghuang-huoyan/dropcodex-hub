export type RecipeIngredient = {
  itemId: string;
  qty: number;
};

export type RarityTier = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export type GameItem = {
  id: string;
  icon: string;
  iconUrl?: string;
  outputQty?: number;
  name: string;
  category: string;
  rarity: RarityTier;
  baseValue: number;
  craftTimeSec?: number;
  powerKw?: number;
  biomeOrSource: string;
  recipe?: RecipeIngredient[];
};

export type MapPin = {
  id: string;
  title: string;
  category: 'Resource' | 'Boss' | 'Shrine / Upgrade' | 'Extraction';
  xPercent: number;
  yPercent: number;
  note: string;
};

export type TradeEntry = {
  name: string;
  icon: string;
  score: number;
  demand: number;
  rarity: RarityTier;
  trend: 'Rising' | 'Stable' | 'Fluctuating';
};

export type QuickCodeEntry = {
  target: string;
  regionOrUnlock: string;
  codeOrCombo: string;
  type: 'Safe Code' | 'Keypad / Door' | 'PS5 / Xbox Cheat' | 'Progression Gate' | 'Scanner Tier';
  note: string;
};

export type GameSeoMeta = {
  overviewTitle: string;
  overviewDesc: string;
  calcTitle: string;
  calcDesc: string;
  calcHeading: string;
  calcCardTitle: string;
  calcCardDesc: string;
  dbTitle: string;
  dbDesc: string;
  dbCardDesc: string;
  mapTitle: string;
  mapDesc: string;
  mapCardDesc: string;
  valuesTitle: string;
  valuesDesc: string;
  quickLookupHeading?: string;
};

export type GameModule = {
  slug: string;
  title: string;
  steamAppId: number;
  statusBadge: string;
  releaseLabel: string;
  engine: string;
  genre: string;
  officialStoreUrl: string;
  priceLabel: string;
  summary: string;
  hasRealMap?: boolean;
  hasPlayerTrading?: boolean;
  seo?: GameSeoMeta;
  introParagraphs?: string[];
  art: {
    header: string;
    hero: string;
    mapBg: string;
  };
  affiliateLinks: {
    steamKeyUrl?: string;
    eldoradoUrl?: string;
    lootbarUrl?: string;
  };
  items: GameItem[];
  mapPins: MapPin[];
  tradeValues: TradeEntry[];
  quickCodes?: QuickCodeEntry[];
};
