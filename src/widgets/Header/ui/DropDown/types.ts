export interface DropDownProps {
  isDropDown: boolean;
  setIsDropDown: (isDropDown: boolean) => void;
}

export interface ApiType {
  typeName: string;
  typeUrl: string;
}

export interface ApiCategory {
  categoryName: string;
  categoryUrl: string;
  types: ApiType[];
}

export interface ApiTab {
  catalogTabName: string;
  categories: ApiCategory[];
}

export interface ApiResponse {
  isSuccess: boolean;
  isFailure: boolean;
  error: {
    code: string;
    description: string;
    type: string;
  };
  value: ApiTab[];
}

export interface MenuType {
  typeName: string;
  typeUrl: string;
}

export interface MenuCategory {
  categoryName: string;
  categoryUrl: string;
  types: MenuType[];
}

export interface MenuTab {
  tabName: string;
  categories: MenuCategory[];
}
