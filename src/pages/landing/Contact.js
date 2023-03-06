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
    <>
    <p className='text-2xl text-white'>Have something to say? or Have an offer for me?</p>
    <p className='text-white'>Don't hesitate to contact me. I will gladly to talk to you on any matter!</p>
    <form className='flex flex-col items-start p-5 w-full border-3 border-red-400' onSubmit={submitHandler}>
      <div className="flex flex-col ">
        <div>
          <p className='text-white font-bold'>Email :</p>
          <input type='email' name='email' onChange={changeHandler} className='border px-2 py-1 border-gray-300 text-black' />
        </div>
        <div>
          <p className='text-white font-bold'>Subject :</p>
          <input type='text' name='subject' onChange={changeHandler} className='border px-2 py-1 border-gray text-black'/>
        </div>
        <div>
          <p className='text-white font-bold'>Messeage :</p>
          <textarea name='message' onChange={changeHandler} className='border px-2 py-1 border-gray text-black' />
        </div>
        <button type='submit' className='border px-2 py-1 font-bold text-white hover:bg-red-800 hover:text-black rounded-md'>Submit</button>
      </div>
    </form>
    </>
  );
}
export default Contact;