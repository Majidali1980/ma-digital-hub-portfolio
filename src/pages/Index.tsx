
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Code, Layers, Paintbrush, ShoppingBag } from "lucide-react";
import AnimatedLogo from "@/components/ui/animated-logo";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ma-dark via-ma-dark-gray to-ma-dark opacity-80"></div>
        <div className="container-custom min-h-[85vh] flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center">
              <AnimatedLogo />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas into 
              <span className="gradient-text block mt-2">Digital Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              A creative digital hub specializing in web development, design, and digital solutions that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90">
                <Link to="/projects">
                  View Projects
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-ma-dark to-ma-dark-gray">
        <div className="container-custom">
          <SectionHeader
            title="Services"
            subtitle="Expert solutions tailored to elevate your digital presence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Web Development */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in">
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom websites built with cutting-edge technologies, optimized for performance and user experience.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Paintbrush size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Beautiful, intuitive interfaces that engage users and create memorable digital experiences.
              </p>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ShoppingBag size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-muted-foreground">
                Online stores that convert visitors into customers with seamless shopping experiences.
              </p>
            </div>

            {/* Application Development */}
            <div className="bg-card p-6 rounded-lg border border-muted hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Layers size={24} className="text-ma-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Applications</h3>
              <p className="text-muted-foreground">
                Custom web applications that solve specific business challenges and streamline operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Featured Projects"
            subtitle="Explore some of our best work across various industries"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-muted bg-card transition-all hover:border-ma-teal animate-fade-in">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://github.com/Majidali1980/lmages/blob/main/MA%20Foods.png?raw=true" 
                  alt="M.A. Foods" 
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    E-commerce
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  M.A. Foods
                </h3>
                <a 
                  href="https://kabab-kingdom.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ma-teal hover:text-ma-dark-teal text-sm flex items-center"
                >
                  View Live Demo
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-muted bg-card transition-all hover:border-ma-teal animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://github.com/Majidali1980/lmages/blob/main/portfoliosoftwaredevveloper.png?raw=true" 
                  alt="Software Developer Portfolio" 
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    Web Development
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  Software Developer Portfolio
                </h3>
                <a 
                  href="https://radiant-online-self.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ma-teal hover:text-ma-dark-teal text-sm flex items-center"
                >
                  View Live Demo
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-muted bg-card transition-all hover:border-ma-teal animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://github.com/Majidali1980/lmages/blob/main/FitTrack.png?raw=true" 
                  alt="FitTrack" 
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    Web Application
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  FitTrack
                </h3>
                <a 
                  href="https://fitnesstracker-mocha.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-ma-teal hover:text-ma-dark-teal text-sm flex items-center"
                >
                  View Live Demo
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gradient-to-b from-ma-dark-gray to-ma-dark">
        <div className="container-custom">
          <SectionHeader
            title="Simple & Transparent Pricing"
            subtitle="Choose a plan that works best for your project needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-card rounded-lg border border-muted p-6 hover:border-ma-teal transition-all animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$100</span>
                <span className="text-muted-foreground ml-1">/ project</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Perfect for small business websites and portfolios
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Up to 5 Pages
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Contact Form
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Basic SEO
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90">
                <a href="https://www.fiverr.com/users/alimajid0302198" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>

            {/* Standard Plan */}
            <div className="bg-card rounded-lg border-2 border-ma-teal p-6 relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-gradient-to-r from-ma-teal to-ma-dark-teal text-white text-sm font-semibold py-1 px-3 rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$200</span>
                <span className="text-muted-foreground ml-1">/ project</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Ideal for businesses requiring more features
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Everything in Basic
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Up to 10 Pages
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Custom Design
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Advanced SEO
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Social Media Integration
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90">
                <a href="https://www.fiverr.com/users/alimajid0302198" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-card rounded-lg border border-muted p-6 hover:border-ma-teal transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$300</span>
                <span className="text-muted-foreground ml-1">/ project</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Complete solution for advanced web applications
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Everything in Standard
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  E-commerce Features
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Advanced Functionality
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Interactive Elements
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ma-teal mr-2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Priority Support
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90">
                <a href="https://www.fiverr.com/users/alimajid0302198" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-card rounded-lg p-8 md:p-12 text-center border border-muted">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch today and let's discuss how MA Digital Hub can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-ma-teal to-ma-dark-teal hover:opacity-90">
                <Link to="/contact">
                  Contact Now
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

export default Index;
