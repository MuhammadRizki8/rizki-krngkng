'use client';
import { motion } from 'framer-motion';
import { BsEnvelope, BsTelephone, BsMap, BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaMedium } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: 'easeIn' } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400">Feel free to reach out to me via email or connect on social media.</p>
        </div>
        <div className="flex flex-col items-center gap-8">
          {/* Contact Info */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-4">
                <BsEnvelope className="text-blue-500 text-2xl" />
                <span className="text-gray-400">mrizki135790@gmail.com</span>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <BsTelephone className="text-blue-500 text-2xl" />
                <span className="text-gray-400">+62 831-6491-9535</span>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <BsMap className="text-blue-500 text-2xl" />
                <span className="text-gray-400">Bandung, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <motion.div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 text-center" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <h2 className="text-2xl font-bold text-white mb-6">Connect with Me</h2>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/rizki-muhammad-32b4b4203/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600 transition duration-300">
                  <BsLinkedin className="text-4xl" />
                  <span className="hidden  md:block ml-2 text-white hover:text-blue-600">LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/MuhammadRizki8" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-gray-400 transition duration-300">
                  <BsGithub className="text-4xl" />
                  <span className="hidden  md:block ml-2 text-white hover:text-gray-500">GitHub</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/krng_kng/" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-500 hover:text-pink-600 transition duration-300">
                  <BsInstagram className="text-4xl" />
                  <span className="hidden  md:block ml-2 text-white hover:text-pink-600">Instagram</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://medium.com/@mrizki135790" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-600 transition duration-300">
                  <FaMedium className="text-4xl" />
                  <span className="hidden  md:block ml-2 text-white hover:text-green-600">Medium</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
