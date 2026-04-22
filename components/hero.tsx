import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Clock, value: "98%", label: "Recovery Rate" },
];

export function Hero() {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Expert Care You Can Trust
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Restore Your Movement, Reclaim Your Life
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                At Shivam Physio Care, we are dedicated to helping you overcome pain, recover 
                from injuries, and achieve optimal physical health through personalized treatment 
                plans and expert care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#book">
                  Book Your Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/physiotherapist-hero.jpg"
                alt="Shivam Physio Care - Professional physiotherapy treatment"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
              <p className="text-sm font-medium text-foreground">Available for Appointments</p>
              <p className="text-xs text-muted-foreground">Mon - Sat, 9 AM - 7 PM</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
