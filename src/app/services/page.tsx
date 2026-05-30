import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCards from '@/components/services/ServiceCards';
import ContactForm from '@/components/services/ContactForm';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'In Extremis Consulting supports industry clients with go-to-market strategy, brand positioning, and credentialed access to specialized products and partnerships.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ContactForm />
    </>
  );
}
