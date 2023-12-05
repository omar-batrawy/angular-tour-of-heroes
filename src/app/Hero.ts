export interface Hero {
  id: number;
  title: string;
  description: string;
  price: number; // Changed from string to number
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
