import { useState } from 'react'
import { Menu, X, LogIn } from 'lucide-react'

const items = [
  { id: 'chi-siamo', label: 'Chi siamo' },
  { id: 'corsi', label: 'Corsi' },
  { id: 'concorsi', label: 'Concorsi' },
  { id: 'delegazioni', label: 'Delegazioni' },
  { id: 'formaggi', label: 'Formaggi' },
  { id: 'punti-interesse', label: 'Punti di interesse' },
  { id: 'news-eventi', label: 'News ed eventi' },
  { id: 'informa', label: 'Informa' },
  { id: 'contatti', label: 'Contatti' },
  { id: 'come-associarsi', label: 'Come associarsi' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 ring-2 ring-white/20 shadow-[0_0_30px_rgba(251,191,36,0.35)]" />
              <span className="text-white font-semibold tracking-tight">Accademia del Formaggio</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={(e) => handleNav(e, it.id)}
                  className="px-3 py-2 text-sm text-slate-200/90 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  {it.label}
                </a>
              ))}
              <a
                href="#accedi"
                onClick={(e) => handleNav(e, 'accedi')}
                className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                aria-label="Accedi"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden lg:inline text-sm">Accedi</span>
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-3 pb-3">
              <div className="grid grid-cols-2 gap-2">
                {items.map((it) => (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    onClick={(e) => handleNav(e, it.id)}
                    className="px-3 py-2 text-sm text-slate-200/90 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    {it.label}
                  </a>
                ))}
                <a
                  href="#accedi"
                  onClick={(e) => handleNav(e, 'accedi')}
                  className="col-span-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <LogIn className="h-4 w-4" /> Accedi
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
