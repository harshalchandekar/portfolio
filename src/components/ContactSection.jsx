import { Linkedin, LinkedinIcon, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import {cn} from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useState } from "react";


const ContactSection = () => {


    const[formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const[formStatus, setFormStatus] = useState({
        submitting:false,
        success:false,
        error:false,
        message:"",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]: value,
        }));
    } 

    const handleSubmit = async(e) => {
            e.preventDefault();

            setFormStatus({
                 submitting:true,
                success:false,
                error:false,
                message:"",
            });

            try{
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        name:formData.name,
                        email: formData.email,
                        message: formData.message,
                    }
                );
                setFormStatus({
                 submitting:false,
                success:true,
                error:false,
                message:"Message sent successfully",
            });

            setFormData({
                name:"",
                email:"",
                message:"",
            });

            } catch(error){
                setFormStatus({
                 submitting:false,
                success:false,
                error:true,
                message:"Failed to send message. Please try again.",
            });

            }
    };

    return (
        <section 
            id="contact"
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12  max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:harshalchandekar2204@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                   harshalchandekar2204@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> LinkedIn</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                   Harshal Chandekar
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                   Nagpur, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                 <a href="https://www.linkedin.com/in/harshal-chandekar-7579a5270" target="_blank" rel="noopener noreferrer">
                            <Linkedin  className="hover:opacity-15"/>
                        </a>
                        <a href="https://x.com/harshalchandek6" target="_blank" rel="noopener noreferrer">
                            <Twitter className="hover:opacity-15" />
                        </a>
                        <a href="https://discord.com/channels/harshal_chandekar" target="_blank" rel="noopener noreferrer">
                            <FaDiscord size={24}  className="hover:opacity-15"/>
                        </a>
               
              </div>
            </div>
          </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter Your Name...."
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter Your Email...."
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea 
                            
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Enter Your Message...."
                            onChange={handleInputChange}
                            />
                        </div>
                            <button
                                type="submit"
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                                disabled={formStatus.submitting}
                            >
                               {formStatus.submitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                            {formStatus.message && (
                                <div
                                className={`form-status ${formStatus.success ? "sucess" : "error"}`}
                                >{formStatus.message}</div>
                            )}
                    </form>
                </div>

            </div>
            </div>
        </section>
    )
}
export default ContactSection;