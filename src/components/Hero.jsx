import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


// --- SVG Icon Components ---
const FiDownload = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);
const FiArrowRight = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const FiGithub = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);
const FiLinkedin = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);
const FiMail = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// --- Custom TypeAnimation Component ---
const TypeAnimation = ({ sequence, speed = 50, repeat = Infinity, className }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (repeat === 0) return;

        const currentItem = sequence[index];

        if (typeof currentItem === 'string') {
            let i = 0;
            const typingInterval = setInterval(() => {
                setText(currentItem.substring(0, i + 1));
                i++;
                if (i >= currentItem.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => setIndex(prev => (prev + 1) % sequence.length), sequence[index + 1] || 1000);
                }
            }, speed);
            return () => clearInterval(typingInterval);
        } else {
            const timeout = setTimeout(() => {
                setIndex(prev => (prev + 1) % sequence.length);
            }, currentItem);
            return () => clearTimeout(timeout);
        }
    }, [index, sequence, speed, repeat]);

    return <span className={className}>{text}</span>;
};


const Hero = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-4"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        paddingTop: '80px',
        paddingBottom: '40px'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-blue-500 opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[70%] left-[80%] w-12 h-12 rounded-full bg-yellow-500 opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[30%] left-[60%] w-10 h-10 rounded-full bg-green-500 opacity-10 animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-800 mb-3"
              variants={itemVariants}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sravan Kumar</span>
            </motion.h1>

            <motion.div
              className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 h-10" // Added h-10 for consistent height
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 1500,
                  'Web Developer', 1500,
                  'Problem Solver', 1500
                ]}
                speed={50}
                repeat={Infinity}
                className="text-blue-600"
              />
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 mb-6 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              I craft exceptional digital experiences with modern web technologies.
              Passionate about creating innovative solutions that make a difference.
            </motion.p>

            {/* --- ALIGNMENT FIX STARTS HERE --- */}
            {/* This wrapper now centers its content on all screen sizes */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-6"
            >
              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white border-0 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)'
                  }}
                >
                  Get in Touch <FiArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download="Sravan_Kumar_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="w-5 h-5" /> Download CV
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: FiGithub, href: "https://github.com/Sravan-Kumar-710", label: "GitHub" },
                  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sravan-kumar-b1067b187/", label: "LinkedIn" },
                  { icon: FiMail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=sravankumar7384@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-md"
                    whileHover={{ scale: 1.1, y: -2, color: '#4f46e5' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
             {/* --- ALIGNMENT FIX ENDS HERE --- */}

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full opacity-20"
                style={{
                    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                    filter: 'blur(40px)',
                    zIndex: -1
                }}
              ></div>
              <motion.div
                className="relative rounded-full overflow-hidden shadow-2xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"
                style={{
                  border: '8px solid white'
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Sravan Kumar - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x400/e2e8f0/64748b?text=Sravan+Kumar';
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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

export default Hero;
