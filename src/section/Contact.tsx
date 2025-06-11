import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState( { name: '', email : '', message : ''});
    
        const handleChange = ({target: {name, value}}) => {
            setForm({ ...form, [name]: value });
        }

        const handleSubmit = async (e:any) => {
            e.preventDefault();
            setLoading(true);

          try{
             
            await emailjs.send('service_vmrf76x',"template_mieo9nw",
               { name:  form.name,
                title : form.name,
                email : form.email,
                message : form.message
                },'32V4ElAHP-23UXXXg'
            )

            setLoading(false);
            alert('Your message has been sent!');
            setForm({ name: '', email: '', message: '' });

          } catch(error) 
          {
                        setLoading(false);
                        console.log(error);
                        alert('Error sending message');

          }
        }
    

        // 
  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex items-center  justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 w-full min-h-screen " />
            <div className="contact-container">
        <h3 className="head-text text-gray_gradient"> Let's Talk</h3>
        <p className=" text-lg text-white-600 mt-3">
           I'm just getting started in my professional journey, and I'm excited to collaborate, learn, and grow. If you're looking for a passionate beginner or just want to chat, let's talk!
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3"> 
                <span className="field-label"> Full Name</span>
                <input type="text"  name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Prakriti Thapa"/>
            </label>
             <label className="space-y-3"> 
                <span className="field-label"> Email Address</span>
                <input type="email"  name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="prakriti.thapa@gmail.com"/>
            </label>
             <label className="space-y-3"> 
                <span className="field-label"> Your Message</span>
                <textarea   name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hey, I wanna give you a job ..."/>
            </label>

            <button className="field-btn hover:border-gray-600 hover:border-2 hover:shadow-neon  " type="submit" disabled={loading} >
                {loading ? 'Sending...' : 'Send Message'}
                <img className="field-btn_arrow" src="/assets/arrow-up.png" alt="arrow-up" />
                 </button>

        </form>
            </div>
        </div>
    </section>
  )
}

export default Contact