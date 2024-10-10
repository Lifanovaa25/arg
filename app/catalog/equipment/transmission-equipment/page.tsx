import { NextPage, Metadata } from 'next';
import { TransmisionEquipment } from '@/src/page/(catalog-pages)/transmission-equipment';

export const metadata: Metadata = {
  title: 'Transmision Equipment',
  description: 'royal-equipment.ae',
};

const TransmisionEquipmentPage: NextPage = () => {
  return <TransmisionEquipment />;
};

export default TransmisionEquipmentPage;
