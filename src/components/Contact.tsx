import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){

const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_hptpuwi', 'template_thrr1ze', form.current!, 'u_HdWXP9J1dSs-7jW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
        <div className='flex justify-center pt-20'>
            <div className='font-mono text-3xl text-gray-600'>Contact</div> 
            <img src="/mail.svg" className='ml-3 h-10 w-auto'/>
        </div>
        <form ref={form} onSubmit={sendEmail} className='max-w-md mx-auto p-14 m-14 border-2 border-gray-600 rounded-lg flex flex-col'>
            <div className='flex justify-center mb-5'>
                <div className='mx-2 flex-1'>
                    <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Name</p></label>
                    <input type="text" name="user_name" className='w-full border-2 border-gray-600 rounded'/>
                </div>
                <div className='mx-2 flex-2'>
                    <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Email</p></label>
                    <input type="email" name="user_email" className='w-full border-2 border-gray-600 rounded'/>
                </div>
            </div>
            <div className='mx-2 mb-5'>
                <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Message</p></label>
                <textarea name="message" className='h-24 w-full border-2 border-gray-600 rounded'/>
            </div>
            <div className='mt-5'>
                <button type="submit" className='py-2 px-4 rounded-lg border-2 border-gray-600 hover:font-bold'>
                    <div className='flex'>
                        <p className='text-gray-600 font-mono hover:text-bold '>Send</p>
                        <img src="/send.svg" className='h-6 w-auto'/>
                    </div>
                </button>
            </div>
        </form>
    </>
  );
};