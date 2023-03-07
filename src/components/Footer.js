import { MdLogin } from 'react-icons/md';
import { RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { motion } from 'framer-motion';


const Footer = (props) => {
  return (
    <footer className='fixed bottom-0 w-screen flex justify-center items-center'>
      <div className='pb-1 mr-2'>
        <p className='text-xs text-white/40'>All rights reserved.</p>
      </div>
      <ul className="flex flex-row items-end text-white/40 gap-2">
        <motion.li 
          className='hover:text-yellow-600/70'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        ><a href='https://twitter.com/CrazyFlame20' className='inline-flex items-center'><RiTwitterFill /></a></motion.li
        >
        <motion.li className='hover:text-yellow-600/70'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        ><a href='https://www.youtube.com/channel/UC7o7dn-op7JbyjMYQCGY7Dg' className='inline-flex items-center'><RiYoutubeFill /></a></motion.li>
        <motion.li className='hover:text-yellow-600/70'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        ><a href='https://www.instagram.com/jeremy.park.guitar/' className='inline-flex items-center'><RiInstagramFill /></a></motion.li>
      </ul>
    </footer>
  );
  {/* <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/login' className='inline-flex items-center'><MdLogin />Login</a></li> */}
}
export default Footer;