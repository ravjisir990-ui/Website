import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Marathon Runner",
    content:
      "After my knee injury, I thought my running days were over. Dr. Mitchell not only got me back on my feet but helped me achieve a new personal best. Her expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    role: "Office Manager",
    content:
      "Years of desk work had left me with chronic back pain. Dr. Mitchell's comprehensive approach addressed not just the symptoms but the root cause. I'm now pain-free and more active than ever.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "Retired Teacher",
    content:
      "The care and attention I received after my hip replacement was exceptional. Dr. Mitchell's patience and expertise made my recovery smooth and successful. I highly recommend her services.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Professional Dancer",
    content:
      "As a dancer, my body is my instrument. Dr. Mitchell understands the unique demands of performing artists and helped me recover from an ankle sprain without missing a beat.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            What My Patients Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The success stories of my patients are my greatest achievement. Here&apos;s what 
            some of them have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
