export type Category = 'all' | 'editorial' | 'fashion' | 'still-life' | 'monochrome';

export interface ExifData {
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: string;
  lighting: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'editorial' | 'fashion' | 'still-life' | 'monochrome';
  categoryLabel: string;
  client: string;
  year: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  exif: ExifData;
  summary: string;
}

export interface StudioSpace {
  id: string;
  name: string;
  sqft: number;
  ceilingHeight: string;
  orientation: string;
  description: string;
  hourlyRate: number;
  dayRate: number;
  features: string[];
  image: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  category: 'editorial' | 'commercial' | 'rental';
  price: number;
  duration: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  isPopular?: boolean;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'lighting' | 'grip' | 'camera' | 'backdrops';
  model: string;
  includedInRental: boolean;
}

export interface BookingFormData {
  serviceId: string;
  spaceId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  projectBrief: string;
  selectedAddOns: string[];
}
