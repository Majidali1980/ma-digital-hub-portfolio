
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Paintbrush, ShoppingBag, Monitor, Youtube, Layers, LineChart, BarChart3, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-10 pb-16">
        <div className="container-custom">
          <SectionHeader
            title="Services"
            subtitle="Comprehensive digital solutions to help your business thrive online"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development */}
            <Card className="bg-card border border-muted hover:border-ma-teal transition-all animate-fade-in">
              <CardHeader className="pb-2">
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code size={24} className="text-ma-teal" />
                </div>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  From simple websites to complex web applications, I build responsive, 
                  user-friendly digital experiences using the latest technologies.
                </CardDescription>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Custom website development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Responsive web design</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Website maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="bg-card border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-2">
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Paintbrush size={24} className="text-ma-teal" />
                </div>
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Create intuitive, visually appealing interfaces that enhance user experience and 
                  drive engagement with your digital products.
                </CardDescription>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>User interface design</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>User experience optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Wireframing and prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Branding and visual identity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* E-commerce Development */}
            <Card className="bg-card border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-2">
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShoppingBag size={24} className="text-ma-teal" />
                </div>
                <CardTitle>E-commerce Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Build powerful online stores that convert visitors into customers with 
                  seamless shopping experiences and robust functionality.
                </CardDescription>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Custom e-commerce websites</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Shopping cart integration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Payment gateway setup</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Inventory management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Portfolio Websites */}
            <Card className="bg-card border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-2">
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Monitor size={24} className="text-ma-teal" />
                </div>
                <CardTitle>Portfolio Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Showcase your work, skills, and achievements with a professional portfolio 
                  website designed to impress potential clients or employers.
                </CardDescription>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Personal branding</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Project showcases</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Professional online presence</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Resume/CV integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* YouTube Channel Websites */}
            <Card className="bg-card border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="pb-2">
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Youtube size={24} className="text-ma-teal" />
                </div>
                <CardTitle>YouTube Channel Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Extend your YouTube presence with a dedicated website to grow your audience, 
                  monetize content, and build your personal brand.
                </CardDescription>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Video integration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Content organization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Subscriber growth tools</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Monetization features</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Applications */}
            <Card className="bg-card border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader className="pb-2">
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Layers size={24} className="text-ma-teal" />
                </div>
                <CardTitle>Web Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Custom web applications that solve specific business challenges, streamline 
                  operations, and enhance productivity.
                </CardDescription>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Custom functionality</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Business process automation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Data management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={14} className="text-ma-teal mt-1 mr-2" />
                    <span>Integration with external systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-ma-dark to-ma-dark-gray">
        <div className="container-custom">
          <SectionHeader
            title="My Process"
            subtitle="A structured approach to deliver high-quality digital solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-2xl font-bold gradient-text">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-muted-foreground">
                  Understanding your goals, requirements, and vision through in-depth consultation.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ma-teal to-ma-gold transform -translate-x-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-2xl font-bold gradient-text">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Planning & Design</h3>
                <p className="text-muted-foreground">
                  Creating wireframes, mockups, and project roadmap based on your requirements.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ma-teal to-ma-gold transform -translate-x-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-2xl font-bold gradient-text">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-muted-foreground">
                  Building your solution with clean code, best practices, and regular progress updates.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ma-teal to-ma-gold transform -translate-x-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="animate-fade-in" style={{ animationDelay: "0.45s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold gradient-text">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
                <p className="text-muted-foreground">
                  Deploying your project and providing ongoing support and maintenance as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose MA Digital Hub"
            subtitle="Benefits of working with me on your next digital project"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reason 1 */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in">
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <LineChart size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Every project is uniquely designed and developed to meet specific business goals and requirements.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
              <p className="text-muted-foreground">
                Focus on creating solutions that not only look great but also deliver measurable results for your business.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Trophy size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous testing and quality control to ensure your project is flawless, responsive, and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-ma-dark-gray to-ma-dark">
        <div className="container-custom">
          <div className="bg-card rounded-lg p-8 md:p-12 text-center border border-muted">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that perfectly matches your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a 
                  href="https://www.fiverr.com/users/alimajid0302198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit My Fiverr
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
