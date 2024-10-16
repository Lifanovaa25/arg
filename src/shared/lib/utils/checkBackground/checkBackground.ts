export const checkBackground = (path: string) => {
  switch (path) {
    case '/catalog/equipment/automation-and-electronics':
      return '/images/automation-and-electronics-bg.webp';
    case '/catalog/equipment/pumps':
      return '/images/pumps-bg.webp';
    case '/catalog/equipment/laboratory-equipment':
      return '/images/laboratory-equipment-bg.webp';
    case '/catalog/equipment/pipeline-equipment':
      return '/images/pipeline-equipment-bg.webp';
    case '/catalog/equipment/filtration-equipment':
      return '/images/filtration-equipment-bg.webp';
    case '/catalog/equipment/printing-equipment':
      return '/images/printing-equipment-bg.webp';
    case '/catalog/equipment/electric-motors':
      return '/images/electric-motors-bg.webp';
    case '/catalog/equipment/hydraulic-equipment':
      return '/images/hydraulic-equipment-bg.webp';
    case '/catalog/equipment/conveyors-and-packaging':
      return '/images/conveyors-and-packaging-bg.webp';
    case '/catalog/equipment/metalworking':
      return '/images/metalworking-bg.webp';
    case '/catalog/equipment/pneumatic-equipment':
      return '/images/pneumatic-equipment-bg.webp';
    case '/catalog/equipment/spare-parts':
      return '/images/spare-parts-bg.webp';
    case '/catalog/equipment/thermal-equipment':
      return '/images/thermal-equipment-bg.webp';
    case '/catalog/equipment/transmission-equipment':
      return '/images/transmission-equipment-bg.webp';
    case '/catalog/equipment/mining-equipment':
      return '/images/mining-equipment-bg.webp';
    case '/catalog/equipment/replacement-spare-parts':
      return null;

    //
    case '/catalog/industry/oil-and-gas':
      return;
    case '/catalog/industry/fuel-and-energy':
      return;
    case '/catalog/industry/metallurgy':
      return;
    case '/catalog/industry/chemical':
      return;
    case '/catalog/industry/food':
      return;
    case '/catalog/industry/mining':
      return;
    case '/catalog/industry/pulp-and-paper':
      return;
    case '/catalog/industry/pharmaceutical':
      return '/images/laboratory-equipment-bg.webp';

    case '/catalog/industry/shipbuilding':
      return;
    case '':
      return;
    case '':
      return;
    default:
      return null;
  }
};
