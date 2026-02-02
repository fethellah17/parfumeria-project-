import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  LogOut,
  Settings,
  BarChart3,
  DollarSign,
  Tag,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats] = useState({
    totalOrders: 247,
    totalRevenue: 8420000,
    totalProducts: 12,
    totalCustomers: 156,
    pendingOrders: 18,
    completedOrders: 229,
  });

  useEffect(() => {
    // Check if user is authenticated
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const recentOrders = [
    { id: "PF234561", customer: "Amina Benali", total: 85600, status: "Pending" },
    { id: "PF234562", customer: "Karim Mansouri", total: 42500, status: "Completed" },
    { id: "PF234563", customer: "Fatima Chaoui", total: 128400, status: "Processing" },
    { id: "PF234564", customer: "Youssef Ahmed", total: 56500, status: "Completed" },
    { id: "PF234565", customer: "Nesrine Djebbar", total: 39200, status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy-dark border-b border-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src="/logo.jpg" alt="PARFUMERIA" className="h-12 w-auto" />
              <div className="border-l border-primary/20 pl-4">
                <h1 className="font-display text-xl text-foreground">Admin Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
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
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="font-display text-4xl text-foreground mb-2">
            Welcome Back, Admin
          </h2>
          <p className="text-muted-foreground font-body">
            Here's what's happening with your store today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Revenue */}
          <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="text-primary" size={24} />
              </div>
              <span className="text-xs text-primary uppercase tracking-[0.2em]">
                +12.5%
              </span>
            </div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
              Total Revenue
            </h3>
            <p className="font-display text-3xl text-foreground">
              {stats.totalRevenue.toLocaleString()} DA
            </p>
          </div>

          {/* Total Orders */}
          <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-primary" size={24} />
              </div>
              <span className="text-xs text-primary uppercase tracking-[0.2em]">
                +8.2%
              </span>
            </div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
              Total Orders
            </h3>
            <p className="font-display text-3xl text-foreground">{stats.totalOrders}</p>
          </div>

          {/* Total Products */}
          <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
              Total Products
            </h3>
            <p className="font-display text-3xl text-foreground">{stats.totalProducts}</p>
          </div>

          {/* Total Customers */}
          <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <span className="text-xs text-primary uppercase tracking-[0.2em]">
                +15.3%
              </span>
            </div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
              Total Customers
            </h3>
            <p className="font-display text-3xl text-foreground">{stats.totalCustomers}</p>
          </div>
        </div>

        {/* Recent Orders & Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-foreground">Recent Orders</h3>
                <Link
                  to="/admin/orders"
                  className="text-primary hover:text-gold-light text-sm uppercase tracking-[0.1em]"
                >
                  View All →
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-3 px-2 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-2 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                        Customer
                      </th>
                      <th className="text-left py-3 px-2 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                        Total
                      </th>
                      <th className="text-left py-3 px-2 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-primary/10 hover:bg-background/50 transition-colors"
                      >
                        <td className="py-4 px-2 text-foreground font-mono text-sm">
                          {order.id}
                        </td>
                        <td className="py-4 px-2 text-foreground">{order.customer}</td>
                        <td className="py-4 px-2 text-foreground">
                          {order.total.toLocaleString()} DA
                        </td>
                        <td className="py-4 px-2">
                          <span
                            className={`text-xs px-3 py-1 rounded-full uppercase tracking-[0.1em] ${
                              order.status === "Completed"
                                ? "bg-primary/20 text-primary"
                                : order.status === "Pending"
                                ? "bg-gold-light/20 text-gold-light"
                                : "bg-navy/50 text-muted-foreground"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <Link
                  to="/admin/products"
                  className="w-full btn-luxury flex items-center justify-center gap-2"
                >
                  <Package size={18} />
                  Manage Products
                </Link>
                <Link
                  to="/admin/orders"
                  className="w-full btn-outline-luxury flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  View Orders
                </Link>
                <Link
                  to="/admin/categories"
                  className="w-full btn-outline-luxury flex items-center justify-center gap-2"
                >
                  <Tag size={18} />
                  Manage Categories
                </Link>
                <button className="w-full btn-outline-luxury flex items-center justify-center gap-2">
                  <BarChart3 size={18} />
                  View Analytics
                </button>
              </div>
            </div>

            {/* Order Status */}
            <div className="bg-navy-light border border-primary/20 p-6 rounded-sm">
              <h3 className="font-display text-xl text-foreground mb-4">
                Order Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Pending</span>
                  <span className="text-foreground font-display text-lg">
                    {stats.pendingOrders}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Completed</span>
                  <span className="text-primary font-display text-lg">
                    {stats.completedOrders}
                  </span>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-sm uppercase tracking-[0.1em]">
                      Total
                    </span>
                    <span className="text-foreground font-display text-xl">
                      {stats.totalOrders}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
