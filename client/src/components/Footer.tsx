import { Link } from "wouter";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Globe, 
  ArrowRight, 
  Heart, 
  Shield, 
  Coffee, 
  MapPin,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CEO_QUOTE } from "@/lib/ascii-art";
import { AsciiBox } from "@/components/ui/ascii-box";

// Footer navigation links by category
const FOOTER_LINKS = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Enterprise", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partners", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "SLA", href: "#" },
    ]
  }
];

// Social media links
const SOCIAL_LINKS = [
  { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-16 px-4 border-t border-primary/20 bg-gradient-to-b from-black/40 to-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:30px_30px] opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

      <div className="container relative mx-auto max-w-6xl z-20">
        {/* Newsletter and quote section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-12 border-b border-primary/10">
          <div>
            <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-foreground/70 mb-6">
                Subscribe to our newsletter to receive updates about new features, case studies, and AI management insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-black/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2 whitespace-nowrap">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="mt-8 flex items-start space-x-2">
              <div className="bg-primary/10 p-2 rounded-full mt-1">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-foreground/60">
                We respect your privacy. We'll never share your email and you can unsubscribe at any time.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="p-0.5 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="bg-black/40 p-8 rounded-2xl">
                <AsciiBox className="text-xs sm:text-sm text-foreground/70 mb-6 whitespace-pre max-w-full overflow-x-auto">
                  {CEO_QUOTE}
                </AsciiBox>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">LC</span>
                  </div>
                  <div>
                    <p className="font-semibold">LARP CEO</p>
                    <p className="text-sm text-foreground/60">Chief Executive Algorithm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo and social links */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex justify-center items-center p-2 bg-primary/10 rounded-md mr-3">
                <span className="text-primary font-mono font-bold text-sm">LC</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="mr-1 text-primary font-bold">LARP</span>
                  <span className="font-bold text-foreground">CEO</span>
                </div>
                <p className="text-xs text-foreground/60">AI-powered management</p>
              </div>
            </div>
            
            <p className="text-foreground/70 mb-6 max-w-sm">
              The enterprise-grade AI platform that automates organizational operations, strategic planning, and resource management to optimize your business.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {SOCIAL_LINKS.map((link, i) => (
                <a 
                  key={i}
                  href={link.href} 
                  aria-label={link.label}
                  className="bg-primary/5 hover:bg-primary/10 text-foreground/70 hover:text-primary border border-primary/20 transition-colors p-2.5 rounded-lg"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-foreground/60">
              <MapPin className="h-4 w-4 mr-2 text-primary/70" />
              <span>San Francisco, CA • New York, NY • Remote</span>
            </div>
          </div>
          
          {/* Footer links in columns */}
          {FOOTER_LINKS.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-bold mb-5 text-lg">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 inline-flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 ml-0 group-hover:ml-1.5 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <p className="text-foreground/60 mb-3 md:mb-0 md:mr-8">&copy; {new Date().getFullYear()} LARP-CEO | All rights reserved</p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Sitemap</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Status</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Changelog</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-foreground/60">
              <Heart className="h-4 w-4 mr-1.5 text-primary/80" />
              <span>Made with care</span>
            </div>
            
            <div className="flex items-center">
              <button className="flex items-center text-foreground/60 hover:text-primary transition-colors">
                <Globe className="h-4 w-4 mr-1.5" />
                <span>English (US)</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Support banner */}
        <div className="mt-12 p-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl">
          <div className="bg-black/30 rounded-lg py-4 px-6 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm">
            <div className="flex items-center mb-4 md:mb-0">
              <MessageSquare className="h-5 w-5 text-primary mr-3" />
              <span className="text-sm">Need support or have questions? Our team is here to help.</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">
                Documentation
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
