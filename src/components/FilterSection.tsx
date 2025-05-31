
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { Filters, Instrument } from "@/pages/Index";

interface FilterSectionProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  instruments: Instrument[];
}

const FilterSection = ({ filters, setFilters, instruments }: FilterSectionProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(filters.searchTerm);

  const allBrands = [...new Set(instruments.map(instrument => instrument.brand))];
  const allCategories = [...new Set(instruments.map(instrument => instrument.category))];
  const allSeries = [...new Set(instruments.map(instrument => instrument.series).filter(Boolean))];
  const maxPrice = Math.max(...instruments.map(instrument => instrument.price));

  const handednessOptions = ['left', 'right', 'both'];

  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, brands: [...filters.brands, brand] });
    } else {
      setFilters({ ...filters, brands: filters.brands.filter(b => b !== brand) });
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, categories: [...filters.categories, category] });
    } else {
      setFilters({ ...filters, categories: filters.categories.filter(c => c !== category) });
    }
  };

  const handleHandednessChange = (handedness: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, handedness: [...filters.handedness, handedness] });
    } else {
      setFilters({ ...filters, handedness: filters.handedness.filter(h => h !== handedness) });
    }
  };

  const handleSeriesChange = (series: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, series: [...filters.series, series] });
    } else {
      setFilters({ ...filters, series: filters.series.filter(s => s !== series) });
    }
  };

  const handleSearch = () => {
    setFilters({ ...filters, searchTerm: localSearchTerm });
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, maxPrice],
      brands: [],
      categories: [],
      searchTerm: "",
      handedness: [],
      series: [],
    });
    setLocalSearchTerm("");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Search & Filters
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-orange-400 hover:text-orange-300"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Search Instruments</label>
            <div className="flex gap-2">
              <Input
                placeholder="Search by name or brand..."
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch} size="icon" className="bg-orange-500 hover:bg-orange-600">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-4 block">
              Price Range: NPR {filters.priceRange[0].toLocaleString()} - NPR {filters.priceRange[1].toLocaleString()}
            </label>
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={maxPrice}
              min={0}
              step={1000}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Brands</label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {allBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                  />
                  <label htmlFor={brand} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Categories</label>
            <div className="space-y-2">
              {allCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <label htmlFor={category} className="text-sm cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Handedness</label>
            <div className="space-y-2">
              {handednessOptions.map((handedness) => (
                <div key={handedness} className="flex items-center space-x-2">
                  <Checkbox
                    id={handedness}
                    checked={filters.handedness.includes(handedness)}
                    onCheckedChange={(checked) => handleHandednessChange(handedness, checked as boolean)}
                  />
                  <label htmlFor={handedness} className="text-sm cursor-pointer capitalize">
                    {handedness === 'both' ? 'Ambidextrous' : `${handedness}-handed`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Series</label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {allSeries.map((series) => (
                <div key={series} className="flex items-center space-x-2">
                  <Checkbox
                    id={series}
                    checked={filters.series.includes(series)}
                    onCheckedChange={(checked) => handleSeriesChange(series, checked as boolean)}
                  />
                  <label htmlFor={series} className="text-sm cursor-pointer">
                    {series}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSection;
