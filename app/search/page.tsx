import { NextPage, Metadata } from 'next';
import { Search } from '@/src/page/search'; 
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Search',
  description: 'royal-equipment.ae',
};

const SearchPage: NextPage = () => {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
};

export default SearchPage;
