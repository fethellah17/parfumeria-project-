import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Sparkles, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-navy" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-px bg-primary mb-8 mx-auto animate-fade-in-up" />
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up-delay-1">
            Notre Histoire
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight animate-fade-in-up-delay-2">
            L'Art de la
            <span className="block text-gradient-gold">Parfumerie</span>
          </h1>
          <p className="text-ivory-muted text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-3">
            Depuis 1947, nous créons des parfums exceptionnels qui transcendent le temps et les tendances.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 lg:py-32 bg-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Un Héritage d'Excellence
              </h2>
              <div className="divider-gold mb-8" />
            </div>

            <div className="space-y-8 text-ivory-muted font-body text-lg leading-relaxed">
              <p>
                Fondée au cœur de Grasse, France—la capitale mondiale du parfum—PARFUMERIA 
                est synonyme de luxe et de sophistication depuis plus de sept décennies. Notre 
                voyage a commencé avec une vision simple : créer des parfums qui capturent l'essence 
                de l'élégance et de la beauté intemporelle.
              </p>

              <p>
                Chaque parfum de notre collection est un chef-d'œuvre, méticuleusement composé par nos 
                maîtres parfumeurs en utilisant uniquement les meilleurs ingrédients naturels provenant 
                du monde entier. Du oud rare d'Asie du Sud-Est à la rose de Bulgarie et la bergamote 
                italienne, nous ne ménageons aucun effort dans notre quête de la perfection olfactive.
              </p>

              <p>
                Notre philosophie repose sur la conviction qu'un parfum doit être plus qu'un simple 
                parfum—il doit être une expérience, un souvenir, une œuvre d'art. Cet engagement envers 
                l'excellence nous a valu une clientèle dévouée parmi ceux qui apprécient les belles choses 
                de la vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Nos Principes
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Nos Valeurs
            </h2>
            <div className="divider-gold mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Qualité sans compromis dans chaque flacon, des ingrédients à l'emballage.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Passion</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Amour profond de l'art de la parfumerie qui guide tout ce que nous créons.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Mélange de techniques traditionnelles avec la créativité et la vision modernes.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Durabilité</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Engagés dans l'approvisionnement éthique et la responsabilité environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 lg:py-32 bg-navy-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Le Processus
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Savoir-Faire Artisanal
            </h2>
            <div className="divider-gold mb-8" />
            
            <p className="text-ivory-muted font-body text-lg leading-relaxed mb-12">
              Chaque parfum prend des mois—parfois des années—à perfectionner. Nos maîtres parfumeurs 
              mélangent soigneusement des centaines d'huiles essentielles et de composés aromatiques, testant 
              d'innombrables variations jusqu'à ce que l'équilibre parfait soit atteint. Le résultat est une 
              composition harmonieuse qui évolue magnifiquement sur la peau, révélant de nouvelles 
              facettes à chaque port.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-navy-light p-8 border border-primary/20">
                <div className="text-primary font-display text-3xl mb-4">01</div>
                <h3 className="font-display text-xl text-foreground mb-3">Sélection</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Approvisionnement des meilleurs ingrédients naturels auprès de fournisseurs de confiance.
                </p>
              </div>

              <div className="bg-navy-light p-8 border border-primary/20">
                <div className="text-primary font-display text-3xl mb-4">02</div>
                <h3 className="font-display text-xl text-foreground mb-3">Création</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Les maîtres parfumeurs composent des accords uniques avec précision et art.
                </p>
              </div>

              <div className="bg-navy-light p-8 border border-primary/20">
                <div className="text-primary font-display text-3xl mb-4">03</div>
                <h3 className="font-display text-xl text-foreground mb-3">Maturation</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Les parfums vieillissent dans nos caves, permettant aux notes de s'harmoniser parfaitement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Vivez la Différence
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-10">
            Découvrez pourquoi des individus exigeants du monde entier choisissent PARFUMERIA pour leur parfum signature.
          </p>
          <a href="/collection" className="btn-luxury inline-block">
            Explorer Notre Collection
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
