import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Calendar, Star, CheckCircle, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const quickAccess = [
    {
      icon: BookOpen,
      title: "Explore Our Courses",
      description: "Discover our comprehensive nursing programs",
      href: "/courses",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Users,
      title: "About Our College",
      description: "Learn about our mission, vision, and values",
      href: "/about", 
      gradient: "from-accent to-primary"
    },
    {
      icon: Award,
      title: "Apply for Admission",
      description: "Start your nursing career journey with us",
      href: "/admissions",
      gradient: "from-primary-dark to-accent"
    },
    {
      icon: Calendar,
      title: "Latest Updates",
      description: "Read our blog for nursing insights and news",
      href: "/blog",
      gradient: "from-accent to-primary-light"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "World-Class Education",
      description: "Internationally recognized nursing programs with modern curriculum"
    },
    {
      icon: CheckCircle,
      title: "100% Placement Rate",
      description: "Our graduates are employed in top hospitals globally"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Degrees accepted worldwide with international partnerships"
    },
    {
      icon: Zap,
      title: "Modern Facilities",
      description: "State-of-the-art labs, simulation centers, and digital libraries"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              🚀 Explore Our Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate through our comprehensive nursing education ecosystem with ease
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {quickAccess.map((item, index) => (
              <Link key={index} to={item.href}>
                <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer h-full border-0 bg-gradient-to-br from-background to-muted/30">
                  <div className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      Explore Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Features Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Choose Us?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in nursing education with our proven track record
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-b from-background to-primary/5">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
