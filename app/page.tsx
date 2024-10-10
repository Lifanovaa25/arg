import { NextPage, Metadata } from 'next';
import { Home } from '@/src/page/home';

export const metadata: Metadata = {
  title: 'Buy industrial equipment: products and parts',
  description: 'Home page',
};

const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;
