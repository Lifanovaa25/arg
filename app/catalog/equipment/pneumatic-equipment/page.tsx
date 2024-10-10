import { NextPage, Metadata } from 'next';
import { PneumaticEquipment } from '@/src/page/(catalog-pages)/pneumatic-equipment';

export const metadata: Metadata = {
  title: 'Pneumatic Equipment',
  description: 'royal-equipment.ae',
};

const PneumaticEquipmentPage: NextPage = () => {
  return <PneumaticEquipment />;
};

export default PneumaticEquipmentPage;
