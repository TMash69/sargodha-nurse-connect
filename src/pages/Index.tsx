import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const quickAccess = [
    {
      icon: BookOpen,
      title: "Explore Our Courses",
      description: "Discover our comprehensive nursing programs",
      href: "/courses",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "About Our College",
      description: "Learn about our mission, vision, and values",
      href: "/about", 
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Apply for Admission",
      description: "Start your nursing career journey with us",
      href: "/admissions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Latest Updates",
      description: "Read our blog for nursing insights and news",
      href: "/blog",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Quick Access Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-muted-foreground">
              Find what you're looking for quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <Link key={index} to={item.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  <div className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
