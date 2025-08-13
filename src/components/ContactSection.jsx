import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import {cn} from "@/lib/utils";


const ContactSection = () => {
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
            <div className="flex flex-col items-center md:items-center ">
                <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                <div className="flex flex-col md:flex-row md:space-x-12 w-full justify-center md:justify-between mb-8">
                    {/* Email */}
                    <div className="flex items-center space-x-3 mb-6 md:mb-0">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:harshalchandekar2204@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                harshalchandekar2204@gmail.com
                            </a>
                        </div>
                    </div>
                    {/* LinkedIn */}
                    <div className="flex items-center space-x-3 mb-6 md:mb-0">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">LinkedIn</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Harshal Chandekar
                            </a>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <span className="text-muted-foreground hover:text-primary transition-colors">
                                Nagpur, India
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pt-4 w-full">
                    <h4 className="text-center md:text-center ">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center md:justify-center mt-2">
                        <a href="https://www.linkedin.com/in/harshal-chandekar-7579a5270" target="_blank" rel="noopener noreferrer">
                            <Linkedin  className="hover:opacity-15"/>
                        </a>
                        <a href="https://x.com/harshalchandek6" target="_blank" rel="noopener noreferrer">
                            <Twitter className="hover:opacity-15" />
                        </a>
                        <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
                            <FaDiscord size={24}  className="hover:opacity-15"/>
                        </a>
                    </div>
                </div>
            </div>

                {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter Your Name...."
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
                            />
                        </div>
                            <button
                                type="submit"
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                Send Message
                                <Send size={16}/>
                            </button>
                    </form>
                </div> */}

            </div>
        </section>
    )
}
export default ContactSection;