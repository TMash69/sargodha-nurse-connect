import { Heart, Target, Eye, Award, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import nursingStudents from "@/assets/nursing-students.jpg";
import clinicalTraining from "@/assets/clinical-training.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We instill empathy and compassion in all our nursing professionals"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in nursing education and practice"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Fostering collaborative healthcare teams for better patient outcomes"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Preparing nurses to meet international healthcare standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Principal's Welcome Message */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome to College of Nursing Sargodha
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A message from our Principal
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-none shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <blockquote className="text-lg text-foreground leading-relaxed italic mb-6">
                  "For over two decades, the College of Nursing Sargodha has been at the forefront 
                  of nursing education in Pakistan. We are committed to nurturing compassionate, 
                  skilled, and knowledgeable healthcare professionals who will make a meaningful 
                  difference in the lives of patients and communities worldwide."
                </blockquote>
                <div>
                  <p className="font-semibold text-primary">Dr. Fatima Khan</p>
                  <p className="text-sm text-muted-foreground">Principal, College of Nursing Sargodha</p>
                  <p className="text-sm text-muted-foreground">PhD in Nursing, 25+ years experience</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                To provide exceptional nursing education that combines theoretical knowledge 
                with practical experience, preparing competent and compassionate nurses who 
                will excel in diverse healthcare settings and contribute to improving global 
                health outcomes.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-accent">Our Vision</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                To be recognized as the premier nursing institution in South Asia, known for 
                innovation in healthcare education, research excellence, and producing nursing 
                leaders who transform healthcare delivery worldwide.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={nursingStudents}
              alt="Nursing students in laboratory"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={clinicalTraining}
              alt="Clinical training in hospital"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Why Choose CNS?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Experienced Faculty</h4>
                  <p className="text-muted-foreground">Learn from industry experts with decades of clinical and academic experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Modern Facilities</h4>
                  <p className="text-muted-foreground">State-of-the-art laboratories, simulation centers, and clinical training areas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Clinical Partnerships</h4>
                  <p className="text-muted-foreground">Partnerships with leading hospitals for hands-on clinical experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Global Opportunities</h4>
                  <p className="text-muted-foreground">International exchange programs and global career placement assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;