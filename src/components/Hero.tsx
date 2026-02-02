import heroPerfume from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPerfume}
          alt="Luxury Perfume"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Decorative Line */}
          <div className="w-16 h-px bg-primary mb-8 animate-fade-in-up" />
          
          {/* Subtitle */}
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up-delay-1">
            Découvrez l'Élégance Intemporelle
          </p>
          
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight animate-fade-in-up-delay-2">
            Luxe
            <span className="block text-gradient-gold">Minimaliste</span>
          </h1>
          
          {/* Description */}
          <p className="text-ivory-muted text-lg md:text-xl font-body leading-relaxed mb-10 max-w-lg animate-fade-in-up-delay-3">
            Découvrez l'art de la parfumerie fine. Chaque fragrance raconte une histoire unique, 
            créée pour ceux qui apprécient la beauté subtile des parfums exceptionnels.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
            <a href="#collection" className="btn-luxury text-center">
              Explorer la Collection
            </a>
            <a href="#about" className="btn-outline-luxury text-center">
              Notre Histoire
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-primary text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
