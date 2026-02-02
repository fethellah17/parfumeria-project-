import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShoppingBag,
  LogOut,
  Settings,
  ArrowLeft,
  Eye,
  Check,
  X,
  Clock,
  Truck,
} from "lucide-react";

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  items: {
    productName: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentMethod: string;
  shippingAddress: string;
  date: string;
}

const AdminOrders = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const [orders] = useState<Order[]>([
    {
      id: "PF234561",
      customer: {
        name: "Amina Benali",
        email: "amina.benali@email.com",
        phone: "+213 555 123 456",
      },
      items: [
        { productName: "Acqua Di Gio Profumo", quantity: 1, price: 85600 },
        { productName: "Sauvage Elixir (Decant 30ml)", quantity: 1, price: 25500 },
      ],
      total: 111100,
      status: "pending",
      paymentMethod: "Cash on Delivery",
      shippingAddress: "123 Rue Didouche Mourad, Algiers",
      date: "2026-02-01",
    },
    {
      id: "PF234562",
      customer: {
        name: "Karim Mansouri",
        email: "karim.m@email.com",
        phone: "+213 555 234 567",
      },
      items: [{ productName: "Bleu de Chanel", quantity: 1, price: 42500 }],
      total: 42500,
      status: "delivered",
      paymentMethod: "Credit Card",
      shippingAddress: "45 Avenue Mohamed V, Oran",
      date: "2026-01-28",
    },
    {
      id: "PF234563",
      customer: {
        name: "Fatima Chaoui",
        email: "fatima.ch@email.com",
        phone: "+213 555 345 678",
      },
      items: [
        { productName: "Chanel No. 5", quantity: 1, price: 98400 },
        { productName: "Black Opium", quantity: 1, price: 30000 },
      ],
      total: 128400,
      status: "processing",
      paymentMethod: "Cash on Delivery",
      shippingAddress: "78 Boulevard Colonel Amirouche, Constantine",
      date: "2026-01-30",
    },
    {
      id: "PF234564",
      customer: {
        name: "Youssef Ahmed",
        email: "youssef.a@email.com",
        phone: "+213 555 456 789",
      },
      items: [{ productName: "La Vie Est Belle (Decant 20ml)", quantity: 1, price: 16000 }],
      total: 16000,
      status: "shipped",
      paymentMethod: "Credit Card",
      shippingAddress: "12 Rue Larbi Ben M'hidi, Annaba",
      date: "2026-01-29",
    },
    {
      id: "PF234565",
      customer: {
        name: "Nesrine Djebbar",
        email: "nesrine.d@email.com",
        phone: "+213 555 567 890",
      },
      items: [{ productName: "1 Million Prive", quantity: 1, price: 39200 }],
      total: 39200,
      status: "cancelled",
      paymentMethod: "Cash on Delivery",
      shippingAddress: "56 Avenue de l'ALN, Tlemcen",
      date: "2026-01-27",
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

  const filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock size={16} className="text-gold-light" />;
      case "processing":
        return <ShoppingBag size={16} className="text-primary" />;
      case "shipped":
        return <Truck size={16} className="text-primary" />;
      case "delivered":
        return <Check size={16} className="text-primary" />;
      case "cancelled":
        return <X size={16} className="text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-gold-light/20 text-gold-light";
      case "processing":
        return "bg-primary/20 text-primary";
      case "shipped":
        return "bg-primary/30 text-primary";
      case "delivered":
        return "bg-primary/40 text-primary";
      case "cancelled":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-navy/50 text-muted-foreground";
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
                <h1 className="font-display text-xl text-foreground">Admin - Orders</h1>
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
        <div className="mb-8">
          <h2 className="font-display text-4xl text-foreground mb-2">Orders</h2>
          <p className="text-muted-foreground font-body">
            Manage customer orders and shipments
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", "pending", "processing", "shipped", "delivered", "cancelled"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-sm text-sm uppercase tracking-[0.1em] transition-colors ${
                  selectedStatus === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-navy-light text-muted-foreground hover:text-foreground border border-primary/20"
                }`}
              >
                {status}
              </button>
            )
          )}
        </div>

        {/* Orders Table */}
        <div className="bg-navy-light border border-primary/20 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20 bg-background/50">
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Order ID
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Customer
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Total
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Date
                  </th>
                  <th className="text-right py-4 px-6 text-muted-foreground text-xs uppercase tracking-[0.1em]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-primary/10 hover:bg-background/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-foreground font-mono text-sm">
                      {order.id}
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-foreground font-medium">{order.customer.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {order.customer.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      {order.total.toLocaleString()} DA
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full uppercase tracking-[0.1em] ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground text-sm">{order.date}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-primary hover:text-gold-light transition-colors p-2 flex items-center gap-2"
                        >
                          <Eye size={18} />
                          <span className="text-sm uppercase tracking-[0.1em]">View</span>
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
          Total: {filteredOrders.length} orders
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-navy-light border border-primary/20 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-primary/20 flex justify-between items-center">
              <h3 className="font-display text-2xl text-foreground">Order Details</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Info */}
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
                  Order ID
                </p>
                <p className="text-foreground font-mono text-lg">{selectedOrder.id}</p>
              </div>

              {/* Customer Info */}
              <div>
                <h4 className="text-foreground text-lg font-display mb-3">Customer</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Name:</span>{" "}
                    {selectedOrder.customer.name}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Email:</span>{" "}
                    {selectedOrder.customer.email}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Phone:</span>{" "}
                    {selectedOrder.customer.phone}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div>
                <h4 className="text-foreground text-lg font-display mb-3">Items</h4>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-primary/10"
                    >
                      <div>
                        <p className="text-foreground">{item.productName}</p>
                        <p className="text-muted-foreground text-sm">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="text-foreground font-medium">
                        {item.price.toLocaleString()} DA
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment & Shipping */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
                    Payment Method
                  </p>
                  <p className="text-foreground">{selectedOrder.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
                    Status
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full uppercase tracking-[0.1em] ${getStatusColor(
                      selectedOrder.status
                    )}`}
                  >
                    {getStatusIcon(selectedOrder.status)}
                    {selectedOrder.status}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] mb-2">
                  Shipping Address
                </p>
                <p className="text-foreground">{selectedOrder.shippingAddress}</p>
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-primary/20">
                <div className="flex justify-between items-center">
                  <span className="text-foreground text-lg uppercase tracking-[0.1em]">
                    Total
                  </span>
                  <span className="text-primary font-display text-2xl">
                    {selectedOrder.total.toLocaleString()} DA
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="btn-luxury flex-1">Update Status</button>
                <button className="btn-outline-luxury flex-1">Print Invoice</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
