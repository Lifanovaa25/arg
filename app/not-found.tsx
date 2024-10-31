import { NextPage, Metadata } from 'next';
import { NotFound } from '@/src/page/not-found';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'Page not found',
};

const NotFoundPage: NextPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
