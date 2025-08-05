import { MapPin, Home, Book, Coffee, Users, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CampusLife = () => {
  const facilities = [
    {
      icon: Book,
      title: "Modern Library",
      description: "Extensive collection of nursing and medical literature with digital resources",
      image: "📚"
    },
    {
      icon: Users,
      title: "Simulation Lab",
      description: "State-of-the-art clinical simulation for hands-on learning",
      image: "🏥"
    },
    {
      icon: Coffee,
      title: "Student Cafeteria",
      description: "Nutritious meals and social gathering space for students",
      image: "🍽️"
    },
    {
      icon: Home,
      title: "Hostel Facilities",
      description: "Safe and comfortable accommodation for outstation students",
      image: "🏠"
    }
  ];

  const studentLife = [
    {
      title: "Clinical Rotations",
      description: "Hands-on experience in partner hospitals across various departments",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Student Organizations",
      description: "Nursing student association, volunteer groups, and professional societies",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cultural Events",
      description: "Annual festivals, nursing day celebrations, and talent shows",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Sports & Recreation",
      description: "Indoor and outdoor sports facilities for physical wellness",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const campusImages = [
    { title: "Main Campus Building", description: "Modern architecture with state-of-the-art facilities" },
    { title: "Nursing Lab", description: "Fully equipped simulation and practice areas" },
    { title: "Library Reading Hall", description: "Quiet study spaces with extensive resources" },
    { title: "Student Common Area", description: "Social spaces for relaxation and interaction" },
    { title: "Hostel Rooms", description: "Comfortable accommodation with modern amenities" },
    { title: "Cafeteria", description: "Nutritious meals in a pleasant dining environment" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Campus Life & Facilities
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience a vibrant campus community where learning meets life. Discover our 
              world-class facilities and the rich student experience we offer.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Campus Facilities</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for an exceptional educational experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center p-6">
                <div className="text-6xl mb-4">{facility.image}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Campus Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our beautiful campus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusImages.map((image, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Camera className="w-4 h-4 mr-2" />
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Life</h2>
            <p className="text-lg text-muted-foreground">
              Beyond academics - building friendships, skills, and memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {studentLife.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Hostel Facilities</h2>
              <p className="text-muted-foreground mb-6">
                Our on-campus hostel provides a safe, comfortable, and conducive environment 
                for students from all over Pakistan. With modern amenities and 24/7 security, 
                students can focus on their studies while enjoying a home-away-from-home experience.
              </p>
              
              <div className="space-y-4">
                {[
                  "Fully furnished rooms with study areas",
                  "24/7 security and CCTV monitoring", 
                  "High-speed internet connectivity",
                  "Common rooms and recreational areas",
                  "Mess facility with nutritious meals",
                  "Medical room with first aid facilities"
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-gradient-to-r from-primary to-accent mr-4">
                  Hostel Application
                </Button>
                <Button variant="outline">
                  View Hostel Fees
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
                <div className="text-center">
                  <Home className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Hostel Features</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Bed Capacity</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Security</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">WiFi</div>
                      <div className="text-sm text-muted-foreground">High Speed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">AC</div>
                      <div className="text-sm text-muted-foreground">Rooms</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Transportation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Location & Transportation</h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located with easy access to the city
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">Our Location</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>📍 University Road, Sargodha, Punjab, Pakistan</p>
                <p>🚌 Regular bus service from city center</p>
                <p>🚗 Ample parking space available</p>
                <p>🏥 Near major hospitals for clinical rotations</p>
                <p>🏪 Close to shopping centers and restaurants</p>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
              <h3 className="text-xl font-bold text-foreground mb-4">Virtual Campus Tour</h3>
              <p className="text-muted-foreground mb-6">
                Can't visit in person? Take our interactive virtual tour to explore 
                our campus facilities from the comfort of your home.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  Start Virtual Tour
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Campus Visit
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusLife;