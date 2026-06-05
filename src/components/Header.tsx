import { Link } from "@tanstack/react-router";
import { Heart, Home } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

export function Header() {
  const { ids } = useFavorites();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground shadow-soft">
            <Home className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            UNI<span className="text-teal">rent</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/listings" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Browse</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>About</Link>
        </nav>
        <Link
          to="/favorites"
          className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium hover:border-teal/60 transition"
        >
          <Heart className="h-4 w-4 text-teal" />
          <span className="hidden sm:inline">Favorites</span>
          {ids.length > 0 && (
            <span className="ml-1 inline-grid h-5 min-w-5 place-items-center rounded-full bg-teal px-1.5 text-xs font-semibold text-accent-foreground">
              {ids.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
