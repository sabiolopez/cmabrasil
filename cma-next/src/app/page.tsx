'use client';

import { ImmersiveHero } from '@/components/ImmersiveHero';
import { IntroSection } from '@/components/IntroSection';
import { ContentGrid } from '@/components/ContentGrid';

export default function Home() {
  return (
    <div className="bg-cma-bg selection:bg-cma-teal/20 selection:text-cma-teal-dark font-sans">
      <main>
        <ImmersiveHero />
        <IntroSection />
        <ContentGrid />
      </main>
    </div>
  );
}
