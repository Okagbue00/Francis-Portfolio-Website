import {useState} from 'react'
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';

const Contact = () => {
    const [formData, setFormData] = useState({ name:'', email:'', message:'',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('Success');
    const [alertMessage, setAlertMessage] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{ console.log("From Submitted:", formData); await emailjs.send('service_qx8qdv8', 'template_10j1a2m', {from_name:formData.name, to_name: 'Francis', from_email: formData.email, to_email:'okagbueonyeka29@gmail.com', message: formData.message, }, '3XHTQlWdlPcFcc0OI'); setIsLoading(false); setFormData({ name:'', email:'', message:'', }); setAlertType('Success'); setAlertMessage('Thank you. I will get back to you as soon as possible.'); setShowAlert(true); setTimeout(() => { setShowAlert(false); }, 4000);
        }
        catch(error){
            setIsLoading(false);
            setAlertType('Error sending email:', error); setAlertMessage('Ahh, something went wrong. Please try again.'); setShowAlert(true); setTimeout(() => { setShowAlert(false); }, 4000);
        }
    };
    return (
        <section id='contact' className='relative flex items-center c-space section-spacing'>{ showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
        <h2 className='text-heading'>GET IN TOUCH</h2>
        <p className='font-normal text-neutral-400'>Feel free to reach out for collaborations or just a friendly hello!</p>
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label htmlFor='name' className='field-label'>Full Name</label>
                <input name='name' type='text' id='name' className='field-input field-input-focus' placeholder='John Doe' autoComplete='name' value={formData.name} onChange={handleChange} required />
            </div>

            <div className='mb-5'>
                <label htmlFor='email' className='field-label'>Email</label>
                <input name='email' type='email' id='email' className='field-input field-input-focus' placeholder='Your Email Address Here' autoComplete='email' value={formData.email} onChange={handleChange} required />
            </div>

            <div className='mb-5'>
                <label htmlFor='message' className='field-label'>Message</label>
                <textarea name='message' type='text' id='message' rows='5' className='field-input field-input-focus' placeholder='What you want to say?' autoComplete='message' value={formData.message} onChange={handleChange} required />
            </div>

            <button type='submit' className='w-full px-1 py-3 text-center text-lg rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation' >{!isLoading ? 'Send' : 'Sending...'}</button>
        </form>
        
        <div className='mt-6 w-full flex items-center justify-center'>
            <a href='https://github.com/Okagbue00/Francis-Portfolio-Website' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-3 px-4 py-2 text-sm rounded-md bg-neutral-800 hover:bg-neutral-700 text-white'>
                <img src='/assets/socials/github.png' alt='GitHub' className='w-5 h-5' />
                <span>View source code</span>
            </a>
        </div>

        </div>

        
        
    </section>
  )
}

export default Contact;