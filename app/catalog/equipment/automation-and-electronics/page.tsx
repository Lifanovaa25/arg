import { NextPage, Metadata } from 'next';
import { AutomationAndElectronics } from '@/src/page/(catalog-pages)/automation-and-electronics';
export const metadata: Metadata = {
  title: 'Automation and Electronics',
  description: 'royal-equipment.ae',
};

const AutomationAndElectronicsPage: NextPage = () => {
  return <AutomationAndElectronics />;
};

export default AutomationAndElectronicsPage;
