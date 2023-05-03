import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_0jm95v8', //from services
        'template_4yabinl', //from templates
        {
          from_name: form.name,
          to_name: 'Igor',
          from_email: form.email,
          to_email: 'stipyk1309@gmail.com',
          message: form.message,
        },
        'uYcNVfB6L-ldGWARD' //public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible 🫡.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong 😢');
        }
      );
  };

  return (
    <section
      className="section container max-w-[1200px] mx-auto flex flex-col "
      id="contact"
    >
      <h2 className="h2">Contact</h2>
      <div className="bg-[#ffffff10] max-w-[500px] w-full rounded-lg p-8 flex-col">
        <h3>GET IN TOUCH 😊</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
              placeholder="What`s your name?"
              className="bg-gray-100 p-3 rounded-lg outline-none border-none font-medium text-black"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What`s your email?"
              className="bg-gray-100 p-3 rounded-lg outline-none border-none font-medium text-black"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              className="bg-gray-100 p-3 rounded-lg outline-none border-none font-medium text-black"
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              cols={30}
              rows={7}
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-gray-100 py-3 px-8 outline-none w-fit text-black rounded-lg font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};
