import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, ExternalLink, Facebook, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_kqtecnn',
      'template_tv45p3s',
      formRef.current as HTMLFormElement,
      'H357zAP8V__yP5H8e'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 bg-card border border-muted animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-6 bg-card border border-muted">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-ma-teal mt-1 mr-3" />
                    <div>
                      <h4 className="text-base font-medium">Email</h4>
                      <a 
                        href="mailto:alimajid03021980@gmail.com"
                        className="text-ma-teal hover:underline"
                      >
                        alimajid03021980@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Facebook className="w-5 h-5 text-ma-teal mt-1 mr-3" />
                    <div>
                      <h4 className="text-base font-medium">Facebook</h4>
                      <a 
                        href="https://www.facebook.com/share/16TyxwjKRy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ma-teal hover:underline flex items-center"
                      >
                        MA Digital Hub
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-5 h-5 text-ma-teal mt-1 mr-3"
                    >
                      <path d="M12 2 C 6.5 2 2 6.5 2 12 c0 4.1 2.5 7.6 6 9.2 0 -0.7 0 -1.5 0.2 -2.2 l1.4 -5.8 s-0.4 -0.7 -0.4 -1.7 c0 -1.6 0.9 -2.8 2.1 -2.8 1 0 1.5 0.7 1.5 1.6 0 1 -0.6 2.5 -1 3.8 -0.3 1.2 0.6 2.1 1.8 2.1 2.1 0 3.8 -2.2 3.8 -5.5 0 -2.9 -2.1 -4.9 -5 -4.9 -3.4 0 -5.4 2.6 -5.4 5.2 0 1 0.4 2.1 0.9 2.7 0.1 0.1 0.1 0.2 0.1 0.3 -0.1 0.4 -0.3 1.3 -0.3 1.5 -0.1 0.2 -0.2 0.3 -0.4 0.2 -1.5 -0.7 -2.4 -2.9 -2.4 -4.6 0 -3.8 2.8 -7.2 7.9 -7.2 4.2 0 7.4 3 7.4 6.9 0 4.1 -2.6 7.5 -6.2 7.5 -1.2 0 -2.4 -0.6 -2.8 -1.3 0 0 -0.6 2.3 -0.7 2.9 -0.3 1 -1 2.3 -1.5 3.1 C 9.6 23.8 10.8 24 12 24 c 5.5 0 10 -4.5 10 -10 C 22 6.5 17.5 2 12 2"/>
                    </svg>
                    <div>
                      <h4 className="text-base font-medium">Pinterest</h4>
                      <a 
                        href="https://www.pinterest.com/alimajid03021980/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ma-teal hover:underline flex items-center"
                      >
                        MA Digital Hub
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Youtube className="w-5 h-5 text-ma-teal mt-1 mr-3" />
                    <div>
                      <h4 className="text-base font-medium">YouTube</h4>
                      <a 
                        href="https://youtube.com/channel/UChQTYgIbl2C2ZIsRoKkXFUQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ma-teal hover:underline flex items-center"
                      >
                        MA Digital Hub
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-ma-teal mt-1 mr-3" />
                    <div>
                      <h4 className="text-base font-medium">Fiverr</h4>
                      <a 
                        href="https://www.fiverr.com/users/alimajid0302198"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ma-teal hover:underline flex items-center"
                      >
                        Visit my Fiverr profile
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ExternalLink className="w-5 h-5 text-ma-teal mt-1 mr-3" />
                    <div>
                      <h4 className="text-base font-medium">Website</h4>
                      <a 
                        href="https://ma-digital-hub.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ma-teal hover:underline flex items-center"
                      >
                        MA Digital Hub
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border border-muted">
                <h3 className="text-xl font-semibold mb-4">How I Work</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-muted text-ma-teal rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    <p>Initial consultation to understand your project requirements</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted text-ma-teal rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    <p>Proposal with timeline, deliverables, and pricing</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted text-ma-teal rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    <p>Regular updates and revisions throughout development</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted text-ma-teal rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    <p>Final delivery and post-launch support</p>
                  </li>
                </ul>
              </Card>

              <div className="flex justify-center lg:justify-start">
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://www.fiverr.com/users/alimajid0302198" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M16.25 16.25v-10h-10v10h10m0-11.667c.92 0 1.667.746 1.667 1.667v10c0 .92-.746 1.667-1.667 1.667h-10c-.92 0-1.667-.746-1.667-1.667v-10c0-.92.746-1.667 1.667-1.667h10M10.875 14.25c0 .345.28.625.625.625s.625-.28.625-.625v-2.917c0-.345-.28-.625-.625-.625h-1.25c-.345 0-.625.28-.625.625s.28.625.625.625h.625v2.292zM13.818 15c.304 0 .582-.173.716-.445l1.21-2.457c.149-.301.025-.663-.276-.811-.301-.15-.663-.025-.811.276L13.545 13.54l-1.113-1.964c-.156-.297-.524-.413-.82-.256-.296.156-.412.523-.256.82l1.77 3.109c.139.246.399.398.68.398c.004 0 .007 0 .011 0z" />
                    </svg>
                    <span>Hire Me on Fiverr</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-ma-dark to-ma-dark-gray">
        <div className="container-custom">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions about my services and work process"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ Item 1 */}
            <Card className="bg-card border border-muted p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
              <p className="text-muted-foreground">
                I offer a range of digital solutions including web development, UI/UX design, 
                e-commerce development, portfolio websites, YouTube channel websites, custom web applications,
                and graphic design services.
              </p>
            </Card>

            {/* FAQ Item 2 */}
            <Card className="bg-card border border-muted p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on scope and complexity. A simple website might take 1-2 weeks, 
                while a complex web application could take 4-6 weeks or more.
              </p>
            </Card>

            {/* FAQ Item 3 */}
            <Card className="bg-card border border-muted p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support and maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, I offer various support and maintenance packages to keep your website 
                or application running smoothly after launch.
              </p>
            </Card>

            {/* FAQ Item 4 */}
            <Card className="bg-card border border-muted p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-semibold mb-2">How do we start working together?</h3>
              <p className="text-muted-foreground">
                Contact me through the form on this page, my email, or Fiverr. We'll schedule an initial 
                consultation to discuss your project needs and how I can help.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
