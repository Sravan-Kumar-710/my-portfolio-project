import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'React', 'MongoDB',
  'Python', 'Django', 'PostgreSQL', 'Git',
  'AWS', 'Bootstrap','mySQL', 'Java', 'HTML', 'CSS', 'Java'
];

const About = () => {
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
      id="about" 
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-pill"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="row align-items-center justify-content-between">
          <motion.div
            className="col-lg-6 col-md-6 mb-5 mb-md-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="h2 fw-semibold mb-6 text-dark"
              variants={itemVariants}
            >
              Who am I?
            </motion.h3>
            <motion.div 
              className="space-y-4 text-gray-700 lead"
              variants={itemVariants}
            >
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend development.
                I love turning ideas into reality through clean, efficient, and scalable code.
              </p>
              <p>
                With experience in various technologies and frameworks, I enjoy solving complex problems and building
                applications that make a difference in people's lives.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-lg-5 col-md-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="h2 fw-semibold mb-6 text-dark"
              variants={itemVariants}
            >
              My Skills
            </motion.h3>
            <motion.div 
              className="d-flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white rounded-pill text-sm fw-semibold text-dark shadow-sm transition-all duration-300 border-0"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
