import { useQuery } from '@tanstack/react-query';
import { HeaderService } from '../api/getMenuItems';

export const useMenuItems = () => {
  const { data } = useQuery({
    queryKey: ['menu items'],
    queryFn: () => HeaderService.getMenuItems(),
    select: ({ data }) => data.value,
  });

  return { data };
};
