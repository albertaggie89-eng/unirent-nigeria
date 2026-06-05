import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — UNIrent" },
      { name: "description", content: "UNIrent helps Nigerian students find safe, affordable housing near their universities." },
      { property: "og:title", content: "About — UNIrent" },
      { property: "og:description", content: "Student-first housing across Nigeria." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-16 md:py-24">
      <div className="text-xs font-semibold uppercase tracking-widest text-teal">About UNIrent</div>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Student housing should be simple — and honest.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        UNIrent connects students with landlords near every Nigerian university — from UNILAG and UI to ABU, UNN and beyond. No middlemen, no inflated agent fees, no guesswork.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { i: ShieldCheck, t: "Verified listings", d: "We confirm landlords and addresses before they go live." },
          { i: MapPin, t: "All 36 states", d: "Search by university or state — wherever your school is." },
          { i: HeartHandshake, t: "Student-first", d: "Pricing, photos and amenities laid out — no surprises." },
        ].map(({ i: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Icon className="h-6 w-6 text-teal" />
            <h3 className="mt-3 font-display text-lg font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-[var(--gradient-hero)] p-10 text-primary-foreground">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Ready to find your next home?</h2>
        <p className="mt-2 max-w-xl text-white/80">Browse hundreds of student-friendly homes across Nigeria.</p>
        <Link to="/listings" className="mt-6 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white/90">
          Browse listings
        </Link>
      </div>
    </div>
  );
}
