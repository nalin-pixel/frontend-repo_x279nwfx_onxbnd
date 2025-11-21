export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/30 px-3 py-1 text-xs mb-4">
              Nuovi corsi ogni mese
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Impara ad assaggiare i formaggi come un Sommelier
            </h1>
            <p className="mt-4 text-slate-200/90 text-lg">
              Percorsi pratici e degustazioni guidate per scoprire aromi, tecniche e abbinamenti.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#corsi" className="px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition">Scopri i corsi</a>
              <a href="#chi-siamo" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">Chi siamo</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-tr from-slate-800 to-slate-900 shadow-xl">
              <img src="https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZWd1c3RhemlvbmUlMjBkaSUyMGZvcm1hZ2dpfGVufDB8MHx8fDE3NjM3MTE1NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Degustazione di formaggi" className="w-full h-full object-cover opacity-90" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block h-24 w-24 rounded-3xl bg-amber-500/30 blur-2xl" />
            <div className="absolute -top-6 -right-6 hidden sm:block h-24 w-24 rounded-3xl bg-yellow-400/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
