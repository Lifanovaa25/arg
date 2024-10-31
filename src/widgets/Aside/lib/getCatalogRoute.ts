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
  '/catalog/industry/oil-and-gas',
  '/catalog/industry/fuel-and-energy',
  '/catalog/industry/metallurgy',
  '/catalog/industry/chemical',
  '/catalog/industry/food',
  '/catalog/industry/mining',
  '/catalog/industry/pulp-and-paper',
  '/catalog/industry/pharmaceutical',
  '/catalog/industry/shipbuilding',
];

export const getCatalogRoute = (pathname: string) => {
  return catalogRoutes.some((route) => pathname === route);
};
