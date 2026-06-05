import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, MapPin, BedDouble, Bath, Phone, ShieldCheck, ArrowLeft, Check } from "lucide-react";
import { listings, formatNaira } from "@/data/listings";
import { useFavorites } from "@/hooks/useFavorites";

export const Route = createFileRoute("/listings/$id")({
  loader: ({ params }) => {
    const listing = listings.find((l) => l.id === params.id);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => {
    const l = loaderData?.listing;
    return {
      meta: l
        ? [
            { title: `${l.title} — UNIrent` },
            { name: "description", content: `${l.type} near ${l.university}, ${l.city}. ${formatNaira(l.pricePerYear)}.` },
            { property: "og:title", content: `${l.title} — UNIrent` },
            { property: "og:description", content: `${l.type} near ${l.university}, ${l.city}. ${formatNaira(l.pricePerYear)}.` },
            { property: "og:image", content: l.image },
            { name: "twitter:image", content: l.image },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Listing not found</h1>
      <p className="mt-2 text-muted-foreground">It may have been rented or removed.</p>
      <Link to="/listings" className="mt-6 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Back to listings</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-px mx-auto max-w-3xl py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Could not load listing</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ListingDetail,
});

function ListingDetail() {
  const { listing: l } = Route.useLoaderData();
  const { has, toggle } = useFavorites();
  const fav = has(l.id);

  return (
    <div className="container-px mx-auto max-w-7xl py-10">
      <Link to="/listings" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to listings
      </Link>

      <div className="mt-6 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
          <img src={l.gallery[0]} alt={l.title} width={1200} height={900} className="h-full max-h-[520px] w-full object-cover" />
        </div>
        {l.gallery.slice(1, 3).map((g: string, i: number) => (
          <div key={i} className="overflow-hidden rounded-2xl">
            <img src={g} alt="" loading="lazy" width={1200} height={900} className="h-full max-h-[252px] w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-teal">{l.type}</div>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">{l.title}</h1>
              <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {l.address} · {l.city}, {l.state}
              </div>
            </div>
            <button
              onClick={() => toggle(l.id)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-teal/60"
            >
              <Heart className={`h-4 w-4 ${fav ? "fill-teal text-teal" : ""}`} />
              {fav ? "Saved" : "Save"}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-y border-border py-5 text-sm">
            <span className="inline-flex items-center gap-2"><BedDouble className="h-4 w-4 text-teal" /> {l.beds} bed{l.beds > 1 ? "s" : ""}</span>
            <span className="inline-flex items-center gap-2"><Bath className="h-4 w-4 text-teal" /> {l.baths} bath{l.baths > 1 ? "s" : ""}</span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">University: <strong className="text-foreground">{l.university}</strong></span>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold">About this home</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{l.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold">Amenities</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {l.amenities.map((a: string) => (
                <li key={a} className="flex items-center gap-2 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-mist/40 text-teal">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
          <div className="font-display text-3xl font-bold">{formatNaira(l.pricePerYear)}</div>
          <p className="mt-1 text-xs text-muted-foreground">Annual rent · paid yearly</p>

          <div className="mt-5 rounded-xl bg-muted p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-hero)] text-sm font-bold text-primary-foreground">
                {l.landlord.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold">{l.landlord.name}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  {l.landlord.verified && <><ShieldCheck className="h-3.5 w-3.5 text-teal" /> Verified landlord</>}
                  {!l.landlord.verified && <>Landlord</>}
                </div>
              </div>
            </div>
          </div>

          <a
            href={`tel:${l.landlord.phone.replace(/\s/g, "")}`}
            className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--gradient-hero)] text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95"
          >
            <Phone className="h-4 w-4" /> Call landlord
          </a>
          <a
            href={`https://wa.me/${l.landlord.phone.replace(/\D/g, "")}`}
            target="_blank" rel="noreferrer"
            className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold hover:border-teal/60"
          >
            Message on WhatsApp
          </a>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
            Always inspect a property in person before paying any fees.
          </p>
        </aside>
      </div>
    </div>
  );
}
