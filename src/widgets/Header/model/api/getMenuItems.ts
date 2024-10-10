import { getMenuItemsUrl } from '@/src/shared/api/config';
import { axiosClassic } from '@/src/shared/api/helper';

export const HeaderService = {
  async getMenuItems() {
    return await axiosClassic.get(getMenuItemsUrl());
  },
};
