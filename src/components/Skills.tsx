const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "C#", level: 65 }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Angular", level: 70 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Elasticsearch", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Technical Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-bold mb-3 text-blue-800">Methodologies</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Agile/Scrum
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Test-Driven Development
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Continuous Integration
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                DevOps
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Microservices Architecture
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="text-lg font-bold mb-3 text-green-800">Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Git/GitHub
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Jenkins
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                JIRA
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Confluence
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Postman
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-lg font-bold mb-3 text-purple-800">Soft Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Team Leadership
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Technical Mentoring
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Project Management
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Communication
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Problem Solving
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-gray-800 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-4">Certifications & Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-medium">AWS Certified Solutions Architect</p>
              <p className="text-gray-400 text-sm">Amazon Web Services</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-medium">Oracle Certified Professional Java Developer</p>
              <p className="text-gray-400 text-sm">Oracle</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-medium">Certified Kubernetes Administrator</p>
              <p className="text-gray-400 text-sm">Cloud Native Computing Foundation</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-medium">Professional Scrum Master</p>
              <p className="text-gray-400 text-sm">Scrum.org</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-medium">MongoDB Certified Developer</p>
              <p className="text-gray-400 text-sm">MongoDB University</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-medium">Deep Learning Specialization</p>
              <p className="text-gray-400 text-sm">Coursera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;