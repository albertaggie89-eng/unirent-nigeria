import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SearchBar } from "@/components/SearchBar";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/data/listings";
import { states } from "@/data/universities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNIrent — Student housing across Nigeria" },
      { name: "description", content: "Browse verified student rentals near every Nigerian university. Self-contains, hostels and flats — all in one place." },
      { property: "og:title", content: "UNIrent — Student housing across Nigeria" },
      { property: "og:description", content: "Verified student rentals near every Nigerian university." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = listings.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90" />
        </div>
        <div className="container-px mx-auto max-w-7xl pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Built for Nigerian students
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Find a home near your <span className="text-mist">campus</span>, in any state.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              From UNILAG to ABU — browse verified rooms, self-contains and flats listed by trusted landlords across Nigeria.
            </p>
          </div>

          <div className="mt-10">
            <SearchBar />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-mist" /> Verified landlords</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-mist" /> {states.length}+ states covered</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-mist" /> No agent runaround</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">Featured homes</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Picks near top campuses</h2>
          </div>
          <Link to="/listings" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:text-teal md:inline-flex">
            See all listings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>

      {/* STATES BAND */}
      <section className="border-y border-border bg-[color-mix(in_oklab,var(--mist)_18%,var(--background))]">
        <div className="container-px mx-auto max-w-7xl py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-teal">Coverage</div>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Wherever your university is.</h2>
              <p className="mt-3 text-muted-foreground">From Lagos to Kano, Calabar to Sokoto — search by state to see what's available right now.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {states.map((s) => (
                <Link
                  key={s}
                  to="/listings"
                  search={{ state: s } as never}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-teal hover:text-teal"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal">How it works</div>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Three steps from search to settled.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Search by school", d: "Pick your state and university — we show homes close to campus first." },
            { t: "Shortlist favorites", d: "Tap the heart to save listings and compare them side-by-side later." },
            { t: "Contact landlord", d: "Reach verified landlords directly. No middlemen, no extra agent fees." },
          ].map((s, i) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-hero)] font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
