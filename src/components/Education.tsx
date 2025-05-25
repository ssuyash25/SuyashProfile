import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Indian Institute of Information Technology",
      location: "Allahabad, India",
      period: "2010 - 2014",
      achievements: [
        "Graduated with distinction",
        "Specialized in Software Engineering and Data Structures",
        "Final project: Distributed Computing Framework"
      ]
    }
  ];

  const trainings = [
    {
      name: "Advanced Cloud Architecture",
      provider: "NIT Institute",
      year: "2022"
    },
    {
      name: "Management and Communication Excellence",
      provider: "Management Course Europe",
      year: "2021"
    },
    {
      name: "Deep Learning Specialization",
      provider: "DeepLearning.ai",
      year: "2019"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Education & Training</h2>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
              <GraduationCap className="mr-2 text-blue-500" />
              Academic Education
            </h3>

            {educations.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h4>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>{edu.institution}, {edu.location}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>{edu.period}</span>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Achievements:</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
              <h4 className="text-lg font-bold text-blue-800 mb-4">Continued Education</h4>
              <p className="text-gray-700 mb-4">
                I am a strong believer in continuous learning. I regularly attend webinars, conferences, and workshops to stay updated with the latest technologies and industry trends.
              </p>
              <p className="text-gray-700">
                I also dedicate at least 5 hours per week to online courses and technical reading to expand my knowledge base and skills.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
              <Award className="mr-2 text-blue-500" />
              Professional Training & Certifications
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Training Programs</h4>
              <div className="space-y-4">
                {trainings.map((training, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-semibold text-gray-800">{training.name}</h5>
                    <div className="flex justify-between text-gray-600">
                      <span>{training.provider}</span>
                      <span>{training.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <Award size={16} className="text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800">AWS Certified Solutions Architect</h5>
                  </div>
                  <p className="text-sm text-gray-600">Amazon Web Services</p>
                </div>
                
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <Award size={16} className="text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800">Oracle Certified Java Developer</h5>
                  </div>
                  <p className="text-sm text-gray-600">Oracle</p>
                </div>
                
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <Award size={16} className="text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800">Certified Kubernetes Administrator</h5>
                  </div>
                  <p className="text-sm text-gray-600">Cloud Native Computing Foundation</p>
                </div>
                
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <Award size={16} className="text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800">Professional Scrum Master</h5>
                  </div>
                  <p className="text-sm text-gray-600">Scrum.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;