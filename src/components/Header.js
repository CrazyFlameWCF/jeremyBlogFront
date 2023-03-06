


const Header = (props) => {
  return (
    <nav>
        <div className="flex flex-row justify-end items-end bg-black pr-12">
          <ul className="flex flex-row">
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/' className='inline-flex items-center'>HOME</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/TO' className='inline-flex items-center'>CRAZYFLAME</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/musician' className='inline-flex items-center'>JEREMY</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/coding' className='inline-flex items-center'>CODING</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/blog/list' className='inline-flex items-center'>BLOG</a></li>
            <li className="mr-2 px-2 py-1 font-bold text-white hover:text-red-700"><a href='/contact' className='inline-flex items-center'>CONTACT</a></li>
            
          </ul>
        </div>
    </nav>
  );
}
export default Header;