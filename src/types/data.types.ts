export interface Data {
  index: number;
  id: number;
  venueId: number;
  channelId: number | null;
  sourceId: number | null;
  menuId: number | null;
  sectionId: number | null;
  taxId: number | null;
  crossSellId: number | null;
  plu: string;
  externalId: string;
  name: string;
  internalName: string;
  description: string;
  additionalInfo: string | null;
  calories: number | null;
  deliveryFlag: number;
  pickupFlag: number;
  seatFlag: number;
  notesFlag: number;
  popularFlag: number;
  alcoholic: number;
  price: number;
  deliveryPriceOverride: number | null;
  seatPriceOverride: number | null;
  deliverooPriceOverride: number | null;
  deliveryHeroPriceOverride: number | null;
  glovoPriceOverride: number | null;
  justeatPriceOverride: number | null;
  uberPriceOverride: number | null;
  value: number | null;
  position: number | null;
  expiryDays: number | null;
  visible: number;
  availableDate: string | null;
  availabilityType: string;
  quantity: number;
  factor: number | null;
  eventCap: number | null;
  sku: string;
  voucherType: string;
  assignCode: string;
  assignCodeType: string | null;
  hasMessage: string | null;
  leadTime: string | null;
  leadDays: number | null;
  leadDaysTime: string | null;
  mealDeal: number;
  external: number;
  url: string | null;
  gfcId: number | null;
  created: string;
  updated: string;
  isOfferItem: boolean;
  modifierIds: number[];
  customTagIds: number[];
  earnTagIds: number[];
  awardTagIds: number[];
  modifiers: unknown[]; // Replace 'any' with a specific type if available
  offers: unknown[]; // Replace 'any' with a specific type if available
  images: unknown[]; // Replace 'any' with a specific type if available
  tags: unknown[]; // Replace 'any' with a specific type if available
  customTags: unknown[]; // Replace 'any' with a specific type if available
  earnTags: unknown[]; // Replace 'any' with a specific type if available
  awardTags: unknown[]; // Replace 'any' with a specific type if available
  tagActions: unknown[]; // Replace 'any' with a specific type if available
  gfcData: unknown | null; // Replace 'any' with a specific type if available
  availableForPublish: boolean;
  comboMeals: unknown | null; // Replace 'any' with a specific type if available
  comboMealId: number | null;
  available: boolean;
}
