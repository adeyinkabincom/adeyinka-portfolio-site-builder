
import { Code, Cloud, Settings } from "lucide-react";
import { Card } from "./ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code />,
      title: "Technical Leadership & Full-Stack",
      skills: [
        "JavaScript, TypeScript, React, Angular",
        "Python (Django, Flask), PHP, Node.js",
        "SQL, MySQL, PostgreSQL, MongoDB",
        "Web Scraping (Puppeteer, Selenium)",
        "Team Leadership & Mentorship"
      ]
    },
    {
      icon: <Cloud />,
      title: "Cloud & DevOps",
      skills: [
        "AWS, Azure, Linode, DigitalOcean",
        "CI/CD Pipeline Management",
        "Docker & Containerization",
        "System Reliability & Scalability",
        "Infrastructure Optimization"
      ]
    },
    {
      icon: <Settings />,
      title: "Project Management",
      skills: [
        "Agile Methodology & Scrum",
        "Jira, Trello, Asana",
        "Git, GitHub, GitLab",
        "Team Leadership",
        "Resource Planning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-purple-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
