import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Section, CardsGrid, Card } from './components/Section'

const corsi = [
  {
    title: 'Introduzione alla degustazione',
    meta: 'Sab 14 Dic • 10:00 - 13:00',
    description: 'Le basi: analisi visiva, olfattiva e gustativa con prove pratiche.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'I formaggi a crosta fiorita',
    meta: 'Dom 15 Dic • 16:00 - 19:00',
    description: 'Camembert, Brie e affini: tecnica di taglio, aromi e abbinamenti.',
    image: 'https://images.unsplash.com/photo-1669908978664-485e69bc26cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJJTIwZm9ybWFnZ2klMjBhJTIwY3Jvc3RhJTIwZmlvcml0YXxlbnwwfDB8fHwxNzYzNzExNTYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Blu e erborinati',
    meta: 'Mer 18 Dic • 18:30 - 21:00',
    description: 'Gorgonzola, Roquefort e Stilton: intensità e pairing con vini dolci.',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(251,191,36,0.12),transparent),radial-gradient(700px_circle_at_80%_30%,rgba(250,204,21,0.10),transparent)]" />
      <Navbar />
      <main>
        <Hero />

        <Section id="chi-siamo" title="Chi siamo" subtitle="Promuoviamo la cultura del formaggio con percorsi formativi e degustazioni in tutta Italia.">
          <div className="prose prose-invert max-w-3xl">
            <p>
              Siamo un gruppo di appassionati, maestri assaggiatori e divulgatori. Organizziamo corsi, eventi e visite guidate nelle migliori realtà casearie, con l’obiettivo di diffondere una cultura dell’assaggio consapevole.
            </p>
          </div>
        </Section>

        <Section id="corsi" title="Corsi" subtitle="Calendario dei prossimi appuntamenti">
          <CardsGrid>
            {corsi.map((c, i) => (
              <Card key={i} title={c.title} meta={c.meta} description={c.description} image={c.image} cta="Dettagli" />
            ))}
          </CardsGrid>
        </Section>

        <Section id="concorsi" title="Concorsi">
          <CardsGrid>
            <Card title="Trofeo Alpino" meta="Iscrizioni aperte" description="Degustazione cieca di formaggi d’alpeggio." cta="Partecipa" />
            <Card title="Gran Selezione" meta="Primavera 2025" description="Giuria mista di professionisti e appassionati." cta="Scopri" />
            <Card title="Blu d’Italia" meta="Estate 2025" description="Concorso dedicato ai migliori erborinati." cta="Info" />
          </CardsGrid>
        </Section>

        <Section id="delegazioni" title="Delegazioni" subtitle="Una rete di referenti sul territorio">
          <CardsGrid>
            <Card title="Piemonte" description="Torino, Cuneo, Novara" />
            <Card title="Lombardia" description="Milano, Bergamo, Brescia" />
            <Card title="Toscana" description="Firenze, Siena, Lucca" />
          </CardsGrid>
        </Section>

        <Section id="formaggi" title="Formaggi" subtitle="Schede, tipologie e abbinamenti">
          <CardsGrid>
            <Card title="Caprini freschi" description="Latte caprino, freschezza e note erbacee." />
            <Card title="Pasta dura" description="Stagionature importanti e cristalli di tirosina." />
            <Card title="Erborinati" description="Muffe nobili e aromi intensi." />
          </CardsGrid>
        </Section>

        <Section id="punti-interesse" title="Punti di interesse" subtitle="Caseifici, botteghe e affinatori">
          <CardsGrid>
            <Card title="Caseificio Alpino" meta="Val d’Aosta" description="Visite guidate e degustazioni" cta="Visita" />
            <Card title="Bottega del Gusto" meta="Bologna" description="Selezione di formaggi rari" cta="Mappa" />
            <Card title="Cantina d’Affinatura" meta="Langa" description="Percorsi tra stagionature" cta="Prenota" />
          </CardsGrid>
        </Section>

        <Section id="news-eventi" title="News ed eventi">
          <CardsGrid>
            <Card title="Festival del Formaggio" meta="Gennaio" description="Un weekend tra masterclass e banchi d’assaggio." cta="Leggi" />
            <Card title="Masterclass abbinamenti" meta="Febbraio" description="Formaggi e birre artigianali: nuovi pairing." cta="Leggi" />
            <Card title="Tour in malga" meta="Marzo" description="Esperienza immersiva tra alpeggi e caldaie." cta="Leggi" />
          </CardsGrid>
        </Section>

        <Section id="informa" title="Informa" subtitle="Guide, glossario e risorse per approfondire">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/60">
              <h3 className="text-white font-semibold">Guida all’assaggio</h3>
              <p className="text-slate-300/90 mt-2 text-sm">Dal taglio corretto alla sequenza di degustazione.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/60">
              <h3 className="text-white font-semibold">Glossario</h3>
              <p className="text-slate-300/90 mt-2 text-sm">Crosta lavata, occhiatura, proteolisi: termini e significati.</p>
            </div>
          </div>
        </Section>

        <Section id="contatti" title="Contatti" subtitle="Scrivici per informazioni o collaborazioni">
          <form className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            <input className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" placeholder="Nome" />
            <input className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" placeholder="Email" />
            <textarea className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" rows="4" placeholder="Messaggio" />
            <div>
              <button className="px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition">Invia</button>
            </div>
          </form>
        </Section>

        <Section id="come-associarsi" title="Come associarsi">
          <div className="max-w-3xl">
            <p>Diventa socio e accedi a sconti sui corsi, eventi riservati e una community attiva. Scegli il piano che preferisci.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/60">
                <h3 className="text-white font-semibold">Socio Standard</h3>
                <p className="text-sm text-slate-300/90 mt-1">Per iniziare</p>
                <div className="mt-4 text-3xl font-extrabold text-white">€39/anno</div>
                <button className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Iscriviti</button>
              </div>
              <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/60">
                <h3 className="text-white font-semibold">Socio Premium</h3>
                <p className="text-sm text-slate-300/90 mt-1">Per appassionati</p>
                <div className="mt-4 text-3xl font-extrabold text-white">€79/anno</div>
                <button className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Iscriviti</button>
              </div>
            </div>
          </div>
        </Section>

        <Section id="accedi" title="Accedi">
          <div className="max-w-md">
            <form className="space-y-3">
              <input type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
              <input type="password" placeholder="Password" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
              <button className="w-full px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition">Entra</button>
            </form>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  )
}
