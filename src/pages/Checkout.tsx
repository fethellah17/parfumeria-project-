import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CreditCard, Truck, MapPin, User, Mail, Phone, Lock, CheckCircle2 } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    wilaya: "",
    postalCode: "",
    paymentMethod: "cash",
  });

  // Mock cart total (in a real app, this would come from cart state)
  const cartTotal = 85600;
  const shipping = 0;
  const total = cartTotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    // Here you would normally process the order
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 lg:px-8 py-32 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle2 className="w-24 h-24 mx-auto mb-6 text-primary" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Thank you for your purchase. We've sent a confirmation email to{" "}
              <span className="text-primary">{formData.email}</span>
            </p>
            <div className="bg-navy-light border border-primary/20 p-8 rounded-sm mb-8">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="font-display text-2xl text-primary mb-4">
                #PF{Math.floor(Math.random() * 1000000)}
              </p>
              <p className="text-sm text-muted-foreground">
                Expected delivery: 3-5 business days
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="btn-luxury"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/collection")}
                className="btn-outline-luxury"
              >
                Track Order
              </button>
            </div>
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
              Checkout
            </h1>
            <p className="text-muted-foreground font-body">
              Complete your order with secure payment
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="text-primary" size={24} />
                    <h2 className="font-display text-2xl text-foreground">
                      Contact Information
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                        <Mail className="inline w-4 h-4 mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-primary" size={24} />
                    <h2 className="font-display text-2xl text-foreground">
                      Shipping Address
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                          Wilaya *
                        </label>
                        <select
                          required
                          value={formData.wilaya}
                          onChange={(e) =>
                            setFormData({ ...formData, wilaya: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select...</option>
                          <option value="Algiers">Algiers</option>
                          <option value="Oran">Oran</option>
                          <option value="Constantine">Constantine</option>
                          <option value="Annaba">Annaba</option>
                          <option value="Blida">Blida</option>
                          {/* Add more wilayas as needed */}
                        </select>
                      </div>
                      <div>
                        <label className="block text-foreground text-sm uppercase tracking-[0.1em] mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) =>
                            setFormData({ ...formData, postalCode: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="text-primary" size={24} />
                    <h2 className="font-display text-2xl text-foreground">
                      Payment Method
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start gap-4 p-4 border border-primary/30 rounded-sm cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Truck className="text-primary" size={20} />
                          <span className="text-foreground font-medium">
                            Cash on Delivery
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Pay when you receive your order
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-4 p-4 border border-primary/30 rounded-sm cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CreditCard className="text-primary" size={20} />
                          <span className="text-foreground font-medium">
                            Credit/Debit Card
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Secure payment via CIB card
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
                    <Lock className="text-primary shrink-0 mt-0.5" size={16} />
                    <p>
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-navy-light border border-primary/20 p-6 rounded-sm sticky top-32">
                  <h2 className="font-display text-2xl text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>{cartTotal.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-primary">Free</span>
                    </div>
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
                    type="submit"
                    className="btn-luxury w-full flex items-center justify-center gap-2"
                  >
                    Place Order
                    <CheckCircle2 size={18} />
                  </button>

                  <div className="mt-6 space-y-3 text-xs text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% Authentic products</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Secure checkout</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Free returns within 30 days</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
