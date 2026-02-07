import { SiFacebook } from 'react-icons/si';
import { MapPin, Phone, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { getPhoneLink, getWhatsAppLink } from '../lib/contactLinks';

export function SiteFooter() {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/generated/sts-logo.dim_512x512.png"
                alt="Start To Succeed"
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">Start To Succeed</h3>
                <p className="text-sm text-muted-foreground">Premier Institute</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A Premier Institute of CBSE, ICSE & ISC Board. Expert coaching for Classes 6-12 and
              competitive exam preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  Apt, 171, opp. Adya Green, P.O. Garia Gardens, Garia, Rajpur Sonarpur, West
                  Bengal 700084
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href={getPhoneLink()}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  062895 14099
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-foreground">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/188cZvXSkN/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-blue-50 text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://share.google/sypTjKuMc8v1bhgd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-red-50 text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Google My Business"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2026. Built with ❤️ using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
