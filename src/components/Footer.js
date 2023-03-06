import { MdLogin } from 'react-icons/md';
import { BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = (props) => {
  return (
    <footer className='relative bottom-0 w-full'>
      <div className='flex flex-row w-full bg-black'>
        <div className='w-1/3 text-white font-bold'>
          <p>© CrazyFlame</p>
        </div>
        <div className='flex flex-row w-1/3'>
              <ul className="flex flex-row items-end">
                <li className="mr-2 px-2 py-1 text-white hover:text-red-700"><a href='https://twitter.com/CrazyFlame20' className='inline-flex items-center'><BsTwitter /></a></li>
                <li className="mr-2 px-2 py-1 text-white hover:text-red-700"><a href='https://www.youtube.com/channel/UC7o7dn-op7JbyjMYQCGY7Dg' className='inline-flex items-center'><BsYoutube /></a></li>
                <li className="mr-2 px-2 py-1 text-white hover:text-red-700"><a href='https://www.instagram.com/jeremy.park.guitar/' className='inline-flex items-center'><BsInstagram /></a></li>
                
              </ul>
            </div>
        <div className='w-1/3'>
          <ul>
            {/* <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/login' className='inline-flex items-center'><MdLogin />Login</a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;