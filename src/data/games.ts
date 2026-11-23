export type RecipeIngredient = {
  itemId: string;
  qty: number;
};

export type GameItem = {
  id: string;
  name: string;
  category: string;
  rarity: string;
  baseValue: number;
  craftTimeSec?: number;
  powerKw?: number;
  biomeOrSource: string;
  verifiedSource: string;
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
  score: number;
  demand: number;
  rarity: string;
  trend: 'Rising' | 'Stable' | 'Fluctuating';
};

export type GameModule = {
  slug: string;
  title: string;
  steamAppId?: number;
  releaseLabel: string;
  engine: string;
  genre: string;
  officialStoreUrl: string;
  priceLabel: string;
  dataStatus: string;
  summary: string;
  affiliateLinks: {
    steamKeyUrl?: string;
    eldoradoUrl?: string;
    lootbarUrl?: string;
  };
  items: GameItem[];
  mapPins: MapPin[];
  tradeValues: TradeEntry[];
};

/**
 * Multi-game registry.
 * Adding a new game after AssetRipper / FModel client extraction takes <10 minutes:
 * drop extracted JSON arrays into a new entry here and Astro automatically builds:
 * - /<slug>/
 * - /<slug>/calculator/
 * - /<slug>/map/
 * - /<slug>/database/
 * - /<slug>/values/
 */
export const gamesRegistry: GameModule[] = [
  {
    slug: 'main-sequence',
    title: 'Main Sequence',
    steamAppId: 2487190,
    releaseLabel: 'Early Access · 12 Nov 2026',
    engine: 'Unity (AssetRipper Ready)',
    genre: 'Space Factory Automation & Ship Builder',
    officialStoreUrl: 'https://store.steampowered.com/app/2487190/Main_Sequence/',
    priceLabel: '$19.99 USD (Free Demo Available)',
    dataStatus: 'Architecture Demo · Ready for Unity Client JSON Import',
    summary:
      'First-person space-sim and factory automation builder by Tumbling Dumpling Studio. Built for multi-stage smelting ratio calculations, power load balancing, and module databases.',
    affiliateLinks: {
      steamKeyUrl: '',
    },
    items: [
      {
        id: 'raw-iron-ore',
        name: 'Raw Iron Ore',
        category: 'Raw Resource',
        rarity: 'Common',
        baseValue: 10,
        craftTimeSec: 2,
        powerKw: 5,
        biomeOrSource: 'Asteroid Belt Mining Drill',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
      },
      {
        id: 'copper-ore',
        name: 'Raw Copper Ore',
        category: 'Raw Resource',
        rarity: 'Common',
        baseValue: 12,
        craftTimeSec: 2,
        powerKw: 5,
        biomeOrSource: 'Asteroid Belt Mining Drill',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
      },
      {
        id: 'refined-hull-plate',
        name: 'Refined Hull Plate',
        category: 'Intermediate',
        rarity: 'Uncommon',
        baseValue: 38,
        craftTimeSec: 4,
        powerKw: 15,
        biomeOrSource: 'Smelter Array',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
        recipe: [{ itemId: 'raw-iron-ore', qty: 2 }],
      },
      {
        id: 'insulated-conduit',
        name: 'Insulated Conduit',
        category: 'Intermediate',
        rarity: 'Uncommon',
        baseValue: 45,
        craftTimeSec: 3,
        powerKw: 12,
        biomeOrSource: 'Wire Extruder',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
        recipe: [{ itemId: 'copper-ore', qty: 2 }],
      },
      {
        id: 'thruster-manifold',
        name: 'Thruster Manifold Assembly',
        category: 'Ship Module',
        rarity: 'Rare',
        baseValue: 165,
        craftTimeSec: 8,
        powerKw: 40,
        biomeOrSource: 'Orbital Assembler',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
        recipe: [
          { itemId: 'refined-hull-plate', qty: 2 },
          { itemId: 'insulated-conduit', qty: 1 },
        ],
      },
    ],
    mapPins: [
      { id: 'ms-pin-1', title: 'Starter Orbital Station Dock', category: 'Extraction', xPercent: 50, yPercent: 50, note: 'Primary cargo offload & ship blueprint terminal.' },
      { id: 'ms-pin-2', title: 'High-Density Iron Cluster', category: 'Resource', xPercent: 28, yPercent: 34, note: 'Early automation mining node.' },
      { id: 'ms-pin-3', title: 'Copper & Silicate Ridge', category: 'Resource', xPercent: 72, yPercent: 38, note: 'Conduit production feedstock.' },
      { id: 'ms-pin-4', title: 'Derelict Relay Beacon', category: 'Shrine / Upgrade', xPercent: 64, yPercent: 71, note: 'Tech unlock scan target.' },
    ],
    tradeValues: [],
  },
  {
    slug: 'below-the-stone',
    title: 'Below the Stone (1.0)',
    steamAppId: 1170230,
    releaseLabel: '1.0 Full Launch · 17 Nov 2026',
    engine: 'Unity (AssetRipper Ready)',
    genre: 'Extraction Mining Roguelike',
    officialStoreUrl: 'https://store.steampowered.com/app/1170230/Below_the_Stone/',
    priceLabel: '$11.99 USD',
    dataStatus: 'Architecture Demo · Ready for 1.0 Layer-3 Biome & Forge Dump',
    summary:
      'Dwarven extraction-mining roguelike by Strollart & Apogee Entertainment. Version 1.0 adds Layer 3 and 9 new biomes—ideal for smelting tree calculators and biome drop tables.',
    affiliateLinks: {
      steamKeyUrl: '',
    },
    items: [
      {
        id: 'tin-chunk',
        name: 'Tin Ore Chunk',
        category: 'Ore',
        rarity: 'Common',
        baseValue: 8,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Caverns',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
      },
      {
        id: 'copper-chunk',
        name: 'Copper Ore Chunk',
        category: 'Ore',
        rarity: 'Common',
        baseValue: 10,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Caverns',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
      },
      {
        id: 'bronze-ingot',
        name: 'Bronze Ingot',
        category: 'Ingot',
        rarity: 'Uncommon',
        baseValue: 32,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Kingdom Smelter',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
        recipe: [
          { itemId: 'copper-chunk', qty: 2 },
          { itemId: 'tin-chunk', qty: 1 },
        ],
      },
      {
        id: 'bronze-pickaxe',
        name: 'Dwarven Bronze Pickaxe',
        category: 'Equipment',
        rarity: 'Rare',
        baseValue: 110,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Anvil Forge',
        verifiedSource: 'Template Schema (Replace via AssetRipper JSON)',
        recipe: [{ itemId: 'bronze-ingot', qty: 3 }],
      },
    ],
    mapPins: [
      { id: 'bts-pin-1', title: 'Drill Pod Extraction Point', category: 'Extraction', xPercent: 48, yPercent: 46, note: 'Bank mined ores before hull breach.' },
      { id: 'bts-pin-2', title: 'Fungal Cavern Vein', category: 'Resource', xPercent: 25, yPercent: 62, note: 'Layer 1–2 ore pocket.' },
      { id: 'bts-pin-3', title: 'Layer Boss Lair Marker', category: 'Boss', xPercent: 78, yPercent: 28, note: 'High-tier crafting catalyst drop.' },
    ],
    tradeValues: [
      { name: 'Prismatic Core (Sample)', score: 1200, demand: 9, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Deep Mithril Bar (Sample)', score: 450, demand: 8, rarity: 'Epic', trend: 'Stable' },
      { name: 'Bronze Ingot Pack (Sample)', score: 50, demand: 5, rarity: 'Uncommon', trend: 'Stable' },
    ],
  },
];

export function getGameBySlug(slug: string): GameModule | undefined {
  return gamesRegistry.find((g) => g.slug === slug);
}
