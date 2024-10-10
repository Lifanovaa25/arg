import { NextPage, Metadata } from 'next';
import { ThermalEquipment } from '@/src/page/(catalog-pages)/thermal-equipment';

export const metadata: Metadata = {
  title: 'Thermal equipment',
  description: 'royal-equipment.ae',
};

const ThermalEquipmentPage: NextPage = () => {
  return <ThermalEquipment />;
};

export default ThermalEquipmentPage;
