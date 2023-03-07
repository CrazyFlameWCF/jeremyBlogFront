const Coding = (props) => {

  const Languages = [
    {
      id: 1,
      name: 'JavaScript ES6',
    },
    {
      id: 2,
      name: 'TypeScript',
    },
    {
      id: 3,
      name: 'Python',
    },
    {
      id: 4,
      name: 'Html/Css',
    },
  ]

  const Framworks = [
    {
      id: 5,
      name: 'Node.js',
    },
    {
      id: 6,
      name: 'Next.js',
    },
    {
      id: 7,
      name: 'React.js',
    },
    {
      id: 8,
      name: 'Express.js',
    },
    {
      id: 9,
      name: 'Redux',
    },
    {
      id: 10,
      name: 'MongoDB',
    },
    {
      id: 11,
      name: 'Tailwindcss',
    },
  ]

  return (
    <section className="w-full h-full flex items-start p-8">
      <div className="px-8 py-12 bg-white/40 w-10/12 rounded-xl">
        <p className="text-3xl md:text-4xl font-light text-white font-Berkshire border-b border-white mb-4">Web Developer</p>
        <p className='font-helvetica font-light leading-6 text-lg mb-2'>As a member of YK Studio, I do organize & develop for small business model websites.</p>
        <p className='font-helvetica font-light leading-6 text-lg mb-2'>
          As a full-stack developer, our clients will be serviced with REST API protocols, DB integrated, and most modern web technologies in the market.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="px-2">
            <div className="w-full border-b border-white mb-2">
              <p className="text-xl font-bold text-white">Languages</p>
            </div>
            <ul className="flex flex-col lg:flex-row gap-2 py-2 text-xs font-light">
              {Languages && Languages.map((obj) => {
                return <li
                  key={obj.id}
                  className='px-2 py-1 rounded-full bg-yellow-600/40 text-white text-center'
                >
                  {obj.name}
                </li>
              } )}
            </ul>
          </div>
          <div className="px-2">
            <div className="w-full border-b border-white mb-2">
              <p className="text-xl font-bold text-white">Frameworks</p>
            </div>
            <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-2 py-2 text-xs font-light">
              {Framworks && Framworks.map((obj) => {
                return <li
                  key={obj.id}
                  className='px-2 py-1 rounded-full bg-yellow-600/40 text-white text-center'
                >
                  {obj.name}
                </li>
              } )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Coding;