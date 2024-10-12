type Link = {
  href: string;
  label: string;
};

export interface MobileMenuProps {
  isOpenSettings: boolean;
  setIsOpenSettings: (isOpenSettings: boolean) => void;
  links: Link[];
}
