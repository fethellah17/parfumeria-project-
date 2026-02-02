import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Plus, Edit, Trash2, LogOut, Settings, ArrowLeft, Tag } from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

const AdminCategories = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
  });

  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Men", slug: "men", description: "Masculine fragrances", productCount: 6 },
    { id: 2, name: "Women", slug: "women", description: "Feminine fragrances", productCount: 6 },
    {
      id: 3,
      name: "Unisex",
      slug: "unisex",
      description: "Gender-neutral scents",
      productCount: 0,
    },
  ]);

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
    const newCategory: Category = {
      id: categories.length + 1,
      name: formData.name,
      slug: formData.slug,
      description: formData.description,
      productCount: 0,
    };
    setCategories([...categories, newCategory]);
    setShowAddForm(false);
    setFormData({ name: "", slug: "", description: "" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy-dark border-b border-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src="/logo.jpg" alt="PARFUMERIA" className="h-12 w-auto" />
              <div className="border-l border-primary/20 pl-4">
                <h1 className="font-display text-xl text-foreground">Admin - Categories</h1>
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
            <h2 className="font-display text-4xl text-foreground mb-2">Categories</h2>
            <p className="text-muted-foreground font-body">
              Organize your product collections
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-luxury flex items-center gap-2"
          >
            <Plus size={18} />
            Add Category
          </button>
        </div>

        {/* Add Category Form */}
        {showAddForm && (
          <div className="bg-navy-light border border-primary/20 p-6 rounded-sm mb-8">
            <h3 className="font-display text-2xl text-foreground mb-6">Add New Category</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Category Name
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
                    Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="e.g., luxury-collection"
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-[0.1em]">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full bg-background border border-primary/20 px-4 py-3 text-foreground rounded-sm focus:outline-none focus:border-primary resize-none"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-luxury">
                  Add Category
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

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-navy-light border border-primary/20 p-6 rounded-sm hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Tag className="text-primary" size={24} />
                </div>
                <div className="flex gap-2">
                  <button className="text-primary hover:text-gold-light transition-colors p-2">
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-destructive hover:text-destructive/80 transition-colors p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <h3 className="font-display text-2xl text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>

              <div className="pt-4 border-t border-primary/10">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm uppercase tracking-[0.1em]">
                    Products
                  </span>
                  <span className="text-primary font-display text-xl">
                    {category.productCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
