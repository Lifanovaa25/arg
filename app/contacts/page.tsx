import { NextPage, Metadata } from 'next';
import { Contacts } from '@/src/page/contacts';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'royal-equipment.ae',
};

const ContactsPage: NextPage = () => {
  return <Contacts />;
};

export default ContactsPage;
