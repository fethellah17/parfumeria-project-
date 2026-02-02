import mensFragrance from "@/assets/mens-fragrance.jpg";
import womensFragrance from "@/assets/womens-fragrance.jpg";

const Categories = () => {
  const categories = [
    {
      id: "men",
      title: "Parfums Homme",
      subtitle: "Audacieux & Raffinés",
      image: mensFragrance,
      description: "Découvrez des parfums puissants et sophistiqués qui définissent la masculinité moderne.",
    },
    {
      id: "women",
      title: "Parfums Femme",
      subtitle: "Élégants & Enchanteurs",
      image: womensFragrance,
      description: "Explorez des fragrances captivantes et féminines qui laissent une impression inoubliable.",
    },
  ];

  return (
    <section id="categories" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Collections Sélectionnées
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Explorer par Catégorie
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group card-luxury rounded-sm overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 text-center">
                <p className="text-primary uppercase tracking-[0.2em] text-xs mb-2">
                  {category.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-body text-lg mb-6">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.15em] hover-underline-gold">
                  Acheter Maintenant
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
