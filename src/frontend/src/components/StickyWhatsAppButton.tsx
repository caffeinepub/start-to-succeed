import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '../lib/contactLinks';

export function StickyWhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
}
