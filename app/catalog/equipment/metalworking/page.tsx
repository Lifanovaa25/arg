import { NextPage, Metadata } from 'next';
import { Metalworking } from '@/src/page/(catalog-pages)/metalworking';

export const metadata: Metadata = {
  title: 'Metalworking',
  description: 'royal-equipment.ae',
};

const MetalworkingPage: NextPage = () => {
  return <Metalworking />;
};

export default MetalworkingPage;
