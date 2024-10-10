import { NextPage, Metadata } from 'next';
import { AllMiningEquipment } from '@/src/page/(mining-equipment)/all-mining-equipment';

export const metadata: Metadata = {
  title: 'All mining equipment',
  description: 'royal-equipment.ae',
};

const AllMiningEquipmentPage: NextPage = () => {
  return <AllMiningEquipment />;
};

export default AllMiningEquipmentPage;
