
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Eye, Package } from "lucide-react";
import { Instrument } from "@/pages/Index";
import { useToast } from "@/hooks/use-toast";
import CartDialog from "./CartDialog";
import ProductDetailDialog from "./ProductDetailDialog";

interface ProductGridProps {
  instruments: Instrument[];
}

const ProductGrid = ({ instruments }: ProductGridProps) => {
  const { toast } = useToast();
  const [cartDialogOpen, setCartDialogOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);

  const handleAddToCart = (instrument: Instrument) => {
    setSelectedInstrument(instrument);
    setCartDialogOpen(true);
    toast({
      title: "Added to Cart",
      description: `${instrument.name} has been added to your cart!`,
    });
  };

  const handleViewProduct = (instrument: Instrument) => {
    setSelectedInstrument(instrument);
    setProductDetailOpen(true);
  };

  if (instruments.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-400">No instruments found matching your criteria.</p>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">
          {instruments.length} Instruments Available
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instruments.map((instrument) => (
          <Card 
            key={instrument.id} 
            className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group overflow-hidden transform hover:scale-105 shadow-xl flex flex-col h-full"
          >
            <div className="relative overflow-hidden">
              <img
                src={instrument.image}
                alt={instrument.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="bg-black/20 hover:bg-black/40 text-white"
                  onClick={() => handleViewProduct(instrument)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-black/20 hover:bg-black/40 text-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              {instrument.discountPercentage && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-red-500 text-white font-bold">
                    {instrument.discountPercentage}% OFF
                  </Badge>
                </div>
              )}
              {!instrument.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive">Out of Stock</Badge>
                </div>
              )}
              {/* Stock indicator */}
              <div className="absolute bottom-2 left-2">
                <Badge className="bg-green-500/80 text-white text-xs flex items-center gap-1">
                  <Package className="h-3 w-3" />
                  {instrument.stock || 0} left
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4 flex-grow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-lg line-clamp-1">{instrument.name}</h4>
                  <p className="text-gray-300 text-sm">{instrument.brand}</p>
                  {instrument.series && (
                    <p className="text-orange-300 text-xs">{instrument.series} Series</p>
                  )}
                  {instrument.handedness && instrument.handedness !== 'both' && (
                    <p className="text-blue-300 text-xs capitalize">{instrument.handedness} Handed</p>
                  )}
                </div>
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 shrink-0">
                  {instrument.category}
                </Badge>
              </div>
              
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{instrument.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">(4.8)</span>
                </div>
                <div className="text-right">
                  {instrument.originalPrice && (
                    <span className="text-sm text-gray-400 line-through block">
                      NPR {instrument.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-lg font-bold text-orange-400">
                    NPR {instrument.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 mt-auto">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg"
                onClick={() => handleAddToCart(instrument)}
                disabled={!instrument.available || !instrument.stock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {instrument.available && instrument.stock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <CartDialog 
        isOpen={cartDialogOpen}
        onClose={() => setCartDialogOpen(false)}
        instrument={selectedInstrument}
      />
      
      <ProductDetailDialog 
        isOpen={productDetailOpen}
        onClose={() => setProductDetailOpen(false)}
        instrument={selectedInstrument}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductGrid;
