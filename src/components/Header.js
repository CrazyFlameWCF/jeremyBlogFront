
import { BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

const Header = (props) => {
  return (
    <nav>
        <div className="flex flex-row bg-black">
          <div className='flex flex-row w-1/2'>
            <ul className="flex flex-row justify-start">
              <li className="mr-2 px-2 py-1 text-white hover:text-red-700"><a href='https://twitter.com/CrazyFlame20' className='inline-flex items-center'><BsTwitter /></a></li>
              <li className="mr-2 px-2 py-1 text-white hover:text-red-700"><a href='https://www.youtube.com/channel/UC7o7dn-op7JbyjMYQCGY7Dg' className='inline-flex items-center'><BsYoutube /></a></li>
              <li className="mr-2 px-2 py-1 text-white hover:text-red-700"><a href='https://www.instagram.com/jeremy.park.guitar/' className='inline-flex items-center'><BsInstagram /></a></li>
              
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="flex flex-row  items-end">
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/' className='inline-flex items-center'>HOME</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/TO' className='inline-flex items-center'>CrazyFlame</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/musician' className='inline-flex items-center'>Jeremy</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/blog' className='inline-flex items-center'>Blog</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/contact' className='inline-flex items-center'>Contact</a></li>
            
          </ul>
          </div>
        </div>
    </nav>
  );
}
export default Header;