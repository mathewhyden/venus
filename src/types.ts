export interface Product {
  id: string;
  name: string;
  category: 'kitchen' | 'handles' | 'doors' | 'wardrobe' | 'glass' | 'fasteners';
  categoryLabel: string;
  finish: string;
  material: string;
  description: string;
  features: string[];
  imageUrl: string;
  popular?: boolean;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export interface ContactInfo {
  storeName: string;
  tagline: string;
  executiveName: string;
  executiveTitle: string;
  executiveMobile: string;
  otherMobiles: string[];
  landline: string;
  address: {
    doorNo: string;
    street: string;
    city: string;
    pincode: string;
    landmark?: string;
  };
  email: string;
  workingHours: string;
}
