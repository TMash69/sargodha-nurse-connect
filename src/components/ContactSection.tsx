import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "College of Nursing Sargodha",
        "University Road, Sargodha",
        "Punjab, Pakistan - 40100"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Admissions: +92-48-9230451",
        "Administration: +92-48-9230452",
        "Emergency: +92-300-1234567"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "admissions@cns.edu.pk",
        "info@cns.edu.pk",
        "principal@cns.edu.pk"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs or admissions? We're here to help you 
            take the next step in your nursing career.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  LinkedIn
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+92-xxx-xxxxxxx" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please describe your inquiry in detail..."
                    rows={6}
                  />
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>

            {/* Map */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
              
              {/* Placeholder for Google Maps */}
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    College of Nursing Sargodha<br />
                    University Road, Sargodha, Punjab
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" className="flex-1 min-w-[150px]">
                  Get Directions
                </Button>
                <Button variant="outline" className="flex-1 min-w-[150px]">
                  View on Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              For urgent admissions inquiries or emergency situations, please call our dedicated helpline.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Call Emergency Helpline: +92-300-1234567
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;