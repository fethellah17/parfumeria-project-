import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Parfums Homme", href: "#men" },
      { name: "Parfums Femme", href: "#women" },
      { name: "Nouveautés", href: "#" },
      { name: "Meilleures Ventes", href: "#" },
      { name: "Coffrets Cadeaux", href: "#" },
    ],
    company: [
      { name: "Notre Histoire", href: "#about" },
      { name: "Savoir-Faire", href: "#" },
      { name: "Durabilité", href: "#" },
      { name: "Carrières", href: "#" },
      { name: "Presse", href: "#" },
    ],
    support: [
      { name: "Nous Contacter", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Livraison & Retours", href: "#" },
      { name: "Suivre ma Commande", href: "#" },
      { name: "Guide des Tailles", href: "#" },
    ],
  };

  return (
    <footer className="bg-navy-dark border-t border-primary/20">
      {/* Newsletter Section */}
      <div className="border-b border-primary/20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Rejoignez le Cercle PARFUMERIA
            </h3>
            <p className="text-muted-foreground font-body mb-8">
              Abonnez-vous pour recevoir des offres exclusives, les nouveautés et des insights sur l'art de la parfumerie.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-background border border-primary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
              />
              <button type="submit" className="btn-luxury whitespace-nowrap">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src="/logo.jpg" alt="PARFUMERIA" className="h-16 w-auto" />
            </a>
            <p className="text-muted-foreground font-body mb-6 max-w-sm">
              Création de parfums intemporels incarnant le luxe minimaliste. 
              Chaque fragrance est un voyage, un souvenir, une déclaration.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display text-foreground mb-6 uppercase tracking-[0.1em]">
              Boutique
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-body text-sm hover-underline-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-foreground mb-6 uppercase tracking-[0.1em]">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-body text-sm hover-underline-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-foreground mb-6 uppercase tracking-[0.1em]">
              Assistance
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-body text-sm hover-underline-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="font-body">
              © 2026 PARFUMERIA. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">Conditions d'Utilisation</a>
              <a href="#" className="hover:text-primary transition-colors">Politique des Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
