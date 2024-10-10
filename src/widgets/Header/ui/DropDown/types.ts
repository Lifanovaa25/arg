export interface DropDownProps {
  isDropDown: boolean;
  setIsDropDown: (isDropDown: boolean) => void;
}

export type ItemType = {
  typeName: string;
  typeUrl: string;
};

export interface MenuItem {
  categoryName: string;
  types: ItemType[];
}
