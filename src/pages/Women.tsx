import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/lib/products";

const womenProducts = allProducts.filter(p => p.category === "women");

const Women = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-navy" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-px bg-primary mb-8 mx-auto animate-fade-in-up" />
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up-delay-1">
            Pour Elle
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight animate-fade-in-up-delay-2">
            Collection
            <span className="block text-gradient-gold">Femme</span>
          </h1>
          <p className="text-ivory-muted text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-3">
            Parfums élégants et captivants créés pour la femme qui incarne la grâce, la confiance et la beauté intemporelle.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 lg:py-32 bg-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              {womenProducts.length} Parfums
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Élégance Féminine
            </h2>
            <div className="divider-gold mb-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Women;
