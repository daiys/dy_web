export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
}

export enum PageView {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  ABOUT = 'ABOUT',
  NEWS = 'NEWS',
  CASES = 'CASES',
  CONTACT = 'CONTACT',
  ADMIN = 'ADMIN'
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial Rockwool Board',
    category: 'Insulation',
    description: 'High-density mineral wool insulation board designed for thermal and acoustic insulation in industrial applications. Excellent fire resistance and durability.',
    imageUrl: 'https://picsum.photos/id/1018/800/600',
    features: ['Fire Resistant', 'Sound Absorption', 'Thermal Efficiency']
  },
  {
    id: '2',
    name: 'Aluminum Jacketing',
    category: 'Metal Cladding',
    description: 'Premium aluminum jacketing with moisture barrier, providing weather protection for mechanical insulation systems in pipelines and tanks.',
    imageUrl: 'https://picsum.photos/id/192/800/600',
    features: ['Corrosion Resistant', 'Durable Finish', 'Easy Installation']
  },
  {
    id: '3',
    name: 'Ceramic Fiber Blanket',
    category: 'High Temp',
    description: 'Lightweight, flexible ceramic fiber blanket for high-temperature insulation up to 1260°C. Ideal for furnace linings and kiln insulation.',
    imageUrl: 'https://picsum.photos/id/204/800/600',
    features: ['High Tensile Strength', 'Low Thermal Conductivity', 'Thermal Shock Resistance']
  }
];