import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Package,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Settings,
  Search,
  ArrowLeft,
} from "lucide-react";
import { allProducts } from "@/lib/products";

const AdminProducts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    price: "",
    priceDA: "",
    pricePerDecant: "",
    category: "men",
    scentNotes: "",
    image: "",
  });

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to an API
    console.log("New product:", formData);
    setShowAddForm(false);
    setFormData({
      name: "",
      subtitle: "",
      price: "",
      priceDA: "",
      pricePerDecant: "",
      category: "men",
      scentNotes: "",
      image: "",
    });
  };

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy-dark border-b border-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src="/logo.jpg" alt="PARFUMERIA" className="h-12 w-auto" />
              <div className="border-l border-primary/20 pl-4">
                <h1 className="font-display text-xl text-foreground">Admin - Products</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/admin/dashboard"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} />
              </Link>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Settings size={20} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline text-sm uppercase tracking-[0.1em]">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="font-display text-4xl text-foreground mb-2">Products</h2>
            <p className="text-muted-foreground font-body">
              Manage your perfume inventory
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-luxury flex items-center gap-2"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="bg-navy-light border border-primary/20 p-6 rounded-sm mb-8">
            <h3 className="font-display text-2xl text-foreground mb-6">Add New Product</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Price (DA)
                  </label>
                  <input
                    type="number"
                    value={formData.priceDA}
                    onChange={(e) => setFormData({ ...formData, priceDA: e.target.value })}
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Price per Decant (10ml)
                  </label>
                  <input
                    type="number"
                    value={formData.pricePerDecant}
                    onChange={(e) =>
                      setFormData({ ...formData, pricePerDecant: e.target.value })
                    }
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Scent Notes
                  </label>
                  <input
                    type="text"
                    value={formData.scentNotes}
                    onChange={(e) =>
                      setFormData({ ...formData, scentNotes: e.target.value })
                    }
                    placeholder="e.g., Bergamot, Jasmine, Sandalwood"
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Image Path
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="e.g., /perfume-1.jpg"
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-luxury">
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn-outline-luxury"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-light border border-primary/20 pl-12 pr-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-navy-light border border-primary/20 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20 bg-background/50">
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Product
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Category
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Price (DA)
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Decant Price
                  </th>
                  <th className="text-right py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-primary/10 hover:bg-background/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-sm"
                        />
                        <div>
                          <p className="text-foreground font-medium">{product.name}</p>
                          <p className="text-muted-foreground text-sm">{product.subtitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-foreground capitalize">{product.category}</span>
                    </td>
                    <td className="py-4 px-6 text-foreground">
                      {product.priceDA.toLocaleString()} DA
                    </td>
                    <td className="py-4 px-6 text-foreground">
                      {product.pricePerDecant.toLocaleString()} DA
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-primary hover:text-gold-light transition-colors p-2">
                          <Edit size={18} />
                        </button>
                        <button className="text-destructive hover:text-destructive/80 transition-colors p-2">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center text-muted-foreground text-sm">
          Total: {filteredProducts.length} products
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
