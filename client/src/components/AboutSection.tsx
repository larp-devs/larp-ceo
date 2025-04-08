import { CEO_QUOTE } from "@/lib/ascii-art";
import { 
  Briefcase, 
  Rocket, 
  Award, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  Users2, 
  Shield, 
  Lightbulb, 
  Target, 
  ArrowRight,
  Building,
  Globe2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsciiBox } from "@/components/ui/ascii-box";
import { Badge } from "@/components/ui/badge";

// Team members data
const LEADERSHIP_TEAM = [
  {
    name: "Algorithmic CEO",
    title: "Chief Executive Algorithm",
    description: "Leading strategic AI development and enterprise implementation.",
    image: <Building className="h-10 w-10 text-primary" />
  },
  {
    name: "Decision Matrix",
    title: "Operations Director",
    description: "Optimizing business processes and workflow automation.",
    image: <Target className="h-10 w-10 text-primary" />
  },
  {
    name: "Neural Network",
    title: "Innovation Lead",
    description: "Driving product development and technological innovation.",
    image: <Lightbulb className="h-10 w-10 text-primary" />
  }
];

// Timeline events
const COMPANY_TIMELINE = [
  {
    year: "2021",
    title: "Foundation",
    description: "Initial concept and algorithm development for autonomous business management."
  },
  {
    year: "2022",
    title: "Beta Launch",
    description: "First enterprise deployments and successful case studies with key partners."
  },
  {
    year: "2023",
    title: "Platform Expansion",
    description: "Integration with major business tools and workflow platforms."
  },
  {
    year: "2024",
    title: "Global Deployment",
    description: "Scaling to international markets with enhanced AI capabilities."
  },
  {
    year: "2025",
    title: "Next Generation",
    description: "Developing advanced autonomous planning and resource allocation systems."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 opacity-50 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:40px_40px] opacity-20 z-0"></div>
      
      <div className="container relative mx-auto max-w-6xl z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
            Our Story
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The <span className="text-primary">LARP-CEO</span> Advantage
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Cutting-edge AI technology designed to transform modern business operations
            through autonomous management and strategic intelligence.
          </p>
        </div>
        
        {/* CEO Statement and About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Column - CEO Statement */}
          <div className="order-2 lg:order-1">
            <div className="p-0.5 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-xl shadow-lg">
              <div className="bg-black/40 p-7 rounded-xl backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">CEO Statement</h3>
                    <p className="text-sm text-foreground/60">Digital Leadership</p>
                  </div>
                </div>
                
                <AsciiBox className="text-xs sm:text-sm font-mono text-foreground/70 whitespace-pre mb-5 max-w-full overflow-x-auto">
                  {CEO_QUOTE}
                </AsciiBox>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-primary/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <span className="font-bold">LC</span>
                    </div>
                    <div>
                      <div className="font-semibold">LARP CEO</div>
                      <div className="text-xs text-foreground/60">Chief Executive Algorithm</div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary flex items-center gap-1 text-xs">
                    Full Statement <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - About Company */}
          <div className="order-1 lg:order-2">
            <Badge className="bg-primary/10 text-primary mb-6 border-none">Our Vision</Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Pioneering <span className="text-primary">Autonomous Management</span> for the Digital Age
            </h3>
            
            <div className="space-y-6 text-foreground/80">
              <p className="leading-relaxed">
                LARP-CEO was created to free organizations from mundane management tasks, allowing teams to focus on what truly matters: innovation and strategic execution. By automating business and administrative operations, we enable enterprises to maximize productivity while maintaining the highest standards of quality and compliance.
              </p>
              
              <p className="leading-relaxed">
                Our platform seamlessly integrates with your existing tools and workflows, providing an AI-powered management layer that transforms how your business operates—creating efficiency, reducing overhead, and accelerating growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: <CheckCircle2 className="h-6 w-6" />, label: "Enterprise-grade Security" },
                { icon: <Shield className="h-6 w-6" />, label: "Compliant Architecture" },
                { icon: <Users2 className="h-6 w-6" />, label: "Team Empowerment" },
                { icon: <Globe2 className="h-6 w-6" />, label: "Global Operations" }
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                    {item.icon}
                  </div>
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Core Propositions */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
              Why Choose Us
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Core Propositions</h3>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              What makes LARP-CEO different from conventional management software
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Our Mission",
                description: "To revolutionize business operations by providing an AI-powered management solution that handles operational complexity."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Why LARP-CEO?",
                description: "Unlike tools requiring constant oversight, we offer a fully autonomous agent capable of making decisions and executing plans."
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Enterprise Solutions",
                description: "Our platform scales with your business, providing robust security, compliance, and integration capabilities."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Future Growth",
                description: "LARP-CEO evolves with your business, learning from operations and adapting to changing market conditions."
              }
            ].map((card, i) => (
              <div key={i} className="relative group">
                {/* Background card with animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-xl transform transition-all duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
                
                {/* Content card */}
                <div className="relative bg-black/30 backdrop-blur-sm border border-primary/20 p-6 rounded-xl h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 group-hover:-translate-x-2">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {card.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {card.title}
                  </h4>
                  
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-primary/10">
                    <Button variant="ghost" size="sm" className="text-primary p-0 flex items-center gap-1 group/btn">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leadership Team */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
              Leadership
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h3>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Meet the algorithms and systems behind LARP-CEO's advanced management intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, i) => (
              <div key={i} className="bg-black/20 backdrop-blur-sm rounded-xl border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  {member.image}
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-primary text-sm mb-4">{member.title}</p>
                  <p className="text-foreground/70 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
              Our Journey
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Company Timeline</h3>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              The evolution of LARP-CEO from concept to global enterprise solution
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              {COMPANY_TIMELINE.map((event, i) => (
                <div key={i} className={`flex items-center mb-16 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <div className={`${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                      <Badge className="bg-primary/10 text-primary border-none mb-2 inline-block">
                        {event.year}
                      </Badge>
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-foreground/70">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-black"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-tr from-black/60 to-primary/10 p-1 overflow-hidden">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-10 md:p-16 relative">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your <span className="text-primary">Operations</span>?
                </h3>
                <p className="text-foreground/70 mb-8">
                  Experience the future of autonomous management with LARP-CEO. Our team is ready to demonstrate how our platform can optimize your business processes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6 rounded-xl shadow-lg shadow-primary/20">
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2 h-12 px-6 rounded-xl">
                    Contact Sales
                  </Button>
                </div>
              </div>
              
              <div className="p-6 bg-black/40 rounded-xl border border-primary/30 max-w-xs w-full">
                <h4 className="text-lg font-semibold mb-4">Our Commitment</h4>
                <ul className="space-y-3">
                  {[
                    "Personalized implementation",
                    "24/7 technical support",
                    "Regular platform updates",
                    "Data security guarantee",
                    "Custom integration services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
