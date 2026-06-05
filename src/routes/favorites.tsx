import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { listings } from "@/data/listings";
import { ListingCard } from "@/components/ListingCard";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Saved homes — UNIrent" },
      { name: "description", content: "Your shortlisted student rentals on UNIrent." },
      { property: "og:title", content: "Saved homes — UNIrent" },
      { property: "og:description", content: "Your shortlisted student rentals." },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { ids } = useFavorites();
  const saved = listings.filter((l) => ids.includes(l.id));

  return (
    <div className="container-px mx-auto max-w-7xl py-10 md:py-14">
      <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Saved homes</h1>
      <p className="mt-1 text-sm text-muted-foreground">{saved.length} {saved.length === 1 ? "home" : "homes"} shortlisted</p>

      {saved.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-mist/40 text-teal">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold">No saved homes yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">Tap the heart on any listing to save it here for later.</p>
          <Link to="/listings" className="mt-6 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Browse listings
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      )}
    </div>
  );
}
