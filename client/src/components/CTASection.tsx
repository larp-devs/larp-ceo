import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  CheckCircle, 
  BarChart3, 
  Shield, 
  Zap, 
  Users2,
  ArrowUpRight,
  GanttChart,
  Bot,
  RefreshCw
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function CTASection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-background/90 to-black/20">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl z-0 opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent opacity-70 z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:40px_40px] opacity-20 z-0"></div>
      
      <div className="container relative mx-auto max-w-6xl z-10">
        {/* Subscription tier selection section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
              Enterprise Solutions
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Choose Your <span className="text-primary">Management Tier</span>
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              LARP-CEO offers scalable solutions tailored to your organization's
              unique requirements and management needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Tier */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-2xl transform transition-all duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
              <div className="relative bg-black/40 backdrop-blur-md rounded-xl border border-primary/20 p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:-translate-x-2 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Starter</h3>
                  <p className="text-foreground/60 text-sm">For small teams and projects</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$499</div>
                  <div className="text-sm text-foreground/60">per month</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Basic AI agent configuration",
                    "Workflow automation",
                    "Operational reporting",
                    "Email support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2.5 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button className="w-full bg-primary/90 hover:bg-primary text-white h-11 rounded-lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Professional Tier - Highlighted */}
            <div className="relative -mt-4 mb-4 z-10">
              <div className="absolute -inset-px bg-gradient-to-tr from-primary/40 to-primary/20 rounded-2xl"></div>
              <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-8 border border-primary/40 h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">Professional</h3>
                  <p className="text-foreground/60 text-sm">For growing businesses</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$1,499</div>
                  <div className="text-sm text-foreground/60">per month</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Advanced AI agent customization",
                    "Strategic planning assistance",
                    "Performance analytics dashboard",
                    "Integration with existing tools",
                    "Priority support & SLA",
                    "Team collaboration features"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2.5 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg shadow-lg shadow-primary/20">
                    Get Started <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Enterprise Tier */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-2xl transform transition-all duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
              <div className="relative bg-black/40 backdrop-blur-md rounded-xl border border-primary/20 p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:-translate-x-2 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                  <p className="text-foreground/60 text-sm">For large organizations</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Custom</div>
                  <div className="text-sm text-foreground/60">tailored pricing</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Fully autonomous management",
                    "Custom AI agent development",
                    "Dedicated implementation team",
                    "Enterprise security features",
                    "Custom integrations & APIs",
                    "Dedicated account manager"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2.5 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button className="w-full bg-black/50 hover:bg-black/70 border border-primary/40 text-primary h-11 rounded-lg">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main CTA section */}
        <div className="rounded-2xl bg-gradient-to-tr from-black/60 to-primary/10 p-0.5 overflow-hidden">
          <div className="bg-black/60 backdrop-blur-lg rounded-xl p-12 md:p-16 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:max-w-xl">
                <Badge className="bg-primary/10 text-primary mb-6 border-none">Get Started Today</Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Transform Your <span className="text-primary">Organization</span>
                  <br className="hidden md:block" /> with AI-Powered Management
                </h2>
                
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Let LARP-CEO handle day-to-day operations while your team focuses on
                  innovation and strategic growth. Our AI management platform adapts to
                  your unique business needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: <Zap className="h-5 w-5" />, label: "Enhanced Productivity" },
                    { icon: <Shield className="h-5 w-5" />, label: "Enterprise Security" },
                    { icon: <BarChart3 className="h-5 w-5" />, label: "Data-Driven Insights" },
                    { icon: <Users2 className="h-5 w-5" />, label: "Team Empowerment" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3 shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6 rounded-xl shadow-lg shadow-primary/20">
                    Get Started Now <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2 h-12 px-6 rounded-xl">
                    Schedule Demo <Calendar className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="w-full lg:max-w-sm bg-black/40 rounded-xl p-8 border border-primary/30 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-2">Request Information</h3>
                <p className="text-sm text-foreground/70 mb-6">
                  Learn how LARP-CEO can transform your organization's management approach.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      type="text" 
                      placeholder="John Smith" 
                      className="bg-black/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-black/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization Size</label>
                    <select className="w-full rounded-md px-3 py-2 bg-black/30 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground">
                      <option value="" disabled selected>Select company size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-11 rounded-lg">
                  Request Information
                </Button>
                
                <div className="mt-6 pt-6 border-t border-primary/10 flex items-center justify-center text-sm text-foreground/60">
                  <Mail className="h-4 w-4 mr-2 text-primary" /> 
                  <span>Or email us at </span>
                  <a href="mailto:sales@larp-ceo.ai" className="text-primary ml-1 hover:underline">sales@larp-ceo.ai</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logos section */}
        <div className="mt-28 text-center">
          <p className="text-sm font-medium text-foreground/60 mb-8">TRUSTED BY LEADING ORGANIZATIONS</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-70">
            {['Global Tech', 'Enterprise Solutions', 'Innovate Corp', 'Future Systems', 'Smart Solutions', 'Tech Forward'].map((company, i) => (
              <div key={i} className="text-foreground/40 font-semibold text-lg tracking-wider">
                {company}
              </div>
            ))}
          </div>
          
          {/* Final action button */}
          <div className="mt-16 flex justify-center">
            <Button className="group bg-black/40 hover:bg-black/60 border border-primary/30 text-primary hover:text-primary gap-2 h-12 px-8 rounded-xl">
              <span>See all client success stories</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
