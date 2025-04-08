import { capabilities } from "@/data/capabilities";
import { CircleCheck, CheckCircle, PlusCircle, ArrowRight, TabletSmartphone, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsciiBox } from "@/components/ui/ascii-box";
import { WORKFLOW_DIAGRAM } from "@/lib/ascii-art";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Group capabilities into categories for tabbed display
const CAPABILITY_CATEGORIES = [
  { 
    id: "management", 
    label: "Management",
    description: "Core functionalities for organization management and leadership",
    capabilities: capabilities.slice(0, 6)
  },
  { 
    id: "technical", 
    label: "Technical",
    description: "Technical capabilities for development and operations",
    capabilities: capabilities.slice(6, 12)
  },
  { 
    id: "specialized", 
    label: "Specialized",
    description: "Specialized features for specific business needs",
    capabilities: capabilities.slice(12)
  }
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-28 px-4 overflow-hidden bg-gradient-to-b from-background/60 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:40px_40px] opacity-30 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container relative mx-auto max-w-6xl z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center bg-primary/10 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-primary/20">
            <span className="text-primary text-sm font-semibold">Comprehensive Toolkit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What <span className="text-primary">LARP-CEO</span> Can Do For Your Business
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Our platform provides an enterprise-grade management system powered by advanced artificial intelligence technologies that adapt to your specific organizational needs.
          </p>
        </div>

        {/* Workflow diagram */}
        <div className="mb-24 px-4 py-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/80 z-10"></div>
          <AsciiBox className="text-xs md:text-sm font-mono text-foreground/70 whitespace-pre overflow-x-auto flex justify-center z-20 relative">
            {WORKFLOW_DIAGRAM}
          </AsciiBox>
        </div>
        
        {/* Tabbed capabilities display */}
        <Tabs defaultValue="management" className="w-full">
          <div className="flex flex-col items-center mb-12">
            <TabsList className="bg-black/20 border border-primary/20 p-1 rounded-full">
              {CAPABILITY_CATEGORIES.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white text-sm"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {CAPABILITY_CATEGORIES.map(category => (
            <TabsContent 
              key={category.id}
              value={category.id}
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="text-center mb-12">
                <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {category.capabilities.map((capability, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                      {/* Title */}
                      <div className="flex items-center mb-5">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/30 px-3 py-1.5 rounded-md mr-3">
                          {String(index + 1).padStart(2, '0')}
                        </Badge>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {capability.title}
                        </h3>
                      </div>
                      
                      {/* List of capabilities */}
                      <ul className="space-y-3 mb-4">
                        {capability.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-foreground/80">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mr-2.5 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* More info link */}
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <a href="#" className="text-sm text-primary font-medium inline-flex items-center group/link">
                          <span>Explore capability</span>
                          <ArrowRight className="h-3.5 w-3.5 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Mobile capabilities callout */}
        <div className="mt-28 mx-auto">
          <div className="bg-gradient-to-tr from-black/40 to-primary/5 p-0.5 rounded-2xl backdrop-blur-md">
            <div className="bg-black/40 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded-full mb-4">
                    <TabletSmartphone className="h-4 w-4 text-primary mr-2" />
                    <span className="text-primary text-xs font-medium">Mobile Ready</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    Manage Your Business <span className="text-primary">From Anywhere</span>
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    LARP-CEO's capabilities are fully accessible on mobile devices, allowing you to monitor and manage your organization's operations from anywhere, at any time.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {["Real-time notifications", "Mobile reporting dashboard", "Secure remote access", "Cross-device synchronization"].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <PlusCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6 rounded-xl">
                    Explore Mobile Features <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-64 h-[500px] bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-[8px] border-foreground/10 p-3 shadow-xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-foreground/10 rounded-b-xl"></div>
                    <div className="w-full h-full bg-black/80 rounded-[30px] p-4 overflow-hidden flex flex-col">
                      {/* Mock mobile interface */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-xs font-bold text-primary">LARP-CEO</div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 flex-1">
                        {/* Mock dashboard items */}
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <div className="h-3 w-24 bg-primary/30 rounded-full"></div>
                              <div className="h-3 w-3 rounded-full bg-primary"></div>
                            </div>
                            <div className="space-y-1.5">
                              <div className="h-2 w-full bg-primary/20 rounded-full"></div>
                              <div className="h-2 w-3/4 bg-primary/20 rounded-full"></div>
                            </div>
                          </div>
                        ))}
                        
                        {/* Mock chart */}
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 h-40">
                          <div className="h-3 w-20 bg-primary/30 rounded-full mb-4"></div>
                          <div className="flex items-end justify-between h-24 px-2">
                            {[30, 60, 40, 80, 50, 70].map((h, i) => (
                              <div key={i} className="w-3 bg-primary/60 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Mock bottom navigation */}
                      <div className="flex justify-around items-center pt-3 border-t border-primary/20">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`w-10 h-1 rounded-full ${i === 1 ? 'bg-primary' : 'bg-primary/30'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
