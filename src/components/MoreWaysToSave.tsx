
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MoreWaysToSave = () => {
  const deals = [
    {
      title: "DEMO DEALS",
      heading: "Certified Open Box Savings",
      description: "Get amazing deals on demo instruments",
      buttonText: "Shop Now",
      color: "from-blue-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
      textColor: "text-white"
    },
    {
      title: "MEMORIAL DAY SALE",
      heading: "Up to 50% Off Pedals, Amps & More",
      description: "Limited time offers on premium gear",
      buttonText: "Shop Now",
      color: "from-pink-500 to-red-500",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500",
      textColor: "text-white"
    },
    {
      title: "HEADPHONE SALE",
      heading: "Headphones Up to 30% Off",
      description: "Professional audio equipment deals",
      buttonText: "Shop Now",
      color: "from-purple-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            More Ways to Save
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover incredible deals and limited-time offers on premium musical equipment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <Card key={deal.title} className={`bg-gradient-to-br ${deal.color} border-none overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl h-[450px]`}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.heading}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {deal.title}
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center h-44">
                <h3 className={`text-2xl font-bold ${deal.textColor} mb-3 leading-tight`}>
                  {deal.heading}
                </h3>
                <p className={`${deal.textColor} opacity-90 mb-6`}>
                  {deal.description}
                </p>
                <Button 
                  variant="outline" 
                  className="bg-orange-500/20 border-orange-400/50 text-orange-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 rounded-full px-6"
                >
                  {deal.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWaysToSave;
