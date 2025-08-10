import { ArrowRight, Award, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import campusHero from "@/assets/campus-hero.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "2,500+" },
    { icon: GraduationCap, label: "Graduates", value: "15,000+" },
    { icon: Award, label: "Years of Excellence", value: "25+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={campusHero}
          alt="College of Nursing Sargodha Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80 dark:from-background/95 dark:via-background/85 dark:to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white dark:text-foreground">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 dark:bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white dark:text-primary">
              🎓 Admissions Open for Fall 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white dark:text-foreground">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-yellow-300 to-yellow-100 dark:from-primary dark:to-accent bg-clip-text text-transparent">
                Healthcare
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 dark:text-muted-foreground mb-8 leading-relaxed">
              Join Pakistan's premier nursing institution. With world-class faculty, 
              state-of-the-art facilities, and a legacy of excellence, we prepare 
              compassionate healthcare professionals ready to serve globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/admissions">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/campus-life">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
                >
                  Virtual Campus Tour
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 dark:bg-card/80 backdrop-blur-sm border-white/20 dark:border-border p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 dark:bg-primary/20 rounded-lg">
                      <stat.icon className="w-6 h-6 text-white dark:text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white dark:text-foreground">{stat.value}</div>
                      <div className="text-sm text-white/80 dark:text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Quick Actions Card */}
          <div className="lg:ml-auto">
            <Card className="bg-white/95 dark:bg-card/95 backdrop-blur-sm p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Quick Access</h3>
              
              <div className="space-y-4">
                <Link to="/courses">
                  <Button variant="outline" className="w-full justify-start text-left h-auto p-4 hover:bg-primary/5">
                    <div>
                      <div className="font-semibold">📚 Course Information</div>
                      <div className="text-sm text-muted-foreground">Browse our nursing programs</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/admissions">
                  <Button variant="outline" className="w-full justify-start text-left h-auto p-4 hover:bg-primary/5">
                    <div>
                      <div className="font-semibold">💰 Fee Structure</div>
                      <div className="text-sm text-muted-foreground">View fees and scholarships</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/admissions">
                  <Button variant="outline" className="w-full justify-start text-left h-auto p-4 hover:bg-primary/5">
                    <div>
                      <div className="font-semibold">📅 Important Dates</div>
                      <div className="text-sm text-muted-foreground">Admission deadlines</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button variant="outline" className="w-full justify-start text-left h-auto p-4 hover:bg-primary/5">
                    <div>
                      <div className="font-semibold">📞 Contact Admissions</div>
                      <div className="text-sm text-muted-foreground">Get personalized guidance</div>
                    </div>
                  </Button>
                </Link>
              </div>

              <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Our admission counselors are here to guide you through the process.
                </p>
                <Link to="/contact">
                  <Button size="sm" className="w-full">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white dark:text-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-white dark:border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white dark:bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;