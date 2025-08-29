import { motion } from 'framer-motion';

// --- SVG Icon Components ---
const FaBriefcase = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
    </svg>
);

const FaArrowRight = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
    </svg>
);


const experience = [
  {
    id: 1,
    role: 'Virtual Intern',
    company: 'J.P. Morgan',
    duration: 'May 2024 - May 2024',
    description: [
      'Worked with real-time stock price feeds to simulate trading scenario',
      'Built interactive dashboards using internal tools',
      'Contributed to a collaborative bonus open-source task',
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
    delay: 0.1
  },
  {
    id: 2,
    role: 'Machine Learning Intern',
    company: 'AICTE',
    duration: 'Feb 2024 - Feb 2024',
    description: [
      'Developed and deployed machine learning models for classification and prediction tasks',
      'Worked with cloud-based ML environments (AWS SageMaker, Google Colab)',
      'Documented workflows and presented results, enhancing communication skills',
      'Gained experience with version control and agile methodologies'
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
    delay: 0.3
  },
  {
    id: 3,
    role: 'Technical Chair',
    company: 'Kognitiv AI Technology Club',
    duration: 'Aug 2024 - Aug 2025',
    description: [
      'Organized workshops and seminars to enhance AI understanding',
      'Monitored and shared insights on AI/ML advancements',
      'Collaborated with other clubs for interdisciplinary projects',
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
    delay: 0.5
  }
];

const Experience = () => {
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
      id="experience" 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-blue-500 opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[70%] left-[80%] w-12 h-12 rounded-full bg-yellow-500 opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[30%] left-[60%] w-10 h-10 rounded-full bg-green-500 opacity-10 animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            variants={itemVariants}
          >
            Professional Journey
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experience.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg h-full transition-all duration-300 hover:shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                  {exp.icon}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <span className="text-sm font-semibold text-gray-500 mb-2 block">{exp.duration}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{exp.company}</p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <FaArrowRight className="flex-shrink-0 w-4 h-4 mt-1 text-blue-500 mr-2" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Experience;
