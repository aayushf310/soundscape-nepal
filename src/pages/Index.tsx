
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import FilterSection from "@/components/FilterSection";
import ProductGrid from "@/components/ProductGrid";
import { instrumentsData } from "@/data/instruments";

export interface Instrument {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  description: string;
  available: boolean;
}

export interface Filters {
  priceRange: [number, number];
  brands: string[];
  categories: string[];
  searchTerm: string;
}

const Index = () => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 100000],
    brands: [],
    categories: [],
    searchTerm: "",
  });

  const filteredInstruments = instrumentsData.filter((instrument) => {
    const matchesPrice = instrument.price >= filters.priceRange[0] && instrument.price <= filters.priceRange[1];
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(instrument.brand);
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(instrument.category);
    const matchesSearch = instrument.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         instrument.brand.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    return matchesPrice && matchesBrand && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <Hero />
      <ShopByCategory />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSection 
              filters={filters} 
              setFilters={setFilters}
              instruments={instrumentsData}
            />
          </div>
          <div className="lg:w-3/4">
            <ProductGrid instruments={filteredInstruments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
