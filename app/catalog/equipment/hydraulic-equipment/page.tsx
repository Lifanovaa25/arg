import { NextPage, Metadata } from 'next';
import { HydraulicEquipment } from '@/src/page/(catalog-pages)/hydraulic-equipment';

export const metadata: Metadata = {
  title: 'Hydraulic Equipment',
  description: 'royal-equipment.ae',
};

const HydraulicEquipmentPage: NextPage = () => {
  return <HydraulicEquipment />;
};

export default HydraulicEquipmentPage;
