export interface ProductCard {
  image: string;
  title: string;
  link:string,
  manufacturer: string;
  price: string | number ;
  id: number;
  quantity?: number;
}
