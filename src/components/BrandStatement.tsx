const BrandStatement = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary/10 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Mark */}
          <div className="text-primary text-8xl font-display leading-none mb-8 opacity-30">
            "
          </div>
          
          {/* Statement */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-relaxed">
            Luxe Minimaliste —{" "}
            <span className="text-gradient-gold">Parfums Intemporels</span>
          </h2>
          
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Chez PARFUMERIA, nous croyons au pouvoir de l'élégance discrète. 
            Nos parfums ne sont pas de simples fragrances — ce sont des déclarations silencieuses de raffinement, 
            créées pour ceux qui comprennent que le véritable luxe réside dans la subtilité. 
            Chaque flacon renferme une histoire, prête à devenir partie de la vôtre.
          </p>

          {/* Divider */}
          <div className="divider-gold mb-12" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-primary font-display text-4xl md:text-5xl mb-2">15+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-[0.1em]">Années de Savoir-Faire</div>
            </div>
            <div>
              <div className="text-primary font-display text-4xl md:text-5xl mb-2">50+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-[0.1em]">Parfums Uniques</div>
            </div>
            <div>
              <div className="text-primary font-display text-4xl md:text-5xl mb-2">100%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-[0.1em]">Huiles Naturelles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
