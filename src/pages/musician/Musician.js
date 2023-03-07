import './Musician.css'

const Musician = (props) => {
    
  return (
  <section className="w-full h-full flex items-center px-8">
    <div className="px-8 py-12 bg-white/40 w-2/3 max-h-[85vh] my-10 rounded-xl hideScroll overflow-auto ">
      <p className="text-3xl md:text-4xl font-light text-white font-Berkshire border-b border-white mb-4">Jeremy the Musician</p>
      <p className='font-helvetica font-light leading-6 text-lg mb-2'>I started professionally playing Guitar, singing, and composing since I was 14. </p>
      <p className='font-helvetica font-light leading-6 text-lg mb-2'>Rock music is my main inspiration and interest. Currently, I start to learn about music production as well.</p>
      <div className="flex flex-col md:flex-row items-center gap-4 py-2 mt-4">
        <div className="bg-jeremyMusic2 bg-center bg-cover w-48 h-48 rounded-lg" />
        <div className="bg-jeremyMusic3 bg-center bg-cover w-48 h-48 rounded-lg" />
        <div className="bg-jeremyMain bg-center bg-cover w-48 h-48 rounded-lg" />
      </div>
    </div>
  </section>
  
  // <>
  
  // <p className='text-white'>Jeremy</p>
  // <p className='text-white'>I started to play guitar since I was 14.</p>
  // <p className='text-white'>And, I started professionally playing Guitar, singing, and composing. Currently I start to learn about music production as well.</p>


  // </>
  );
}
export default Musician;