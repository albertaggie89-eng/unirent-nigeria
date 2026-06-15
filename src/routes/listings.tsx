import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/data/listings";

type ListingsSearch = {
  state?: string;
  university?: string;
  type?: string;
};

const validateSearch = (input: Record<string, unknown>): ListingsSearch => ({
  state: typeof input.state === "string" ? input.state : undefined,
  university: typeof input.university === "string" ? input.university : undefined,
  type: typeof input.type === "string" ? input.type : undefined,
});

export const Route = createFileRoute("/listings")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Browse student homes — UNIrent" },
      { name: "description", content: "Browse student rentals across Nigerian states and universities." },
      { property: "og:title", content: "Browse student homes — UNIrent" },
      { property: "og:description", content: "Browse student rentals across Nigerian states and universities." },
    ],
  }),
  component: ListingsPage,
});

function ListingsPage() {
  const { state, university, type } = Route.useSearch();

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (state && l.state !== state) return false;
      if (university && l.university !== university) return false;
      if (type && l.type !== type) return false;
      return true;
    });
  }, [state, university, type]);

  const title = university || (state ? `${state} State` : "All Nigeria");

  return (
    <div className="container-px mx-auto max-w-7xl py-10 md:py-14">
      <div className="flex flex-col gap-4">
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> Listings
        </nav>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Homes in {title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
              {type ? ` · ${type}` : ""}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <SearchBar compact />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <h3 className="font-display text-xl font-semibold">No homes match those filters.</h3>
          <p className="mt-2 text-sm text-muted-foreground">Try a different state or university.</p>
          <Link to="/listings" search={{} as never} className="mt-6 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Clear filters
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      )}
    </div>
  );
}
