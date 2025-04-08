import { Button } from "@/components/ui/button";
import { features } from "@/data/capabilities";
import { 
  ArrowRight, 
  BarChart3, 
  UsersRound, 
  Globe2, 
  Briefcase, 
  LineChart, 
  Database,
  Brain,
  MessageSquare,
  Shield
} from "lucide-react";

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  "Repository Management": <Database className="h-10 w-10" />,
  "Social Media Management": <MessageSquare className="h-10 w-10" />,
  "Strategic Planning": <Brain className="h-10 w-10" />,
  "Community Management": <UsersRound className="h-10 w-10" />,
  "Resource Management": <Briefcase className="h-10 w-10" />,
  "Data Analysis & Reporting": <LineChart className="h-10 w-10" />
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-60 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:40px_40px] opacity-30 z-0"></div>
      
      <div className="container relative mx-auto max-w-6xl z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center bg-primary/10 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-primary/20">
            <span className="text-primary text-sm font-semibold">Enterprise Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            LARP-CEO delivers an intelligent management system that automates complex
            operational tasks while continuously learning and improving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative backdrop-blur-sm">
              {/* Card background with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-primary/5 rounded-xl border border-primary/20 transform transition-all duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
              
              <div className="relative bg-black/30 p-8 rounded-xl border border-primary/30 backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:shadow-primary/20 group-hover:-translate-y-2 group-hover:-translate-x-2 h-full z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 inline-block text-primary">
                    {FEATURE_ICONS[feature.title] || <Brain className="h-10 w-10" />}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Learn more link */}
                <div className="mt-auto">
                  <a href="#" className="text-primary font-medium inline-flex items-center group/link">
                    <span>Learn more</span>
                    <span className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise capabilities callout */}
        <div className="mt-24 rounded-2xl bg-gradient-to-tr from-black/40 to-primary/5 p-1">
          <div className="bg-black/40 rounded-xl backdrop-blur-md border border-primary/20 p-10 md:p-16 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDIwMEMxNTUuMjI4IDIwMCAyMDAgMTU1LjIyOCAyMDAgMTAwQzIwMCA0NC43NzIgMTU1LjIyOCAwIDEwMCAwQzQ0Ljc3MiAwIDAgNDQuNzcyIDAgMTAwQzAgMTU1LjIyOCA0NC43NzIgMjAwIDEwMCAyMDBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDYiIGNsYXNzPSJ0ZXh0LXByaW1hcnkvMTAiLz48L3N2Zz4=')] bg-[length:200px_200px] opacity-50"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
              <div className="md:max-w-md">
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Ready for <span className="text-primary">Enterprise</span> Deployment?
                </h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Upgrade to our enterprise solution for advanced features, dedicated support, and customized AI management agents tailored to your organization's unique needs.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6 rounded-xl shadow-lg shadow-primary/20">
                    Request Demo <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2 h-12 px-6 rounded-xl">
                    View Pricing
                  </Button>
                </div>
              </div>
              
              <div className="relative w-full md:w-auto">
                <div className="grid grid-cols-2 gap-4 max-w-sm">
                  {[
                    { icon: <Shield className="h-5 w-5" />, label: "Enterprise Security" },
                    { icon: <Globe2 className="h-5 w-5" />, label: "Global Deployment" },
                    { icon: <BarChart3 className="h-5 w-5" />, label: "Advanced Analytics" },
                    { icon: <Database className="h-5 w-5" />, label: "Dedicated Storage" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 bg-black/20 rounded-lg border border-primary/20">
                      <div className="p-2 mr-3 rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
