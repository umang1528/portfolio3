import React, { useState,useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast';
import { fireConfetti } from '@/utils/confetti';


type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!form.current) return;


  emailjs
    .sendForm('service_84dnxod', 'template_xrcdyvq', form.current, {
      publicKey: 'dztJw92j-VeikwxqW',
    })
     .then(
      () => {
        fireConfetti(); // 🎉 Poppers
        toast.success('✅ Message Sent Successfully!', {
          icon: '🚀',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        toast.error('❌ Message Failed. Please try again!');
        console.error('FAILED...', error.text);
      }
    );
};


  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<null | { type: 'success' | 'error'; message: string }>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Form data submitted:', formData);
  //   setIsSubmitted(true);
  //   setFormData({ name: '', email: '', subject: '', message: '' }); 
  //   setTimeout(() => setIsSubmitted(false), 5000);
  // };

  return (
    <div>
      <SectionTitle title="Get In Touch" subtitle="I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate." />
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 bg-[var(--card-bg-light)] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
        {/* Contact Form */}
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-[var(--accent-primary)] mb-6">Send Me a Message</h3>
          {isSubmitted && (
            <div className="mb-4 p-3 bg-[var(--success-message-bg)] text-[var(--success-message-text)] border border-[var(--success-message-border)] rounded-md">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
         <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="interactive-cursor-target w-full px-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] transition-colors"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="interactive-cursor-target w-full px-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="interactive-cursor-target w-full px-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] transition-colors"
            placeholder="Project Inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="interactive-cursor-target w-full px-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] transition-colors"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="interactive-cursor-target w-full px-6 py-3 bg-gradient-to-r from-[var(--button-primary-bg-gradient-from)] to-[var(--button-primary-bg-gradient-to)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-md hover:from-[var(--button-primary-hover-bg-gradient-from)] hover:to-[var(--button-primary-hover-bg-gradient-to)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--card-bg)] focus:ring-[var(--input-focus-ring)]"
          >
            Send Message
          </button>
        </div>
      </form>

      {feedback && (
        <div className={`mt-4 text-sm font-medium px-4 py-3 rounded-md ${
          feedback.type === 'success'
            ? 'text-green-800 bg-green-100 border border-green-300'
            : 'text-red-800 bg-red-100 border border-red-300'
        }`}>
          {feedback.message}
        </div>
         )}
         </div>
        

        {/* Contact Details */}
        <div className="order-1 md:order-2 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--accent-secondary)] mb-4">Contact Information</h3>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent-primary)] mr-3 mt-0.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="interactive-cursor-target">umangkumar622@gmail.com</span>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent-primary)] mr-3 mt-0.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="interactive-cursor-target">+91 9868952378</span>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent-primary)] mr-3 mt-0.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>171/Gali-5, Ambedkar Nagar, Haiderpur, Shalimar Bagh, Delhi-110088</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[var(--accent-secondary)] mb-4">Availability</h3>
            <p className="text-[var(--text-secondary)]">
              I am currently available for freelance projects and full-time opportunities. Feel free to reach out!
            </p>
            <p className="text-[var(--text-secondary)] text-sm mt-2 opacity-75"> Delhi-110088 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;