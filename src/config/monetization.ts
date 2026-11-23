/**
 * Unified 3-Tier Monetization Configuration for the Umbrella Game Tools Hub.
 *
 * All partner URLs and ad IDs default to empty strings so zero fake links or unapproved scripts
 * ever render during development or Google AdSense review. Fill any field to activate instantly.
 */
export type AffiliateOffer = {
  partnerName: string;
  label: string;
  badge: string;
  url: string;
};

export const monetizationConfig = {
  /** Tier 1: Premium Display Ad Networks (Single-domain authority compounds across all /[game]/ subdirectories) */
  ads: {
    adsense: {
      enabled: true,
      publisherClient: 'ca-pub-2671209221089689',
    },
    journeyGrowSiteId: '', // Journey by Mediavine (apply at 1,000 Tier-1 monthly sessions; $8–$30 RPM)
    nitropaySiteId: '',    // NitroPay gaming vertical ad script ID
  },

  /** Tier 2: High-Intent Gaming CPS Affiliates (Payoneer / Native USDC & BTC payouts) */
  cpsDefaults: {
    eldoradoBaseUrl: '', // Eldorado.gg Affiliate (12-month buyer attribution, native USDC / BTC payout)
    lootbarBaseUrl: '',  // LootBar.com Affiliate (5%–10% top-up commission, Payoneer payout)
    fanaticalBaseUrl: '', // CJ -> Fanatical official Steam keys
    humbleBaseUrl: '',    // Impact -> Humble Partner official Steam keys
  },

  /** Tier 3: Micro-SaaS One-Time Pro Unlock via Creem (Direct payout to Alipay / Bank) */
  proPass: {
    enabled: false,
    priceLabel: '$4.99 One-Time',
    creemCheckoutUrl: '', // Paste Creem product checkout URL when ready
    perks: [
      'Unlimited interactive map completion pins across all games',
      '1-Click local Steam save (.json / .sav) missing-collectible scanner',
      'CSV / Optimal crafting route export & ad-free workspace',
    ],
  },

  disclosure:
    'DropCodex tools are free to use. Purchases made through marked partner links (authorized Steam key stores, UID top-ups, or marketplaces) may earn a referral commission at no extra cost to you.',
};
