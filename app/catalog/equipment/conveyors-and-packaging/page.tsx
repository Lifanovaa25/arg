import { NextPage, Metadata } from 'next';
import { ConveyorsAndPackaging } from '@/src/page/(catalog-pages)/conveyors-and-packaging';

export const metadata: Metadata = {
  title: 'Conveyors and Packaging',
  description: 'royal-equipment.ae',
};

const ConveyorsAndPackagingPage: NextPage = () => {
  return <ConveyorsAndPackaging />;
};

export default ConveyorsAndPackagingPage;
