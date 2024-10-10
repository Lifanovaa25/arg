import { NextPage, Metadata } from 'next';
import { Search } from '@/src/page/search'; 

export const metadata: Metadata = {
  title: 'Search',
  description: 'royal-equipment.ae',
};

const SearchPage: NextPage = () => {
  return <Search />;
};

export default SearchPage;
