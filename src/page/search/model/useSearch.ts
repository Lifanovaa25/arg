import { useQuery } from '@tanstack/react-query';
import { searchProducts } from '../api/search';

//TODO: доделать
export const useSearchProducts = (search: any) => {
  console.log(search);
  const { data, isLoading } = useQuery({
    queryKey: ['search', search],
    queryFn: () => searchProducts(data),
    select: ({ data }) => data.results,
  });

  return { data, isLoading };
};
