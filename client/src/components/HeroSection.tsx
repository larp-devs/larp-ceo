import { AsciiLogo } from "@/components/AsciiLogo";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Globe, 
  Users, 
  Check, 
  Lock, 
  LineChart,
  Bot, 
  Settings,
  Zap,
  MoveRight,
  ChevronDown,
  Star,
  Shield,
  MousePointerClick
} from "lucide-react";
import { TypingEffect } from "@/components/ui/typing-effect";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full opacity-70 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full opacity-50 blur-3xl z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTYwIDYwVjBoLTFWNjBoMXpNMCAwdjYwSDF2LTYwSDB6IiBmaWxsPSIjMjAyMjI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-[length:40px_40px] opacity-20 z-0"></div>
      
      {/* Main content */}
      <div className="container relative mx-auto max-w-6xl z-10">
        <div className="text-center mb-8">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 rounded-full mb-5">
            Redefining Organizational Management
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">Automate</span> Your
            <br className="hidden md:block" />
            Business <span className="relative inline-block">Operations
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C25 4 25 1 50 1C75 1 75 7 100 7C125 7 125 1 150 1C175 1 175 7 200 7" stroke="currentColor" strokeWidth="2" className="text-primary" fill="none"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 mx-auto max-w-2xl leading-relaxed">
            LARP-CEO delivers intelligent AI agents that manage operational tasks, 
            optimize workflows, and enhance organizational efficiency while your team
            focuses on strategic growth.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-14 px-8 rounded-xl shadow-lg shadow-primary/20">
              Get Started <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2 h-14 px-8 rounded-xl">
              Book a Demo <Users className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          {/* Feature bullets */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12 text-sm mt-4">
            {[
              { icon: <Shield className="h-4 w-4" />, text: "Enterprise Security" },
              { icon: <Brain className="h-4 w-4" />, text: "Advanced AI" },
              { icon: <Bot className="h-4 w-4" />, text: "Multi-Agent System" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center text-foreground/70">
                <div className="text-primary mr-2">{feature.icon}</div>
                {feature.text}
              </div>
            ))}
          </div>
        </div>
        
        {/* Interactive display area */}
        <div className="relative mt-16 mb-12">
          {/* Glow effects */}
          <div className="absolute -top-20 left-1/4 w-1/2 h-[300px] bg-primary/20 rounded-full opacity-30 blur-3xl z-0 animate-pulse"></div>
          
          {/* 3D Card Effect Container */}
          <div className="relative flex justify-center items-center perspective">
            {/* Shadow card underneath */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl transform translate-y-4 translate-x-4 blur-sm z-0"></div>
            
            {/* Main display */}
            <div className="relative z-10 bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-primary/30 shadow-2xl w-full max-w-4xl overflow-hidden">
              {/* Terminal header with tabs */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex gap-1">
                  {['Management', 'Analytics', 'Agents', 'Config'].map((tab, i) => (
                    <div 
                      key={i} 
                      className={`px-4 py-1.5 text-xs font-medium rounded-t-md ${i === 0 ? 'bg-primary/20 text-primary' : 'text-foreground/50 hover:text-foreground/70'} cursor-pointer`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-foreground/50 font-mono">LARP-CEO v2.5.0</div>
              </div>
              
              {/* Main interface */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left panel - Agent status */}
                <div className="md:col-span-1 bg-black/40 rounded-xl border border-primary/20 p-4 h-80">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-foreground/80">Active Agents</h3>
                    <div className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">5 Online</div>
                  </div>
                  
                  {/* Agent list */}
                  <div className="space-y-3">
                    {[
                      { name: "Project Manager", status: "Active", icon: <Settings className="h-3 w-3 text-green-500" /> },
                      { name: "Data Analyst", status: "Active", icon: <LineChart className="h-3 w-3 text-green-500" /> },
                      { name: "DevOps Engineer", status: "Active", icon: <Bot className="h-3 w-3 text-green-500" /> },
                      { name: "Marketing Specialist", status: "Active", icon: <Globe className="h-3 w-3 text-green-500" /> },
                      { name: "Security Officer", status: "Active", icon: <Lock className="h-3 w-3 text-green-500" /> },
                      { name: "Customer Support", status: "Standby", icon: <Users className="h-3 w-3 text-yellow-500" /> },
                    ].map((agent, i) => (
                      <div key={i} className="flex items-center justify-between bg-black/20 rounded-md p-2 border border-primary/10">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mr-2">
                            {agent.icon}
                          </div>
                          <span className="text-xs font-medium">{agent.name}</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-1.5 h-1.5 rounded-full ${agent.status === "Active" ? "bg-green-500" : "bg-yellow-500"} mr-1.5`}></div>
                          <span className="text-xs text-foreground/50">{agent.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-primary/10 flex justify-between">
                    <button className="text-xs text-primary flex items-center">
                      <Settings className="h-3 w-3 mr-1" /> Configure
                    </button>
                    <button className="text-xs text-primary flex items-center">
                      View All <ChevronDown className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
                
                {/* Center panel - Visualization */}
                <div className="md:col-span-2 bg-black/40 rounded-xl border border-primary/20 p-4 h-80 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-foreground/80">Workflow Performance</h3>
                    <div className="flex items-center text-xs text-foreground/60">
                      <div className="w-2 h-2 rounded-full bg-primary mr-1"></div>
                      Live Data
                    </div>
                  </div>
                  
                  {/* Visualization area */}
                  <div className="flex-1 relative">
                    {/* Simulated chart */}
                    <div className="absolute inset-0 flex items-end pb-8">
                      {[40, 55, 48, 80, 65, 90, 75, 60, 85, 70, 95, 65].map((height, i) => (
                        <div key={i} className="h-full flex-1 flex items-end px-0.5">
                          <div 
                            className={`w-full bg-gradient-to-t from-primary/80 to-primary/30 rounded-sm`} 
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-foreground/40">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                        <div key={i}>{month}</div>
                      ))}
                    </div>
                    
                    {/* Y-axis */}
                    <div className="absolute top-0 left-0 bottom-8 flex flex-col justify-between items-start text-xs text-foreground/40">
                      <div>100%</div>
                      <div>75%</div>
                      <div>50%</div>
                      <div>25%</div>
                      <div>0%</div>
                    </div>
                  </div>
                  
                  {/* Terminal output */}
                  <div className="bg-black/40 rounded-md mt-4 p-3 border border-primary/20">
                    <div className="text-foreground/90 font-mono text-xs">
                      <span className="text-primary mr-1">$</span>
                      <TypingEffect 
                        text="Performance analysis complete: Efficiency improved by 28.5% after LARP-CEO deployment."
                        typingSpeed={30}
                        startDelay={1000}
                        className="inline"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status row */}
              <div className="mt-6 pt-4 border-t border-primary/20 grid grid-cols-4 gap-4">
                {[
                  { label: "Efficiency Score", value: "93%", icon: <Zap className="h-5 w-5" /> },
                  { label: "Issues Resolved", value: "1,247", icon: <Check className="h-5 w-5" /> },
                  { label: "Agent Insights", value: "426", icon: <Brain className="h-5 w-5" /> },
                  { label: "Time Saved", value: "683 hrs", icon: <BarChart3 className="h-5 w-5" /> },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60">{stat.label}</div>
                      <div className="text-lg font-semibold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating notification cards */}
          <div className="absolute -top-14 -right-4 sm:right-8 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-green-500/30 shadow-lg w-64 transform rotate-2 z-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-500 mr-3 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Task Completed</h4>
                <p className="text-xs text-foreground/60 mt-1">Q4 Strategic Planning document generated successfully.</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -left-4 sm:left-8 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-primary/30 shadow-lg w-60 transform -rotate-3 z-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                <Brain className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Agent Insight</h4>
                <p className="text-xs text-foreground/60 mt-1">Optimizing resource allocation could reduce costs by 15%.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 px-4">
          {[
            {
              title: "Efficiency Boost",
              value: "99%",
              description: "Organizations report improved efficiency after implementing LARP-CEO",
              icon: <Zap className="h-8 w-8" />
            },
            {
              title: "Round-the-Clock Operation",
              value: "24/7",
              description: "Continuous operation with intelligent agent management and delegation",
              icon: <Globe className="h-8 w-8" />
            },
            {
              title: "Growing Client Base",
              value: "500+",
              description: "Enterprise organizations using LARP-CEO to transform business operations",
              icon: <Users className="h-8 w-8" />
            }
          ].map((stat, i) => (
            <div key={i} className="bg-black/20 rounded-xl border border-primary/20 p-6 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
              <p className="text-foreground/60 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="container mx-auto max-w-6xl mt-28 pb-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-foreground/60 px-6 py-2 border-t border-b border-primary/10">TRUSTED BY INNOVATIVE ORGANIZATIONS WORLDWIDE</span>
        </div>
        
        <div className="relative">
          {/* Gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling logos */}
          <div className="flex justify-around items-center gap-x-16 px-8 opacity-70">
            {['Acme Corp', 'TechFlow', 'InnovateX', 'DataSphere', 'GlobalAI', 'Quantum Solutions', 'Enterprise Labs'].map((company, i) => (
              <div key={i} className="text-foreground/60 font-semibold text-lg tracking-wider whitespace-nowrap">
                {company}
              </div>
            ))}
          </div>
        </div>
        
        {/* "Get Started" action button */}
        <div className="mt-20 text-center">
          <Button className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 gap-2 group h-12 px-6 rounded-xl">
            <span>Explore How It Works</span>
            <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
