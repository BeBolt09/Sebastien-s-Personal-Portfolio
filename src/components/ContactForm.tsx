import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hptpuwi', 'template_thrr1ze', form.current, 'u_HdWXP9J1dSs-7jW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className='flex justify-center'>
            <div className=' mx-10'>
                <label ><p className='text-gray-600 text-bold font-mono text-xl text-left'>Name</p></label>
                <input type="text" name="user_name" className='border-2 border-gray-600 rounded'/>
            </div>
            <div className=' mx-10'>
                <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Email</p></label>
                <input type="email" name="user_email" className='border-2 border-gray-600 rounded'/>
            </div>
        </div>
        <div className=' mx-5'>
            <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Message</p></label>
            <textarea name="message" />
        </div>
      <p><input type="submit" value="Send" /></p>
    </form>
  );
};