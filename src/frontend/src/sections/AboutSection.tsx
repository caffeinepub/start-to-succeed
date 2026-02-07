import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, BookOpen } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start To Succeed is committed to providing quality education and nurturing young minds
            to achieve academic excellence and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <Card className="border-2 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 mx-auto">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower students with comprehensive knowledge, critical thinking skills, and
                confidence to excel in board examinations and competitive entrance tests. We strive
                to create a learning environment that fosters curiosity, discipline, and academic
                excellence.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 hover:border-red-500 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center mb-6 mx-auto">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the premier educational institute in the region, known for
                producing well-rounded students who not only achieve outstanding academic results
                but also develop strong character, leadership qualities, and a lifelong love for
                learning.
              </p>
            </CardContent>
          </Card>

          {/* Teaching Methodology */}
          <Card className="border-2 hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Teaching Methodology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our student-centric approach combines traditional teaching with modern pedagogical
                techniques. We focus on concept clarity, regular practice, personalized attention,
                and continuous assessment to ensure every student reaches their full potential and
                achieves their academic goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-red-50 border-0">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Student-Centric & Results-Oriented
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  At Start To Succeed, we believe that every student is unique and has the
                  potential to excel. Our experienced faculty members are dedicated to
                  understanding each student's learning style, strengths, and areas for
                  improvement.
                </p>
                <p className="leading-relaxed">
                  We maintain small batch sizes to ensure personalized attention and create a
                  supportive learning environment where students feel comfortable asking questions
                  and expressing their doubts. Our comprehensive study materials, regular tests,
                  and performance tracking help students stay on track and continuously improve.
                </p>
                <p className="leading-relaxed">
                  With a proven track record of excellent results in board examinations and
                  competitive entrance tests, we are committed to helping students achieve their
                  dreams of academic success and secure admission to top institutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
