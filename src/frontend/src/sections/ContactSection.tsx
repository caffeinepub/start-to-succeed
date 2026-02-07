import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { LazyGoogleMapEmbed } from '../components/LazyGoogleMapEmbed';
import { getPhoneLink, getWhatsAppLink } from '../lib/contactLinks';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to learn more about our courses or to schedule a visit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Apt, 171, opp. Adya Green, P.O. Garia Gardens,
                      <br />
                      Garia, Rajpur Sonarpur,
                      <br />
                      West Bengal 700084
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone & WhatsApp</h4>
                    <a
                      href={getPhoneLink()}
                      className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                      062895 14099
                    </a>
                    <br />
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Find Us</h3>
              <LazyGoogleMapEmbed />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Send Us a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
