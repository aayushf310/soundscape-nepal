
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Package, Tag } from "lucide-react";

const ShopByCategory = () => {
  const categories = [
    {
      title: "Best Sellers",
      description: "Most popular instruments among musicians",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "New Arrivals",
      description: "Latest instruments just added to our collection",
      icon: Package,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Clearance",
      description: "Great deals on quality instruments",
      icon: Tag,
      color: "from-green-500 to-teal-500"
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
              <Card key={category.title} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
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
