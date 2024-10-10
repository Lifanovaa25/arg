import { NextPage, Metadata } from 'next';
import { SpareParts } from '@/src/page/(catalog-pages)/spare-parts';

export const metadata: Metadata = {
  title: 'Spare Parts',
  description: 'royal-equipment.ae',
};

const SparePartsPage: NextPage = () => {
  return <SpareParts />;
};

export default SparePartsPage;
