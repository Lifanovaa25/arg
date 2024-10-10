import { NextPage, Metadata } from 'next';
import { FiltrationEquipment } from '@/src/page/(catalog-pages)/filtration-equipment';

export const metadata: Metadata = {
  title: 'Filtration Equipment',
  description: 'royal-equipment.ae',
};

const FiltrationEquipmentPage: NextPage = () => {
  return <FiltrationEquipment />;
};

export default FiltrationEquipmentPage;
