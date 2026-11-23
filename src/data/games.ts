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

export type QuickCodeEntry = {
  target: string;
  regionOrUnlock: string;
  codeOrCombo: string;
  type: 'Safe Code' | 'Keypad / Door' | 'PS5 / Xbox Cheat';
  note: string;
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
  quickCodes?: QuickCodeEntry[];
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
    slug: 'gta-6',
    title: 'GTA VI (Leonida)',
    steamAppId: 0,
    statusBadge: 'PS5 & XBOX LIVE',
    releaseLabel: 'Launched 19 Nov 2026',
    engine: 'Leonida Safe Codes & Fences',
    genre: 'Open-World Heist · Cash Planner',
    officialStoreUrl: 'https://www.rockstargames.com/VI',
    priceLabel: 'PS5 & Xbox Series X|S',
    summary:
      'Instant lookup for all 19 hardcoded Leonida gang safe & door codes, Chapter 1–4 black-market fence laundering margins (Moses, Yasmani, Randy), and armored bank vault payouts.',
    art: {
      header: '/images/games/gta-6/header.jpg',
      hero: '/images/games/gta-6/hero.jpg',
      mapBg: '/images/games/gta-6/map-bg.jpg',
    },
    affiliateLinks: {
      lootbarUrl: 'https://www.lootbar.com/a/4S9A3l',
    },
    items: [
      {
        id: 'pawn-stolen-jewelry',
        icon: '💍',
        name: 'Unfenced Pawn Jewelry Lot',
        category: 'Stolen Goods',
        rarity: 'Common',
        baseValue: 2200,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Ch.2 Pawn Smash-n-Grab',
      },
      {
        id: 'untracked-street-coupe',
        icon: '🚗',
        name: 'WAINK-Cleared Street Coupe',
        category: 'Stolen Vehicle',
        rarity: 'Common',
        baseValue: 3500,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Port Gellhorn (No Tracker)',
      },
      {
        id: 'small-bank-marked-bills',
        icon: '💵',
        name: 'Small Branch Marked Bills',
        category: 'Marked Cash',
        rarity: 'Uncommon',
        baseValue: 18000,
        craftTimeSec: 12,
        powerKw: 0,
        biomeOrSource: 'Ch.3 Branch + Dye Pack Jammer',
      },
      {
        id: 'moses-clean-car-payout',
        icon: '🔧',
        name: 'Moses Watkins Vehicle Payout',
        category: 'Clean Cash',
        rarity: 'Uncommon',
        baseValue: 6400,
        craftTimeSec: 10,
        powerKw: 0,
        biomeOrSource: 'Moses Garage (Port Gellhorn)',
        recipe: [{ itemId: 'untracked-street-coupe', qty: 1 }],
      },
      {
        id: 'yasmani-laundered-jewelry',
        icon: '💎',
        name: 'Yasmani High-Rate Jewelry Clean',
        category: 'Clean Cash',
        rarity: 'Rare',
        baseValue: 9800,
        craftTimeSec: 10,
        powerKw: 0,
        biomeOrSource: 'Yasmani Fence (Little Cuba)',
        recipe: [{ itemId: 'pawn-stolen-jewelry', qty: 3 }],
      },
      {
        id: 'yasmani-cleared-bills',
        icon: '🏦',
        name: 'Yasmani Cleared Bank Bundle',
        category: 'Clean Cash',
        rarity: 'Rare',
        baseValue: 48500,
        craftTimeSec: 15,
        powerKw: 0,
        biomeOrSource: 'Yasmani Fence (Little Cuba)',
        recipe: [
          { itemId: 'small-bank-marked-bills', qty: 2 },
          { itemId: 'pawn-stolen-jewelry', qty: 1 },
        ],
      },
      {
        id: 'randy-supercar-export',
        icon: '🏎️',
        name: 'Randy Balsero Exotic Export',
        category: 'Clean Cash',
        rarity: 'Epic',
        baseValue: 68000,
        craftTimeSec: 20,
        powerKw: 0,
        biomeOrSource: 'Randy Dock (Balsero, Ch.3)',
        recipe: [
          { itemId: 'moses-clean-car-payout', qty: 4 },
          { itemId: 'untracked-street-coupe', qty: 2 },
        ],
      },
      {
        id: 'ch4-large-bank-vault-hit',
        icon: '💼',
        name: 'Ch.4 Large Bank Vault Briefcase Run',
        category: 'Endgame Heist',
        rarity: 'Legendary',
        baseValue: 165000,
        craftTimeSec: 30,
        powerKw: 0,
        biomeOrSource: 'Armored Truck Vault Strike (Ch.4)',
        recipe: [
          { itemId: 'yasmani-cleared-bills', qty: 2 },
          { itemId: 'yasmani-laundered-jewelry', qty: 1 },
        ],
      },
    ],
    mapPins: [
      { id: 'gta-pin-1', title: 'Moses Watkins Vehicle Fence', category: 'Extraction', xPercent: 25, yPercent: 47, note: 'Ch.2 Port Gellhorn. Scan cars with WAINK phone app (D-Pad Up + R1/RB) to ensure no active tracker.' },
      { id: 'gta-pin-2', title: 'Kingpin Bowling Safe (Code: 0300)', category: 'Resource', xPercent: 18, yPercent: 60, note: 'Southern Port Gellhorn (Kolt & Associates hideout). Fixed dial safe code: 0300.' },
      { id: 'gta-pin-3', title: 'Brooks Boatworks Map & Safe (Code: 6823)', category: 'Shrine / Upgrade', xPercent: 26, yPercent: 23, note: 'Northern Port Gellhorn near Draper Island. Wall map reveals regional safes; safe code: 6823.' },
      { id: 'gta-pin-4', title: 'La Cascara Motel Safe (Code: 6969)', category: 'Resource', xPercent: 13, yPercent: 35, note: 'Western Port Gellhorn (Kolt & Associates). Fixed safe code: 6969.' },
      { id: 'gta-pin-5', title: 'Yasmani Top Fence (Jewelry & Bills)', category: 'Extraction', xPercent: 66, yPercent: 56, note: 'Little Cuba, Vice City (Ch.3 unlock). Highest clean cash conversion for jewelry & marked bills.' },
      { id: 'gta-pin-6', title: 'Casa Guardia & Saber Yard Safes (1965 / 8046)', category: 'Resource', xPercent: 68, yPercent: 68, note: 'Little Cuba Guardia Brothers stashes: Casa Guardia (1965) & Saber Shipping Yard (8046).' },
      { id: 'gta-pin-7', title: 'Randy Exotic Vehicle Export & Saber Facility (1122)', category: 'Extraction', xPercent: 65, yPercent: 45, note: 'Balsero, Vice City (Ch.3). Supercar export fence + Saber Shipping Facility safe (1122).' },
      { id: 'gta-pin-8', title: 'Brian & Donnie Starter Fence + Party Garage (092319)', category: 'Extraction', xPercent: 28, yPercent: 86, note: 'Key Lento (Ch.1 fence). Nearby Party House Garage keypad code: 092319.' },
      { id: 'gta-pin-9', title: 'Swamp Crab Lab Safe (Code: 0072 / CLEAVES)', category: 'Resource', xPercent: 44, yPercent: 73, note: 'Grassrivers Swamp Outpost. Terminal password CLEAVES; safe combination: 0072.' },
      { id: 'gta-pin-10', title: 'Ch.4 Armored Truck Large Bank Vault ($100k–$205k)', category: 'Boss', xPercent: 64, yPercent: 33, note: 'Unlocked after "That\'s Where The Money Is...". Tail armored truck into bank vault; triggers 4-star heat.' },
    ],
    tradeValues: [
      { name: 'Ch.4 Large Bank Vault Hit ($100k–$205k)', icon: '💼', score: 205000, demand: 10, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Post-Story $250,000 Cash Cheat Milestone', icon: '📱', score: 250000, demand: 9, rarity: 'Legendary', trend: 'Stable' },
      { name: 'Randy Balsero Supercar Export', icon: '🏎️', score: 68000, demand: 9, rarity: 'Epic', trend: 'Rising' },
      { name: 'Credit Check Dye Pack Jammer (Bank Key)', icon: '📟', score: 45000, demand: 10, rarity: 'Epic', trend: 'Stable' },
      { name: 'Yasmani Little Cuba Jewelry Batch', icon: '💎', score: 25000, demand: 8, rarity: 'Rare', trend: 'Stable' },
    ],
    quickCodes: [
      { target: 'Kingpin Bowling Safe', regionOrUnlock: 'Southern Port Gellhorn (Kelly County)', codeOrCombo: '0300', type: 'Safe Code', note: 'Kolt & Associates hideout fixed safe.' },
      { target: 'Brooks Boatworks Safe', regionOrUnlock: 'Northern Port Gellhorn (Draper Island)', codeOrCombo: '6823', type: 'Safe Code', note: 'Wall map inside also marks Port Gellhorn safes.' },
      { target: 'La Cascara Motel Safe', regionOrUnlock: 'Western Port Gellhorn', codeOrCombo: '6969', type: 'Safe Code', note: 'Kolt & Associates motel office.' },
      { target: 'Sunrise RV Park Dock Safe', regionOrUnlock: 'Cottonmouth Bay (Mariana County)', codeOrCombo: '6769', type: 'Safe Code', note: 'Kingfishers dock building.' },
      { target: 'Nova Auto Junkyard Safe', regionOrUnlock: 'Hamlet (Vice-Dale County)', codeOrCombo: '7777', type: 'Safe Code', note: 'M7 gang junkyard office.' },
      { target: 'Farm Fix Meth Lab (McKittrick Farm)', regionOrUnlock: 'North of Belville (Leonard County)', codeOrCombo: '2121', type: 'Safe Code', note: 'Final Chapter hideout safe.' },
      { target: 'Illegal Sneaker Trade Safe', regionOrUnlock: 'La Perle, Del Rio Blvd (Vice City)', codeOrCombo: '4124', type: 'Safe Code', note: 'San4San backroom stash.' },
      { target: 'Casa Guardia Safe', regionOrUnlock: 'Little Cuba (Vice City)', codeOrCombo: '1965', type: 'Safe Code', note: 'Guardia Brothers compound.' },
      { target: 'Saber Shipping Facility Safe', regionOrUnlock: 'Balsero (Vice City)', codeOrCombo: '1122', type: 'Safe Code', note: 'Guardia Brothers port warehouse.' },
      { target: 'Saber Shipping Yard Safe', regionOrUnlock: 'Little Cuba (Vice City)', codeOrCombo: '8046', type: 'Safe Code', note: 'Guardia Brothers yard office.' },
      { target: 'Crab Lab Research Safe', regionOrUnlock: 'Grassrivers Swamp Outpost', codeOrCombo: '0072', type: 'Safe Code', note: 'PC terminal password: CLEAVES.' },
      { target: 'Southern Grassrivers Trailer Safe', regionOrUnlock: 'Southern Grassrivers', codeOrCombo: '44017', type: 'Safe Code', note: '5-digit trailer lockbox.' },
      { target: 'Moonstone Boutique / Acid Lab Door', regionOrUnlock: 'Lab Fees Mission', codeOrCombo: '0420', type: 'Keypad / Door', note: 'Unlocks utility lab door.' },
      { target: "Brian's Lock Up Door", regionOrUnlock: 'Key Lento', codeOrCombo: '7700', type: 'Keypad / Door', note: 'Storage lockup keypad.' },
      { target: '74 Vamos Wishlist Garage', regionOrUnlock: "Randy's Vehicle List", codeOrCombo: '2727', type: 'Keypad / Door', note: 'Opens locked muscle car garage.' },
      { target: 'Key Lento Party House Garage', regionOrUnlock: 'Key Lento', codeOrCombo: '092319', type: 'Keypad / Door', note: '6-digit garage keypad.' },
      { target: 'Mount Kalaga National Park Shed', regionOrUnlock: 'Mount Kalaga', codeOrCombo: '69185', type: 'Keypad / Door', note: '5-digit park stash shed.' },
      { target: 'Pelican Valley Swamp Dock Outpost', regionOrUnlock: 'Pelican Valley', codeOrCombo: '0212', type: 'Keypad / Door', note: 'Swamp dock security door.' },
      { target: 'South Point Airfield Door', regionOrUnlock: 'South Point Airfield', codeOrCombo: '2341', type: 'Keypad / Door', note: 'Hangar utility keypad.' },
      { target: 'Instant $250,000 Cash (Phone Cheat)', regionOrUnlock: 'Beat all 91 Main Story Missions first', codeOrCombo: 'Up, Right, Down, Left, Up, Left, Down, Right', type: 'PS5 / Xbox Cheat', note: 'Phone (D-Pad Up) → Hold L1+R1 / LB+RB → D-Pad. Disables saves/trophies.' },
      { target: 'Raise Wanted Heat Level', regionOrUnlock: 'Evade 3-Star Wanted Level 25 times (Post-Story)', codeOrCombo: 'Left, Down, Right, Down, Up, Down, Up', type: 'PS5 / Xbox Cheat', note: 'Phone (D-Pad Up) → Hold L1+R1 / LB+RB → D-Pad.' },
      { target: 'Drunk Mode Modifier', regionOrUnlock: 'Spend $2,500 on alcohol (Post-Story)', codeOrCombo: 'Up, Left, Right, Up, Up, Left, Right, Up, Left, Right', type: 'PS5 / Xbox Cheat', note: 'Phone (D-Pad Up) → Hold L1+R1 / LB+RB → D-Pad.' },
    ],
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
