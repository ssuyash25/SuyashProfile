import { BriefcaseIcon, CalendarIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Lead Software Product Development Engineer",
      company: "HARMAN International",
      period: "Jun 2019 - Present",
      description: [
        "Led development of a cloud-based platform for automotive industry that processes over 5 million vehicle transactions daily",
        "Architected and implemented microservices using Spring Boot, Java, and AWS services",
        "Managed a team of 8 developers, implementing agile methodologies and CI/CD practices",
        "Reduced system latency by 40% through performance optimization and architectural improvements",
        "Collaborated with product owners to define roadmaps and technical strategies for new features"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "Docker", "Microservices"]
    },
    {
      id: 2,
      role: "Senior Software Engineer",
      company: "ADP",
      period: "Jan 2017 - May 2019",
      description: [
        "Developed core services for HR and payroll management systems handling data for over 100,000 employees",
        "Implemented RESTful APIs and backend services using Java and Spring framework",
        "Designed and implemented database solutions for high-volume transaction processing",
        "Led a team of 5 engineers, providing mentorship and conducting code reviews",
        "Collaborated in designing the architecture for a large-scale data migration project"
      ],
      technologies: ["Java", "Spring", "Hibernate", "PostgreSQL", "RESTful APIs", "Oracle DB"]
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "Lifion by ADP",
      period: "Oct 2014 - Dec 2016",
      description: [
        "Contributed to building a next-generation HR platform from the ground up",
        "Developed frontend applications using React and backend services using Node.js",
        "Implemented continuous integration and deployment pipelines",
        "Participated in architectural decision-making and technology selection",
        "Collaborated closely with product teams to refine requirements and deliver solutions"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "AWS", "CI/CD"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Professional Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-blue-200"></div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-16 md:text-right">
                  <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                    <div className="flex items-center mb-4">
                      <BriefcaseIcon className="text-blue-500 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                    </div>
                    <div className="flex items-center mb-6">
                      <CalendarIcon className="text-gray-500 mr-2" size={16} />
                      <div>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside ml-1 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;