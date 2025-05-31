
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instrument } from "@/pages/Index";

interface CartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  instrument: Instrument | null;
}

const CartDialog = ({ isOpen, onClose, instrument }: CartDialogProps) => {
  if (!instrument) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-400">
            Added to Cart!
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src={instrument.image}
              alt={instrument.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="w-2/3 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{instrument.name}</h3>
              <p className="text-gray-300">{instrument.brand}</p>
              <Badge className="bg-orange-500/20 text-orange-300 mt-2">
                {instrument.category}
              </Badge>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-300 mb-2">Product Description:</h4>
              <p className="text-gray-300 text-sm">{instrument.description}</p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-300 mb-2">Cart Details:</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Quantity:</span>
                <span className="text-white font-semibold">1</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300">Price:</span>
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
              <div className="border-t border-slate-600 mt-3 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total:</span>
                  <span className="text-xl font-bold text-orange-400">
                    NPR {instrument.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex gap-3 mt-6">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Continue Shopping
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
          >
            Checkout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
