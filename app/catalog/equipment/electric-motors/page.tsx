import { NextPage, Metadata } from 'next';
import { ElectricMotors } from '@/src/page/(catalog-pages)/electric-motors';

export const metadata: Metadata = {
  title: 'Electric Motors',
  description: 'royal-equipment.ae',
};

const ElectricMotorsPage: NextPage = () => {
  return <ElectricMotors />;
};

export default ElectricMotorsPage;
