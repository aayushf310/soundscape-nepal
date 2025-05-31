
import { Search, ShoppingCart, User, Music, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navItems = [
    {
      title: "Guitars",
      items: ["Electric Guitars", "Acoustic Guitars", "Bass Guitars", "Accessories"]
    },
    {
      title: "Amplifiers", 
      items: ["Guitar Amplifiers", "Bass Amplifiers", "Keyboard Amplifiers", "PA Systems"]
    },
    {
      title: "Keyboards",
      items: ["Digital Pianos", "Synthesizers", "MIDI Controllers", "Keyboard Stands"]
    },
    {
      title: "Strings",
      items: ["Guitar Strings", "Bass Strings", "Violin Strings", "String Care"]
    }
  ];

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-orange-400" />
            <h1 className="text-2xl font-bold text-white">
              Soundscape <span className="text-orange-400">Nepal</span>
            </h1>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search in soundscape world"
                className="w-full pl-10 pr-4 py-2 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 focus:border-orange-400 transition-all duration-300"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-400 transition-colors">Home</a>
            
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navItems.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="text-white hover:text-orange-400 transition-colors bg-transparent border-none outline-none data-[state=open]:text-orange-400">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[200px] bg-white/95 backdrop-blur-md border border-white/20 z-50 shadow-xl rounded-lg p-2">
                      <div className="grid gap-1">
                        {category.items.map((item) => (
                          <NavigationMenuLink
                            key={item}
                            className="block px-3 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 hover:text-orange-600 cursor-pointer transition-all duration-300 rounded-md"
                          >
                            {item}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400 md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
