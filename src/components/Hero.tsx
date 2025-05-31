
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-600/20"></div>
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 animate-fade-in">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              Musical Journey
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Book premium musical instruments from Nepal's most trusted music store. 
            Professional quality instruments for every musician.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Browse Instruments
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-12 py-4 rounded-full text-lg"
            >
              <Play className="mr-2 h-6 w-6" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
