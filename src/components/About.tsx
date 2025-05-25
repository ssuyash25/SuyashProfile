import { Code, Server, Database, Cloud, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-gray-700 mb-6 text-lg">
              I'm a Lead Software Product Development Engineer with 9+ years of experience in architecting, developing, 
              and delivering high-quality software products. My expertise spans cloud-native development, 
              microservices architecture, and enterprise application implementation.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Currently at HARMAN International, I lead cross-functional teams to design and implement 
              complex cloud solutions within the automotive industry. I specialize in creating scalable 
              systems that process millions of transactions while maintaining high reliability and performance.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              My approach combines technical expertise with strategic thinking, enabling me to bridge the gap 
              between business requirements and technical solutions. I'm passionate about mentoring junior developers 
              and implementing best practices that elevate the entire team's capabilities.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800">Cloud Architecture</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800">Microservices</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800">CI/CD</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800">System Design</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800">Leadership</span>
            </div>
          </div>
          
          <div className="lg:col-span-1 bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Core Expertise</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Full-stack Development</h4>
                  <p className="text-gray-600">JavaScript, TypeScript, Java, Spring Boot, React</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
                  <Cloud size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cloud Technologies</h4>
                  <p className="text-gray-600">AWS, Azure, Kubernetes, Docker</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Database Systems</h4>
                  <p className="text-gray-600">MySQL, PostgreSQL, MongoDB, Redis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">DevOps & Infrastructure</h4>
                  <p className="text-gray-600">CI/CD, Jenkins, Terraform, Monitoring</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
                  <Settings size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">System Architecture</h4>
                  <p className="text-gray-600">Microservices, Event-driven, Distributed Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;