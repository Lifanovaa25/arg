import { NextPage, Metadata } from 'next';
import { Cart } from '@/src/page/cart';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'royal-equipment.ae',
};

const CartPage: NextPage = () => {
  return <Cart />;
};

export default CartPage;
