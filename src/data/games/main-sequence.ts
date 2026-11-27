import type { GameModule } from '../types';

export const mainSequenceModule: GameModule = {
    "slug": "main-sequence",
    "title": "Main Sequence",
    "steamAppId": 2487190,
    "statusBadge": "EA BUILD #26097974 · VERIFIED",
    "releaseLabel": "UE5 Client Extract · Nov 2026",
    "engine": "84 Verified Items & MW Loads",
    "genre": "Factory Automation · Space Sim",
    "officialStoreUrl": "https://store.steampowered.com/app/2487190/Main_Sequence/",
    "priceLabel": "$19.99 · Free Demo on Steam",
    "summary": "100% client-extracted production database (Build #26097974): calculate exact Refinery, Enrichment Chamber & Advanced Assembler ratios, multi-yield batches, and MW/kW reactor loads across all 84 items.",
  hasRealMap: true,
  hasPlayerTrading: false,
  seo: {
    "overviewTitle": "Main Sequence Orbital Factory Calculator, 84 Items & MW Database — DropCodex",
    "overviewDesc": "Client-extracted Main Sequence (Build #26097974) 60Hz production calculator, 3x enriched plate ratios, reactor MW loads, and orbital sector map.",
    "calcTitle": "Main Sequence 60Hz Production Ratio & Reactor MW Calculator — DropCodex",
    "calcDesc": "Compute exact Refinery, Enrichment Chamber, and Assembler machine counts, 3x enriched yields, and MW power draw for all 84 Main Sequence items.",
    "calcHeading": "Main Sequence — 60Hz Production & MW Planner",
    "calcCardTitle": "60Hz Orbital Ratio & MW Calculator",
    "calcCardDesc": "Solve multi-tier Refinery, Enrichment Chamber, and Growth Chamber ratios with exact MW power draw.",
    "dbTitle": "Main Sequence Item & Recipe Database (84 Extracted Assets) — DropCodex",
    "dbDesc": "Search all 84 client-extracted Main Sequence ores, enriched plates, circuits, fuels, and exosuit modules.",
    "dbCardDesc": "Browse all 84 extracted UE5 DataAssets with exact cycle times, batch yields, and facility MW draw.",
    "mapTitle": "Main Sequence Orbital Sector Map & Resource Coordinates — DropCodex",
    "mapDesc": "Interactive orbital sector map with 10 verified resource belts, deuterium vents, and save-state checklist.",
    "mapCardDesc": "Track 10 orbital resource belts, xeno-bio pockets, and extraction coordinates.",
    "valuesTitle": "Main Sequence Endgame Margin Benchmarks — DropCodex",
    "valuesDesc": "Reference output values for endgame Simulation Matrices, Exosuits, and Warp Fuel assemblies."
},
  introParagraphs: [
    "All 84 items and 63 production recipes in this Main Sequence workbench were extracted directly from the Unreal Engine 5 IoStore client archive (Early Access Build #26097974). Every crafting cycle is normalized to 60Hz tick throughput so your Refinery, Chemical Plant, and Assembler counts stay balanced without belt starvation.",
    "Key extracted optimization: Standard Smelting converts raw Cobalt, Nickel, or Titanium Ore at a 1:1 ratio, whereas routing ore through an Enrichment Chamber with Acid or Coolant triples plate output (3x yield per cycle) at the cost of higher MW reactor load. Select either standard or '(Enriched)' variants in the calculator to compare exact machine footprints.",
    "Power figures reflect active facility draw (e.g., Smelter 2 MW, Enrichment Chamber 4 MW, Assembler 6 MW, Growth Chamber 6 MW) while personal Armoury gear crafts at 0 MW grid load. Bookmark or copy the browser URL after selecting any module to share your exact target rate."
],
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
        "iconUrl": "/images/games/main-sequence/items/T_Silica.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_TitaniumOre.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_WaterIce1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Graphite.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_NickelOre.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_CobaltOre.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_NitrogenGas.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_LeavesIcon.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_MissileItem.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_IridiumOre.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Protomatter.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Lonsdaleite.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_RelicShard.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_StellarSurveyData.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_RelicCore.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Exoskeleton_1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Backpack_1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Exoskeleton_1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Backpack_1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Exoskeleton_1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Exosuit.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_SiliconWafer2.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_TitaniumPlates1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Graphene.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_NickelPlates1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_CobaltPlates.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Nutrients.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Xenoarchaea.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Xenobacteria.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Xenoeukarya.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_EnrichedTitanium.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_ReinforcedGlass1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_EnrichedNickel.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_HydrogenFuel.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_EnrichedCobalt.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Coolant.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_IridiumPlates2.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_BasicMotor.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_TitaniumPlates1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_NickelPlates1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_CobaltPlates.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_LightweightFrame1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_MagneticCoil1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_DeuteriumFuel1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_HullPlate.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Capacitor1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Enzyme.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Superalloy.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_RepairKit.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_BasicCircuit.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_RelicCapacitor.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Servomotor.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_AlphaProtein.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_BetaProtein.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_RepairKit.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_SuperalloyFrame.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_ReinforcedPlate.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Backpack_1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_ChromaticAlloy.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_RepairKit.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_DetectorArray.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_ContainmentCoil1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_MaglevCoupling.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Biolattice.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_MissileItem.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_ServoPlate.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_ChitinComposite.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_AdvancedPlate.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_WarpFuel1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_AdvancedCircuit.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_SuperconductorCoil1.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_EmptySimulationMatrix.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_EncodedSimulationMatrix.png",
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
        "iconUrl": "/images/games/main-sequence/items/T_Multisensor.png",
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
  };
