import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import MediaMomentSection from '@/components/home/MediaMomentSection';
import LogoStripSection from '@/components/home/LogoStripSection';

export const metadata: Metadata = {
  title: 'In Extremis Consulting — Strategic Defense Industry Advisory',
  description:
    'Strategic advisory for the defense, firearms, and aerospace industries. Two decades of hard-won experience, applied to the problems that decide whether a company wins or fades.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <MediaMomentSection />
      <LogoStripSection />
    </>
  );
}
