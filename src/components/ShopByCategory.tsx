
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Package, Tag } from "lucide-react";

const ShopByCategory = () => {
  const categories = [
    {
      title: "Best Sellers",
      description: "Most popular instruments among musicians",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500"
    },
    {
      title: "New Arrivals",
      description: "Latest instruments just added to our collection",
      icon: Package,
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500"
    },
    {
      title: "Clearance",
      description: "Great deals on quality instruments",
      icon: Tag,
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the perfect instrument for your musical journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Browse Collection
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
