import { Clock, BookOpen, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoursesSection = () => {
  const courses = [
    {
      title: "General Nursing",
      duration: "3 Years",
      level: "Diploma",
      description: "Comprehensive foundational nursing program covering all essential aspects of patient care, medical procedures, and healthcare fundamentals.",
      highlights: [
        "Basic nursing principles and practices",
        "Anatomy and physiology",
        "Medical-surgical nursing",
        "Community health nursing",
        "Clinical rotations in hospitals"
      ],
      eligibility: "Intermediate (Pre-Medical) or equivalent",
      careerPaths: "Staff Nurse, Community Health Worker, Healthcare Assistant",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "BSN - Bachelor of Science in Nursing",
      duration: "4 Years",
      level: "Bachelor's Degree",
      description: "Advanced nursing program with focus on leadership, research, and specialized care. Prepares nurses for supervisory and management roles.",
      highlights: [
        "Advanced clinical skills",
        "Nursing research and evidence-based practice",
        "Healthcare leadership and management",
        "Specialized nursing areas (ICU, OR, ER)",
        "Thesis/capstone project"
      ],
      eligibility: "Intermediate (Pre-Medical) with 60% minimum marks",
      careerPaths: "Charge Nurse, Nurse Manager, Clinical Specialist, Research Nurse",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Post-RN BSN",
      duration: "2 Years",
      level: "Bachelor's Degree",
      description: "Designed for registered nurses to advance their education and career prospects with enhanced clinical and leadership skills.",
      highlights: [
        "Advanced nursing theories",
        "Healthcare informatics",
        "Quality improvement in healthcare",
        "Advanced pharmacology",
        "Leadership in nursing practice"
      ],
      eligibility: "RN license with General Nursing diploma",
      careerPaths: "Senior Nurse, Unit Supervisor, Nurse Educator, Quality Coordinator",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Nursing Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of nursing programs designed to meet 
            diverse career goals and educational backgrounds.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-white/90 text-sm">{course.description}</p>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-6">
                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-primary" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Eligibility</h4>
                  <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                </div>

                {/* Career Paths */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-accent" />
                    Career Opportunities
                  </h4>
                  <p className="text-sm text-muted-foreground">{course.careerPaths}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
            <h3 className="text-2xl font-bold text-primary mb-4">Admission Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">General Requirements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Valid CNIC or B-Form</li>
                  <li>• Medical fitness certificate</li>
                  <li>• Character certificate</li>
                  <li>• Passport-size photographs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Academic Requirements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Academic transcripts</li>
                  <li>• Entry test (where applicable)</li>
                  <li>• Interview assessment</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-none">
            <h3 className="text-2xl font-bold text-accent mb-4">Why Our Programs?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Industry-Relevant Curriculum</h4>
                  <p className="text-sm text-muted-foreground">Updated regularly to meet current healthcare standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Clinical Excellence</h4>
                  <p className="text-sm text-muted-foreground">Extensive hands-on training in partner hospitals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Recognition</h4>
                  <p className="text-sm text-muted-foreground">Degrees recognized internationally</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;