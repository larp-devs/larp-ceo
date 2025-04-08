import { WORKFLOW_DIAGRAM } from "@/lib/ascii-art";
import { 
  ArrowDown, 
  Code, 
  Users, 
  LineChart, 
  BrainCircuit, 
  ArrowRight, 
  Settings, 
  BarChart3, 
  Network, 
  ArrowUpRight, 
  CheckCircle, 
  FileSpreadsheet,
  MessageSquare,
  LucideIcon,
  Layers,
  Database,
  BarChart2,
  Gauge,
  Bot 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AsciiBox } from "@/components/ui/ascii-box";

interface ImplementationStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  isRight?: boolean;
}

function ImplementationStep({ number, title, description, icon, features, isRight }: ImplementationStepProps) {
  return (
    <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center mb-24`}>
      {/* Step number */}
      <div className={`flex-none relative w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold ${isRight ? 'md:order-1' : 'md:order-0'}`}>
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-black/40 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center text-primary z-10">
          {number}
        </div>
      </div>
      
      {/* Connector */}
      <div className={`hidden md:block flex-none h-0.5 w-8 bg-gradient-to-r ${isRight ? 'from-transparent to-primary/50' : 'from-primary/50 to-transparent'}`}></div>
      
      {/* Content box */}
      <div className={`flex-1 w-full bg-black/30 border border-primary/20 rounded-xl p-6 backdrop-blur-sm ${isRight ? 'md:text-right' : ''}`}>
        <div className={`flex items-center mb-4 ${isRight ? 'md:flex-row-reverse' : ''}`}>
          <div className="p-3 rounded-xl bg-primary/10 mr-4 text-primary">
            {icon}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        
        <p className="text-foreground/70 leading-relaxed mb-6">
          {description}
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${isRight ? 'md:text-right' : ''}`}>
          {features.map((feature, i) => (
            <div key={i} className={`flex items-center ${isRight ? 'md:justify-end md:flex-row-reverse' : ''}`}>
              <CheckCircle className="h-4 w-4 text-primary shrink-0 mr-2" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Integration icons and descriptions
const INTEGRATION_ITEMS = [
  { 
    icon: <Database className="h-6 w-6" />,
    title: "Data Integration",
    description: "Secure connectivity to enterprise systems & databases"
  },
  { 
    icon: <Layers className="h-6 w-6" />,
    title: "API Connections",
    description: "Seamless integration with your existing tech stack"
  },
  { 
    icon: <Bot className="h-6 w-6" />,
    title: "Agent Management",
    description: "Custom AI agents for your specific business needs"
  },
  { 
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description: "Real-time performance metrics and insights"
  },
  { 
    icon: <Gauge className="h-6 w-6" />,
    title: "Process Automation",
    description: "Streamlined workflows with minimal friction"
  },
  { 
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Communication Hub",
    description: "Centralized management of all communications"
  }
];

export function HowItWorksSection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
      <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:40px_40px] opacity-20 z-0"></div>
      
      <div className="container relative mx-auto max-w-6xl z-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
            Four-Stage Implementation
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How <span className="text-primary">LARP-CEO</span> Transforms Your Organization
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Our enterprise platform integrates seamlessly with your existing systems
            to deliver immediate value through a straightforward implementation process.
          </p>
        </div>
        
        {/* Workflow diagram */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-black/40 to-primary/5 p-0.5 mb-28">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 relative">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-primary/10 mr-3">
                <Network className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LARP-CEO System Architecture</h3>
                <p className="text-sm text-foreground/60">Autonomous Management Workflow</p>
              </div>
            </div>
            
            <AsciiBox className="text-xs sm:text-sm font-mono text-foreground/70 whitespace-pre overflow-x-auto flex justify-center">
              {WORKFLOW_DIAGRAM}
            </AsciiBox>
            
            <div className="mt-6 pt-6 border-t border-primary/10 flex justify-between items-center">
              <div className="text-xs text-foreground/60">
                <span className="text-primary font-semibold">Note:</span> System adapts based on your organization's specific needs and infrastructure.
              </div>
              <Button variant="ghost" size="sm" className="text-primary flex items-center gap-1 text-xs">
                View Technical Documentation <ArrowUpRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Implementation steps */}
        <div className="mb-24">
          <ImplementationStep 
            number={1}
            title="Initialize & Connect"
            description="The implementation begins with a comprehensive analysis of your organizational structure, workflows, and systems. LARP-CEO creates secure connections to your digital ecosystem."
            icon={<BrainCircuit className="h-7 w-7" />}
            features={[
              "System integration with existing tools",
              "Role-based access configuration",
              "Data import and initial analysis",
              "Custom agent configuration"
            ]}
          />
          
          <ImplementationStep 
            number={2}
            title="Automated Management"
            description="Once integrated, LARP-CEO begins to autonomously manage day-to-day operations, handling repetitive tasks and freeing your team to focus on strategic priorities."
            icon={<Settings className="h-7 w-7" />}
            features={[
              "Workflow automation deployment",
              "Real-time monitoring & alerts",
              "Autonomous decision execution",
              "Exception handling protocols"
            ]}
            isRight={true}
          />
          
          <ImplementationStep 
            number={3}
            title="Strategic Intelligence"
            description="Using advanced analytics, LARP-CEO provides actionable insights and develops strategic roadmaps for your organization based on market trends and internal performance metrics."
            icon={<BarChart3 className="h-7 w-7" />}
            features={[
              "Predictive analytics implementation",
              "Performance optimization",
              "Resource allocation planning",
              "Risk assessment & mitigation"
            ]}
          />
          
          <ImplementationStep 
            number={4}
            title="Ecosystem Management"
            description="In its final stage, LARP-CEO manages your entire digital ecosystem, from team communications to external stakeholder engagement, providing a unified management layer."
            icon={<Users className="h-7 w-7" />}
            features={[
              "Stakeholder communication",
              "Team performance analytics",
              "Knowledge management systems",
              "Continuous learning & adaptation"
            ]}
            isRight={true}
          />
        </div>
        
        {/* Integration capabilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
              Enterprise-Ready
            </Badge>
            <h3 className="text-3xl font-bold mb-6">Integration Capabilities</h3>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              LARP-CEO connects seamlessly with your existing technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTEGRATION_ITEMS.map((item, i) => (
              <div key={i} className="bg-black/20 border border-primary/20 rounded-xl p-6 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Success metrics */}
        <div className="bg-gradient-to-tr from-black/60 to-primary/5 rounded-2xl p-0.5">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-10 md:p-16 relative">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4 border-none">Success Metrics</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Measurable Results</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                LARP-CEO delivers quantifiable improvements across key business areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "47%",
                  label: "Reduced Management Overhead",
                  description: "Time saved on routine management tasks"
                },
                {
                  value: "63%",
                  label: "Improved Decision Speed",
                  description: "Faster business decisions with AI assistance"
                },
                {
                  value: "89%",
                  label: "Enhanced Data Utilization",
                  description: "Better insights from existing business data"
                },
                {
                  value: "76%",
                  label: "Increased Team Focus",
                  description: "More time on strategic vs. administrative work"
                }
              ].map((stat, i) => (
                <div key={i} className="bg-black/20 rounded-xl border border-primary/30 p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <h4 className="font-semibold mb-2">{stat.label}</h4>
                  <p className="text-sm text-foreground/60">{stat.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6 rounded-xl shadow-lg shadow-primary/20">
                Book Implementation Consultation <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
