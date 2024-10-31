export interface ProductCard {
  image: string;
  title: string;
  link: string;
  manufacturer: string;
  price: string | number;
  id: number;
  quantity: number;
}
export interface Params {
  key: string;
  value: string;
}[]
export interface CartContextProps {
  cartItems: ProductCard[],
  increaseItemQuantity: (id: number) => void,
  decreaseItemQuantity: (id: number) => void,
  getItemQuantity: (id: number) => number,
  totalQuantity: () => number,
  onOpenCart: () => void,
  onCloseCart: () => void,
  onRemoveCard: (id: number) => void,
  addTocart:(id:number)=>void
}