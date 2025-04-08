import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Menu, 
  ChevronDown, 
  ArrowRight,
  User,
  TerminalSquare,
  Globe2,
  BarChart3,
  Shield,
  BookOpen,
  HelpCircle,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const MENU_ITEMS = [
  { 
    label: "Features",
    href: "#features",
  },
  { 
    label: "Capabilities",
    href: "#capabilities",
  },
  { 
    label: "Solutions",
    submenu: [
      { label: "Enterprise", icon: <BarChart3 className="h-4 w-4 mr-2" />, href: "#" },
      { label: "Development Teams", icon: <TerminalSquare className="h-4 w-4 mr-2" />, href: "#" },
      { label: "Public Projects", icon: <Globe2 className="h-4 w-4 mr-2" />, href: "#" },
      { label: "Security Management", icon: <Shield className="h-4 w-4 mr-2" />, href: "#" },
    ] 
  },
  { 
    label: "Resources",
    submenu: [
      { label: "Documentation", icon: <BookOpen className="h-4 w-4 mr-2" />, href: "#" },
      { label: "Support", icon: <HelpCircle className="h-4 w-4 mr-2" />, href: "#" },
    ]
  },
  { 
    label: "About Us",
    href: "#about",
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-primary/20" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-primary font-bold text-xl tracking-tight flex items-center cursor-pointer z-10">
          <Link href="/">
            <div className="flex items-center">
              <div className="flex justify-center items-center p-1.5 bg-primary/10 rounded-md mr-2.5">
                <span className="text-primary font-mono font-bold text-sm">LC</span>
              </div>
              <span className="mr-1 text-primary font-bold">LARP</span>
              <span className="font-bold text-foreground">CEO</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {MENU_ITEMS.map((item, index) => (
            <div key={index} className="relative group px-1">
              {item.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-md hover:bg-black/20 transition-colors duration-200 focus:outline-none">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 border-primary/20 bg-black/80 backdrop-blur-lg">
                    {item.submenu.map((subitem, subindex) => (
                      <DropdownMenuItem key={subindex} asChild>
                        <a 
                          href={subitem.href} 
                          className="flex cursor-pointer text-foreground/80 hover:text-primary items-center px-2 py-2 text-sm"
                        >
                          {subitem.icon}
                          {subitem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a 
                  href={item.href} 
                  className="flex items-center px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-md hover:bg-black/20 transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 z-10">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex text-foreground/80 hover:text-primary hover:bg-black/20 rounded-md"
          >
            <LogIn className="mr-1.5 h-4 w-4" />
            Sign In
          </Button>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-white rounded-md py-2 px-4 shadow-lg shadow-primary/20"
          >
            Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden ml-2">
              <div className="p-2 rounded-md hover:bg-black/20 transition-colors duration-200">
                <Menu className="h-5 w-5 text-foreground" />
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-primary/20 w-80">
              <div className="pt-8 pb-4 border-b border-primary/10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center p-1.5 bg-primary/10 rounded-md mr-2.5">
                      <span className="text-primary font-mono font-bold text-sm">LC</span>
                    </div>
                    <span className="mr-1 text-primary font-bold">LARP</span>
                    <span className="font-bold text-foreground">CEO</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 py-6">
                {MENU_ITEMS.map((item, index) => (
                  <div key={index} className="mb-2">
                    {item.submenu ? (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between px-2 py-2.5 text-foreground/70 text-sm font-medium">
                          {item.label}
                          <ChevronDown className="h-4 w-4 opacity-70" />
                        </div>
                        <div className="ml-3 pl-3 border-l border-primary/20 mt-1 mb-3">
                          {item.submenu.map((subitem, subindex) => (
                            <SheetClose key={subindex} asChild>
                              <a 
                                href={subitem.href} 
                                className="flex items-center px-2 py-2.5 text-foreground/80 hover:text-primary text-sm"
                              >
                                {subitem.icon}
                                {subitem.label}
                              </a>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <a 
                          href={item.href} 
                          className="flex items-center px-2 py-2.5 text-foreground/80 hover:text-primary text-sm font-medium"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-auto border-t border-primary/10 pt-6 pb-8">
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-primary/20 text-foreground hover:text-primary hover:bg-primary/5"
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
