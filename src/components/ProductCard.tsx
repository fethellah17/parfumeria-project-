import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

interface ScentNote {
  type: "top" | "middle" | "base";
  notes: string;
}

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceDA: number; // Price in Algerian Dinar for full bottle
  pricePerDecant: number; // Price per 10ml in DA
  image: string;
  scentNotes: ScentNote[];
  category: "men" | "women";
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group card-luxury rounded-sm overflow-hidden">
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="aspect-[4/5] overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover img-zoom"
          />
          
          {/* Quick Add Button - Appears on Hover */}
          <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button 
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality here
              }}
              className="btn-luxury w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Ajouter au Panier
            </button>
          </div>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="text-primary uppercase tracking-[0.2em] text-xs mb-2 block">
          {product.category === "men" ? "Pour Lui" : "Pour Elle"}
        </span>
        
        {/* Name & Subtitle */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm font-body mb-4">
          {product.subtitle}
        </p>

        {/* Scent Notes */}
        <div className="space-y-2 mb-4 border-t border-primary/10 pt-4">
          {product.scentNotes.map((note) => (
            <div key={note.type} className="flex items-start gap-2">
              <span className="text-primary uppercase text-[10px] tracking-wider w-12 shrink-0 pt-0.5">
                {note.type}
              </span>
              <span className="text-muted-foreground text-xs font-body">
                {note.notes}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-t border-primary/10 pt-4">
          <span className="text-foreground font-display text-xl">
            {product.priceDA.toLocaleString()} DA
          </span>
          <Link 
            to={`/product/${product.id}`}
            className="text-primary hover:text-gold-light transition-colors text-sm uppercase tracking-[0.1em] hover-underline-gold"
          >
            Voir Détails
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
export type { Product, ScentNote };
