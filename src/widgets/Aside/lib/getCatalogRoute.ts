const catalogRoutes = [
  '/catalog/equipment/laboratory-equipment',
  '/catalog/equipment/mining-equipment',
  '/catalog/equipment/thermal-equipment',
  '/catalog/equipment/automation-and-electronics',
  '/catalog/equipment/filtration-equipment',
  '/catalog/equipment/electric-motors',
  '/catalog/equipment/transmission-equipment',
  '/catalog/equipment/pneumatic-equipment',
  '/catalog/equipment/conveyors-and-packaging',
  '/catalog/equipment/pipeline-equipment',
  '/catalog/equipment/printing-equipment',
  '/catalog/equipment/metalworking',
  '/catalog/equipment/marine-equipment',
  '/catalog/equipment/hydraulic-equipment',
  '/catalog/equipment/spare-parts',
  '/catalog/equipment/pumps',
];

//TODO: На страницах каталога меняем цвет у header и aside на светлый. Т.к. bg-image темного цвета. Проблема в том что когда проскролим bg-image, цвет фона становиться светлым. И у header нужно опять менять на цвет по умолчанию. Доделать
export const getCatalogRoute = (pathname: string) => {
  return catalogRoutes.some((route) => pathname === route);
};
