import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function LazyGoogleMapEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d88.3832!3d22.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzExLjAiTiA4OMKwMjInNTkuNSJF!5e0!3m2!1sen!2sin!4v1234567890';

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg flex items-center justify-center border border-border">
        <Button
          onClick={() => setIsLoaded(true)}
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <MapPin className="h-5 w-5" />
          Load Map
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Start To Succeed Location"
      />
    </div>
  );
}
