import { Link } from "@tanstack/react-router";
import { Heart, MapPin, BedDouble, Bath } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { formatNaira, type Listing } from "@/data/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  const { has, toggle } = useFavorites();
  const fav = has(listing.id);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
      <Link to="/listings/$id" params={{ id: listing.id }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={listing.image}
            alt={listing.title}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
            {listing.type}
          </div>
        </div>
      </Link>
      <button
        aria-label={fav ? "Remove from favorites" : "Save to favorites"}
        onClick={() => toggle(listing.id)}
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur transition hover:scale-105"
      >
        <Heart className={`h-4 w-4 ${fav ? "fill-teal text-teal" : "text-foreground"}`} />
      </button>

      <div className="p-5">
        <Link to="/listings/$id" params={{ id: listing.id }}>
          <h3 className="line-clamp-1 text-base font-semibold tracking-tight">{listing.title}</h3>
        </Link>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="line-clamp-1">{listing.city}, {listing.state} · {listing.university}</span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="font-display text-lg font-bold text-ink">{formatNaira(listing.pricePerYear)}</div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" />{listing.beds}</span>
            <span className="inline-flex items-center gap-1"><Bath className="h-3.5 w-3.5" />{listing.baths}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
