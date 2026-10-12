'use client';

import { useEffect } from 'react';
import { SiteHeader } from '@/components/custom/site-header';
import { SiteFooter } from '@/components/custom/site-footer';
import { useApp, initHashRouting } from '@/lib/store';
import { HomeView } from '@/views/home-view';
import { NewsView } from '@/views/news-view';
import { AtlasView } from '@/views/atlas-view';
import { PathView } from '@/views/path-view';
import { ResourcesView } from '@/views/resources-view';
import { AboutView } from '@/views/about-view';
import { ContactView } from '@/views/contact-view';

export function AppShell() {
  const view = useApp((s) => s.view);

  useEffect(() => {
    const dispose = initHashRouting();
    return dispose;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <div key={view} className="view-enter">
          {view === 'home' && <HomeView />}
          {view === 'news' && <NewsView />}
          {view === 'atlas' && <AtlasView />}
          {view === 'path' && <PathView />}
          {view === 'resources' && <ResourcesView />}
          {view === 'about' && <AboutView />}
          {view === 'contact' && <ContactView />}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
