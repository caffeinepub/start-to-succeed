import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Microscope, Calculator, MessageCircle } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { getWhatsAppLink } from '../lib/contactLinks';

export function CoursesSection() {
  const boardClasses = [
    {
      title: 'Class 6-8',
      description:
        'Foundation building with focus on core concepts in Mathematics, Science, English, and Social Studies. Interactive learning to develop strong fundamentals.',
      icon: BookOpen,
      color: 'blue',
    },
    {
      title: 'Class 9-10',
      description:
        'Comprehensive board exam preparation for CBSE, ICSE & ISC. Emphasis on concept clarity, problem-solving, and exam strategies for excellent results.',
      icon: BookOpen,
      color: 'indigo',
    },
    {
      title: 'Class 11-12',
      description:
        'Advanced coaching for senior secondary with specialized streams (Science, Commerce, Arts). Rigorous preparation for board exams and college entrance.',
      icon: BookOpen,
      color: 'purple',
    },
  ];

  const competitiveFoundation = [
    {
      title: 'IIT-JEE Foundation',
      description:
        'Early preparation for engineering entrance exams with focus on Physics, Chemistry, and Mathematics. Building problem-solving skills and analytical thinking from the foundation level.',
      icon: Calculator,
      color: 'orange',
    },
    {
      title: 'NEET Foundation',
      description:
        'Medical entrance exam preparation starting from basics. Comprehensive coverage of Physics, Chemistry, and Biology with emphasis on conceptual understanding and application.',
      icon: Microscope,
      color: 'red',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-100 to-blue-200',
      text: 'text-blue-600',
      border: 'hover:border-blue-500',
    },
    indigo: {
      bg: 'from-indigo-100 to-indigo-200',
      text: 'text-indigo-600',
      border: 'hover:border-indigo-500',
    },
    purple: {
      bg: 'from-purple-100 to-purple-200',
      text: 'text-purple-600',
      border: 'hover:border-purple-500',
    },
    orange: {
      bg: 'from-orange-100 to-orange-200',
      text: 'text-orange-600',
      border: 'hover:border-orange-500',
    },
    red: {
      bg: 'from-red-100 to-red-200',
      text: 'text-red-600',
      border: 'hover:border-red-500',
    },
  };

  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Courses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs tailored to meet the academic needs of students from Classes 6
            to 12, along with specialized foundation courses for competitive exams
          </p>
        </div>

        {/* Board Classes */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Board Classes (6-12)
            </h3>
            <p className="text-muted-foreground">
              CBSE, ICSE & ISC curriculum with comprehensive coverage and exam-focused preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {boardClasses.map((course, index) => (
              <Card
                key={index}
                className={`border-2 ${colorClasses[course.color as keyof typeof colorClasses].border} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${colorClasses[course.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4`}
                  >
                    <course.icon
                      className={`h-7 w-7 ${colorClasses[course.color as keyof typeof colorClasses].text}`}
                    />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      Enroll Now
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Foundation */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Competitive Foundation
            </h3>
            <p className="text-muted-foreground">
              Early preparation for IIT-JEE and NEET with focus on building strong fundamentals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {competitiveFoundation.map((course, index) => (
              <Card
                key={index}
                className={`border-2 ${colorClasses[course.color as keyof typeof colorClasses].border} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${colorClasses[course.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4`}
                  >
                    <course.icon
                      className={`h-7 w-7 ${colorClasses[course.color as keyof typeof colorClasses].text}`}
                    />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                    >
                      Enroll Now
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-red-600 border-0 text-white">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Not sure which course is right for you?
              </h3>
              <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
                Contact us for a free consultation and let our experts guide you to the perfect
                program for your academic goals
              </p>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Get Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
