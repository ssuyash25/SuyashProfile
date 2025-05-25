import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always open to discussing new projects, opportunities in software development,
              or potential collaborations. Feel free to reach out if you have any questions or just want to connect!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">suyashsrivastava25@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Bangalore, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://in.linkedin.com/in/suyash-srivastava-0440b19b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/ssuyash25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:suyashsrivastava25@gmail.com" 
                  className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Send Me A Message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;