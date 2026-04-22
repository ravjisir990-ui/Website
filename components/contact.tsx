import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Health Street", "City Center", "State 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@shivamphysiocare.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 9 AM - 7 PM", "Sunday: Closed"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready to start your journey to better health? Contact us today or book 
            your appointment online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div id="book" className="lg:col-span-2 bg-card p-6 sm:p-8 rounded-xl border border-border flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Book Your Appointment</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Ready to start your recovery journey? Click the button below to fill out our 
              appointment request form and we&apos;ll get back to you shortly.
            </p>
            <Button asChild size="lg" className="text-base">
              <a href="https://forms.gle/XCdXqELvSyPkEd6Q9" target="_blank" rel="noopener noreferrer">
                Book Appointment
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Or call us directly at <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
