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
            <div id="contact-section" className='font-mono text-3xl text-gray-600'>Contact</div> 
            <img src="/mail.svg" className='ml-3 h-10 w-auto'/>
        </div>

        <div className='flex items-center px-14 mx-14'>
            <div className='p-14'>
                <p className='text-2xl text-start font-mono text-gray-600'>Send me a Message!</p>
                <div className='max-w-md mx-auto border-2 border-gray-600 rounded-lg'>
                    <div className='flex justify-center max-w-md mx-auto m-5'>
                        <p className='text-md text-start font-mono text-gray-600 flex justify-center mx-5'> Thank you for visiting my portfolio! I would love to hear from you. Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to leave me a message!</p>
                    </div>
                </div>
                <div className='h-20'></div>
                <p className='text-2xl text-start font-mono text-gray-600'>Find me here!</p>
                <div className='max-w-md mx-auto m border-2 border-gray-600 rounded-lg'>
                    <div className='flex justify-center max-w-md mx-auto m-5'>
                        <p className='flex justify-center mx-5'> <a href="https://www.linkedin.com/in/sebastien-dupont-15b53826a/" target="_blank"><img src="/linkedin.svg" className='color:text-blue-600 h-10 w-auto'/></a></p>
                        <p className='flex justify-center mx-5'> <a href="https://www.youtube.com/channel/UCPdiIqboPWgmxHFKE3PoUrA" target="_blank"><img src="/Youtube.svg" className='color:text-blue-600 h-10 w-auto'/></a></p>
                        <p className='flex justify-center mx-5'><a href="sebastiengdupont@gmail.com"><img src="/Email.svg" className='color:text-blue-600 h-10 w-auto'/></a></p>
                    </div>
                </div>
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
        </div>
    </>
  );
};