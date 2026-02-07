import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../lib/contactLinks';
import { scrollToSection } from '../lib/scroll';

export function HomeSection() {
  const whyChooseItems = [
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success',
    },
    {
      icon: Users,
      title: 'Small Batch Size',
      description: 'Personalized attention with limited students per batch',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Consistent track record of excellent board and competitive exam results',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      description: 'Well-researched notes and practice materials for all subjects',
    },
    {
      icon: Target,
      title: 'Focused Approach',
      description: 'Targeted preparation for both board exams and competitive tests',
    },
    {
      icon: TrendingUp,
      title: 'Regular Assessment',
      description: 'Periodic tests and performance tracking to ensure continuous improvement',
    },
  ];

  const courses = [
    {
      title: 'Board Classes (6-12)',
      description: 'CBSE, ICSE & ISC curriculum with comprehensive coverage',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'IIT-JEE Foundation',
      description: 'Early preparation for engineering entrance exams',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'NEET Foundation',
      description: 'Medical entrance exam preparation from the basics',
      gradient: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="home" className="scroll-mt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/sts-hero-bg.dim_1600x900.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Start To Succeed
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              A Premier Institute of CBSE, ICSE & ISC Board
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert coaching for Classes 6 to 12 with specialized foundation courses for IIT-JEE
              & NEET competitive exams
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
              >
                <a href={getPhoneLink()}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-green-500 text-green-600 hover:bg-green-50"
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Start To Succeed?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a nurturing environment with proven teaching methodologies to help
              students excel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseItems.map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Offered Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Courses Offered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to build strong foundations and achieve excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('courses')}
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their academic goals with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Enroll Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <a href={getPhoneLink()}>Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
