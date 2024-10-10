import { NextPage, Metadata } from 'next';
import { MiningEquipment } from '@/src/page/(catalog-pages)/mining-equipment';

export const metadata: Metadata = {
  title: 'Mining equipment',
  description: 'royal-equipment.ae',
};

const MiningEquipmentPage: NextPage = () => {
  return <MiningEquipment />;
};

export default MiningEquipmentPage;
