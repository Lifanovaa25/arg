import { NextPage, Metadata } from 'next';
import { Pumps } from '@/src/page/(catalog-pages)/pumps';

export const metadata: Metadata = {
  title: 'Pumps',
  description: 'royal-equipment.ae',
};

const PumpsPage: NextPage = () => {
  return <Pumps />;
};

export default PumpsPage;
