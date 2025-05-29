
import { Search, ShoppingCart, User, Music, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-400 transition-colors">Home</a>
            
            {navItems.map((category) => (
              <DropdownMenu key={category.title}>
                <DropdownMenuTrigger className="text-white hover:text-orange-400 transition-colors flex items-center space-x-1 bg-transparent border-none outline-none">
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-white/20 z-50">
                  {category.items.map((item) => (
                    <DropdownMenuItem key={item} className="text-gray-800 hover:bg-orange-100 hover:text-orange-600 cursor-pointer">
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400">
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
