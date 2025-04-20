
import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

export const Experience = () => {
  const experiences = [
    {
      period: "February 2022 - Present",
      role: "Software Engineering Manager",
      company: "Bincom Dev Center",
      achievements: [
        "Led cross-functional teams in Frontend/Mobile, Backend, DevOps, and Data Science",
        "Established CI/CD pipelines reducing deployment time by 30%",
        "Led AI integration improving customer engagement by 40%",
        "Reduced maintenance costs by 35% through IT infrastructure standardization"
      ]
    },
    {
      period: "September 2021 - January 2022",
      role: "Lead PHP Backend Developer",
      company: "Bincom Dev Center",
      achievements: [
        "Developed scalable PHP-based backend solutions",
        "Integrated user-facing elements with server-side logic",
        "Optimized application performance and security"
      ]
    },
    {
      period: "2020 - 2021",
      role: "Backend Developer",
      company: "Ayrem International",
      achievements: [
        "Developed RESTful API for web and mobile applications",
        "Implemented WhatsApp automation for customer notifications",
        "Integrated blockchain technology for cryptocurrency transactions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="w-6 h-6 text-purple-600" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">{exp.period}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-purple-600">{exp.company}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
