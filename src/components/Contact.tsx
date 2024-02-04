import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    const [isMessageSentVisible, setMessageSentVisible] = useState(false);
    const clearInputArea = () => {
        setMessageSentVisible(true);
        setTimeout(() => {
            setMessageSentVisible(false);
          }, 2500);
        const nameInputArea = document.getElementById("name-id") as HTMLInputElement | null;
        if (nameInputArea) {
            setTimeout(() => {
                nameInputArea.value = "";
            }, 200);
        }
        const emailInputArea = document.getElementById("email-id") as HTMLInputElement | null;
        if (emailInputArea) {
            setTimeout(() => {
                emailInputArea.value = "";
            }, 200);
        }
        const messageInputArea = document.getElementById("message-id") as HTMLInputElement | null;
        if (messageInputArea) {
            setTimeout(() => {
                messageInputArea.value = "";
            }, 200);
        }
        };
    const [isCopyEmailVisible, setCopyEmailVisible] = useState(false);
    const handleCopyClick = () => {
        navigator.clipboard.writeText('sebastiengdupont@gmail.com');
        setCopyEmailVisible(true);
        setTimeout(() => {
            setCopyEmailVisible(false);
          }, 2500);
        };
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

        <div className='flex flex-col md:flex-row lg:flex-row items-center px-14 mx-14'>
            <div className='p-14'>
                <p className='text-2xl text-start font-mono text-gray-600'>Send me a Message!</p>
                <div className='max-w-md mx-auto border-2 border-gray-600 rounded-lg'>
                    <div className='flex justify-center max-w-md mx-auto m-5'>
                        <p className='text-md text-start font-mono text-gray-600 flex justify-center mx-5'> Thank you for visiting my portfolio! I would love to hear from you. Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to leave me a message!</p>
                    </div>
                </div>
                <div className='h-10'></div>
                <p className='text-2xl text-start font-mono text-gray-600'>Find me here!</p>
                <div className='max-w-md mx-auto m border-2 border-gray-600 rounded-lg'>
                    <div className='flex justify-center max-w-md mx-auto m-5'>
                        <p className='flex justify-center mx-5'> <a href="https://www.linkedin.com/in/sebastien-dupont-15b53826a/" target="_blank"><img src="/linkedin.svg" className='color:text-blue-600 h-10 w-auto'/></a></p>
                        <p className='flex justify-center mx-5'> <a href="https://www.youtube.com/channel/UCPdiIqboPWgmxHFKE3PoUrA" target="_blank"><img src="/Youtube.svg" className='color:text-blue-600 h-10 w-auto'/></a></p>
                        <p className='flex justify-center mx-5'><button onClick={handleCopyClick}><img src="/Email.svg" className='color:text-blue-600 h-10 w-auto'/></button></p>
                    </div>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className='border-2 border-gray-600 rounded-lg flex flex-col sm:m-0'>
                <div className='flex justify-center m-5'>
                    <div className='mx-2 flex-1'>
                        <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Name</p></label>
                        <input type="text" id='name-id' name="user_name" className='w-full border-2 border-gray-600 rounded'/>
                    </div>
                    <div className='mx-2 flex-2'>
                        <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Email</p></label>
                        <input type="email" id='email-id' name="user_email" className='w-full border-2 border-gray-600 rounded'/>
                    </div>
                </div>
                <div className='mx-7'>
                    <label><p className='text-gray-600 text-bold font-mono text-xl text-left'>Message</p></label>
                    <textarea id='message-id' name="message" className='h-24 w-full border-2 border-gray-600 rounded'/>
                </div>
                <div className='mt-5'>
                    <button type="submit" onClick={clearInputArea} className='m-7 py-2 px-4 rounded-lg border-2 border-gray-600 hover:font-bold'>
                        <div className='flex'>
                            <p className='text-gray-600 font-mono hover:text-bold '>Send</p>
                            <img src="/send.svg" className='h-6 w-auto'/>
                        </div>
                    </button>
                </div>
            </form>
        </div>
        {isCopyEmailVisible && (
        <div className="fixed bottom-5 left-5 p-2 border-2 border-gray-600 rounded-lg font-bold font-mono text-green-600">
          Email Copied!
        </div>
      )}
        {isMessageSentVisible && (
        <div className="fixed bottom-5 right-5 p-2 border-2 border-gray-600 rounded-lg font-bold font-mono text-green-600">
          Message Sent!
        </div>
      )}
    </>
  );
};