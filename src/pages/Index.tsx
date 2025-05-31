
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import ShopByCategory from "@/components/ShopByCategory";
import FilterSection from "@/components/FilterSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MoreWaysToSave from "@/components/MoreWaysToSave";
import { instrumentsData } from "@/data/instruments";

export interface Instrument {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  category: string;
  description: string;
  available: boolean;
  relatedCategories?: string[];
  handedness?: 'left' | 'right' | 'both';
  series?: string;
}

export interface Filters {
  priceRange: [number, number];
  brands: string[];
  categories: string[];
  searchTerm: string;
  handedness: string[];
  series: string[];
}

const Index = () => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 100000],
    brands: [],
    categories: [],
    searchTerm: "",
    handedness: [],
    series: [],
  });

  const filteredInstruments = instrumentsData.filter((instrument) => {
    const matchesPrice = instrument.price >= filters.priceRange[0] && instrument.price <= filters.priceRange[1];
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(instrument.brand);
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(instrument.category);
    const matchesSearch = instrument.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         instrument.brand.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesHandedness = filters.handedness.length === 0 || 
                             filters.handedness.includes(instrument.handedness || 'both') ||
                             (instrument.handedness === 'both' && filters.handedness.length > 0);
    const matchesSeries = filters.series.length === 0 || 
                         (instrument.series && filters.series.includes(instrument.series));
    
    return matchesPrice && matchesBrand && matchesCategory && matchesSearch && matchesHandedness && matchesSeries;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <HeroCarousel />
      </div>
      <ShopByCategory />
      <MoreWaysToSave />
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
      <Footer />
    </div>
  );
};

export default Index;
