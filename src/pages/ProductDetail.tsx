import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag, Heart, Share2, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { allProducts } from "@/lib/products";

// Product descriptions for enhanced detail page
const productDescriptions: Record<string, string> = {
  "1": "A mysterious and captivating fragrance that embodies modern masculinity. Noir Absolu opens with a bright bergamot and spicy black pepper, leading to a heart of precious oud and romantic rose. The base reveals warm sandalwood and sensual musk, creating a scent that is both powerful and refined.",
  "2": "Fresh and invigorating, Citrus Éclat captures the essence of Mediterranean summer. This vibrant composition features zesty citrus notes that sparkle with energy, complemented by aromatic green tea and exotic cardamom. Perfect for the contemporary man who appreciates understated elegance.",
  "3": "An enchanting floral masterpiece that celebrates feminine grace and sophistication. Fleur d'Or weaves together precious jasmine and ylang-ylang with romantic rose and delicate peony. The warm base of vanilla and sandalwood adds depth and longevity to this timeless fragrance.",
  "4": "The pinnacle of luxury perfumery, Oud Mystique showcases the world's most precious ingredient. Rich and opulent, this intense parfum combines rare oud with exotic spices and smoky incense. A fragrance for the discerning connoisseur who appreciates exceptional quality.",
  "5": "Bold yet refined, Vetiver Sauvage channels the untamed spirit of nature. Crisp grapefruit and pink pepper give way to earthy vetiver and aromatic patchouli, grounded by noble cedar and rare ambergris. An olfactory journey for the adventurous soul.",
  "6": "Sophisticated and sensual, Leather Noir is a modern classic. Spicy cardamom and violet leaf introduce a heart of supple leather and powdery iris. The dry-down reveals warm vetiver and sweet tonka bean, creating an unforgettable signature scent.",
  "7": "Warm and inviting, Amber Royale evokes the richness of ancient treasures. Opening with bright mandarin and exotic star anise, it develops into a spicy heart of cinnamon and tobacco. The base of golden amber and creamy vanilla creates a scent of pure luxury.",
  "8": "A celebration of the world's most beloved flower, Rose Précieuse features the finest rose essences from Grasse and Turkey. This exquisite parfum captures rose in all its glory—fresh, romantic, and endlessly elegant. A must-have for rose lovers.",
  "9": "Radiant and sunny, Ambre Solaire embodies the warmth of golden hour. White florals dance with exotic spices over a bed of rich amber and smooth vanilla. This captivating scent transitions beautifully from day to evening.",
  "10": "Delicate yet distinctive, Iris Délicate showcases the ethereal beauty of iris root. Bright neroli and lemon open this refined fragrance, while violet and freesia add a powdery softness. Clean musk and cedarwood provide an elegant finish.",
  "11": "Pure indulgence, Vanille Exquise features the finest Madagascar vanilla in a luxurious composition. Citrus top notes give way to white florals, all wrapped in a velvety vanilla embrace enhanced by tonka bean and creamy sandalwood.",
  "12": "Romantic and radiant, Pivoine Royale captures the fresh beauty of peony in full bloom. Fruity blackcurrant and litchi create a sparkling opening, while the heart blooms with peony, rose, and magnolia. A modern floral for the confident woman.",
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);
  const [purchaseType, setPurchaseType] = useState<"bottle" | "decant">("bottle");
  const [decantMl, setDecantMl] = useState(10);
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
          <button onClick={() => navigate("/collection")} className="btn-luxury">
            Back to Collection
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const description = productDescriptions[product.id] || "";
  
  // Calculate total price based on purchase type
  const calculateTotalPrice = () => {
    if (purchaseType === "bottle") {
      return product.priceDA * quantity;
    } else {
      const decantUnits = decantMl / 10; // Each unit is 10ml
      return product.pricePerDecant * decantUnits * quantity;
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-24 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-ivory-muted hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-[0.2em] text-sm">Back</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-navy-light">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {/* Category & Name */}
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                  {product.category === "men" ? "For Him" : "For Her"}
                </p>
                <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg font-body">
                  {product.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="border-y border-primary/20 py-6">
                <div className="flex items-baseline gap-3">
                  <p className="font-display text-4xl text-foreground">
                    {calculateTotalPrice().toLocaleString()} DA
                  </p>
                  {purchaseType === "decant" && (
                    <span className="text-muted-foreground text-sm">
                      ({product.pricePerDecant} DA per 10ml)
                    </span>
                  )}
                </div>
              </div>

              {/* Purchase Type Selection */}
              <div>
                <h2 className="font-display text-xl text-foreground mb-4">Purchase Option</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <button
                    onClick={() => {
                      setPurchaseType("bottle");
                      setQuantity(1);
                    }}
                    className={`p-4 border rounded-sm transition-all ${
                      purchaseType === "bottle"
                        ? "bg-primary text-navy border-primary"
                        : "bg-navy-light text-ivory-muted border-primary/30 hover:border-primary"
                    }`}
                  >
                    <div className="text-center">
                      <p className="font-display text-lg mb-1">Full Bottle</p>
                      <p className="text-xs opacity-80">{product.subtitle}</p>
                      <p className="text-sm mt-2 font-medium">{product.priceDA} DA</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setPurchaseType("decant");
                      setDecantMl(10);
                      setQuantity(1);
                    }}
                    className={`p-4 border rounded-sm transition-all ${
                      purchaseType === "decant"
                        ? "bg-primary text-navy border-primary"
                        : "bg-navy-light text-ivory-muted border-primary/30 hover:border-primary"
                    }`}
                  >
                    <div className="text-center">
                      <p className="font-display text-lg mb-1">Decant</p>
                      <p className="text-xs opacity-80">Starting from 10ml</p>
                      <p className="text-sm mt-2 font-medium">{product.pricePerDecant} DA / 10ml</p>
                    </div>
                  </button>
                </div>
                
                {/* Authenticity Badge */}
                <div className="bg-primary/10 border border-primary/30 p-3 rounded-sm">
                  <p className="text-primary text-sm text-center uppercase tracking-[0.15em]">
                    ✓ 100% Original perfume – Decanted from original bottle
                  </p>
                </div>
              </div>

              {/* Decant ML Selector (shown only when decant is selected) */}
              {purchaseType === "decant" && (
                <div>
                  <label className="text-foreground uppercase tracking-[0.2em] text-sm mb-3 block">
                    Select Quantity (ml)
                  </label>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center border border-primary/30 flex-1">
                      <button
                        onClick={() => setDecantMl(Math.max(10, decantMl - 10))}
                        className="px-4 py-3 text-primary hover:bg-primary/10 transition-colors text-lg"
                      >
                        −
                      </button>
                      <div className="flex-1 text-center py-3 border-x border-primary/30">
                        <span className="text-foreground font-display text-2xl">{decantMl}</span>
                        <span className="text-primary text-sm ml-2">ml</span>
                      </div>
                      <button
                        onClick={() => setDecantMl(decantMl + 10)}
                        className="px-4 py-3 text-primary hover:bg-primary/10 transition-colors text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Minimum 10ml · Increases in 10ml increments
                  </p>
                </div>
              )}

              {/* Description */}
              <div>
                <h2 className="font-display text-xl text-foreground mb-3">Description</h2>
                <p className="text-ivory-muted font-body leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Scent Notes */}
              <div>
                <h2 className="font-display text-xl text-foreground mb-4">Scent Notes</h2>
                <div className="space-y-4 bg-navy-light p-6 rounded-sm border border-primary/10">
                  {product.scentNotes.map((note) => (
                    <div key={note.type} className="flex gap-4">
                      <span className="text-primary uppercase text-xs tracking-wider w-16 shrink-0 pt-1">
                        {note.type}
                      </span>
                      <span className="text-ivory-muted text-sm font-body flex-1">
                        {note.notes}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                {purchaseType === "bottle" && (
                  <div className="flex items-center gap-4">
                    <label className="text-foreground uppercase tracking-[0.2em] text-sm">
                      Quantity
                    </label>
                    <div className="flex items-center border border-primary/30">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 text-foreground border-x border-primary/30">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {purchaseType === "decant" && (
                  <div className="flex items-center gap-4">
                    <label className="text-foreground uppercase tracking-[0.2em] text-sm">
                      Number of {decantMl}ml bottles
                    </label>
                    <div className="flex items-center border border-primary/30">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 text-foreground border-x border-primary/30">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Total Summary */}
                <div className="bg-navy-light p-4 rounded-sm border border-primary/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground text-sm">
                      {purchaseType === "bottle" 
                        ? `${quantity} × Full Bottle (${product.subtitle})`
                        : `${quantity} × ${decantMl}ml Decant`
                      }
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-primary/10">
                    <span className="text-foreground uppercase tracking-[0.2em] text-sm">Total</span>
                    <span className="text-primary font-display text-2xl">{calculateTotalPrice().toLocaleString()} DA</span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-luxury w-full flex items-center justify-center gap-3"
                  disabled={addedToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={20} />
                      Add to Cart
                    </>
                  )}
                </button>

                <div className="flex gap-3">
                  <button className="flex-1 btn-outline-luxury flex items-center justify-center gap-2">
                    <Heart size={18} />
                    Add to Wishlist
                  </button>
                  <button className="flex-1 btn-outline-luxury flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-primary/20 pt-6 space-y-3 text-sm text-muted-foreground font-body">
                <p className="flex justify-between">
                  <span>Free shipping on orders over $200</span>
                </p>
                <p className="flex justify-between">
                  <span>Complimentary samples with every order</span>
                </p>
                <p className="flex justify-between">
                  <span>Returns accepted within 30 days</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
