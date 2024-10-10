type Link = {
  href: string;
  label: string;
};

export interface MobileMenuProps {
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: (isOpenMobileMen: boolean) => void;
  links: Link[];
}
