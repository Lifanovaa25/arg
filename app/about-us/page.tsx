import { NextPage, Metadata } from 'next';
import { AboutUs } from '@/src/page/about-us';

export const metadata: Metadata = {
  title: 'About us',
  description: 'royal-equipment.ae',
};

const AboutUsPage: NextPage = () => {
  return <AboutUs />;
};

export default AboutUsPage;
