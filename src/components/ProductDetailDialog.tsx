
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Star, Package } from "lucide-react";
import { Instrument } from "@/pages/Index";
import { instrumentsData, accessoriesData } from "@/data/instruments";

interface ProductDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  instrument: Instrument | null;
  onAddToCart: (instrument: Instrument) => void;
}

const ProductDetailDialog = ({ isOpen, onClose, instrument, onAddToCart }: ProductDetailDialogProps) => {
  const [selectedAccessories, setSelectedAccessories] = useState<number[]>([]);

  if (!instrument) return null;

  const getSimilarProducts = (instrument: Instrument) => {
    const priceRange = 20000; // NPR 20,000 price range
    return instrumentsData.filter(item => 
      item.id !== instrument.id && 
      item.category === instrument.category &&
      Math.abs(item.price - instrument.price) <= priceRange &&
      item.available
    ).slice(0, 3);
  };

  const getRelevantAccessories = () => {
    if (instrument.category === "Guitar" || instrument.category === "Bass") {
      return accessoriesData;
    }
    return accessoriesData.slice(1, 3); // Show only amp and picks for other instruments
  };

  const similarProducts = getSimilarProducts(instrument);
  const relevantAccessories = getRelevantAccessories();

  const handleAccessoryToggle = (accessoryId: number) => {
    setSelectedAccessories(prev => 
      prev.includes(accessoryId) 
        ? prev.filter(id => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  const calculateTotal = () => {
    const accessoryTotal = selectedAccessories.reduce((total, id) => {
      const accessory = relevantAccessories.find(acc => acc.id === id);
      return total + (accessory?.price || 0);
    }, 0);
    return instrument.price + accessoryTotal;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-400">
            {instrument.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Product Details */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={instrument.image}
                alt={instrument.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2">
                <Badge className="bg-green-500/80 text-white text-sm flex items-center gap-1">
                  <Package className="h-3 w-3" />
                  {instrument.stock || 0} in stock
                </Badge>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-300 mb-2">Product Description</h3>
              <p className="text-gray-300 text-sm mb-4">{instrument.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Brand:</span>
                  <span className="text-white ml-2">{instrument.brand}</span>
                </div>
                <div>
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white ml-2">{instrument.category}</span>
                </div>
                {instrument.series && (
                  <div>
                    <span className="text-gray-400">Series:</span>
                    <span className="text-white ml-2">{instrument.series}</span>
                  </div>
                )}
                {instrument.handedness && instrument.handedness !== 'both' && (
                  <div>
                    <span className="text-gray-400">Handedness:</span>
                    <span className="text-white ml-2 capitalize">{instrument.handedness}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
                <span className="text-gray-400 ml-2">(4.8 / 5)</span>
              </div>
            </div>
          </div>

          {/* Similar Products & Accessories */}
          <div className="space-y-6">
            {/* Similar Products for Comparison */}
            {similarProducts.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Compare Similar Products</h3>
                <div className="space-y-3">
                  {similarProducts.map((product) => (
                    <Card key={product.id} className="bg-white/10 border-white/20">
                      <CardContent className="p-3">
                        <div className="flex gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-sm">{product.name}</h4>
                            <p className="text-gray-300 text-xs">{product.brand}</p>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-orange-400 font-bold text-sm">
                                NPR {product.price.toLocaleString()}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-6 px-2"
                                onClick={() => onAddToCart(product)}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Relevant Accessories */}
            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-3">Add Relevant Accessories</h3>
              <div className="space-y-3">
                {relevantAccessories.map((accessory) => (
                  <Card key={accessory.id} className="bg-white/10 border-white/20">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={selectedAccessories.includes(accessory.id)}
                          onCheckedChange={() => handleAccessoryToggle(accessory.id)}
                        />
                        <img
                          src={accessory.image}
                          alt={accessory.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{accessory.name}</h4>
                          <p className="text-gray-300 text-xs">{accessory.description}</p>
                          <span className="text-orange-400 font-bold text-sm">
                            NPR {accessory.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-300 mb-3">Cart Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">{instrument.name}</span>
                  <span className="text-white">NPR {instrument.price.toLocaleString()}</span>
                </div>
                {selectedAccessories.map(id => {
                  const accessory = relevantAccessories.find(acc => acc.id === id);
                  return accessory ? (
                    <div key={id} className="flex justify-between">
                      <span className="text-gray-300">{accessory.name}</span>
                      <span className="text-white">NPR {accessory.price.toLocaleString()}</span>
                    </div>
                  ) : null;
                })}
                <div className="border-t border-slate-600 pt-2 mt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total:</span>
                    <span className="text-orange-400 text-lg">
                      NPR {calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                onClick={() => onAddToCart(instrument)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart - NPR {calculateTotal().toLocaleString()}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
