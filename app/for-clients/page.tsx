import { NextPage, Metadata } from 'next';
import { ForClients } from '@/src/page/for-clients';

export const metadata: Metadata = {
  title: 'For clients',
  description: 'royal-equipment.ae',
};

const AboutUsPage: NextPage = () => {
  return <ForClients />;
};

export default AboutUsPage;
