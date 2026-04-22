import { CheckCircle } from "lucide-react";

const expertiseAreas = [
  {
    category: "Conditions Treated",
    items: [
      "Back & Neck Pain",
      "Sports Injuries",
      "Arthritis & Joint Pain",
      "Post-Surgical Recovery",
      "Sciatica & Nerve Pain",
      "Tendonitis & Bursitis",
      "Rotator Cuff Injuries",
      "ACL/MCL Tears",
    ],
  },
  {
    category: "Treatment Techniques",
    items: [
      "Manual Therapy",
      "Therapeutic Exercise",
      "Dry Needling",
      "Cupping Therapy",
      "Ultrasound Therapy",
      "Electrical Stimulation",
      "Kinesiology Taping",
      "Aquatic Therapy",
    ],
  },
  {
    category: "Special Populations",
    items: [
      "Professional Athletes",
      "Weekend Warriors",
      "Seniors & Elderly",
      "Post-Pregnancy Women",
      "Children & Adolescents",
      "Desk Workers",
      "Manual Laborers",
      "Performing Artists",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Specialized Knowledge & Skills
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Years of training and experience have equipped me with the expertise to handle 
            a wide variety of conditions and patient needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div key={area.category} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {area.category}
              </h3>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
