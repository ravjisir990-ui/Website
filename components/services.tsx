import { Activity, Brain, Bone, Dumbbell, Baby, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Sports Rehabilitation",
    description:
      "Comprehensive recovery programs for athletes of all levels, from weekend warriors to professionals. Get back in the game stronger than before.",
    features: ["Injury Assessment", "Performance Training", "Return-to-Sport Programs"],
  },
  {
    icon: Bone,
    title: "Orthopedic Therapy",
    description:
      "Treatment for musculoskeletal conditions including joint pain, arthritis, fractures, and post-surgical rehabilitation.",
    features: ["Joint Mobilization", "Manual Therapy", "Post-Surgical Care"],
  },
  {
    icon: Brain,
    title: "Neurological Rehab",
    description:
      "Specialized care for patients with neurological conditions such as stroke, Parkinson's disease, and multiple sclerosis.",
    features: ["Balance Training", "Gait Retraining", "Cognitive Exercises"],
  },
  {
    icon: Dumbbell,
    title: "Chronic Pain Management",
    description:
      "Long-term strategies to manage and reduce chronic pain conditions, improving quality of life through movement.",
    features: ["Pain Education", "Exercise Therapy", "Lifestyle Modification"],
  },
  {
    icon: Baby,
    title: "Pediatric Therapy",
    description:
      "Gentle and effective treatment for children with developmental delays, injuries, or congenital conditions.",
    features: ["Developmental Support", "Motor Skills", "Fun Activities"],
  },
  {
    icon: Zap,
    title: "Dry Needling & Cupping",
    description:
      "Advanced therapeutic techniques to release muscle tension, improve blood flow, and accelerate healing.",
    features: ["Trigger Point Release", "Myofascial Decompression", "Pain Relief"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From injury recovery to performance optimization, I offer a full range of 
            physiotherapy services tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
