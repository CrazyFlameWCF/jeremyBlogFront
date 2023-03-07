import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

const Landing = (props) => {

  const location = useLocation();

  const backgroundChanger = (string) => {
    if(string === '/') {
      return "w-full h-full bg-jeremyMain bg-cover bg-center bg-blend-multiply bg-gray-400"
    } else if (string === '/TO') {
      return "w-full h-full bg-jeremyGame1 bg-cover bg-center bg-blend-multiply bg-gray-400"
    } else if (string === '/musician') {
      return "w-full h-full bg-jeremyMusic bg-cover bg-center bg-blend-multiply bg-gray-400"
    } else if (string === '/contact') {
      return "w-full h-full bg-jeremyContact bg-cover bg-center bg-gradient-to-b from-stone-500 to-stone-700"
    } else {
      return "w-full h-full bg-gradient-to-b from-stone-500 to-stone-700"
    }
  }

  return (
    <>
      <Header />
      <motion.section 
        className={backgroundChanger(location.pathname)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,}}
        transition={{ duration: 0.5 }}
      >
        {location.pathname === '/' &&
        <div className='w-full h-full flex justify-center items-center'>
          <p className='font-Berkshire text-white/70 text-5xl md:text-6xl lg:text-8xl'>Jeremy Park</p>
        </div>
        }
        <Outlet />
        <Footer />
      </motion.section>
    </>
  );
}
export default Landing;