import { GraduationCap, Award, Heart, Target } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Doctor of Physical Therapy from Stanford University Medical School",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Board Certified Orthopedic Clinical Specialist (OCS) & Sports Clinical Specialist (SCS)",
  },
  {
    icon: Heart,
    title: "Philosophy",
    description: "Patient-centered care focusing on long-term wellness and prevention",
  },
  {
    icon: Target,
    title: "Approach",
    description: "Evidence-based treatments combined with innovative therapeutic techniques",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Dedicated to Your Recovery and Well-being
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Shivam Physio Care, we bring over 15 years of clinical experience and have 
                had the privilege of helping thousands of patients overcome physical challenges 
                and return to the activities they love. Our journey began with a simple belief: 
                everyone deserves access to quality, personalized care.
              </p>
              <p>
                We specialize in treating a wide range of conditions, from sports injuries and 
                post-surgical rehabilitation to chronic pain management and neurological disorders. 
                Our approach combines cutting-edge techniques with time-tested methods to deliver 
                results that last.
              </p>
              <p>
                Our team is dedicated to continuous learning and innovation, ensuring that every 
                patient receives the most effective treatments available. We believe in building 
                lasting relationships with our patients on their journey to recovery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
