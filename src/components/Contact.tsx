import {ContactUs} from './ContactForm'

export default function Contact() {
  return (
    <>
        <div className='flex justify-center pt-20'>
            <div className='font-mono text-3xl text-gray-600'>Contact</div> 
            <img src="src/assets/mail.svg" className='ml-3 h-10 w-auto'/>
        </div>
        <div>
            <div>
                <ContactUs/>
            </div>
        </div>
    </>
  )
}
