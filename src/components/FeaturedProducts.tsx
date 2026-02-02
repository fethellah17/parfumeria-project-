import ProductCard from "./ProductCard";
import { allProducts } from "@/lib/products";

const products = allProducts.slice(0, 4); // First 4 products for featured section

const FeaturedProducts = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-navy-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Parfums Signature
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Parfums en Vedette
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Chaque fragrance est un chef-d'œuvre, méticuleusement créé avec les meilleurs 
            ingrédients du monde entier.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a href="#" className="btn-outline-luxury inline-block">
            Voir Tous les Parfums
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
