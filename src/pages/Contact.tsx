
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
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
    
    // Simulate form submission
    setTimeout(() => {
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
    }, 1500);
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
              <form onSubmit={handleSubmit} className="space-y-4">
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
                        href="mailto:alimajid003021980@gmail.com"
                        className="text-ma-teal hover:underline"
                      >
                        alimajid003021980@gmail.com
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
                e-commerce development, portfolio websites, YouTube channel websites, and custom web applications.
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
