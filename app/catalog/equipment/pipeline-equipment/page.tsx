import { NextPage, Metadata } from 'next';
import { PipelineEquipment } from '@/src/page/(catalog-pages)/pipeline-equipment';

export const metadata: Metadata = {
  title: 'Pipeline Equipment',
  description: 'royal-equipment.ae',
};

const PipelineEquipmentPage: NextPage = () => {
  return <PipelineEquipment />;
};

export default PipelineEquipmentPage;
