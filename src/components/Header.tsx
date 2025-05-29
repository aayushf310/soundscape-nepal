
import { Search, ShoppingCart, User, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
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
            <a href="#" className="text-white hover:text-orange-400 transition-colors">Instruments</a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors">About</a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors">Contact</a>
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
