import { NextPage, Metadata } from 'next';
import { MarinaEquipment } from '@/src/page/(catalog-pages)/marina-equipment';

export const metadata: Metadata = {
  title: 'Marina Equipment',
  description: 'royal-equipment.ae',
};

const MarinaEquipmentPage: NextPage = () => {
  return <MarinaEquipment />;
};

export default MarinaEquipmentPage;
