import { NextPage, Metadata } from 'next';
import { Catalog } from '@/src/page/catalog';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'royal-equipment.ae',
};

const CatalogPage: NextPage = () => {
  return <Catalog />;
};

export default CatalogPage;
