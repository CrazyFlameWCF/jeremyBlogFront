import { MdMenu } from "react-icons/md";
import { SiApplearcade } from "react-icons/si";
import { GiGuitarHead } from "react-icons/gi";
import { RiCodeBoxFill, RiBookOpenFill, RiMessage3Fill } from "react-icons/ri";

import { useState } from 'react';

const Header = (props) => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const menuOpenHandler = (e) => {
    setIsMenuOpen(!isMenuOpen)
  }

  const textDistributor = (state, text) => {
    if(state) {
      return text;
    } else if (!state && text === 'Jeremy Park') {
      return "JP";
    } else {
      return ''
    }
  }

  const styleDistributor = (state) => {
    if(state) {
      return 'fixed z-20 right-0 top-0 flex flex-col h-full my-8 text-xl font-semibold text-white/40 justify-center rounded-l-xl bg-white/10 pl-4 pr-2'
    } else {
      return 'fixed z-20 right-0 top-0 flex flex-col h-full my-8 text-xl font-semibold text-white/40 justify-center rounded-l-xl pl-4 pr-2'
    }
  }

  return (
    <nav className={styleDistributor(isMenuOpen)}>
      <div className="flex justify-end pt-8">
        <button onClick={menuOpenHandler} className='hover:text-yellow-600/70'><MdMenu className="w-7 h-7" /></button>
      </div>
      <ul className="flex flex-col h-full text-right justify-center gap-4">
        <li><a href='/' className="flex flex-row gap-4 items-center justify-center font-Berkshire font-semibold hover:text-yellow-600/70" >{textDistributor(isMenuOpen, 'Jeremy Park')}</a></li>
        <li><a href='/TO' className="flex gap-4 items-center hover:text-yellow-600/70"><SiApplearcade />{textDistributor(isMenuOpen, 'CrazyFlame')}</a></li>
        <li><a href='/musician' className="flex gap-4 items-center hover:text-yellow-600/70"><GiGuitarHead />{textDistributor(isMenuOpen, 'Music')}</a></li>
        <li><a href='/coding' className="flex gap-4 items-center hover:text-yellow-600/70"><RiCodeBoxFill />{textDistributor(isMenuOpen, 'WebDev')}</a></li>
        <li><a href='/blog/list' className="flex gap-4 items-center hover:text-yellow-600/70"><RiBookOpenFill />{textDistributor(isMenuOpen, 'Blog')}</a></li>
        <li><a href='/contact' className="flex gap-4 items-center hover:text-yellow-600/70"><RiMessage3Fill />{textDistributor(isMenuOpen, 'Contact')}</a></li>
      </ul>
    </nav>
  );
}
export default Header;