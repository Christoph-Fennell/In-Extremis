import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import FounderBio from '@/components/about/FounderBio';
import CredentialsSection from '@/components/about/CredentialsSection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'In Extremis Consulting is led by Chase Welch, a Marine Corps combat veteran with two decades in the defense, firearms, and aerospace industries.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderBio />
      <CredentialsSection />
    </>
  );
}
