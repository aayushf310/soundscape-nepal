
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
      title: "Premium Guitars",
      description: "Discover our collection of acoustic and electric guitars"
    },
    {
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200", 
      title: "Professional Amplifiers",
      description: "High-quality sound amplification for every musician"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200",
      title: "Digital Keyboards",
      description: "Modern keyboards and synthesizers for creative expression"
    },
    {
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200",
      title: "Professional Drums",
      description: "Complete drum sets for rhythm enthusiasts"
    },
    {
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200",
      title: "Studio Equipment",
      description: "Professional audio recording and mixing equipment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl mb-8 shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-8">
              <h3 className="text-5xl font-bold mb-6">{slide.title}</h3>
              <p className="text-xl mb-8 leading-relaxed">{slide.description}</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg">
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        onClick={prevSlide}
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full w-12 h-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full w-12 h-12"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
