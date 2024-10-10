import { NextPage, Metadata } from 'next';
import { LaboratoryEquipment } from '@/src/page/(catalog-pages)/laboratory-equipment';

export const metadata: Metadata = {
  title: 'Laboratory equipment',
  description: 'royal-equipment.ae',
};

const LaboratoryEquipmentPage: NextPage = () => {
  return <LaboratoryEquipment />;
};

export default LaboratoryEquipmentPage;
