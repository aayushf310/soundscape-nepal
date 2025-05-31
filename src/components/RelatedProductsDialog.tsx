
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Instrument } from "@/pages/Index";
import { instrumentsData } from "@/data/instruments";

interface RelatedProductsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  instrument: Instrument | null;
  onAddToCart: (instrument: Instrument) => void;
}

const RelatedProductsDialog = ({ isOpen, onClose, instrument, onAddToCart }: RelatedProductsDialogProps) => {
  if (!instrument) return null;

  const getRelatedProducts = (instrument: Instrument) => {
    return instrumentsData.filter(item => 
      item.id !== instrument.id && 
      (item.relatedCategories?.includes(instrument.category) || 
       item.category === instrument.category ||
       item.brand === instrument.brand)
    ).slice(0, 6);
  };

  const relatedProducts = getRelatedProducts(instrument);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-400">
            Related Products for {instrument.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                {product.discountPercentage && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white font-bold text-xs">
                      {product.discountPercentage}% OFF
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-3">
                <div className="mb-2">
                  <h4 className="font-semibold text-white text-sm">{product.name}</h4>
                  <p className="text-gray-300 text-xs">{product.brand}</p>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2 w-2 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <div className="text-right">
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through block">
                      NPR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-sm font-bold text-orange-400">
                    NPR {product.price.toLocaleString()}
                  </span>
                </div>
              </CardContent>
              
              <CardFooter className="p-3 pt-0">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-xs"
                  onClick={() => onAddToCart(product)}
                  disabled={!product.available}
                >
                  <ShoppingCart className="mr-1 h-3 w-3" />
                  {product.available ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RelatedProductsDialog;
