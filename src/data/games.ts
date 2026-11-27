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
    slug: 'we-march-as-one',
    title: 'We March as One',
    steamAppId: 5189160,
    statusBadge: 'BUILD #26192930 · VERIFIED',
    releaseLabel: 'Unity Client Extract · Nov 2026',
    engine: '8 Units · 62 Skill Nodes · 25 Waves',
    genre: 'Incremental Auto Battler · RTS',
    officialStoreUrl: 'https://store.steampowered.com/app/5189160/We_March_as_One/',
    priceLabel: '$7.99 · Free Demo on Steam',
    summary:
      '100% client-extracted unit database (Build #26192930): compute exact Gold recruitment costs, hard-counter DPS multipliers (Square 1.5x vs Diamond, Triangle 1.75x vs Square, Chevron 1.5x vs Big), 62 skill tree unlocks, and 0.4x defeat kill bounties.',
    art: {
      header: '/images/games/we-march-as-one/header.jpg',
      hero: '/images/games/we-march-as-one/hero.jpg',
      mapBg: '/images/games/we-march-as-one/map-bg.jpg',
    },
    affiliateLinks: { steamKeyUrl: '' },
    items: [
      {
        id: 'campaign-gold',
        icon: '🪙',
        name: 'Campaign Bounty Gold (1g)',
        category: 'Economy Currency',
        rarity: 'Common',
        baseValue: 1,
        outputQty: 1,
        craftTimeSec: 1.0,
        powerKw: 0,
        biomeOrSource: '0.4x Uncleared Enemy Kill Value + Stage Clear',
      },
      {
        id: 'unit-circle',
        icon: '⚪',
        iconUrl: '/images/items/we-march-as-one/shape-circle.png',
        name: 'Circle (Cheap Infantry · 10 HP / 5.71 DPS)',
        category: 'Basic Infantry',
        rarity: 'Common',
        baseValue: 2,
        outputQty: 1,
        craftTimeSec: 0.7,
        powerKw: 0,
        biomeOrSource: 'Starter Roster (Base Cap 100 · Crownable as 10x King)',
        recipe: [{ itemId: 'campaign-gold', qty: 1 }],
      },
      {
        id: 'unit-square',
        icon: '🟦',
        iconUrl: '/images/items/we-march-as-one/shape-square.png',
        name: 'Square (Anti-Cav Pike · 28 HP / 1.5x vs Diamond)',
        category: 'Defensive Infantry',
        rarity: 'Uncommon',
        baseValue: 5,
        outputQty: 1,
        craftTimeSec: 0.9,
        powerKw: 0,
        biomeOrSource: 'Skill Tree 5g · -65% Cavalry & -30% Arrow Dmg Taken',
        recipe: [{ itemId: 'campaign-gold', qty: 3 }],
      },
      {
        id: 'unit-triangle',
        icon: '🔺',
        iconUrl: '/images/items/we-march-as-one/shape-triangle.png',
        name: 'Triangle (Ranged Archer · Rng 16.5 / 1.75x vs Square)',
        category: 'Ranged Infantry',
        rarity: 'Uncommon',
        baseValue: 5,
        outputQty: 1,
        craftTimeSec: 2.47,
        powerKw: 0,
        biomeOrSource: 'Skill Tree 5g · Base Cap 50 · Piercing & Fire Upgrades',
        recipe: [{ itemId: 'campaign-gold', qty: 3 }],
      },
      {
        id: 'unit-diamond',
        icon: '🔷',
        iconUrl: '/images/items/we-march-as-one/shape-diamond.png',
        name: 'Diamond (Light Lancer · 40 HP / Spd 5 / 1.5x vs Triangle)',
        category: 'Light Cavalry',
        rarity: 'Rare',
        baseValue: 9,
        outputQty: 1,
        craftTimeSec: 1.15,
        powerKw: 0,
        biomeOrSource: 'Skill Tree 5g · -45% Arrow Dmg Taken · Blooded 2x Spd',
        recipe: [{ itemId: 'campaign-gold', qty: 5 }],
      },
      {
        id: 'unit-pentagon',
        icon: '⬠',
        iconUrl: '/images/items/we-march-as-one/shape-pentagon.png',
        name: 'Pentagon (Heavy Artillery · Rng 40 / StructDmg 3.0)',
        category: 'Heavy Artillery',
        rarity: 'Epic',
        baseValue: 420,
        outputQty: 1,
        craftTimeSec: 6.3,
        powerKw: 0,
        biomeOrSource: 'Triangle Cap II → 350g Unlock · Base Cap 2',
        recipe: [{ itemId: 'campaign-gold', qty: 300 }],
      },
      {
        id: 'unit-hexagon',
        icon: '⬢',
        iconUrl: '/images/items/we-march-as-one/shape-hexagon.png',
        name: 'Hexagon (Heavy Bulwark · 1,800 HP / -70% Arrow & Cav)',
        category: 'Heavy Infantry',
        rarity: 'Epic',
        baseValue: 480,
        outputQty: 1,
        craftTimeSec: 1.2,
        powerKw: 0,
        biomeOrSource: 'Square Cap II → 350g Unlock · AoE Slam + Bastion -25% Aura',
        recipe: [{ itemId: 'campaign-gold', qty: 300 }],
      },
      {
        id: 'unit-kite',
        icon: '🪁',
        iconUrl: '/images/items/we-march-as-one/shape-kite.png',
        name: 'Kite (Heavy Cavalry · 800 HP / 50.0 Base DPS)',
        category: 'Heavy Cavalry',
        rarity: 'Epic',
        baseValue: 510,
        outputQty: 1,
        craftTimeSec: 0.6,
        powerKw: 0,
        biomeOrSource: 'Diamond Cap II → 350g Unlock · Fresh Mounts +70% Atk Spd',
        recipe: [{ itemId: 'campaign-gold', qty: 300 }],
      },
      {
        id: 'unit-chevron',
        icon: '🏹',
        iconUrl: '/images/items/we-march-as-one/shape-chevron.png',
        name: 'Chevron (Elite Bolt Thrower · 400 Dmg / 1.5x vs Big)',
        category: 'Elite Siege',
        rarity: 'Legendary',
        baseValue: 1650,
        outputQty: 1,
        craftTimeSec: 2.1,
        powerKw: 0,
        biomeOrSource: 'Pentagon Cap II → 3,000g Unlock · Rng 33 Piercing Bolts',
        recipe: [{ itemId: 'campaign-gold', qty: 1000 }],
      },
    ],
    mapPins: [
      { id: 'wmao-pin-1', title: 'Level 5 Archer Ridge (508g Enemy Value)', category: 'Resource', xPercent: 24, yPercent: 62, note: '120 Circles, 40 Squares, 104 Triangles — flank archers with 5g Diamonds (185g clear).' },
      { id: 'wmao-pin-2', title: 'Level 10 First City Fortress (1,725g Value)', category: 'Boss', xPercent: 42, yPercent: 48, note: '528 Squares + first 2 enemy Pentagons (40 range). Sacked achievement milestone (600g clear).' },
      { id: 'wmao-pin-3', title: 'Level 15 Cavalry Stampede (1,584 Diamonds + 3 Kites)', category: 'Extraction', xPercent: 58, yPercent: 34, note: 'Pure mounted rush (4,620g value). Brace choke with Squares (-65% cav dmg) + Shield Wall.' },
      { id: 'wmao-pin-4', title: 'Level 16 Hexagon Tank Debut (1,800 HP)', category: 'Shrine / Upgrade', xPercent: 64, yPercent: 66, note: 'First enemy Hexagon (-70% arrow/cav armor) backed by 900 Triangles (1,470g clear).' },
      { id: 'wmao-pin-5', title: 'Level 20 Second City Siege (11,613g Value)', category: 'Boss', xPercent: 76, yPercent: 44, note: '6,080 enemy troops + 8 Pentagons + 2 Hexagons + 2 Kites (2,250g base clear).' },
      { id: 'wmao-pin-6', title: 'Level 25 Final Citadel & Enemy General (24,012g Value)', category: 'Boss', xPercent: 86, yPercent: 26, note: '7,157 troops incl. 23 Hexagons, 24 Kites, 1 Chevron & Full Enemy General. Bring Chevrons (1.8x effective vs Hexagon).' },
    ],
    tradeValues: [
      { name: 'Chevron (400 Dmg · 1.8x vs Hexagon)', icon: '🏹', score: 1650, demand: 10, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Hexagon (1,800 HP · Bastion -25% Aura)', icon: '⬢', score: 920, demand: 9, rarity: 'Epic', trend: 'Rising' },
      { name: 'Kite (50–85 DPS Heavy Cavalry)', icon: '🪁', score: 860, demand: 9, rarity: 'Epic', trend: 'Stable' },
      { name: 'The King Crown Upgrade (160g · 10x + 30% Aura)', icon: '👑', score: 780, demand: 10, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Square (3g · 1.5x vs Cav & -65% Cav Armor)', icon: '🟦', score: 420, demand: 8, rarity: 'Uncommon', trend: 'Stable' },
      { name: 'Triangle (3g · 16.5 Rng · 1.75x vs Square)', icon: '🔺', score: 410, demand: 8, rarity: 'Uncommon', trend: 'Stable' },
    ],
  },
  {
    slug: 'below-the-stone',
    title: 'Below the Stone',
    steamAppId: 1170230,
    statusBadge: '1.0 FULL LAUNCH · 9 BIOMES',
    releaseLabel: '1.0 Kingdom & Layer 3 · Nov 2026',
    engine: '24 Verified Ores, Ingots & 1.0 Gear Chains',
    genre: 'Extraction Mining · Roguelike',
    officialStoreUrl: 'https://store.steampowered.com/app/1170230/Below_the_Stone/',
    priceLabel: '$11.99 USD on Steam',
    summary:
      'Verified 1.0 extraction progression planner across Layers 1–3 and 9 cave biomes: calculate Coal-fueled Furnace ingot batches, pickaxe mining gates, Elf Alchemist potions, and Arcanium Magic Crafter loadouts.',
    art: {
      header: '/images/games/below-the-stone/header.jpg',
      hero: '/images/games/below-the-stone/hero.jpg',
      mapBg: '/images/games/below-the-stone/map-bg.jpg',
    },
    affiliateLinks: { steamKeyUrl: '' },
    items: [
      {
        id: 'bts-coal',
        icon: '🪨',
        name: 'Coal Seam Fuel (Spawns Below -150m)',
        category: 'Smelting Fuel',
        rarity: 'Common',
        baseValue: 6,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Caverns · Mandatory Smelting Fuel',
      },
      {
        id: 'bts-wood',
        icon: '🪵',
        name: 'Cavern Crate Timber',
        category: 'Raw Material',
        rarity: 'Common',
        baseValue: 4,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Old Halls Crates & Underground Roots',
      },
      {
        id: 'bts-blood-moss',
        icon: '🌿',
        name: 'Blood Moss & Cave Fiber',
        category: 'Alchemy Herb',
        rarity: 'Common',
        baseValue: 10,
        craftTimeSec: 2.5,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Damp Walls & Fungal Forest',
      },
      {
        id: 'bts-empty-flask',
        icon: '🧪',
        name: 'Empty Glass Flask',
        category: 'Alchemy Vessel',
        rarity: 'Uncommon',
        baseValue: 28,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Wandering Goblin Merchant & Dungeon Chests',
      },
      {
        id: 'bts-tin-ore',
        icon: '⚪',
        name: 'Tin Ore (Mined w/ Rusty Pickaxe)',
        category: 'Layer 1 Ore',
        rarity: 'Common',
        baseValue: 10,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Shallow Caverns',
      },
      {
        id: 'bts-copper-ore',
        icon: '🟫',
        name: 'Copper Ore (Requires Tin Pickaxe)',
        category: 'Layer 1 Ore',
        rarity: 'Common',
        baseValue: 14,
        craftTimeSec: 3.5,
        powerKw: 0,
        biomeOrSource: 'Layer 1 Mid-Depth Veins',
      },
      {
        id: 'bts-iron-ore',
        icon: '⛏️',
        name: 'Iron Ore (Requires Copper Pickaxe)',
        category: 'Layer 1–2 Ore',
        rarity: 'Uncommon',
        baseValue: 24,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Deep Layer 1 & Fungal Biomes',
      },
      {
        id: 'bts-amethyst',
        icon: '🔮',
        name: 'Amethyst Geode Shard (Blast Only)',
        category: 'Crystal Gem',
        rarity: 'Rare',
        baseValue: 55,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Crystal Geode Biome · Requires Dynamite',
      },
      {
        id: 'bts-silver-ore',
        icon: '🥈',
        name: 'Silver Ore',
        category: 'Layer 2 Ore',
        rarity: 'Uncommon',
        baseValue: 38,
        craftTimeSec: 4.5,
        powerKw: 0,
        biomeOrSource: 'Layer 2 Cavern Ridges',
      },
      {
        id: 'bts-tungsten-ore',
        icon: '🔩',
        name: 'Tungsten Ore',
        category: 'Layer 2 Ore',
        rarity: 'Rare',
        baseValue: 58,
        craftTimeSec: 5.5,
        powerKw: 0,
        biomeOrSource: 'Layer 2 Hardened Rock Seams',
      },
      {
        id: 'bts-platinum-ore',
        icon: '💿',
        name: 'Platinum Ore',
        category: 'Layer 2–3 Ore',
        rarity: 'Rare',
        baseValue: 76,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Deep Layer 2 & Honey/Crystal Vaults',
      },
      {
        id: 'bts-titanium-ore',
        icon: '🛡️',
        name: 'Titanium Ore',
        category: 'Layer 3 Ore',
        rarity: 'Epic',
        baseValue: 105,
        craftTimeSec: 7,
        powerKw: 0,
        biomeOrSource: 'Layer 3 Abyssal Seams',
      },
      {
        id: 'bts-arcanium-ore',
        icon: '✨',
        name: 'Arcanium Magical Ore (1.0 Exclusive)',
        category: 'Layer 3 Ore',
        rarity: 'Legendary',
        baseValue: 145,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Layer 2–3 Magical Rifts (1.0 Update)',
      },
      {
        id: 'bts-bandage',
        icon: '🩹',
        name: 'Field Staunching Bandage (Stops Bleed)',
        category: 'Survival Aid',
        rarity: 'Common',
        baseValue: 26,
        outputQty: 1,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Field Craft / Kingdom Apothecary',
        recipe: [{ itemId: 'bts-blood-moss', qty: 2 }],
      },
      {
        id: 'bts-healing-potion',
        icon: '❤️',
        name: 'Elf Alchemist Healing Potion',
        category: 'Survival Aid',
        rarity: 'Rare',
        baseValue: 75,
        outputQty: 1,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Kingdom Elf Alchemist Counter',
        recipe: [
          { itemId: 'bts-empty-flask', qty: 1 },
          { itemId: 'bts-blood-moss', qty: 3 },
        ],
      },
      {
        id: 'bts-dynamite',
        icon: '🧨',
        name: 'Mining Dynamite Charge (Cracks Amethyst)',
        category: 'Survival Aid',
        rarity: 'Uncommon',
        baseValue: 42,
        outputQty: 1,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Craftmaster / Goblin Shop',
        recipe: [
          { itemId: 'bts-coal', qty: 3 },
          { itemId: 'bts-wood', qty: 1 },
        ],
      },
      {
        id: 'bts-tin-ingot',
        icon: '⬜',
        name: 'Smelted Tin Ingot',
        category: 'Smelted Ingot',
        rarity: 'Common',
        baseValue: 24,
        outputQty: 1,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Kingdom Furnace (1 Coal per Smelt)',
        recipe: [
          { itemId: 'bts-tin-ore', qty: 2 },
          { itemId: 'bts-coal', qty: 1 },
        ],
      },
      {
        id: 'bts-copper-ingot',
        icon: '🟧',
        name: 'Smelted Copper Ingot',
        category: 'Smelted Ingot',
        rarity: 'Common',
        baseValue: 34,
        outputQty: 1,
        craftTimeSec: 4.5,
        powerKw: 0,
        biomeOrSource: 'Kingdom Furnace',
        recipe: [
          { itemId: 'bts-copper-ore', qty: 2 },
          { itemId: 'bts-coal', qty: 1 },
        ],
      },
      {
        id: 'bts-iron-ingot',
        icon: '⬛',
        name: 'Smelted Iron Ingot',
        category: 'Smelted Ingot',
        rarity: 'Uncommon',
        baseValue: 56,
        outputQty: 1,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Kingdom Furnace',
        recipe: [
          { itemId: 'bts-iron-ore', qty: 2 },
          { itemId: 'bts-coal', qty: 1 },
        ],
      },
      {
        id: 'bts-platinum-ingot',
        icon: '🔷',
        name: 'Refined Platinum Ingot',
        category: 'Smelted Ingot',
        rarity: 'Rare',
        baseValue: 168,
        outputQty: 1,
        craftTimeSec: 7,
        powerKw: 0,
        biomeOrSource: 'Upgraded Kingdom Furnace',
        recipe: [
          { itemId: 'bts-platinum-ore', qty: 2 },
          { itemId: 'bts-coal', qty: 1 },
        ],
      },
      {
        id: 'bts-titanium-ingot',
        icon: '💠',
        name: 'Titanium Alloy Ingot',
        category: 'Smelted Ingot',
        rarity: 'Epic',
        baseValue: 230,
        outputQty: 1,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Titanium Anvil & High Furnace',
        recipe: [
          { itemId: 'bts-titanium-ore', qty: 2 },
          { itemId: 'bts-coal', qty: 2 },
        ],
      },
      {
        id: 'bts-arcanium-bar',
        icon: '🟣',
        name: 'Arcanium Enchanted Bar (1.0 Tier)',
        category: 'Smelted Ingot',
        rarity: 'Legendary',
        baseValue: 340,
        outputQty: 1,
        craftTimeSec: 9,
        powerKw: 0,
        biomeOrSource: '1.0 Magic Crafter & Runic Furnace',
        recipe: [
          { itemId: 'bts-arcanium-ore', qty: 2 },
          { itemId: 'bts-amethyst', qty: 1 },
          { itemId: 'bts-coal', qty: 2 },
        ],
      },
      {
        id: 'bts-tin-pickaxe',
        icon: '⛏️',
        name: 'Tin Pickaxe (Unlocks Copper Veins)',
        category: 'Kingdom Gear',
        rarity: 'Common',
        baseValue: 85,
        outputQty: 1,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Kingdom Blacksmith Anvil',
        recipe: [
          { itemId: 'bts-tin-ingot', qty: 3 },
          { itemId: 'bts-wood', qty: 2 },
        ],
      },
      {
        id: 'bts-iron-pickaxe',
        icon: '⚒️',
        name: 'Iron Delver Pickaxe (Layer 2 Entry)',
        category: 'Kingdom Gear',
        rarity: 'Uncommon',
        baseValue: 190,
        outputQty: 1,
        craftTimeSec: 7,
        powerKw: 0,
        biomeOrSource: 'Kingdom Blacksmith Anvil',
        recipe: [
          { itemId: 'bts-iron-ingot', qty: 3 },
          { itemId: 'bts-wood', qty: 2 },
        ],
      },
      {
        id: 'bts-platinum-armor',
        icon: '🥋',
        name: 'Platinum Armor Set (3-Piece Set Bonus)',
        category: 'Kingdom Gear',
        rarity: 'Epic',
        baseValue: 1280,
        outputQty: 1,
        craftTimeSec: 12,
        powerKw: 0,
        biomeOrSource: 'Titanium Anvil · Lost Permanently on Cave Death',
        recipe: [{ itemId: 'bts-platinum-ingot', qty: 7 }],
      },
      {
        id: 'bts-arcanium-blade',
        icon: '⚔️',
        name: 'Arcanium Runeblade (1.0 Magic Crafter)',
        category: 'Kingdom Gear',
        rarity: 'Legendary',
        baseValue: 1850,
        outputQty: 1,
        craftTimeSec: 14,
        powerKw: 0,
        biomeOrSource: 'Kingdom Magic Crafter (Layer 3 Endgame)',
        recipe: [
          { itemId: 'bts-arcanium-bar', qty: 4 },
          { itemId: 'bts-titanium-ingot', qty: 2 },
        ],
      },
    ],
    mapPins: [
      { id: 'bts-pin-1', title: 'Escape Pod Extraction Beacon', category: 'Extraction', xPercent: 48, yPercent: 46, note: 'Complete at least 1 Foreman quest to summon pod; bank all ingots before risky dives.' },
      { id: 'bts-pin-2', title: 'Old Halls & -150m Coal Belt', category: 'Resource', xPercent: 22, yPercent: 34, note: 'Break wooden crates for Timber; mine Coal (-150m+) & Tin to forge your first Tin Pickaxe.' },
      { id: 'bts-pin-3', title: 'Glowing Fungal Forest', category: 'Resource', xPercent: 28, yPercent: 66, note: 'Harvest Blood Moss for bleed-stopping bandages plus dense Copper & Iron seams.' },
      { id: 'bts-pin-4', title: 'Crystal Geode Cavern', category: 'Shrine / Upgrade', xPercent: 66, yPercent: 64, note: 'Amethyst Shards immune to early picks — pack Dynamite Charges to crack geodes.' },
      { id: 'bts-pin-5', title: 'Honey Hive & Layer 2 Vaults', category: 'Resource', xPercent: 62, yPercent: 30, note: 'Silver, Tungsten, and Platinum veins; watch for Goblin Merchant Empty Flask stock.' },
      { id: 'bts-pin-6', title: 'Layer 3 Abyss & Arcanium Rift', category: 'Boss', xPercent: 82, yPercent: 26, note: '1.0 endgame Titanium & Arcanium magical ore nodes guarded by Layer Guardians.' },
    ],
    tradeValues: [
      { name: 'Arcanium Enchanted Bar (Layer 3 Magic Crafter)', icon: '🟣', score: 1850, demand: 10, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Titanium Alloy Ingot (Titanium Anvil Tier)', icon: '💠', score: 920, demand: 9, rarity: 'Epic', trend: 'Rising' },
      { name: 'Platinum 3-Piece Armor Set (High Resistance)', icon: '🥋', score: 780, demand: 9, rarity: 'Epic', trend: 'Stable' },
      { name: 'Empty Glass Flask (Goblin Merchant Reroll)', icon: '🧪', score: 340, demand: 8, rarity: 'Rare', trend: 'Rising' },
      { name: 'Amethyst Geode Shard (Dynamite Harvest)', icon: '🔮', score: 260, demand: 7, rarity: 'Rare', trend: 'Stable' },
      { name: 'Coal Fuel Stack (1:1 Smelting Bottleneck)', icon: '🪨', score: 150, demand: 9, rarity: 'Common', trend: 'Stable' },
    ],
  },
  {
    slug: 'noble-fates',
    title: 'Noble Fates',
    steamAppId: 1769420,
    statusBadge: '1.0 BUILD #26823432 · VERIFIED',
    releaseLabel: 'OctDat Client Extract · Nov 2026',
    engine: '30 Unpacked Items, Meals & Forge Chains',
    genre: 'Colony Sim · Kingdom Strategy',
    officialStoreUrl: 'https://store.steampowered.com/app/1769420/Noble_Fates/',
    priceLabel: '$19.99 · Free Demo on Steam',
    summary:
      '100% client-extracted OctDat database (Build #26823432): calculate exact Foundry & Forge metal rod trees, Stove meal comfort tiers, Winery vintages, Platemail sets, and Royal Prestige gear.',
    art: {
      header: '/images/games/noble-fates/header.jpg',
      hero: '/images/games/noble-fates/hero.jpg',
      mapBg: '/images/games/noble-fates/map-bg.jpg',
    },
    affiliateLinks: { steamKeyUrl: '' },
    items: [
      {
        id: 'nf-wood',
        icon: '🪵',
        iconUrl: '/images/items/noble-fates/logging.png',
        name: 'Wood (Stack 24 · Decay 48y)',
        category: 'Raw Resource',
        rarity: 'Common',
        baseValue: 2,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Logging · Oak, Evergreen & Olive Trees',
      },
      {
        id: 'nf-stone',
        icon: '🪨',
        iconUrl: '/images/items/noble-fates/mining.png',
        name: 'Stone (Stack 24 · Decay 112y)',
        category: 'Raw Resource',
        rarity: 'Common',
        baseValue: 4,
        craftTimeSec: 2.5,
        powerKw: 0,
        biomeOrSource: 'Mining · Surface Stone Clusters',
      },
      {
        id: 'nf-cotton',
        icon: '🌿',
        iconUrl: '/images/items/noble-fates/farming.png',
        name: 'Cotton Fibre (Stack 48 · Decay 12y)',
        category: 'Raw Crop',
        rarity: 'Common',
        baseValue: 8,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Farming · Cotton Plots & Wild Foraging',
      },
      {
        id: 'nf-corn',
        icon: '🌽',
        iconUrl: '/images/items/noble-fates/farming.png',
        name: 'Corn (Stack 8 · Indoor Decay 4d)',
        category: 'Raw Crop',
        rarity: 'Common',
        baseValue: 2,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Farming · Tillable Crop Plots',
      },
      {
        id: 'nf-grapes',
        icon: '🍇',
        iconUrl: '/images/items/noble-fates/foraging.png',
        name: 'Grapes (Stack 6 · Indoor Decay 6d)',
        category: 'Raw Crop',
        rarity: 'Common',
        baseValue: 6,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Vineyard Farming · Wild Vines',
      },
      {
        id: 'nf-hide',
        icon: '🦌',
        iconUrl: '/images/items/noble-fates/ranching.png',
        name: 'Animal Hide (Stack 24 · Decay 27y)',
        category: 'Raw Resource',
        rarity: 'Uncommon',
        baseValue: 48,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Butcher Table · Deer, Boar & Cow',
      },
      {
        id: 'nf-copper',
        icon: '🟫',
        iconUrl: '/images/items/noble-fates/mining.png',
        name: 'Copper Ore (Stack 24)',
        category: 'Raw Ore',
        rarity: 'Common',
        baseValue: 24,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Mining · Copper Veins',
      },
      {
        id: 'nf-iron',
        icon: '⛏️',
        iconUrl: '/images/items/noble-fates/mining.png',
        name: 'Iron Ore (Stack 24)',
        category: 'Raw Ore',
        rarity: 'Uncommon',
        baseValue: 24,
        craftTimeSec: 4.5,
        powerKw: 0,
        biomeOrSource: 'Mining · Highland Iron Seams',
      },
      {
        id: 'nf-silver',
        icon: '⚪',
        iconUrl: '/images/items/noble-fates/mining.png',
        name: 'Silver Ore (Stack 24)',
        category: 'Raw Ore',
        rarity: 'Rare',
        baseValue: 48,
        craftTimeSec: 5.5,
        powerKw: 0,
        biomeOrSource: 'Mining · Deep Silver Veins',
      },
      {
        id: 'nf-gold',
        icon: '🟨',
        iconUrl: '/images/items/noble-fates/mining.png',
        name: 'Gold Ore (Stack 24)',
        category: 'Raw Ore',
        rarity: 'Epic',
        baseValue: 72,
        craftTimeSec: 6.5,
        powerKw: 0,
        biomeOrSource: 'Mining · Rare Gold Seams',
      },
      {
        id: 'nf-lumber',
        icon: '🪚',
        iconUrl: '/images/items/noble-fates/crafting.png',
        name: 'Lumber (Batch 3 Hand / 6 Lumber Mill)',
        category: 'Refined Material',
        rarity: 'Common',
        baseValue: 12,
        outputQty: 1,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Crafting Table / Lumber Mill',
        recipe: [{ itemId: 'nf-wood', qty: 2 }],
      },
      {
        id: 'nf-stone-blocks',
        icon: '🧱',
        iconUrl: '/images/items/noble-fates/building.png',
        name: 'Stone Blocks (Batch 3 Hand / 6 Cutter)',
        category: 'Refined Material',
        rarity: 'Common',
        baseValue: 12,
        outputQty: 1,
        craftTimeSec: 3.5,
        powerKw: 0,
        biomeOrSource: 'Stone Cutting Table (80 Copper)',
        recipe: [{ itemId: 'nf-stone', qty: 2 }],
      },
      {
        id: 'nf-fabric',
        icon: '🧵',
        iconUrl: '/images/items/noble-fates/crafting.png',
        name: 'Fabric (Batch 3 Hand / 6 Loom)',
        category: 'Refined Material',
        rarity: 'Uncommon',
        baseValue: 32,
        outputQty: 1,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: 'Crafting Table / Loom',
        recipe: [{ itemId: 'nf-cotton', qty: 5 }],
      },
      {
        id: 'nf-leather',
        icon: '🛡️',
        iconUrl: '/images/items/noble-fates/ranching.png',
        name: 'Cured Leather (Stack 24 · Decay 60y)',
        category: 'Refined Material',
        rarity: 'Uncommon',
        baseValue: 96,
        outputQty: 1,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Tanning Tub · Soak Hide',
        recipe: [{ itemId: 'nf-hide', qty: 1 }],
      },
      {
        id: 'nf-iron-rods',
        icon: '🔩',
        iconUrl: '/images/items/noble-fates/crafting.png',
        name: 'Iron Rods (Stack 16 · Batch 8)',
        category: 'Smelted Metal',
        rarity: 'Uncommon',
        baseValue: 32,
        outputQty: 1,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Foundry (24 Stone)',
        recipe: [{ itemId: 'nf-iron', qty: 5 }],
      },
      {
        id: 'nf-silver-rods',
        icon: '🥈',
        iconUrl: '/images/items/noble-fates/crafting.png',
        name: 'Silver Rods (Stack 16 · Batch 8)',
        category: 'Smelted Metal',
        rarity: 'Rare',
        baseValue: 64,
        outputQty: 1,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Foundry (24 Stone)',
        recipe: [{ itemId: 'nf-silver', qty: 5 }],
      },
      {
        id: 'nf-gold-rods',
        icon: '🥇',
        iconUrl: '/images/items/noble-fates/crafting.png',
        name: 'Gold Rods (Stack 16 · Batch 8)',
        category: 'Smelted Metal',
        rarity: 'Epic',
        baseValue: 96,
        outputQty: 1,
        craftTimeSec: 7,
        powerKw: 0,
        biomeOrSource: 'Foundry (24 Stone)',
        recipe: [{ itemId: 'nf-gold', qty: 5 }],
      },
      {
        id: 'nf-simple-meal',
        icon: '🥣',
        iconUrl: '/images/items/noble-fates/cooking.png',
        name: 'Simple Meal (+6.25 Comfort · 4d Indoor)',
        category: 'Food & Drink',
        rarity: 'Common',
        baseValue: 8,
        outputQty: 1,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Stove (1 Source · 1.5 Nutrition)',
        recipe: [{ itemId: 'nf-corn', qty: 2 }],
      },
      {
        id: 'nf-fancy-meal',
        icon: '🍲',
        iconUrl: '/images/items/noble-fates/food.png',
        name: 'Fancy Meal (+25 Comfort · +0.25 Mood · 1d)',
        category: 'Food & Drink',
        rarity: 'Epic',
        baseValue: 64,
        outputQty: 1,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Stove (4 Distinct Sources · 3.0 Nutrition)',
        recipe: [
          { itemId: 'nf-corn', qty: 2 },
          { itemId: 'nf-grapes', qty: 2 },
        ],
      },
      {
        id: 'nf-wine',
        icon: '🍷',
        iconUrl: '/images/items/noble-fates/drink.png',
        name: 'Wine Vintage (Yields 2x per Craft)',
        category: 'Food & Drink',
        rarity: 'Rare',
        baseValue: 20,
        outputQty: 2,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Winery Fermentation',
        recipe: [{ itemId: 'nf-grapes', qty: 6 }],
      },
      {
        id: 'nf-cornshine',
        icon: '🍺',
        iconUrl: '/images/items/noble-fates/drink.png',
        name: 'Cornshine Moonshine (Batch 8)',
        category: 'Food & Drink',
        rarity: 'Uncommon',
        baseValue: 14,
        outputQty: 1,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Winery (1.75x Progress Rate)',
        recipe: [{ itemId: 'nf-corn', qty: 6 }],
      },
      {
        id: 'nf-wooden-arrows',
        icon: '🏹',
        iconUrl: '/images/items/noble-fates/ranged.png',
        name: 'Wooden Arrows (Yields 25x per Craft)',
        category: 'Weapons & Ammo',
        rarity: 'Common',
        baseValue: 10,
        outputQty: 25,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Crafting Table',
        recipe: [{ itemId: 'nf-wood', qty: 5 }],
      },
      {
        id: 'nf-crossbow',
        icon: '🎯',
        iconUrl: '/images/items/noble-fates/ranged.png',
        name: 'Crossbow (7.5–30 Dmg · 18–144g)',
        category: 'Weapons & Ammo',
        rarity: 'Rare',
        baseValue: 144,
        outputQty: 1,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Crafting Table (0.35x Speed)',
        recipe: [{ itemId: 'nf-lumber', qty: 12 }],
      },
      {
        id: 'nf-bronze-sword',
        icon: '🗡️',
        iconUrl: '/images/items/noble-fates/melee.png',
        name: 'Bronze Sword (5–20 Dmg · 18–104g)',
        category: 'Weapons & Ammo',
        rarity: 'Uncommon',
        baseValue: 104,
        outputQty: 1,
        craftTimeSec: 8,
        powerKw: 0,
        biomeOrSource: 'Foundry (0.35x Speed)',
        recipe: [{ itemId: 'nf-copper', qty: 25 }],
      },
      {
        id: 'nf-steel-sword',
        icon: '⚔️',
        iconUrl: '/images/items/noble-fates/melee.png',
        name: 'Steel Sword (12–36 Dmg · 42–264g)',
        category: 'Weapons & Ammo',
        rarity: 'Epic',
        baseValue: 264,
        outputQty: 1,
        craftTimeSec: 11,
        powerKw: 0,
        biomeOrSource: 'Forge (48 Iron Rods Station · Diff 1.625)',
        recipe: [{ itemId: 'nf-iron-rods', qty: 16 }],
      },
      {
        id: 'nf-steel-heaume',
        icon: '🪖',
        iconUrl: '/images/items/noble-fates/gear.png',
        name: 'Steel Plate Heaume (2–6 Armor · 32–192g)',
        category: 'Plate Armor',
        rarity: 'Rare',
        baseValue: 192,
        outputQty: 1,
        craftTimeSec: 10,
        powerKw: 0,
        biomeOrSource: 'Forge (-2.5% Mobility/Dex)',
        recipe: [{ itemId: 'nf-iron-rods', qty: 6 }],
      },
      {
        id: 'nf-steel-chausses',
        icon: '🛡️',
        iconUrl: '/images/items/noble-fates/shield.png',
        name: 'Steel Plate Chausses (4–12 Armor · 32–192g)',
        category: 'Plate Armor',
        rarity: 'Epic',
        baseValue: 192,
        outputQty: 1,
        craftTimeSec: 11,
        powerKw: 0,
        biomeOrSource: 'Forge (Heavy Leg/Torso Plate)',
        recipe: [{ itemId: 'nf-iron-rods', qty: 12 }],
      },
      {
        id: 'nf-steel-shield',
        icon: '🛡️',
        iconUrl: '/images/items/noble-fates/shield.png',
        name: 'Steel Shield (4–8 Armor · 32–208g)',
        category: 'Plate Armor',
        rarity: 'Epic',
        baseValue: 208,
        outputQty: 1,
        craftTimeSec: 11,
        powerKw: 0,
        biomeOrSource: 'Forge (0.25x Speed)',
        recipe: [{ itemId: 'nf-iron-rods', qty: 16 }],
      },
      {
        id: 'nf-royal-cloak',
        icon: '🧥',
        iconUrl: '/images/items/noble-fates/crown.png',
        name: 'Royal Cloak (Prestige Mantle · 32–256g)',
        category: 'Royal Prestige',
        rarity: 'Legendary',
        baseValue: 256,
        outputQty: 1,
        craftTimeSec: 12,
        powerKw: 0,
        biomeOrSource: 'Crafting Table · Noble Esteem Tier',
        recipe: [
          { itemId: 'nf-fabric', qty: 12 },
          { itemId: 'nf-hide', qty: 12 },
          { itemId: 'nf-leather', qty: 6 },
          { itemId: 'nf-gold-rods', qty: 1 },
        ],
      },
      {
        id: 'nf-gold-crown',
        icon: '👑',
        iconUrl: '/images/items/noble-fates/crown.png',
        name: 'Gold Fine Crown (Ruler Regalia · 32–256g)',
        category: 'Royal Prestige',
        rarity: 'Legendary',
        baseValue: 256,
        outputQty: 1,
        craftTimeSec: 14,
        powerKw: 0,
        biomeOrSource: 'Forge (0.20x Speed · Tri-Metal Alloy)',
        recipe: [
          { itemId: 'nf-iron-rods', qty: 2 },
          { itemId: 'nf-silver-rods', qty: 2 },
          { itemId: 'nf-gold-rods', qty: 2 },
        ],
      },
    ],
    mapPins: [
      { id: 'nf-pin-1', title: 'Neverblast River Citadel Site', category: 'Shrine / Upgrade', xPercent: 46, yPercent: 52, note: 'Natural river moat chokepoint + fertile corn/grape soil (16 Stone Blocks for Fine Stone Throne).' },
      { id: 'nf-pin-2', title: 'Stairquest Oak & Olive Grove', category: 'Resource', xPercent: 24, yPercent: 40, note: 'Dense Wood (2g) & Cotton plots; Rush Lumber Mill (6-batch) and Loom.' },
      { id: 'nf-pin-3', title: 'Darkpig Iron, Silver & Gold Ridge', category: 'Resource', xPercent: 72, yPercent: 34, note: '5 Ore → 1 Metal Rod at Foundry; unlock Forge (48 Iron Rods) for Steel gear.' },
      { id: 'nf-pin-4', title: 'Wonderlock Breach Portal', category: 'Boss', xPercent: 78, yPercent: 74, note: 'Demon & Breacher incursion spawn — fortify with Ballistas (48 Wood) & Catapults (96 Wood).' },
      { id: 'nf-pin-5', title: 'Wondertail Hunting & Tanning Flats', category: 'Extraction', xPercent: 32, yPercent: 68, note: 'Deer/Boar hunting grounds: Hide (48g) → Tanning Tub Leather (96g) for Royal Cloaks.' },
    ],
    tradeValues: [
      { name: 'Masterwork Steel Sword (36 Dmg · 16 Iron Rods)', icon: '⚔️', score: 264, demand: 10, rarity: 'Epic', trend: 'Rising' },
      { name: 'Gold Fine Crown (2 Iron + 2 Silver + 2 Gold Rods)', icon: '👑', score: 256, demand: 9, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Royal Cloak (12 Fabric + 12 Hide + 6 Leather + 1 Gold Rod)', icon: '🧥', score: 256, demand: 9, rarity: 'Legendary', trend: 'Stable' },
      { name: 'Masterwork Fine Short Bow (20 Lumber · 8–24 Dmg)', icon: '🏹', score: 256, demand: 8, rarity: 'Rare', trend: 'Rising' },
      { name: 'Steel Shield & Plate Chausses (4–12 Armor)', icon: '🛡️', score: 208, demand: 9, rarity: 'Epic', trend: 'Stable' },
      { name: 'Cured Leather Stack (96g/ea · 1:1 from Hide)', icon: '🦌', score: 96, demand: 8, rarity: 'Uncommon', trend: 'Rising' },
    ],
  },
  {
    slug: 'marvel-rivals',
    title: 'Marvel Rivals',
    steamAppId: 2767030,
    statusBadge: 'SEASON PASS & LATTICE MATH',
    releaseLabel: 'PC & Console Cross-Progression · Nov 2026',
    engine: 'Lattice → Units & Luxury Pass Planner',
    genre: '6v6 Hero Shooter · Economy Planner',
    officialStoreUrl: 'https://store.steampowered.com/app/2767030/Marvel_Rivals/',
    priceLabel: 'Free-to-Play · UID Lattice Top-Up Deals',
    summary:
      'Calculate exact Lattice-to-Units (1:1) conversion packs, 990 Lattice Luxury BattlePass net rebates (600 Lattice + 600 Units returned), and cheapest pack combinations for 1,600 Epic & 2,200 Legendary hero bundles.',
    art: {
      header: '/images/games/marvel-rivals/header.jpg',
      hero: '/images/games/marvel-rivals/hero.jpg',
      mapBg: '/images/games/marvel-rivals/map-bg.jpg',
    },
    affiliateLinks: {
      lootbarUrl: 'https://www.lootbar.com/top-up/marvel-rivals?aff_short=dropcodex',
    },
    items: [
      {
        id: 'mr-lattice-100',
        icon: '🟨',
        name: '100 Lattice Pack ($0.99 USD Standard)',
        category: 'Lattice Pack',
        rarity: 'Common',
        baseValue: 100,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: 'Official Store ($0.99) or UID Direct Top-Up',
      },
      {
        id: 'mr-lattice-500',
        icon: '🟨',
        name: '500 Lattice Pack ($4.99 USD Tier)',
        category: 'Lattice Pack',
        rarity: 'Common',
        baseValue: 500,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: 'Official Store ($4.99) or UID Direct Top-Up',
      },
      {
        id: 'mr-lattice-1000',
        icon: '🔶',
        name: '1,000 Lattice Pack ($9.99 BattlePass Tier)',
        category: 'Lattice Pack',
        rarity: 'Uncommon',
        baseValue: 1000,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: 'Covers 990 Lattice Luxury BattlePass w/ 10 Left',
      },
      {
        id: 'mr-lattice-2180',
        icon: '💎',
        name: '2,180 Lattice Pack ($19.99 · Includes +180 Bonus)',
        category: 'Lattice Pack',
        rarity: 'Rare',
        baseValue: 2180,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: '+9% Bonus Lattice Over $0.99 Base Rate',
      },
      {
        id: 'mr-lattice-5680',
        icon: '💎',
        name: '5,680 Lattice Pack ($49.99 · Includes +680 Bonus)',
        category: 'Lattice Pack',
        rarity: 'Epic',
        baseValue: 5680,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: '+13.6% Bonus Lattice Over Base Rate',
      },
      {
        id: 'mr-lattice-11680',
        icon: '👑',
        name: '11,680 Lattice Vault ($99.99 · Includes +1,680 Bonus)',
        category: 'Lattice Pack',
        rarity: 'Legendary',
        baseValue: 11680,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: '+16.8% Maximum Bonus Lattice Tier',
      },
      {
        id: 'mr-mission-units',
        icon: '🟦',
        name: 'Free Event & Hero Achievement Units (100 Block)',
        category: 'Free Grind',
        rarity: 'Common',
        baseValue: 100,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: 'Heroic Journey Achievements & Seasonal Events',
      },
      {
        id: 'mr-units-100',
        icon: '🔹',
        name: '100 Units (Converted 1:1 from Lattice)',
        category: 'Shop Currency',
        rarity: 'Uncommon',
        baseValue: 100,
        outputQty: 1,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: '1:1 Instant Conversion (One-Way)',
        recipe: [{ itemId: 'mr-lattice-100', qty: 1 }],
      },
      {
        id: 'mr-rename-card',
        icon: '🪪',
        name: 'Rename Card (500 Units)',
        category: 'Account Item',
        rarity: 'Uncommon',
        baseValue: 500,
        outputQty: 1,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'In-Game Utility Store',
        recipe: [{ itemId: 'mr-lattice-500', qty: 1 }],
      },
      {
        id: 'mr-luxury-pass',
        icon: '🎟️',
        name: 'Luxury BattlePass (990 Lattice · Refunds 600 Lattice + 600 Units)',
        category: 'BattlePass',
        rarity: 'Epic',
        baseValue: 1200,
        outputQty: 1,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Net Cost Only 390 Lattice After Full Completion',
        recipe: [{ itemId: 'mr-lattice-1000', qty: 1 }],
      },
      {
        id: 'mr-luxury-pass-boost',
        icon: '🚀',
        name: 'Luxury BattlePass Upgraded (2,100 Lattice · +2,800 Chrono + 20% Boost)',
        category: 'BattlePass',
        rarity: 'Legendary',
        baseValue: 2400,
        outputQty: 1,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Covered by Single 2,180 Lattice ($19.99) Pack',
        recipe: [{ itemId: 'mr-lattice-2180', qty: 1 }],
      },
      {
        id: 'mr-epic-bundle',
        icon: '🦸',
        name: 'Epic Hero Costume Bundle (1,600 Units · Skin + MVP + Emote)',
        category: 'Cosmetic Bundle',
        rarity: 'Epic',
        baseValue: 1600,
        outputQty: 1,
        craftTimeSec: 4,
        powerKw: 0,
        biomeOrSource: '1,000 + 500 + 100 Lattice ($15.97) or 1,000 + Pass Rebate',
        recipe: [
          { itemId: 'mr-lattice-1000', qty: 1 },
          { itemId: 'mr-lattice-500', qty: 1 },
          { itemId: 'mr-lattice-100', qty: 1 },
        ],
      },
      {
        id: 'mr-legendary-bundle',
        icon: '⚡',
        name: 'Legendary Hero Bundle (2,200 Units · Custom SFX + Animated Banner)',
        category: 'Cosmetic Bundle',
        rarity: 'Legendary',
        baseValue: 2200,
        outputQty: 1,
        craftTimeSec: 5,
        powerKw: 0,
        biomeOrSource: '2,180 Pack ($19.99) + 20 Free Achievement Units (Saves $4.99!)',
        recipe: [
          { itemId: 'mr-lattice-2180', qty: 1 },
          { itemId: 'mr-mission-units', qty: 1 },
        ],
      },
    ],
    mapPins: [
      { id: 'mr-pin-1', title: 'Yggsgard: Yggdrasill Path (Convoy)', category: 'Shrine / Upgrade', xPercent: 28, yPercent: 42, note: 'Destructible golden bridge flank — break pillars to stall payload sightlines.' },
      { id: 'mr-pin-2', title: 'Tokyo 2099: Shin-Shibuya (Convergence)', category: 'Resource', xPercent: 68, yPercent: 34, note: 'High-ground rooftop choke before first capture gate; dive backline healers.' },
      { id: 'mr-pin-3', title: 'Wakanda: Birnin T’Challa (Domination)', category: 'Boss', xPercent: 50, yPercent: 56, note: 'Collapsing Imperial Institute shrine walls open wide Team-Up ult angles.' },
      { id: 'mr-pin-4', title: 'Klyntar: Symbiotic Surface', category: 'Extraction', xPercent: 76, yPercent: 70, note: 'Shoot symbiote pods to raise instant cover walls or bridge payload gaps.' },
      { id: 'mr-pin-5', title: 'Hydra Charteris Base: Hell’s Heaven', category: 'Boss', xPercent: 34, yPercent: 72, note: 'Rotating stage geometry shifts pitfall hazards mid-capture.' },
    ],
    tradeValues: [
      { name: 'Luxury BattlePass (990 Lattice → 1,200 Combined Rebate)', icon: '🎟️', score: 1200, demand: 10, rarity: 'Epic', trend: 'Rising' },
      { name: '2,180 Lattice Pack + 20 Free Units → 2,200 Legendary Trick', icon: '⚡', score: 2200, demand: 10, rarity: 'Legendary', trend: 'Rising' },
      { name: '11,680 Lattice Vault (+16.8% Bonus Top-Up)', icon: '👑', score: 1168, demand: 9, rarity: 'Legendary', trend: 'Stable' },
      { name: 'Epic Hero Skin Bundle (1,600 Units Full Set)', icon: '🦸', score: 850, demand: 9, rarity: 'Epic', trend: 'Stable' },
      { name: 'Chrono Token End-of-Season Unit Exchange', icon: '🟦', score: 420, demand: 8, rarity: 'Rare', trend: 'Rising' },
    ],
  },
  {
    slug: 'no-asteroids',
    title: 'No Asteroids',
    steamAppId: 5527800,
    statusBadge: 'v1.0.6 BUILD #26931893 · EXTRACTED',
    releaseLabel: 'ASAR Client Extract · Nov 2026',
    engine: '11 Ores, Market Glut & 20+ Tools/Modules',
    genre: 'Asteroid Mining · Physics Sim',
    officialStoreUrl: 'https://store.steampowered.com/app/5527800/No_Asteroids/',
    priceLabel: 'Free Demo (#5541510) · Steam Hit',
    summary: '100% client-extracted v1.0.6 mining database (Build #26931893): exact ore prices ($3–$1,000), market glut 0.5x floor thresholds, rock hardness gates (Basalt 1.9 / Core 2.3 / Neutronium 3.0), and mining haul calculators for Drills, Lasers, Plasma Cutters & Orbital Collapsars.',
    art: {
      header: '/images/games/no-asteroids/header.jpg',
      hero: '/images/games/no-asteroids/hero.jpg',
      mapBg: '/images/games/no-asteroids/map-bg.webp',
    },
    affiliateLinks: {},
    items: [
      // === 11 EXTRACTED ORES & MINERALS ===
      {
        id: 'na-ore-ice',
        icon: '🧊',
        iconUrl: '/images/games/no-asteroids/items/minerals_ice.png',
        name: 'Space Ice ($3 · Glut Cap 2,500 · Compacts up to 4x)',
        category: 'Extracted Mineral',
        rarity: 'Common',
        baseValue: 3,
        outputQty: 1,
        craftTimeSec: 1,
        powerKw: 0,
        biomeOrSource: 'Upper Regolith & Shallow Veins · HP 1 · Hardness Gate 0',
      },
      {
        id: 'na-ore-iron',
        icon: '🪨',
        iconUrl: '/images/games/no-asteroids/items/minerals_iron.png',
        name: 'Meteoric Iron ($5 · Glut Cap 1,600 · Compacts up to 3x)',
        category: 'Extracted Mineral',
        rarity: 'Common',
        baseValue: 5,
        outputQty: 1,
        craftTimeSec: 1.5,
        powerKw: 0,
        biomeOrSource: 'Stone & Regolith Crust · HP 3 · Ore Resistance 1.5x',
      },
      {
        id: 'na-ore-nickel',
        icon: '⚙️',
        iconUrl: '/images/games/no-asteroids/items/minerals_nickel.png',
        name: 'Nickel ($6 · Glut Cap 1,200 · Compacts with Iron Tier)',
        category: 'Extracted Mineral',
        rarity: 'Common',
        baseValue: 6,
        outputQty: 1,
        craftTimeSec: 1.5,
        powerKw: 0,
        biomeOrSource: 'Mid Stone Layer (Metal Veins) · HP 3 · Ore Resistance 1.5x',
      },
      {
        id: 'na-ore-titanium',
        icon: '🔩',
        iconUrl: '/images/games/no-asteroids/items/minerals_titanium.png',
        name: 'Titanium ($7 · Glut Cap 1,000 · Density 4.5)',
        category: 'Extracted Mineral',
        rarity: 'Uncommon',
        baseValue: 7,
        outputQty: 1,
        craftTimeSec: 1.6,
        powerKw: 0,
        biomeOrSource: 'Deep Stone Pockets · HP 3 · Ore Resistance 1.5x',
      },
      {
        id: 'na-ore-gold',
        icon: '🪙',
        iconUrl: '/images/games/no-asteroids/items/minerals_gold.png',
        name: 'Star Gold ($9 · Glut Cap 1,000 · Compacts up to 2x)',
        category: 'Extracted Mineral',
        rarity: 'Uncommon',
        baseValue: 9,
        outputQty: 1,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Deep Stone (Depth 5–8) · HP 3 · Ore Resistance 2.0x',
      },
      {
        id: 'na-ore-crystal',
        icon: '💎',
        iconUrl: '/images/games/no-asteroids/items/minerals_crystal.png',
        name: 'Space Crystal ($16 · Glut Cap 1,000 · Glow 150)',
        category: 'Extracted Mineral',
        rarity: 'Rare',
        baseValue: 16,
        outputQty: 1,
        craftTimeSec: 2.5,
        powerKw: 0,
        biomeOrSource: 'Deep Caverns (Depth 6–9) · HP 4 · Ore Resistance 2.5x',
      },
      {
        id: 'na-ore-plasmite',
        icon: '🔥',
        iconUrl: '/images/games/no-asteroids/items/minerals_plasmite.png',
        name: 'Plasmite ($26 · Glut Cap 1,000 · Quake Crack Req Blast Lv.2)',
        category: 'Extracted Mineral',
        rarity: 'Rare',
        baseValue: 26,
        outputQty: 1,
        craftTimeSec: 3,
        powerKw: 0,
        biomeOrSource: 'Basalt Mantle (Depth 7–10) · HP 4 · Ore Resistance 3.0x',
      },
      {
        id: 'na-ore-neutronium',
        icon: '❄️',
        iconUrl: '/images/games/no-asteroids/items/minerals_neutronium.png',
        name: 'Neutronium ($45 · Huge 2,250 Glut Cap · Req Power >= 3.0!)',
        category: 'Extracted Mineral',
        rarity: 'Epic',
        baseValue: 45,
        outputQty: 1,
        craftTimeSec: 5,
        powerKw: 3,
        biomeOrSource: 'Core Shell · Hardness Gate 3.0 (Plasma Base or Laser +10 Power)',
      },
      {
        id: 'na-ore-darkmatter',
        icon: '🌑',
        iconUrl: '/images/games/no-asteroids/items/minerals_darkMatter.png',
        name: 'Dark Matter ($68 · Zero Mass · Req Power >= 2.6)',
        category: 'Extracted Mineral',
        rarity: 'Epic',
        baseValue: 68,
        outputQty: 1,
        craftTimeSec: 4,
        powerKw: 2.6,
        biomeOrSource: 'Inner Core Abyss · Hardness Gate 2.6 (Laser +6 Power or Plasma)',
      },
      {
        id: 'na-ore-antimatter',
        icon: '⚛️',
        iconUrl: '/images/games/no-asteroids/items/minerals_antimatter.png',
        name: 'Antimatter ($150 · Volatile -8s Suit Air Within 4m!)',
        category: 'Extracted Mineral',
        rarity: 'Legendary',
        baseValue: 150,
        outputQty: 1,
        craftTimeSec: 2,
        powerKw: 0,
        biomeOrSource: 'Deep Core Pockets · HP 2 · High Value / Drains 8s Oxygen on Blast',
      },
      {
        id: 'na-ore-strange',
        icon: '🩸',
        iconUrl: '/images/games/no-asteroids/items/minerals_strange.png',
        name: 'Strange Matter ($1,000 · Gate 1e7 · Lance/Slicer/Collapsar Only)',
        category: 'Extracted Mineral',
        rarity: 'Legendary',
        baseValue: 1000,
        outputQty: 1,
        craftTimeSec: 10,
        powerKw: 10,
        biomeOrSource: 'Singularity Core · Immune to Normal Drills/Lasers (Req Lance/Slicer/Strike)',
      },

      // === HANDHELD MINING TOOLS (ORE HAUL EQUIVALENT CALCULATOR) ===
      {
        id: 'na-tool-hammer',
        icon: '🔨',
        iconUrl: '/images/games/no-asteroids/items/achievements_hammer.webp',
        name: 'Sledgehammer ($500 · Power 0.90 · Breaks Deep Stone at +7 Power)',
        category: 'Handheld Tool',
        rarity: 'Common',
        baseValue: 500,
        outputQty: 1,
        craftTimeSec: 2,
        powerKw: 0.9,
        biomeOrSource: 'Workshop Tier 1 · Radius 1.5m · Rate 2.0/s · Reach 4.5m',
        recipe: [
          { itemId: 'na-ore-iron', qty: 64 },
          { itemId: 'na-ore-ice', qty: 60 },
        ],
      },
      {
        id: 'na-tool-drill',
        icon: '🪛',
        iconUrl: '/images/games/no-asteroids/items/achievements_drill.webp',
        name: 'Rotary Drill ($2,000 · Power 1.30 · Nonstop Deep Stone Chewer)',
        category: 'Handheld Tool',
        rarity: 'Uncommon',
        baseValue: 2000,
        outputQty: 1,
        craftTimeSec: 4,
        powerKw: 1.3,
        biomeOrSource: 'Workshop Tier 2 · Radius 1.8m · Rate 4.0/s · Breaks Basalt (1.9) at +10 Power',
        recipe: [
          { itemId: 'na-ore-gold', qty: 120 },
          { itemId: 'na-ore-iron', qty: 184 },
        ],
      },
      {
        id: 'na-tool-laser',
        icon: '🔦',
        iconUrl: '/images/games/no-asteroids/items/achievements_laser.webp',
        name: 'Mining Laser ($42,000 · Power 2.00 · 14m Beam · Basalt Native)',
        category: 'Handheld Tool',
        rarity: 'Rare',
        baseValue: 42000,
        outputQty: 1,
        craftTimeSec: 8,
        powerKw: 2.0,
        biomeOrSource: 'Workshop Tier 3 · Breaks Core (2.3) at +3 Power & Neutronium (3.0) at +10 Power',
        recipe: [
          { itemId: 'na-ore-plasmite', qty: 1000 },
          { itemId: 'na-ore-crystal', qty: 1000 },
        ],
      },
      {
        id: 'na-tool-plasma',
        icon: '☄️',
        iconUrl: '/images/games/no-asteroids/items/achievements_plasma.webp',
        name: 'Plasma Cutter ($125,000 · Power 3.00 · 18m Cave Scooper)',
        category: 'Handheld Tool',
        rarity: 'Epic',
        baseValue: 125000,
        outputQty: 1,
        craftTimeSec: 12,
        powerKw: 3.0,
        biomeOrSource: 'Workshop Tier 4 · Native 3.0 Power Shatters Neutronium & Core Unupgraded',
        recipe: [
          { itemId: 'na-ore-neutronium', qty: 1800 },
          { itemId: 'na-ore-plasmite', qty: 1693 },
        ],
      },
      {
        id: 'na-tool-swarm',
        icon: '🚀',
        iconUrl: '/images/games/no-asteroids/items/achievements_swarm.webp',
        name: 'Missile Swarm ($600,000 · Power 3.50 x 8 Lock-On Missiles · 120m)',
        category: 'Handheld Tool',
        rarity: 'Legendary',
        baseValue: 600000,
        outputQty: 1,
        craftTimeSec: 20,
        powerKw: 3.5,
        biomeOrSource: 'Workshop Tier 5 · 8 Homing Warheads · Tunnel & Spread Fire Modes',
        recipe: [
          { itemId: 'na-ore-antimatter', qty: 2000 },
          { itemId: 'na-ore-darkmatter', qty: 2500 },
          { itemId: 'na-ore-neutronium', qty: 2889 },
        ],
      },
      {
        id: 'na-tool-lance',
        icon: '⚡',
        iconUrl: '/images/games/no-asteroids/items/artifacts_gold_pickaxe.png',
        name: 'Core Lance ($1,200,000 · Power 5.0 · Bypasses 1e7 Strange Matter Gate!)',
        category: 'Endgame Tool',
        rarity: 'Legendary',
        baseValue: 1200000,
        outputQty: 1,
        craftTimeSec: 30,
        powerKw: 5.0,
        biomeOrSource: 'Unlocks After Reaching Core / Strike / Collapsar · 60m Piercing Beam',
        recipe: [
          { itemId: 'na-ore-antimatter', qty: 4800 },
          { itemId: 'na-ore-darkmatter', qty: 4500 },
          { itemId: 'na-ore-neutronium', qty: 3867 },
        ],
      },

      // === DRONES, EXPLOSIVES & ORBITAL SHIP MODULES ===
      {
        id: 'na-drone-miner',
        icon: '🛸',
        iconUrl: '/images/games/no-asteroids/items/achievements_drone.webp',
        name: 'Prospector Drone ($20,000 · Auto-Mines Ore Through Solid Rock!)',
        category: 'Autonomous Drone',
        rarity: 'Rare',
        baseValue: 20000,
        outputQty: 1,
        craftTimeSec: 6,
        powerKw: 1.3,
        biomeOrSource: 'Unlocks Day 14 · 24m Scan Range (+3m/lvl) · Swarm Upgrade Adds +3 Drones',
        recipe: [
          { itemId: 'na-ore-crystal', qty: 800 },
          { itemId: 'na-ore-gold', qty: 800 },
        ],
      },
      {
        id: 'na-drone-sapper',
        icon: '💣',
        iconUrl: '/images/games/no-asteroids/items/achievements_drones.webp',
        name: 'Sapper Drone ($50,000 · Power 8.0 · Auto-Plants & Detonates Charges)',
        category: 'Autonomous Drone',
        rarity: 'Epic',
        baseValue: 50000,
        outputQty: 1,
        craftTimeSec: 8,
        powerKw: 8.0,
        biomeOrSource: 'Unlocks Day 17 · 6m Blast Radius · 12s Reload (-8% per Reload Level)',
        recipe: [
          { itemId: 'na-ore-plasmite', qty: 1200 },
          { itemId: 'na-ore-crystal', qty: 1175 },
        ],
      },
      {
        id: 'na-gear-singularity',
        icon: '🕳️',
        iconUrl: '/images/games/no-asteroids/items/achievements_charges.webp',
        name: 'Singularity Charge ($25,000 · 6m Gravity Implosion · 5s Pull)',
        category: 'Explosive Gear',
        rarity: 'Epic',
        baseValue: 25000,
        outputQty: 1,
        craftTimeSec: 5,
        powerKw: 6.0,
        biomeOrSource: 'Unlocks Day 23 · Max Carry 3 (+Stock Upgrades) · Key [F] Quick Deploy',
        recipe: [
          { itemId: 'na-ore-plasmite', qty: 650 },
          { itemId: 'na-ore-crystal', qty: 507 },
        ],
      },
      {
        id: 'na-mod-tractor',
        icon: '🧲',
        iconUrl: '/images/games/no-asteroids/items/achievements_tractor.webp',
        name: 'Orbital Tractor Beam ($20,000 · Auto-Pulls Gun Ore & Lander Overflow)',
        category: 'Ship Module',
        rarity: 'Rare',
        baseValue: 20000,
        outputQty: 1,
        craftTimeSec: 6,
        powerKw: 0,
        biomeOrSource: 'Unlocks Day 15 · Adds Ship Hold = 50% Lander Cargo (+40% per Hold Level)',
        recipe: [
          { itemId: 'na-ore-crystal', qty: 900 },
          { itemId: 'na-ore-gold', qty: 623 },
        ],
      },
      {
        id: 'na-mod-driver',
        icon: '🔩',
        iconUrl: '/images/games/no-asteroids/items/achievements_core.webp',
        name: 'Orbital Mass Driver ($90,000 · Tungsten Rod Punches 24m Vertical Shaft)',
        category: 'Ship Module',
        rarity: 'Epic',
        baseValue: 90000,
        outputQty: 1,
        craftTimeSec: 10,
        powerKw: 1.6,
        biomeOrSource: 'Unlocks Day 15 · Instant Deep Core Access Tunnel · 2.5x Price per Extra Copy',
        recipe: [
          { itemId: 'na-ore-neutronium', qty: 1200 },
          { itemId: 'na-ore-plasmite', qty: 1385 },
        ],
      },
      {
        id: 'na-mod-strike',
        icon: '☢️',
        iconUrl: '/images/games/no-asteroids/items/achievements_destruct.webp',
        name: 'Orbital Strike ($300,000 · 16.5m Mega-Blast · Cracks Strange Matter)',
        category: 'Ship Module',
        rarity: 'Legendary',
        baseValue: 300000,
        outputQty: 1,
        craftTimeSec: 16,
        powerKw: 3.0,
        biomeOrSource: 'Unlocks Day 15 · 22s Autonomous Cooldown · Unlocks Lance & Slicer Tier',
        recipe: [
          { itemId: 'na-ore-antimatter', qty: 1000 },
          { itemId: 'na-ore-neutronium', qty: 3334 },
        ],
      },
      {
        id: 'na-mod-collapsar',
        icon: '🌌',
        iconUrl: '/images/games/no-asteroids/items/artifacts_ufo.png',
        name: 'Collapsar Cannon ($1,200,000 · Power 10.0 · 12m Black Hole Devourer)',
        category: 'Ship Module',
        rarity: 'Legendary',
        baseValue: 1200000,
        outputQty: 1,
        craftTimeSec: 30,
        powerKw: 10.0,
        biomeOrSource: 'Ultimate Ship Weapon · Swallows 12m Rock Spheres Every 8s Including Strange Matter',
        recipe: [
          { itemId: 'na-ore-strange', qty: 600 },
          { itemId: 'na-ore-antimatter', qty: 4000 },
        ],
      },
    ],
    mapPins: [
      { id: 'na-pin-1', title: 'Regolith & Upper Stone (Rel 1.00–0.80 · Hardness 0)', category: 'Resource', xPercent: 50, yPercent: 18, note: 'Space Ice ($3) & Meteoric Iron ($5) veins + 6 Surface Artifacts (Gnome/Golf Ball/404 Sign/Mars Heli).' },
      { id: 'na-pin-2', title: 'Deep Stone Caverns (Hardness Gate >= 1.2)', category: 'Resource', xPercent: 32, yPercent: 40, note: 'Requires Drill (1.3) or Hammer +7 Power. Rich in Titanium ($7), Star Gold ($9), and Space Crystal ($16).' },
      { id: 'na-pin-3', title: 'Basalt Mantle (Hardness Gate >= 1.9)', category: 'Shrine / Upgrade', xPercent: 68, yPercent: 52, note: 'Requires Mining Laser (2.0) or Drill +10 Power. Primary Plasmite ($26) belt + Voyager Golden Record room.' },
      { id: 'na-pin-4', title: 'Outer Core & Dark Abyss (Gate 2.3 Core / 2.6 Dark / 3.0 Neutronium)', category: 'Boss', xPercent: 46, yPercent: 72, note: 'Plasma Cutter (3.0) mines Neutronium ($45, 2,250 glut cap) & Dark Matter ($68) at full speed.' },
      { id: 'na-pin-5', title: 'Singularity Core & Vault Safe (Strange Matter $1,000 · Gate 1e7)', category: 'Extraction', xPercent: 52, yPercent: 88, note: 'Center holds $15,000 Core Safe (Dinos +10% Power set) & Strange Matter (requires Lance/Slicer/Orbital Strike/Collapsar).' },
    ],
    tradeValues: [
      { name: 'Neutronium ($45 · Huge 2,250 Glut Cap = Best Mid-Late Cash Ore)', icon: '❄️', score: 980, demand: 10, rarity: 'Epic', trend: 'Rising' },
      { name: 'Strange Matter ($1,000 · Zero Market Glut Penalty!)', icon: '🩸', score: 1000, demand: 10, rarity: 'Legendary', trend: 'Rising' },
      { name: 'Plasma Cutter ($125k · Instant 3.0 Power Neutronium Unlock)', icon: '☄️', score: 940, demand: 10, rarity: 'Epic', trend: 'Stable' },
      { name: 'Mineral Scanner Lv.6 (90m Glow + Reveals All 36 Hidden Artifacts)', icon: '📡', score: 890, demand: 9, rarity: 'Rare', trend: 'Rising' },
      { name: 'Dinos Artifact Set (+10% Global Mining Power Permanent Perk)', icon: '🦖', score: 860, demand: 9, rarity: 'Epic', trend: 'Stable' },
    ],
    quickCodes: [
      { target: 'Deep Stone Layer', regionOrUnlock: 'Hardness Gate >= 1.20', codeOrCombo: 'Drill (Base 1.3) or Hammer +7 Power', type: 'Safe Code', note: 'Pickaxe maxes out at 1.10 Power (+20 Power ups) unless boosted by Dinos +10% set.' },
      { target: 'Basalt Layer', regionOrUnlock: 'Hardness Gate >= 1.90', codeOrCombo: 'Laser (Base 2.0) or Drill +10 Power', type: 'Safe Code', note: 'Unlocks dense Plasmite ($26) pockets and deeper cave chambers.' },
      { target: 'Neutronium Veins', regionOrUnlock: 'Hardness Gate >= 3.00', codeOrCombo: 'Plasma Cutter (3.0) or Laser +10 Power', type: 'Safe Code', note: 'Highest non-glut bulk cash source (2,250 glut threshold vs 800 on Antimatter).' },
      { target: 'Strange Matter', regionOrUnlock: 'Hardness Gate 10,000,000', codeOrCombo: 'Lance / Slicer / Orbital Strike / Collapsar', type: 'Keypad / Door', note: 'Hardcoded immunity to standard tools; Missile Swarm deals 0.5x bypass.' },
      { target: 'All 36 Artifacts Radar', regionOrUnlock: 'Mineral Scanner Lv.6', codeOrCombo: 'Base $300 x 2.3^Lvl (90m + Finds)', type: 'Keypad / Door', note: 'Completing Sets grants permanent perks: Dinos +10% Power, Lost&Found +10% Cargo, Depths +5% Ore Price.' },
    ],
  },
];

export function getGameBySlug(slug: string): GameModule | undefined {
  return gamesRegistry.find((g) => g.slug === slug);
}
