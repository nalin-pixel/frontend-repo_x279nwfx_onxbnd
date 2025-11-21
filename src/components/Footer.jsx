export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300/80">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 ring-2 ring-white/20" />
          <span>© {new Date().getFullYear()} Accademia del Formaggio</span>
        </div>
        <div className="text-sm">P.IVA 00000000000 • Tutti i diritti riservati</div>
      </div>
    </footer>
  )
}
