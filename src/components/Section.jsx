export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-300/90">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export function CardsGrid({ children }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}

export function Card({ title, meta, description, cta, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60 hover:bg-slate-800 transition shadow-lg">
      {image && (
        <div className="h-40 w-full overflow-hidden">
          <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-5">
        {meta && <div className="text-xs text-amber-300 mb-2">{meta}</div>}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && <p className="mt-1 text-slate-300/90 text-sm">{description}</p>}
        {cta && (
          <div className="mt-4">
            <button className="text-sm font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 px-3 py-2 rounded-lg transition">
              {cta}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
