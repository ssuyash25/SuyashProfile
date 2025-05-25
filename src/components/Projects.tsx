import { useState } from 'react';
import { ExternalLink, Github as GitHub, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const projects = [
    {
      id: 1,
      title: "Connected Vehicle Platform",
      description: "A cloud-based platform that enables real-time monitoring and management of vehicle fleets, processing telemetry data from over 1 million vehicles.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Java", "Spring Boot", "AWS", "Kafka", "Docker", "Kubernetes"],
      category: "enterprise",
      achievements: [
        "Processed over 5 million transactions daily",
        "Reduced system latency by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 70%"
      ]
    },
    {
      id: 2,
      title: "HR Management System",
      description: "A comprehensive HR platform handling employee onboarding, payroll processing, and performance management for large organizations.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Java", "Spring", "React", "PostgreSQL", "REST APIs"],
      category: "enterprise",
      achievements: [
        "Streamlined HR processes for 100,000+ employees",
        "Implemented secure document management system",
        "Reduced manual processing time by 60%"
      ]
    },
    {
      id: 3,
      title: "Microservices Migration",
      description: "Led the migration of a monolithic application to a microservices architecture, improving scalability and deployment efficiency.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Microservices", "Docker", "Kubernetes", "Spring Boot", "AWS", "CI/CD"],
      category: "architecture",
      achievements: [
        "Reduced deployment time from days to hours",
        "Improved system resilience with circuit breakers and fallbacks",
        "Enabled independent scaling of components"
      ]
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description: "Designed and implemented a real-time analytics dashboard for monitoring business metrics and system performance.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "D3.js", "Node.js", "WebSockets", "Redis", "ElasticSearch"],
      category: "frontend",
      achievements: [
        "Visualized complex data streams in real-time",
        "Implemented responsive design for mobile and desktop",
        "Reduced data latency to under 500ms"
      ]
    },
    {
      id: 5,
      title: "Process Workflow Engine",
      description: "Built a configurable workflow engine to automate business processes with customizable rules and conditions.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Camunda", "Java", "Spring Boot", "MySQL", "REST APIs"],
      category: "architecture",
      achievements: [
        "Automated complex business processes across departments",
        "Implemented audit trails and process analytics",
        "Reduced process execution time by 35%"
      ]
    },
    {
      id: 6,
      title: "Data Migration Framework",
      description: "Developed a robust framework for migrating large-scale datasets between different database systems with minimal downtime.",
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Java", "Spring Batch", "MySQL", "PostgreSQL", "MongoDB", "ETL"],
      category: "data",
      achievements: [
        "Migrated 100TB of data with 99.99% accuracy",
        "Implemented real-time validation and error recovery",
        "Reduced migration window by 40%"
      ]
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mb-8"></div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 bg-white p-1 rounded-lg shadow-sm">
            {["all", "enterprise", "architecture", "frontend", "data"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Project
                  </a>
                  {project.id === 3 || project.id === 5 ? (
                    <a 
                      href="https://github.com/ssuyash25" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 flex items-center text-sm"
                    >
                      <GitHub size={14} className="mr-1" />
                      View Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;