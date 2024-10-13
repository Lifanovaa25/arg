import { NextPage, Metadata } from 'next';
import { Product } from '@/src/page/product/';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'royal-equipment.ae',
};

const ProductPage: NextPage = () => {
  return <Product />;
};

export default ProductPage;
