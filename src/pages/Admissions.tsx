import { Calendar, FileText, CheckCircle, Download, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Admissions = () => {
  const importantDates = [
    { event: "Application Opens", date: "January 15, 2025", status: "upcoming" },
    { event: "Application Deadline", date: "March 30, 2025", status: "upcoming" },
    { event: "Entry Test", date: "April 15, 2025", status: "upcoming" },
    { event: "Interview Period", date: "April 20-25, 2025", status: "upcoming" },
    { event: "Final Results", date: "May 10, 2025", status: "upcoming" },
    { event: "Classes Begin", date: "September 1, 2025", status: "upcoming" }
  ];

  const requirements = [
    { title: "Academic Transcripts", description: "Official transcripts from all previous institutions" },
    { title: "Medical Certificate", description: "Health clearance from registered medical practitioner" },
    { title: "Character Certificate", description: "From previous institution or local authority" },
    { title: "CNIC/Passport Copy", description: "Valid identification document" },
    { title: "Photographs", description: "Recent passport-size colored photographs" },
    { title: "Application Fee", description: "Non-refundable processing fee" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Admissions 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Begin your journey to becoming a healthcare professional. Apply now for our nursing programs.
            </p>
            <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-lg">
              Applications Now Open
            </Badge>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground">Follow these simple steps to apply</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Submit Application", desc: "Complete online application form" },
              { step: "2", title: "Upload Documents", desc: "Submit required documents" },
              { step: "3", title: "Entry Test", desc: "Appear for entrance examination" },
              { step: "4", title: "Interview", desc: "Personal interview assessment" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Important Dates</h2>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <h4 className="font-semibold text-foreground">{item.event}</h4>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Required Documents</h2>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{req.title}</h4>
                        <p className="text-sm text-muted-foreground">{req.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Apply Online</h2>
            <p className="text-lg text-muted-foreground">
              Submit your application quickly and securely
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input placeholder="+92-xxx-xxxxxxx" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    CNIC Number *
                  </label>
                  <Input placeholder="xxxxx-xxxxxxx-x" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Program of Interest *
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-md">
                    <option value="">Select a program</option>
                    <option value="general">General Nursing (3 Years)</option>
                    <option value="bsn">BSN Program (4 Years)</option>
                    <option value="post-rn">Post-RN BSN (2 Years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Previous Education
                </label>
                <Textarea placeholder="Describe your previous educational background..." rows={3} />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to study nursing? *
                </label>
                <Textarea placeholder="Tell us about your motivation..." rows={4} />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm text-foreground">
                  I agree to the terms and conditions and privacy policy
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 flex-1">
                  Submit Application
                </Button>
                <Button variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Download Resources</h2>
            <p className="text-lg text-muted-foreground">
              Get all the information you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Admission Prospectus", desc: "Complete program details and requirements", size: "2.5 MB" },
              { title: "Application Form", desc: "Printable application form", size: "1.2 MB" },
              { title: "Fee Structure", desc: "Detailed fee breakdown for all programs", size: "800 KB" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <Badge variant="outline" className="mb-4">{item.size}</Badge>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Help */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help with Your Application?</h3>
            <p className="text-muted-foreground mb-6">
              Our admissions counselors are here to assist you throughout the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-accent">
                Schedule Consultation
              </Button>
              <Button variant="outline">
                Call: +92-48-9230451
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;