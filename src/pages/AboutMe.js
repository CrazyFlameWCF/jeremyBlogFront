import Contact from "./Contact";
import Register from "./Register";

const AboutMe = (props) => {
  return (
    <>
      <div className="w-full p-4 bg-black text-white font-bold text-2xl border-b-2 border-white">
        About Me
      </div>
      <div className="flex flex-row w-full p-4 font-bold bg-black text-white">
        <div className="w-1/2">
          A Musician, Tournament Organizer who reside in Edmonton, AB, Canada.
        </div>
        <div className="flex w-1/2 h-72 p-4 justify-end items-end bg-jeremyPro bg-center bg-cover">
          
        </div>
      </div>
      <div className="flex flex-row w-full border-b-2 border-white p-4 text-2xl font-bold bg-black text-white">
        What I do?
      </div>
      
      <div className="flex justify-items-center w-full p-4 bg-jeremyPer bg-top bg-cover h-72 hover:bg-opacity-50">
        <div className="w-1/2">
          <p className='font-bold text-white'>Currently, I am playing for post grunge band, "Mirrorrs" in Edmonton, Alberta, Canada. Also, play as hired musician for paid gig occationally.</p>
          <p className="text-white underline hover:font-extrabold"><a href='/Musician'>Find Out More</a></p>
        </div>
      </div>

      <div className="flex flex-row bg-black text-white w-full h-72 p-4 bg-jeremyTO bg-center bg-cover border-white border-t-2 border-b-2">
        <div className="w-1/2 text-white ">
          <p className='font-bold'>I am also, found member of an organization called, WestCoast Fighter, which organize E-sports entertainment in Edmonton Alberta.
          </p>      
          <p className="text-white underline hover:font-extrabold"><a href='/TO'>Find Out More</a></p>
        </div>
      </div>

      <div className='flex flex-row w-full bg-black justify-center items-center'>
        <div className="pl-4 bg-black font-bold text-white">
          Contact Me
          <Contact/> 
        </div>
        
        {/* <div className="w-1/2 p-4 bg-black font-bold text-white">
          Stay in touch
          <Register />
        </div> */}
      </div>
      </>
  );
}
export default AboutMe;