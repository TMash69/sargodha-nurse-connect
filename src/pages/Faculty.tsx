import { useState } from "react";
import { User, Award, BookOpen, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Faculty = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const departments = ["All", "Nursing Fundamentals", "Medical-Surgical", "Pediatrics", "Community Health", "Anatomy & Physiology"];

  const facultyMembers = [
    {
      id: "1",
      name: "Dr. Fatima Khan",
      designation: "Principal & Professor",
      department: "Nursing Fundamentals",
      qualification: "PhD in Nursing, MSN",
      experience: "25+ years",
      specialization: "Nursing Education, Healthcare Management",
      email: "fatima.khan@cns.edu.pk",
      achievements: [
        "Author of 3 nursing textbooks",
        "National Excellence Award in Nursing Education",
        "Research in evidence-based practice"
      ]
    },
    {
      id: "2", 
      name: "Prof. Ahmed Hassan",
      designation: "Head of Clinical Department",
      department: "Medical-Surgical",
      qualification: "MSN, BSN, RN",
      experience: "20+ years",
      specialization: "Critical Care, Emergency Nursing",
      email: "ahmed.hassan@cns.edu.pk",
      achievements: [
        "Certified Critical Care Nurse",
        "Published 15+ research papers",
        "International clinical training programs"
      ]
    },
    {
      id: "3",
      name: "Dr. Sarah Ahmed",
      designation: "Associate Professor",
      department: "Nursing Fundamentals", 
      qualification: "PhD in Nursing Technology",
      experience: "15+ years",
      specialization: "Healthcare Technology, Simulation",
      email: "sarah.ahmed@cns.edu.pk",
      achievements: [
        "Pioneer in nursing simulation",
        "Technology integration specialist",
        "Grant recipient for innovation projects"
      ]
    },
    {
      id: "4",
      name: "Prof. Maria Khan",
      designation: "Professor of Pediatrics",
      department: "Pediatrics",
      qualification: "MSN Pediatrics, BSN",
      experience: "18+ years",
      specialization: "Child Health, Family Nursing",
      email: "maria.khan@cns.edu.pk",
      achievements: [
        "Child health advocacy leader",
        "International pediatric certification",
        "Community health program director"
      ]
    },
    {
      id: "5",
      name: "Dr. Ali Raza",
      designation: "Assistant Professor",
      department: "Anatomy & Physiology",
      qualification: "PhD Anatomy, MBBS",
      experience: "12+ years", 
      specialization: "Human Anatomy, Physiology",
      email: "ali.raza@cns.edu.pk",
      achievements: [
        "Medical education specialist",
        "Innovative teaching methodologies",
        "Medical research publications"
      ]
    },
    {
      id: "6",
      name: "Prof. Ayesha Malik",
      designation: "Professor of Community Health",
      department: "Community Health",
      qualification: "MSN Community Health, MPH",
      experience: "22+ years",
      specialization: "Public Health, Epidemiology",
      email: "ayesha.malik@cns.edu.pk",
      achievements: [
        "Public health program leader",
        "WHO consultant for health programs",
        "Community intervention specialist"
      ]
    }
  ];

  const filteredFaculty = selectedDepartment && selectedDepartment !== "All" 
    ? facultyMembers.filter(member => member.department === selectedDepartment)
    : facultyMembers;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Distinguished Faculty
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn from experienced educators and healthcare professionals who are 
              dedicated to shaping the next generation of nurses.
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept) => (
              <Badge
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                className={`cursor-pointer transition-colors px-4 py-2 ${
                  selectedDepartment === dept 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedDepartment(dept === "All" ? null : dept)}
              >
                {dept}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((member) => (
              <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Profile Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <User className="w-20 h-20 text-primary/50" />
                </div>
                
                <div className="p-6">
                  {/* Basic Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.designation}</p>
                    <Badge variant="secondary" className="mt-2">
                      {member.department}
                    </Badge>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 text-accent mr-2" />
                      <span className="text-sm font-medium text-foreground">Qualifications</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.qualification}</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-4 h-4 text-accent mr-2" />
                      <span className="text-sm font-medium text-foreground">Experience</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>

                  {/* Specialization */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-1">Specialization</p>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">Key Achievements</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full text-primary">
                      View Full Profile
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Faculty Excellence</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty brings world-class expertise to nursing education
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Expert Faculty Members" },
              { number: "300+", label: "Years Combined Experience" },
              { number: "25+", label: "PhD & Masters Degrees" },
              { number: "100+", label: "Published Research Papers" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Faculty */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
            <h3 className="text-2xl font-bold text-primary mb-4">Join Our Faculty Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate educators and healthcare professionals 
              to join our mission of excellence in nursing education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-accent">
                View Open Positions
              </Button>
              <Button variant="outline">
                Faculty Application Process
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;