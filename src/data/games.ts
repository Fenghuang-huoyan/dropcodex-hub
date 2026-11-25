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
    "slug": "main-sequence",
    "title": "Main Sequence",
    "steamAppId": 2487190,
    "statusBadge": "EA BUILD #26097974 · VERIFIED",
    "releaseLabel": "UE5 Client Extract · Nov 2026",
    "engine": "74 Verified Items & MW Loads",
    "genre": "Factory Automation · Space Sim",
    "officialStoreUrl": "https://store.steampowered.com/app/2487190/Main_Sequence/",
    "priceLabel": "$19.99 · Free Demo on Steam",
    "summary": "100% client-extracted production database (Build #26097974): calculate exact Refinery, Enrichment Chamber & Advanced Assembler ratios, multi-yield batches, and MW/kW reactor loads across all 74 items.",
    "art": {
      "header": "/images/games/main-sequence/header.jpg",
      "hero": "/images/games/main-sequence/hero.jpg",
      "mapBg": "/images/games/main-sequence/map-bg.jpg"
    },
    "affiliateLinks": {
      "steamKeyUrl": ""
    },
    "items": [
      {
        "id": "silica",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_Silica.png",
        "name": "Silica",
        "category": "Raw Mineral",
        "rarity": "Common",
        "baseValue": 8,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Silicate Asteroid"
      },
      {
        "id": "titanium-ore",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_TitaniumOre.png",
        "name": "Titanium Ore",
        "category": "Raw Ore",
        "rarity": "Common",
        "baseValue": 8,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Titanium Asteroid"
      },
      {
        "id": "water-ice",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_WaterIce1.png",
        "name": "Water Ice",
        "category": "Cryo Resource",
        "rarity": "Common",
        "baseValue": 8,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Icy Asteroid Sector"
      },
      {
        "id": "graphite",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_Graphite.png",
        "name": "Graphite",
        "category": "Raw Mineral",
        "rarity": "Common",
        "baseValue": 10,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Carbon Asteroid"
      },
      {
        "id": "nickel-ore",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_NickelOre.png",
        "name": "Nickel Ore",
        "category": "Raw Ore",
        "rarity": "Common",
        "baseValue": 10,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Nickel Asteroid"
      },
      {
        "id": "cobalt-ore",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_CobaltOre.png",
        "name": "Cobalt Ore",
        "category": "Raw Ore",
        "rarity": "Common",
        "baseValue": 12,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Cobalt Asteroid"
      },
      {
        "id": "nitrogen-gas",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_NitrogenGas.png",
        "name": "Nitrogen Gas",
        "category": "Gas Resource",
        "rarity": "Common",
        "baseValue": 12,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "Gas Extractor · Nitrogen Pocket"
      },
      {
        "id": "biomass",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_LeavesIcon.png",
        "name": "Biomass",
        "category": "Bio Feedstock",
        "rarity": "Common",
        "baseValue": 14,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 0,
        "biomeOrSource": "Xeno Harvest / Growth Byproduct"
      },
      {
        "id": "thruster",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_MissileItem.png",
        "name": "Thruster",
        "category": "Ship Module",
        "rarity": "Common",
        "baseValue": 15,
        "outputQty": 1,
        "craftTimeSec": 4.0,
        "powerKw": 0,
        "biomeOrSource": "Shipyard Module Component"
      },
      {
        "id": "iridium-ore",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_IridiumOre.png",
        "name": "Iridium Ore",
        "category": "Raw Ore",
        "rarity": "Common",
        "baseValue": 24,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Iridium Sector"
      },
      {
        "id": "protomatter",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Protomatter.png",
        "name": "Protomatter",
        "category": "Relic Synthesis",
        "rarity": "Common",
        "baseValue": 30,
        "outputQty": 1,
        "craftTimeSec": 0.25,
        "powerKw": 54000,
        "biomeOrSource": "Relic Synthesizer (54 MW)"
      },
      {
        "id": "lonsdaleite",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_Lonsdaleite.png",
        "name": "Lonsdaleite",
        "category": "Rare Crystal",
        "rarity": "Rare",
        "baseValue": 35,
        "outputQty": 1,
        "craftTimeSec": 4.0,
        "powerKw": 0,
        "biomeOrSource": "T1 Miner · Crystal Sector"
      },
      {
        "id": "relic-shard",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_RelicShard.png",
        "name": "Relic Shard",
        "category": "Relic Tech",
        "rarity": "Rare",
        "baseValue": 45,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 0,
        "biomeOrSource": "Anomaly Salvage / Relic Synth"
      },
      {
        "id": "stellar-survey-data",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_StellarSurveyData.png",
        "name": "Stellar Survey Data",
        "category": "Science Data",
        "rarity": "Rare",
        "baseValue": 80,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 12000,
        "biomeOrSource": "Astro Science Lab (12 MW)"
      },
      {
        "id": "relic-core",
        "icon": "🪨",
        "iconUrl": "/images/items/main-sequence/T_RelicCore.png",
        "name": "Relic Core",
        "category": "Relic Tech",
        "rarity": "Epic",
        "baseValue": 120,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 0,
        "biomeOrSource": "Enemy Battleship / Anomaly Drop"
      },
      {
        "id": "exoskeleton-mk-1",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Exoskeleton_1.png",
        "name": "Exoskeleton Mk.1",
        "category": "Personal Gear",
        "rarity": "Legendary",
        "baseValue": 5030,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "servomotor",
            "qty": 30
          },
          {
            "itemId": "capacitor",
            "qty": 20
          }
        ]
      },
      {
        "id": "backpack-mk-2",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Backpack_1.png",
        "name": "Backpack Mk.2",
        "category": "Personal Gear",
        "rarity": "Legendary",
        "baseValue": 5725,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "reinforced-plates",
            "qty": 10
          },
          {
            "itemId": "graphene",
            "qty": 20
          }
        ]
      },
      {
        "id": "exoskeleton-mk-2",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Exoskeleton_1.png",
        "name": "Exoskeleton Mk.2",
        "category": "Personal Gear",
        "rarity": "Legendary",
        "baseValue": 5736,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "maglev-coupling",
            "qty": 20
          },
          {
            "itemId": "coolant",
            "qty": 20
          }
        ]
      },
      {
        "id": "backpack-mk-3",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Backpack_1.png",
        "name": "Backpack Mk.3",
        "category": "Personal Gear",
        "rarity": "Legendary",
        "baseValue": 10272,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "superalloy-frame",
            "qty": 10
          },
          {
            "itemId": "biolattice",
            "qty": 10
          }
        ]
      },
      {
        "id": "exoskeleton-mk-3",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Exoskeleton_1.png",
        "name": "Exoskeleton Mk.3",
        "category": "Personal Gear",
        "rarity": "Legendary",
        "baseValue": 66115,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "chitin-composite",
            "qty": 10
          },
          {
            "itemId": "chromatic-alloy",
            "qty": 10
          }
        ]
      },
      {
        "id": "exosuit",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Exosuit.png",
        "name": "Exosuit",
        "category": "Personal Gear",
        "rarity": "Legendary",
        "baseValue": 1835552,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "advanced-plates",
            "qty": 30
          },
          {
            "itemId": "backpack-mk-3",
            "qty": 2
          },
          {
            "itemId": "exoskeleton-mk-3",
            "qty": 2
          }
        ]
      },
      {
        "id": "silicon-wafers",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_SiliconWafer2.png",
        "name": "Silicon Wafers",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 12,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "silica",
            "qty": 1
          }
        ]
      },
      {
        "id": "titanium-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_TitaniumPlates1.png",
        "name": "Titanium Plates",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 12,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "titanium-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "graphene",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Graphene.png",
        "name": "Graphene",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 14,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "graphite",
            "qty": 1
          }
        ]
      },
      {
        "id": "nickel-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_NickelPlates1.png",
        "name": "Nickel Plates",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 14,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "nickel-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "cobalt-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_CobaltPlates.png",
        "name": "Cobalt Plates",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 16,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "cobalt-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "nutrients",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Nutrients.png",
        "name": "Nutrients",
        "category": "Xeno Biotech",
        "rarity": "Uncommon",
        "baseValue": 16,
        "outputQty": 2,
        "craftTimeSec": 0.5,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "graphite",
            "qty": 1
          },
          {
            "itemId": "silica",
            "qty": 1
          },
          {
            "itemId": "water-ice",
            "qty": 1
          }
        ]
      },
      {
        "id": "xenoarchaea",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Xenoarchaea.png",
        "name": "Xenoarchaea",
        "category": "Xeno Biotech",
        "rarity": "Uncommon",
        "baseValue": 18,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "biomass",
            "qty": 1
          }
        ]
      },
      {
        "id": "xenobacteria",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Xenobacteria.png",
        "name": "Xenobacteria",
        "category": "Xeno Biotech",
        "rarity": "Uncommon",
        "baseValue": 18,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "biomass",
            "qty": 1
          }
        ]
      },
      {
        "id": "xenoeukarya",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Xenoeukarya.png",
        "name": "Xenoeukarya",
        "category": "Xeno Biotech",
        "rarity": "Uncommon",
        "baseValue": 18,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "biomass",
            "qty": 1
          }
        ]
      },
      {
        "id": "enriched-titanium-ore",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_EnrichedTitanium.png",
        "name": "Enriched Titanium Ore",
        "category": "Enriched / Alloy",
        "rarity": "Uncommon",
        "baseValue": 19,
        "outputQty": 2,
        "craftTimeSec": 1.5,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "titanium-ore",
            "qty": 3
          }
        ]
      },
      {
        "id": "reinforced-glass",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_ReinforcedGlass1.png",
        "name": "Reinforced Glass",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 21,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "silica",
            "qty": 2
          }
        ]
      },
      {
        "id": "enriched-nickel-ore",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_EnrichedNickel.png",
        "name": "Enriched Nickel Ore",
        "category": "Enriched / Alloy",
        "rarity": "Uncommon",
        "baseValue": 22,
        "outputQty": 2,
        "craftTimeSec": 1.5,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "nickel-ore",
            "qty": 3
          }
        ]
      },
      {
        "id": "hydrogen-fuel",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_HydrogenFuel.png",
        "name": "Hydrogen Fuel",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 23,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "water-ice",
            "qty": 2
          }
        ]
      },
      {
        "id": "enriched-cobalt-ore",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_EnrichedCobalt.png",
        "name": "Enriched Cobalt Ore",
        "category": "Enriched / Alloy",
        "rarity": "Uncommon",
        "baseValue": 25,
        "outputQty": 2,
        "craftTimeSec": 1.5,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "cobalt-ore",
            "qty": 3
          }
        ]
      },
      {
        "id": "coolant",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Coolant.png",
        "name": "Coolant",
        "category": "Enriched / Alloy",
        "rarity": "Uncommon",
        "baseValue": 31,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "nitrogen-gas",
            "qty": 2
          }
        ]
      },
      {
        "id": "iridium-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_IridiumPlates2.png",
        "name": "Iridium Plates",
        "category": "Refined Material",
        "rarity": "Uncommon",
        "baseValue": 66,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "iridium-ore",
            "qty": 2
          },
          {
            "itemId": "titanium-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "basic-motor",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_BasicMotor.png",
        "name": "Basic Motor",
        "category": "Assembled Part",
        "rarity": "Rare",
        "baseValue": 9,
        "outputQty": 2,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "titanium-plates",
            "qty": 1
          }
        ]
      },
      {
        "id": "enriched-titanium-plates-route",
        "icon": "⚡",
        "iconUrl": "/images/items/main-sequence/T_TitaniumPlates1.png",
        "name": "Titanium Plates (Enriched 3x Yield)",
        "category": "High-Yield Route",
        "rarity": "Rare",
        "baseValue": 12,
        "outputQty": 3,
        "craftTimeSec": 3.0,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "enriched-titanium-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "enriched-nickel-plates-route",
        "icon": "⚡",
        "iconUrl": "/images/items/main-sequence/T_NickelPlates1.png",
        "name": "Nickel Plates (Enriched 3x Yield)",
        "category": "High-Yield Route",
        "rarity": "Rare",
        "baseValue": 13,
        "outputQty": 3,
        "craftTimeSec": 3.0,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "enriched-nickel-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "enriched-cobalt-plates-route",
        "icon": "⚡",
        "iconUrl": "/images/items/main-sequence/T_CobaltPlates.png",
        "name": "Cobalt Plates (Enriched 3x Yield)",
        "category": "High-Yield Route",
        "rarity": "Rare",
        "baseValue": 14,
        "outputQty": 3,
        "craftTimeSec": 3.0,
        "powerKw": 4500,
        "biomeOrSource": "Refinery (4.5 MW)",
        "recipe": [
          {
            "itemId": "enriched-cobalt-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "lightweight-frame",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_LightweightFrame1.png",
        "name": "Lightweight Frame",
        "category": "Assembled Part",
        "rarity": "Rare",
        "baseValue": 16,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "titanium-plates",
            "qty": 1
          }
        ]
      },
      {
        "id": "magnetic-coils",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_MagneticCoil1.png",
        "name": "Magnetic Coils",
        "category": "Assembled Part",
        "rarity": "Rare",
        "baseValue": 18,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "nickel-plates",
            "qty": 1
          }
        ]
      },
      {
        "id": "enriched-fuel",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_DeuteriumFuel1.png",
        "name": "Enriched Fuel",
        "category": "Enriched / Alloy",
        "rarity": "Rare",
        "baseValue": 31,
        "outputQty": 1,
        "craftTimeSec": 1.5,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "hydrogen-fuel",
            "qty": 1
          }
        ]
      },
      {
        "id": "hull-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_HullPlate.png",
        "name": "Hull Plates",
        "category": "Assembled Part",
        "rarity": "Rare",
        "baseValue": 31,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "titanium-plates",
            "qty": 2
          }
        ]
      },
      {
        "id": "capacitor",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Capacitor1.png",
        "name": "Capacitor",
        "category": "Assembled Part",
        "rarity": "Rare",
        "baseValue": 49,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "nickel-plates",
            "qty": 2
          },
          {
            "itemId": "titanium-plates",
            "qty": 1
          }
        ]
      },
      {
        "id": "enzyme",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Enzyme.png",
        "name": "Enzyme",
        "category": "Xeno Biotech",
        "rarity": "Rare",
        "baseValue": 58,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "xenobacteria",
            "qty": 1
          },
          {
            "itemId": "nutrients",
            "qty": 2
          }
        ]
      },
      {
        "id": "superalloy",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Superalloy.png",
        "name": "Superalloy",
        "category": "Enriched / Alloy",
        "rarity": "Rare",
        "baseValue": 80,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "enriched-titanium-ore",
            "qty": 1
          },
          {
            "itemId": "enriched-nickel-ore",
            "qty": 1
          },
          {
            "itemId": "enriched-cobalt-ore",
            "qty": 1
          }
        ]
      },
      {
        "id": "repair-kit",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_RepairKit.png",
        "name": "Repair Kit",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 36,
        "outputQty": 1,
        "craftTimeSec": 0.75,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "lightweight-frame",
            "qty": 1
          },
          {
            "itemId": "nickel-plates",
            "qty": 1
          }
        ]
      },
      {
        "id": "basic-circuit",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_BasicCircuit.png",
        "name": "Basic Circuit",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 73,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "silicon-wafers",
            "qty": 2
          },
          {
            "itemId": "magnetic-coils",
            "qty": 2
          }
        ]
      },
      {
        "id": "relic-capacitor",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_RelicCapacitor.png",
        "name": "Relic Capacitor",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 109,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "capacitor",
            "qty": 1
          },
          {
            "itemId": "relic-shard",
            "qty": 1
          }
        ]
      },
      {
        "id": "servomotor",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Servomotor.png",
        "name": "Servomotor",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 117,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "lightweight-frame",
            "qty": 1
          },
          {
            "itemId": "basic-motor",
            "qty": 4
          },
          {
            "itemId": "capacitor",
            "qty": 1
          }
        ]
      },
      {
        "id": "alpha-protein",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_AlphaProtein.png",
        "name": "Alpha Protein",
        "category": "Xeno Biotech",
        "rarity": "Epic",
        "baseValue": 125,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "xenoeukarya",
            "qty": 1
          },
          {
            "itemId": "enzyme",
            "qty": 1
          },
          {
            "itemId": "nutrients",
            "qty": 2
          }
        ]
      },
      {
        "id": "beta-protein",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_BetaProtein.png",
        "name": "Beta Protein",
        "category": "Xeno Biotech",
        "rarity": "Epic",
        "baseValue": 125,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "xenoarchaea",
            "qty": 1
          },
          {
            "itemId": "enzyme",
            "qty": 1
          },
          {
            "itemId": "nutrients",
            "qty": 2
          }
        ]
      },
      {
        "id": "repair-kit-hull",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_RepairKit.png",
        "name": "Hull Repair Kit",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 265,
        "outputQty": 1,
        "craftTimeSec": 0.75,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "hull-plates",
            "qty": 5
          },
          {
            "itemId": "lightweight-frame",
            "qty": 5
          }
        ]
      },
      {
        "id": "superalloy-frame",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_SuperalloyFrame.png",
        "name": "Superalloy Frame",
        "category": "Endgame Module",
        "rarity": "Epic",
        "baseValue": 281,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "superalloy",
            "qty": 3
          }
        ]
      },
      {
        "id": "reinforced-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_ReinforcedPlate.png",
        "name": "Reinforced Plates",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 483,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "hull-plates",
            "qty": 6
          },
          {
            "itemId": "superalloy",
            "qty": 3
          }
        ]
      },
      {
        "id": "backpack-mk-1",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Backpack_1.png",
        "name": "Backpack Mk.1",
        "category": "Personal Gear",
        "rarity": "Epic",
        "baseValue": 528,
        "outputQty": 1,
        "craftTimeSec": 1.0,
        "powerKw": 0,
        "biomeOrSource": "Armoury (0 MW)",
        "recipe": [
          {
            "itemId": "hull-plates",
            "qty": 10
          },
          {
            "itemId": "lightweight-frame",
            "qty": 10
          }
        ]
      },
      {
        "id": "chromatic-alloy",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_ChromaticAlloy.png",
        "name": "Chromatic Alloy",
        "category": "Enriched / Alloy",
        "rarity": "Epic",
        "baseValue": 720,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "iridium-plates",
            "qty": 6
          },
          {
            "itemId": "superalloy",
            "qty": 3
          }
        ]
      },
      {
        "id": "repair-kit-electric",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_RepairKit.png",
        "name": "Electrical Repair Kit",
        "category": "Assembled Part",
        "rarity": "Epic",
        "baseValue": 753,
        "outputQty": 1,
        "craftTimeSec": 0.75,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "magnetic-coils",
            "qty": 10
          },
          {
            "itemId": "capacitor",
            "qty": 10
          }
        ]
      },
      {
        "id": "detector-array",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_DetectorArray.png",
        "name": "Detector Array",
        "category": "Assembled Part",
        "rarity": "Legendary",
        "baseValue": 154,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "graphene",
            "qty": 2
          },
          {
            "itemId": "cobalt-plates",
            "qty": 2
          },
          {
            "itemId": "basic-circuit",
            "qty": 1
          }
        ]
      },
      {
        "id": "containment-coil",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_ContainmentCoil1.png",
        "name": "Containment Coil",
        "category": "Assembled Part",
        "rarity": "Legendary",
        "baseValue": 203,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "magnetic-coils",
            "qty": 3
          },
          {
            "itemId": "capacitor",
            "qty": 1
          },
          {
            "itemId": "basic-circuit",
            "qty": 1
          }
        ]
      },
      {
        "id": "maglev-coupling",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_MaglevCoupling.png",
        "name": "Maglev Coupling",
        "category": "Assembled Part",
        "rarity": "Legendary",
        "baseValue": 225,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "servomotor",
            "qty": 1
          },
          {
            "itemId": "superalloy",
            "qty": 1
          }
        ]
      },
      {
        "id": "biolattice",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Biolattice.png",
        "name": "Biolattice",
        "category": "Xeno Biotech",
        "rarity": "Legendary",
        "baseValue": 636,
        "outputQty": 1,
        "craftTimeSec": 2.0,
        "powerKw": 6000,
        "biomeOrSource": "Growth Chamber (6 MW)",
        "recipe": [
          {
            "itemId": "alpha-protein",
            "qty": 2
          },
          {
            "itemId": "beta-protein",
            "qty": 2
          },
          {
            "itemId": "nutrients",
            "qty": 4
          }
        ]
      },
      {
        "id": "missile",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_MissileItem.png",
        "name": "Missile",
        "category": "Assembled Part",
        "rarity": "Legendary",
        "baseValue": 406,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "hull-plates",
            "qty": 1
          },
          {
            "itemId": "containment-coil",
            "qty": 1
          },
          {
            "itemId": "coolant",
            "qty": 4
          }
        ]
      },
      {
        "id": "servo-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_ServoPlate.png",
        "name": "Servo Plates",
        "category": "Endgame Module",
        "rarity": "Legendary",
        "baseValue": 1593,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "reinforced-plates",
            "qty": 2
          },
          {
            "itemId": "maglev-coupling",
            "qty": 2
          }
        ]
      },
      {
        "id": "chitin-composite",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_ChitinComposite.png",
        "name": "Chitin Composite",
        "category": "Endgame Module",
        "rarity": "Legendary",
        "baseValue": 5183,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "biolattice",
            "qty": 6
          },
          {
            "itemId": "graphene",
            "qty": 3
          },
          {
            "itemId": "reinforced-glass",
            "qty": 3
          },
          {
            "itemId": "enzyme",
            "qty": 12
          }
        ]
      },
      {
        "id": "advanced-plates",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_AdvancedPlate.png",
        "name": "Advanced Plates",
        "category": "Endgame Module",
        "rarity": "Legendary",
        "baseValue": 49537,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "chromatic-alloy",
            "qty": 6
          },
          {
            "itemId": "chitin-composite",
            "qty": 6
          },
          {
            "itemId": "reinforced-plates",
            "qty": 2
          },
          {
            "itemId": "multisensor",
            "qty": 1
          }
        ]
      },
      {
        "id": "warp-fuel",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_WarpFuel1.png",
        "name": "Warp Fuel",
        "category": "Enriched / Alloy",
        "rarity": "Legendary",
        "baseValue": 309,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 18000,
        "biomeOrSource": "Enrichment Chamber (18 MW)",
        "recipe": [
          {
            "itemId": "enriched-fuel",
            "qty": 2
          },
          {
            "itemId": "containment-coil",
            "qty": 1
          }
        ]
      },
      {
        "id": "advanced-circuits",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_AdvancedCircuit.png",
        "name": "Advanced Circuits",
        "category": "Endgame Module",
        "rarity": "Legendary",
        "baseValue": 1073,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "detector-array",
            "qty": 3
          },
          {
            "itemId": "basic-circuit",
            "qty": 3
          },
          {
            "itemId": "superalloy",
            "qty": 1
          },
          {
            "itemId": "coolant",
            "qty": 6
          }
        ]
      },
      {
        "id": "superconductor-coil",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_SuperconductorCoil1.png",
        "name": "Superconductor Coil",
        "category": "Assembled Part",
        "rarity": "Legendary",
        "baseValue": 1865,
        "outputQty": 1,
        "craftTimeSec": 6.0,
        "powerKw": 6000,
        "biomeOrSource": "Assembler (6 MW)",
        "recipe": [
          {
            "itemId": "maglev-coupling",
            "qty": 3
          },
          {
            "itemId": "containment-coil",
            "qty": 3
          },
          {
            "itemId": "coolant",
            "qty": 12
          }
        ]
      },
      {
        "id": "empty-simulation-matrix",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_EmptySimulationMatrix.png",
        "name": "Empty Simulation Matrix",
        "category": "Endgame Module",
        "rarity": "Legendary",
        "baseValue": 2450,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "advanced-circuits",
            "qty": 2
          },
          {
            "itemId": "lonsdaleite",
            "qty": 1
          }
        ]
      },
      {
        "id": "encoded-simulation-matrix",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_EncodedSimulationMatrix.png",
        "name": "Encoded Simulation Matrix",
        "category": "Simulation Tech",
        "rarity": "Legendary",
        "baseValue": 2859,
        "outputQty": 1,
        "craftTimeSec": 15.0,
        "powerKw": 18000,
        "biomeOrSource": "Supercomputer (18 MW)",
        "recipe": [
          {
            "itemId": "empty-simulation-matrix",
            "qty": 1
          },
          {
            "itemId": "stellar-survey-data",
            "qty": 1
          }
        ]
      },
      {
        "id": "multisensor",
        "icon": "⚙️",
        "iconUrl": "/images/items/main-sequence/T_Multisensor.png",
        "name": "Multisensor",
        "category": "Endgame Module",
        "rarity": "Legendary",
        "baseValue": 7835,
        "outputQty": 1,
        "craftTimeSec": 3.0,
        "powerKw": 18000,
        "biomeOrSource": "Advanced Assembler (18 MW)",
        "recipe": [
          {
            "itemId": "chromatic-alloy",
            "qty": 3
          },
          {
            "itemId": "lonsdaleite",
            "qty": 3
          },
          {
            "itemId": "encoded-simulation-matrix",
            "qty": 1
          },
          {
            "itemId": "superconductor-coil",
            "qty": 1
          }
        ]
      }
    ],
    "mapPins": [
      {
        "id": "ms-sec-1",
        "title": "Starter Sector (Orbital Shipyard & T0 Core)",
        "category": "Extraction",
        "xPercent": 50,
        "yPercent": 50,
        "note": "Initial station core, T1 Miner deployment & starter Titanium/Nickel/Silica asteroids."
      },
      {
        "id": "ms-sec-2",
        "title": "Rich Asteroid Field Sector (Cobalt & Titanium)",
        "category": "Resource",
        "xPercent": 28,
        "yPercent": 34,
        "note": "High-density GEN_RichAsteroid veins for Cobalt, Nickel & Titanium throughput."
      },
      {
        "id": "ms-sec-3",
        "title": "Icy Asteroid Sector (Water Ice & Nitrogen Gas)",
        "category": "Resource",
        "xPercent": 72,
        "yPercent": 30,
        "note": "Cryo asteroid cluster feeding Hydrogen Fuel, Coolant & Growth Chamber Nutrients."
      },
      {
        "id": "ms-sec-4",
        "title": "Carbon & Silicate Belt (Graphite & Silica)",
        "category": "Resource",
        "xPercent": 32,
        "yPercent": 68,
        "note": "Primary feedstock for Graphene, Reinforced Glass & Silicon Wafers."
      },
      {
        "id": "ms-sec-5",
        "title": "Iridium Asteroid Field Sector",
        "category": "Resource",
        "xPercent": 78,
        "yPercent": 64,
        "note": "Mid-to-late game Iridium Ore veins required for Iridium Plates & Chromatic Alloy."
      },
      {
        "id": "ms-sec-6",
        "title": "Crystal Sector (Lonsdaleite Veins)",
        "category": "Resource",
        "xPercent": 84,
        "yPercent": 46,
        "note": "Rare crystalline sector yielding Lonsdaleite for Empty Simulation Matrices & Multisensors."
      },
      {
        "id": "ms-sec-7",
        "title": "Anomaly Sector (Xeno Cultures & Relic Shards)",
        "category": "Shrine / Upgrade",
        "xPercent": 18,
        "yPercent": 52,
        "note": "Source of Xenobacteria, Xenoarchaea, Xenoeukarya & Relic Shards for Biotech/Relic labs."
      },
      {
        "id": "ms-sec-8",
        "title": "Ally Station Sector (Trade Console Hub)",
        "category": "Extraction",
        "xPercent": 56,
        "yPercent": 24,
        "note": "Friendly orbital outpost & Trade Console logistics anchor."
      },
      {
        "id": "ms-sec-9",
        "title": "Pulsar & Black Hole Stellar Survey Node",
        "category": "Shrine / Upgrade",
        "xPercent": 44,
        "yPercent": 80,
        "note": "High-energy stellar phenomena for Astro Science Lab & Stellar Survey Data."
      },
      {
        "id": "ms-sec-10",
        "title": "Enemy Battleship Sector (Relic Core Salvage)",
        "category": "Boss",
        "xPercent": 16,
        "yPercent": 24,
        "note": "Heavily defended Relic fleet sector dropping high-tier Relic Cores."
      }
    ],
    "tradeValues": [
      {
        "name": "Exosuit (Full Mk.3 Assembly)",
        "icon": "🦾",
        "score": 1835552,
        "demand": 10,
        "rarity": "Legendary",
        "trend": "Rising"
      },
      {
        "name": "Multisensor (Endgame Array)",
        "icon": "📡",
        "score": 7835,
        "demand": 10,
        "rarity": "Legendary",
        "trend": "Rising"
      },
      {
        "name": "Encoded Simulation Matrix",
        "icon": "🧠",
        "score": 2859,
        "demand": 9,
        "rarity": "Legendary",
        "trend": "Stable"
      },
      {
        "name": "Advanced Plates",
        "icon": "🛡️",
        "score": 49537,
        "demand": 9,
        "rarity": "Legendary",
        "trend": "Rising"
      },
      {
        "name": "Superconductor Coil",
        "icon": "⚡",
        "score": 1865,
        "demand": 8,
        "rarity": "Epic",
        "trend": "Stable"
      },
      {
        "name": "Warp Fuel",
        "icon": "🚀",
        "score": 309,
        "demand": 9,
        "rarity": "Epic",
        "trend": "Rising"
      }
    ]
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
