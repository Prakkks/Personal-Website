import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTheme } from "../assets/themeprovider";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {


  const {isDark} = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_vmrf76x',
        'template_mieo9nw',
        {
          name: form.name,
          title: form.name,
          email: form.email,
          message: form.message,
        },
        '32V4ElAHP-23UXXXg'
      );

      setLoading(false);
      alert('Your message has been sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.error('Email sending error:', error);
      alert('Error sending message');
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src={ isDark ? "/assets/terminal.png": "/assets/terminal-light.png"}
          alt="terminal background"
          className="absolute inset-0 w-full min-h-screen object-cover"
        />
        <div className="contact-container relative z-10">
          <h3 className="head-text text-gray_gradient pt-4">Let's Talk</h3>
          <p className="text-md sm:text-lg dark:text-white-600 text-gray-800 mt-3">
            I'm just getting started in my professional journey, and I'm excited to collaborate, learn, and grow. If you're looking for a passionate beginner or just want to chat, let's talk!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Prakriti Thapa"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="prakriti.thapa@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hey, I wanna give you a job ..."
              />
            </label>

            <button
              className="field-btn dark:hover:border-gray-600 hover:border-gray-400 hover:border-2 hover:shadow-neon"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img
                className="field-btn_arrow"
                src="/assets/arrow-up.png"
                alt="arrow-up"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
