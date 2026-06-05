import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[color-mix(in_oklab,var(--mist)_18%,var(--background))]">
      <div className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold">UNI<span className="text-teal">rent</span></div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Student-first housing across Nigeria. Find verified rooms, self-contains and flats near your campus.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/listings" className="hover:text-foreground">All listings</Link></li>
              <li><Link to="/favorites" className="hover:text-foreground">Saved homes</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About UNIrent</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>hello@unirent.ng</li>
              <li>+234 800 UNIRENT</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} UNIrent. Built for Nigerian students.
        </div>
      </div>
    </footer>
  );
}
