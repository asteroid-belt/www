import starsJPG from '../../assets/stars.jpg'

export const StarsContainer = ({ children }: { children: React.ReactNode }) => (
  <section id="hero" className="relative text-white">
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/10 to-transparent" />
    <div
      className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${starsJPG.src}?height=800&width=1200)`,
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      {children}
    </div>
  </section>
)
