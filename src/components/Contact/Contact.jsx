import { MdContactMail } from 'react-icons/md';
import styles from './Contact.module.css';
import Button, { SmallButton } from '../../utils/Button';
import { IoIosSend } from 'react-icons/io';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import PopMessage from '../../utils/PopMessage';
import { useSelector } from 'react-redux';

function ContactMe() {
  const Dark = useSelector((state) => state.navbar.darkMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'; // Validate email format
    }
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
      // Here, you could send formData to a server
      emailjs
        .send(
          'service_ghflo7t',
          'template_ouspp63',
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          '__ULUZbQiFUMZINvS'
        )
        .then(() => {
          setIsSent(true);
          setIsError(false);
          setErrorMessage('');
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setIsError(true);
          setIsSent(false);
          setErrorMessage(
            'There was an error sending your message. Please try again later.'
          );
          if (error.message.includes('Network Error')) {
            setErrorMessage(
              'Network error. Please check your internet connection.'
            );
          } else if (error.message.includes('403')) {
            setErrorMessage(
              'Forbidden: Access denied. Please check your API keys.'
            );
          } else if (error.message.includes('timeout')) {
            setErrorMessage('Request timed out. Please try again.');
          }
          setTimeout(() => {
            setIsError(false);
          }, 5000);
        });
    } else {
      setErrors(validationErrors);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.intro}>
        <p className="flex items-center justify-center gap-2">
          <span className="text-[Orange]">&lt;</span>
          <MdContactMail size={25} />
          Get In Touch
          <span className="text-[Orange]">/&gt;</span>
        </p>
      </div>
      <div className={styles.contactBox}>
        <div className="h-auto rounded-2xl px-8 py-8 lg:flex gap-6 z-10 dark-shadow border-2 shadow-[10px_25px_50px_-5px_rgba(0,0,0,0.5)] bg-[#f6e7e7] w-[80%]   max-md:flex  max-md:flex-col ">
          <div className="w-[50%]  max-md:w-[100%]  max-lg:w-[70%] ">
            <form
              action="your-form-endpoint"
              method="POST"
              className="flex flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <label for="name" className="text-black">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-slate-300 px-2 py-2 rounded-md"
                />
                {errors.name && (
                  <PopMessage duration={5000}>{errors.name}</PopMessage>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label for="email" className="text-black">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-slate-300 px-2 py-2 rounded-md"
                />
                {errors.email && (
                  <PopMessage duration={5000}>{errors.email}</PopMessage>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label for="phone" className="text-black">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-slate-300 px-2 py-2 rounded-md"
                />
                {errors.phone && (
                  <PopMessage duration={5000}>{errors.phone}</PopMessage>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label for="message" className="text-black">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-300 px-2 py-2 rounded-md"
                />
                {errors.message && (
                  <PopMessage duration={5000}>{errors.message}</PopMessage>
                )}
              </div>

              <SmallButton type="submit">
                Submit <IoIosSend size={20} />
              </SmallButton>
              {isSent && (
                <PopMessage duration={5000}>
                  Your message has been sent successfully!
                </PopMessage>
              )}
              {isError && (
                <PopMessage duration={5000}>{errorMessage}</PopMessage>
              )}
            </form>
          </div>
          <div className={`${styles.img} max-lg:hidden`}></div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
