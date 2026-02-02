import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

// Mock cart items (in a real app, this would come from a context/store)
interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  type: "bottle" | "decant";
  size: string;
  ml?: number; // For decants
  pricePerUnit: number;
  quantity: number;
  category: "men" | "women";
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "cart-1",
      productId: "1",
      name: "Noir Absolu",
      image: perfume1,
      type: "bottle",
      size: "Eau de Parfum · 100ml",
      pricePerUnit: 38000,
      quantity: 1,
      category: "men",
    },
    {
      id: "cart-2",
      productId: "3",
      name: "Fleur d'Or",
      image: perfume3,
      type: "decant",
      size: "Decant",
      ml: 30,
      pricePerUnit: 4800,
      quantity: 2,
      category: "women",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateItemTotal = (item: CartItem) => {
    if (item.type === "decant" && item.ml) {
      const decantUnits = item.ml / 10;
      return item.pricePerUnit * decantUnits * item.quantity;
    }
    return item.pricePerUnit * item.quantity;
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + calculateItemTotal(item),
    0
  );
  const shipping = subtotal > 30000 ? 0 : 800; // Free shipping over 30,000 DA
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 lg:px-8 py-32 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-primary/30" />
            <h1 className="font-display text-4xl text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground font-body mb-8">
              Discover our exquisite fragrances and find your signature scent.
            </p>
            <Link to="/collection" className="btn-luxury inline-block">
              Explore Collection
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-24 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground font-body">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-navy-light border border-primary/20 p-6 rounded-sm"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.productId}`}
                      className="shrink-0"
                    >
                      <div className="w-24 h-32 bg-navy rounded-sm overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="text-primary uppercase tracking-[0.2em] text-xs mb-1">
                            {item.category === "men" ? "For Him" : "For Her"}
                          </p>
                          <Link to={`/product/${item.productId}`}>
                            <h3 className="font-display text-xl text-foreground hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.type === "decant"
                              ? `${item.ml}ml Decant`
                              : item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-primary/30">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-2 text-primary hover:bg-primary/10 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 text-foreground border-x border-primary/30 min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-2 text-primary hover:bg-primary/10 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-foreground font-display text-xl">
                            {calculateItemTotal(item).toLocaleString()} DA
                          </p>
                          {item.type === "decant" && item.ml && (
                            <p className="text-muted-foreground text-xs mt-1">
                              {item.pricePerUnit} DA per 10ml
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors uppercase tracking-[0.15em] text-sm"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-navy-light border border-primary/20 p-6 rounded-sm sticky top-32">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{subtotal.toLocaleString()} DA</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-primary">Free</span>
                      ) : (
                        `${shipping} DA`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && subtotal < 30000 && (
                    <p className="text-xs text-primary">
                      Add {(30000 - subtotal).toLocaleString()} DA more for
                      free shipping
                    </p>
                  )}
                </div>

                <div className="border-t border-primary/20 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground uppercase tracking-[0.2em] text-sm">
                      Total
                    </span>
                    <span className="text-primary font-display text-3xl">
                      {total.toLocaleString()} DA
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="btn-luxury w-full flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </button>

                <div className="mt-6 space-y-3 text-xs text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>100% Authentic products</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Secure payment</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Free returns within 30 days</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
