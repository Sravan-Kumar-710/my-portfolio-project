import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaArrowRight } from 'react-icons/fa';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science',
    institution: 'KL University',
    duration: '2022 - 2026',
    description: [
      'Specialized in Software Development and Data Structures',
      'Participated in coding competitions and hackathons',
      'Completed projects in Web Development and Machine Learning',
      'GPA: 8.48/10'
    ],
    icon: <FaGraduationCap className="w-5 h-5" />,
    delay: 0.1
  },
  {
    id: 2,
    degree: 'Senior Secondary Education (12th)',
    institution: 'Sri Prakash Junior College',
    duration: '2019 - 2021',
    description: [
      'Graduated with MPC Stream',
      'GPA: 747/1000'
    ],
    icon: <FaBookOpen className="w-5 h-5" />,
    delay: 0.3
  },
  {
    id: 3,
    degree: 'Secondary Education (10th)',
    institution: 'Kendriya Vidyalaya',
    duration: '2018 - 2019',
    description: [
      'Graduated with English, Hindi, Maths, Science, Social Studies',
      'GPA: 58.8%/100'
    ],
    icon: <FaBookOpen className="w-5 h-5" />,
    delay: 0.5
  }
];

const Education = () => {
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
      id="education" 
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
            Education & Qualifications
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
          {education.map((edu) => (
            <motion.div 
              key={edu.id}
              variants={itemVariants}
              className="col-lg-4 col-md-6 mb-8"
            >
              <motion.div 
                className="bg-white rounded-3xl p-6 shadow-lg h-100 transition-all duration-300 hover:shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                  {edu.icon}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <span className="text-sm fw-semibold text-gray-500 mb-2 d-block">{edu.duration}</span>
                  <h3 className="h4 fw-bold text-dark mb-3">{edu.degree}</h3>
                  <p className="text-primary fw-semibold mb-4">{edu.institution}</p>
                  
                  <ul className="space-y-3">
                    {edu.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <FaArrowRight className="flex-shrink-0 w-4 h-4 mt-1 text-primary mr-2" />
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

export default Education;
