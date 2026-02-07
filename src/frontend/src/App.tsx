import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeSection } from './sections/HomeSection';
import { AboutSection } from './sections/AboutSection';
import { CoursesSection } from './sections/CoursesSection';
import { ContactSection } from './sections/ContactSection';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';
import { Toaster } from '@/components/ui/sonner';
import { useEffect } from 'react';
import { updateSEO } from './lib/seo';

function App() {
  useEffect(() => {
    // Set default SEO for home page
    updateSEO({
      title: 'Start To Succeed - Premier Institute for CBSE, ICSE & ISC Board',
      description: 'Start To Succeed offers expert coaching for Classes 6-12 and competitive exam preparation for IIT-JEE & NEET. Join the premier educational institute in Garia, Kolkata.',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyWhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;
