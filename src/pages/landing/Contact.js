import { useState } from 'react';
import axios from 'axios';

const Contact = (props) => {

  const [ formSubmit, setFormSubmit] = useState({
    email: '',
    subject: '',
    message: '',
  });

  let { email, subject, message } = formSubmit;

  const changeHandler = (e) => {
    setFormSubmit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('clicked')
    
    // call axios 
    // send formSubmit to backEnd
    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/testEmail/test`, data);
      console.log(request)
    }

    requestToApi(formSubmit)

  }

  return (
    <section className="w-full h-full flex flex-col justify-center px-8">
      <div className="px-8 py-12 bg-white/40 w-2/3 rounded-xl flex flex-col justify-center">

        <div>
          <p className="text-3xl md:text-4xl font-light text-white font-Berkshire border-b border-white mb-4">Contact Me</p>
          <p className='font-helvetica font-light leading-6 text-lg mb-2'>Have something to say? or Have an offer for me?</p>
          <p className='font-helvetica font-light leading-6 text-lg mb-2'>Don't hesitate to contact me. I will gladly talk to you on any matter!</p>
        </div>

        <form className='flex flex-col items-start w-full md:w-2/3 lg:w-1/2 gap-2' onSubmit={submitHandler}>
          <div className='w-full'>
            <p className='text-white font-bold'>Email :</p>
            <input type='email' name='email' onChange={changeHandler} className='border px-2 py-1 border-gray-300 text-black rounded-md w-full' placeholder='enter your email'/>
          </div>
          <div className='w-full'>
            <p className='text-white font-bold'>Subject :</p>
            <input type='text' name='subject' onChange={changeHandler} className='border px-2 py-1 border-gray-300 text-black rounded-md w-full' placeholder='Write subject'/>
          </div>
          <div className='w-full'>
            <p className='text-white font-bold'>Messeage :</p>
            <textarea name='message'  rows='5' onChange={changeHandler} className='border px-2 py-1 border-gray-300 text-black rounded-md w-full' placeholder='enter your message' />
          </div>
          <button type='submit' className='bg-yellow-600/40 text-white px-4 py-2 font-bold hover:bg-white hover:text-yellow-600/80 rounded-md w-full'>Submit</button>
        </form>
      </div>
    </section>


// <p>
    // <p className='text-2xl text-white'>Have something to say? or Have an offer for me?</p>
    // <p className='text-white'>Don't hesitate to contact me. I will gladly to talk to you on any matter!</p>
    // </>
  );
}
export default Contact;