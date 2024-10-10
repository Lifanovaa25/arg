import { NextPage, Metadata } from 'next';
import { PrintingEquipment } from '@/src/page/(catalog-pages)/printing-equipment';

export const metadata: Metadata = {
  title: 'Printing Equipment',
  description: 'royal-equipment.ae',
};

const PrintingEquipmentPage: NextPage = () => {
  return <PrintingEquipment />;
};

export default PrintingEquipmentPage;
