import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from 'lucide-react';
import SuyashImg from './Suyash.png';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Suyash Srivastava
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
              Lead Software Product Development Engineer
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              9+ years of experience architecting scalable cloud solutions, leading development teams, and delivering enterprise-grade software products that drive business transformation.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://in.linkedin.com/in/suyash-srivastava-0440b19b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                <LinkedinIcon size={18} />
                LinkedIn
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://github.com/ssuyash25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
              >
                <GithubIcon size={18} />
                GitHub
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://suyashsrivastava25.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Medium
                <ExternalLink size={14} />
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
            <a 
              href="#experience" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              View my experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="lg:w-2/5 flex justify-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
    <img
      src={SuyashImg}
      alt="Professional headshot"
      className="w-full h-full object-cover scale-55"
    />
  </div>
</div>
        </div>
      </div>

      <div className="absolute bottom-8 flex gap-10 text-sm text-gray-400">
        <span>9+ Years Experience</span>
        <span>Enterprise Solutions</span>
        <span>Cloud Architecture</span>
      </div>
    </div>
  );
};

export default Hero;