import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { allProducts } from "@/lib/products";

const Collection = () => {
  const [filter, setFilter] = useState<"all" | "men" | "women">("all");

  const filteredProducts = filter === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-navy" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-px bg-primary mb-8 mx-auto animate-fade-in-up" />
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up-delay-1">
            Gamme Complète
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight animate-fade-in-up-delay-2">
            Toute la
            <span className="block text-gradient-gold">Collection</span>
          </h1>
          <p className="text-ivory-muted text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-3">
            Explorez toute notre gamme de parfums exquis, chacun méticuleusement créé pour raconter une histoire unique.
          </p>
        </div>
      </section>

      {/* Filter & Products Section */}
      <section className="py-24 lg:py-32 bg-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setFilter("all")}
              className={`px-8 py-3 uppercase tracking-[0.2em] text-sm font-body transition-all ${
                filter === "all"
                  ? "bg-primary text-navy font-medium"
                  : "bg-navy-light text-ivory-muted hover:text-primary border border-primary/30"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter("men")}
              className={`px-8 py-3 uppercase tracking-[0.2em] text-sm font-body transition-all ${
                filter === "men"
                  ? "bg-primary text-navy font-medium"
                  : "bg-navy-light text-ivory-muted hover:text-primary border border-primary/30"
              }`}
            >
              Homme
            </button>
            <button
              onClick={() => setFilter("women")}
              className={`px-8 py-3 uppercase tracking-[0.2em] text-sm font-body transition-all ${
                filter === "women"
                  ? "bg-primary text-navy font-medium"
                  : "bg-navy-light text-ivory-muted hover:text-primary border border-primary/30"
              }`}
            >
              Femme
            </button>
          </div>

          {/* Products Count */}
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-sm">
              {filteredProducts.length} Parfums
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
