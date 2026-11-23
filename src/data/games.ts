export type RecipeIngredient = {
  itemId: string;
  qty: number;
};

export type RarityTier = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export type GameItem = {
  id: string;
  icon: string;
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
};

export const gamesRegistry: GameModule[] = [
  {
    slug: 'main-sequence',
    title: 'Main Sequence',
    steamAppId: 2487190,
    statusBadge: 'EARLY ACCESS · DEMO LIVE',
    releaseLabel: 'Released 12 Nov 2026',
    engine: 'Space Factory & Ship Sim',
    genre: 'Factory Automation · Space Sim',
    officialStoreUrl: 'https://store.steampowered.com/app/2487190/Main_Sequence/',
    priceLabel: '$19.99 · Free Demo on Steam',
    summary:
      'Design modular starships and automate orbital production lines. Calculate exact smelter-to-assembler ratios, kW power draw, and raw asteroid ore throughput.',
    art: {
      header: '/images/games/main-sequence/header.jpg',
      hero: '/images/games/main-sequence/hero.jpg',
      mapBg: '/images/games/main-sequence/map-bg.jpg',
    },
    affiliateLinks: { steamKeyUrl: '' },
    items: [
      {
        id: 'raw-iron-ore',
        icon: '🪨',
        name: 'Raw Ferrous Ore',
        category: 'Raw Ore',
        rarity: 'Common',
        baseValue: 10,
        craftTimeSec: 2,
        powerKw: 5,
        biomeOrSource: 'Asteroid Mining Drill',
      },
      {
        id: 'copper-ore',
        icon: '🟠',
        name: 'Raw Cupric Ore',
        category: 'Raw Ore',
        rarity: 'Common',
        baseValue: 12,
        craftTimeSec: 2,
        powerKw: 5,
        biomeOrSource: 'Asteroid Mining Drill',
      },
      {
        id: 'refined-hull-plate',
        icon: '🛡️',
        name: 'Refined Hull Plating',
        category: 'Structural',
        rarity: 'Uncommon',
        baseValue: 38,
        craftTimeSec: 4,
        powerKw: 15,
        biomeOrSource: 'Arc Smelter',
        recipe: [{ itemId: 'raw-iron-ore', qty: 2 }],
      },
      {
        id: 'insulated-conduit',
        icon: '🔌',
        name: 'Insulated Power Conduit',
        category: 'Component',
        rarity: 'Uncommon',
        baseValue: 45,
        craftTimeSec: 3,
        powerKw: 12,
        biomeOrSource: 'Wire Extruder',
        recipe: [{ itemId: 'copper-ore', qty: 2 }],
      },
      {
        id: 'thruster-manifold',
        icon: '🚀',
        name: 'Thruster Manifold Assembly',
        category: 'Ship Module',
        rarity: 'Rare',
        baseValue: 165,
        craftTimeSec: 8,
        powerKw: 40,
        biomeOrSource: 'Orbital Assembler',
        recipe: [
          { itemId: 'refined-hull-plate', qty: 2 },
          { itemId: 'insulated-conduit', qty: 1 },
        ],
      },
      {
        id: 'fusion-regulator',
        icon: '⚛️',
        name: 'Reactor Flux Regulator',
        category: 'Power Core',
        rarity: 'Epic',
        baseValue: 420,
        craftTimeSec: 12,
        powerKw: 75,
        biomeOrSource: 'Precision Fabricator',
        recipe: [
          { itemId: 'thruster-manifold', qty: 2 },
          { itemId: 'insulated-conduit', qty: 2 },
        ],
      },
    ],
    mapPins: [
      { id: 'ms-pin-1', title: 'Orbital Drydock Terminal', category: 'Extraction', xPercent: 50, yPercent: 48, note: 'Primary cargo offload & ship hull assembly bay.' },
      { id: 'ms-pin-2', title: 'Dense Ferrous Asteroid Cluster', category: 'Resource', xPercent: 26, yPercent: 34, note: 'High-yield starter iron vein for hull plating.' },
      { id: 'ms-pin-3', title: 'Cupric & Silicate Belt', category: 'Resource', xPercent: 74, yPercent: 36, note: 'Primary feedstock for power conduits and circuitry.' },
      { id: 'ms-pin-4', title: 'Derelict Telemetry Beacon', category: 'Shrine / Upgrade', xPercent: 65, yPercent: 72, note: 'Unlocks tier-2 automation schematic nodes.' },
      { id: 'ms-pin-5', title: 'Rogue Drone Patrol Sector', category: 'Boss', xPercent: 24, yPercent: 70, note: 'Guarded salvage pocket with rare reactor parts.' },
    ],
    tradeValues: [],
  },
  {
    slug: 'below-the-stone',
    title: 'Below the Stone',
    steamAppId: 1170230,
    statusBadge: '1.0 FULL LAUNCH',
    releaseLabel: '1.0 Update · 17 Nov 2026',
    engine: '9 New Biomes & Layer 3',
    genre: 'Extraction Mining · Roguelike',
    officialStoreUrl: 'https://store.steampowered.com/app/1170230/Below_the_Stone/',
    priceLabel: '$11.99 USD on Steam',
    summary:
      'Descend into procedural dwarven caverns across Layer 3 and 9 new 1.0 biomes. Plan smelting ingot trees, pickaxe tier upgrades, and extraction pod loadouts.',
    art: {
      header: '/images/games/below-the-stone/header.jpg',
      hero: '/images/games/below-the-stone/hero.jpg',
      mapBg: '/images/games/below-the-stone/map-bg.jpg',
    },
    affiliateLinks: { steamKeyUrl: '' },
    items: [
      {
        id: 'tin-chunk',
        icon: '⚪',
        name: 'Tin Ore Chunk',
        category: 'Raw Ore',
        rarity: 'Common',
        baseValue: 8,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Shallow Caverns',
      },
      {
        id: 'copper-chunk',
        icon: '🟫',
        name: 'Copper Ore Chunk',
        category: 'Raw Ore',
        rarity: 'Common',
        baseValue: 10,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Shallow Caverns',
      },
      {
        id: 'bronze-ingot',
        icon: '🟧',
        name: 'Dwarven Bronze Ingot',
        category: 'Smelted Bar',
        rarity: 'Uncommon',
        baseValue: 32,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Kingdom Furnace',
        recipe: [
          { itemId: 'copper-chunk', qty: 2 },
          { itemId: 'tin-chunk', qty: 1 },
        ],
      },
      {
        id: 'bronze-pickaxe',
        icon: '⛏️',
        name: 'Reinforced Bronze Pickaxe',
        category: 'Mining Gear',
        rarity: 'Rare',
        baseValue: 110,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Kingdom Anvil',
        recipe: [{ itemId: 'bronze-ingot', qty: 3 }],
      },
      {
        id: 'deep-armor-chest',
        icon: '🥋',
        name: 'Layer-2 Delver Cuirass',
        category: 'Armor',
        rarity: 'Epic',
        baseValue: 260,
        craftTimeSec: 10,
        powerKw: 0,
        biomeOrSource: 'Master Runesmith',
        recipe: [{ itemId: 'bronze-ingot', qty: 5 }],
      },
    ],
    mapPins: [
      { id: 'bts-pin-1', title: 'Drill Pod Extraction Zone', category: 'Extraction', xPercent: 48, yPercent: 46, note: 'Secure mined ores into bank storage before cave-in.' },
      { id: 'bts-pin-2', title: 'Glowing Fungal Vein', category: 'Resource', xPercent: 27, yPercent: 62, note: 'Dense copper/tin pocket with alchemy spores.' },
      { id: 'bts-pin-3', title: 'Crystal Chasm Vault', category: 'Shrine / Upgrade', xPercent: 68, yPercent: 66, note: 'Rare chest spawn & rune altar.' },
      { id: 'bts-pin-4', title: 'Layer Guardian Arena', category: 'Boss', xPercent: 76, yPercent: 28, note: 'Boss encounter required for deeper layer unlock.' },
    ],
    tradeValues: [
      { name: 'Abyssal Core Catalyst', icon: '💎', score: 1200, demand: 9, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Mithril Ingot Stack', icon: '🟦', score: 450, demand: 8, rarity: 'Epic', trend: 'Stable' },
      { name: 'Bronze Expedition Kit', icon: '⛏️', score: 95, demand: 6, rarity: 'Rare', trend: 'Stable' },
    ],
  },
  {
    slug: 'noble-fates',
    title: 'Noble Fates',
    steamAppId: 1769420,
    statusBadge: '1.0 FULL LAUNCH',
    releaseLabel: '1.0 Release · 12 Nov 2026',
    engine: '1,500+ Reviews Colony RPG',
    genre: 'Colony Sim · Kingdom Strategy',
    officialStoreUrl: 'https://store.steampowered.com/app/1769420/Noble_Fates/',
    priceLabel: '$19.99 · Free Demo on Steam',
    summary:
      'Build a 3D fantasy kingdom driven by mortal memories and prestige. Optimize food rations, prestige furniture crafting chains, and castle defense gear.',
    art: {
      header: '/images/games/noble-fates/header.jpg',
      hero: '/images/games/noble-fates/hero.jpg',
      mapBg: '/images/games/noble-fates/map-bg.jpg',
    },
    affiliateLinks: { steamKeyUrl: '' },
    items: [
      {
        id: 'timber-log',
        icon: '🪵',
        name: 'Seasoned Timber',
        category: 'Material',
        rarity: 'Common',
        baseValue: 6,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Forester Camp',
      },
      {
        id: 'stone-block',
        icon: '🧱',
        name: 'Cut Limestone Block',
        category: 'Material',
        rarity: 'Common',
        baseValue: 9,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Stonecutter Bench',
      },
      {
        id: 'fine-plank',
        icon: '🪚',
        name: 'Planed Hardwood Board',
        category: 'Refined',
        rarity: 'Uncommon',
        baseValue: 22,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Carpentry Table',
        recipe: [{ itemId: 'timber-log', qty: 2 }],
      },
      {
        id: 'noble-feast-table',
        icon: '👑',
        name: 'Noble Banquet Hall Set',
        category: 'Prestige Furniture',
        rarity: 'Rare',
        baseValue: 140,
        craftTimeSec: 9,
        powerKw: 0,
        biomeOrSource: 'Artisan Workshop',
        recipe: [
          { itemId: 'fine-plank', qty: 3 },
          { itemId: 'stone-block', qty: 2 },
        ],
      },
    ],
    mapPins: [
      { id: 'nf-pin-1', title: ' fertile Riverland Keep Site', category: 'Shrine / Upgrade', xPercent: 46, yPercent: 52, note: 'Balanced farming & natural moat chokepoint.' },
      { id: 'nf-pin-2', title: 'Ancient Oak Grove', category: 'Resource', xPercent: 24, yPercent: 40, note: 'High-density timber & foraging berries.' },
      { id: 'nf-pin-3', title: 'Highland Iron & Stone Ridge', category: 'Resource', xPercent: 72, yPercent: 34, note: 'Quarry stone and ore seam.' },
      { id: 'nf-pin-4', title: 'Raider Warcamp Approach', category: 'Boss', xPercent: 78, yPercent: 74, note: 'Primary siege spawn direction—fortify walls.' },
    ],
    tradeValues: [
      { name: 'Masterwork Runeblade', icon: '⚔️', score: 880, demand: 9, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Royal Tapestry Bundle', icon: '👑', score: 310, demand: 7, rarity: 'Rare', trend: 'Stable' },
    ],
  },
];

export function getGameBySlug(slug: string): GameModule | undefined {
  return gamesRegistry.find((g) => g.slug === slug);
}
