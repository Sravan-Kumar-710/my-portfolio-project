import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import {
  SiReact,
  SiPython,
  SiSqlite,
  SiDjango,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiNumpy,
  SiPandas,
  SiScikitlearn
} from 'react-icons/si';
import { motion } from 'framer-motion';
import project1Image from '../project1.jpg';
import project2Image from '../project2.jpg';
import project3Image from '../project3.jpg';

const projects = [
  {
    id: 1,
    title: 'Learning Management System',
    description: [
      'Built a Student Learning Management System (ELMS) using Django, Bootstrap, HTML, and CSS',
      'Implemented role-based authentication for secure access',
      'Enabled course, assignment, and attendance management',
      'Created responsive design with modern UI/UX'
    ],
    tags: ['react', 'django', 'sqlite', 'bootstrap', 'html', 'css'],
    github: 'https://github.com/Sravan-Kumar-710/learning-management-system',
    image: project1Image,
    icon: <FaCode className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'Crop Recommendation System',
    description: [
      'Built a Crop Recommendation System using Python, NumPy, Pandas, and Scikit-learn',
      'Created HTML/CSS interface for user interaction',
      'Delivered accurate crop predictions based on soil and climate conditions',
      'Implemented machine learning algorithms for classification'
    ],
    tags: ['python','numpy', 'pandas', 'scikitlearn', 'html', 'css'],
    github: 'https://github.com/Sravan-Kumar-710/crop-recommendation-system',
    image: project2Image,
    icon: <FaCode className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'Weather App',
    description: [
      'Built a responsive Weather App using React.js, Bootstrap, HTML, and CSS',
      'Integrated weather API for real-time global weather insights',
      'Created enhanced user experience with modern design',
      'Implemented responsive design for all devices'
    ],
    tags: ['react', 'bootstrap', 'html', 'css'],
    github: 'https://github.com/Sravan-Kumar-710/whether-app',
    image: project3Image,
    icon: <FaCode className="w-5 h-5" />
  }
];

const getIcon = (tech) => {
  const techLower = tech.toLowerCase();
  switch (techLower) {
    case 'react':
      return <SiReact className="w-5 h-5 text-blue-500" />;
    case 'python':
      return <SiPython className="w-5 h-5 text-blue-600" />;
    case 'sqlite':
      return <SiSqlite className="w-5 h-5 text-blue-700" />;
    case 'django':
      return <SiDjango className="w-5 h-5 text-green-600" />;
    case 'bootstrap':
      return <SiBootstrap className="w-5 h-5 text-purple-600" />;
    case 'html':
      return <SiHtml5 className="w-5 h-5 text-orange-500" />;
    case 'css':
      return <SiCss3 className="w-5 h-5 text-blue-500" />;
    case 'numpy':
      return <SiNumpy className="w-5 h-5 text-blue-400" />;
    case 'pandas':
      return <SiPandas className="w-5 h-5 text-blue-300" />;
    case 'scikitlearn':
      return <SiScikitlearn className="w-5 h-5 text-yellow-500" />;
    default:
      return <FaCode className="w-5 h-5 text-gray-500" />;
  }
};

console.log("Project Images:", projects.map(project => project.image));

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="position-absolute top-10 start-10 w-16 h-16 rounded-circle bg-primary opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="position-absolute top-70 start-80 w-12 h-12 rounded-circle bg-warning opacity-15 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="position-absolute top-30 start-60 w-10 h-10 rounded-circle bg-success opacity-20 animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="container position-relative z-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="display-4 fw-bold mb-4 text-dark"
            variants={itemVariants}
          >
            My Projects
          </motion.h2>
          
          <motion.div 
            className="w-20 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-pill"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row justify-content-center"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="col-lg-4 col-md-6 mb-8"
            >
              <motion.div 
                // MODIFICATION 1: Added overflow-hidden to clip the image to the card's rounded corners
                className="bg-white rounded-3xl shadow-lg h-100 transition-all duration-300 hover:shadow-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* MODIFICATION 2: Added the <img> tag here */}
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-48 object-cover" 
                />
                
                {/* MODIFICATION 3: Wrapped the original content in a div with padding */}
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                    {project.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="h4 fw-bold text-dark mb-3">{project.title}</h3>
                    
                    <ul className="space-y-3 mb-4">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <FaExternalLinkAlt className="flex-shrink-0 w-4 h-4 mt-1 text-primary mr-2" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {getIcon(tag)}
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4 mt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Projects;