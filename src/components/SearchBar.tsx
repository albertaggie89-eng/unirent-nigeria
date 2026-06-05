import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { universities, states } from "@/data/universities";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [university, setUniversity] = useState("");
  const [type, setType] = useState("");

  const filteredUnis = useMemo(
    () => (state ? universities.filter((u) => u.state === state) : universities),
    [state],
  );

  const onSearch = () => {
    navigate({
      to: "/listings",
      search: {
        state: state || undefined,
        university: university || undefined,
        type: type || undefined,
      } as never,
    });
  };

  return (
    <div
      className={`rounded-2xl border border-border bg-card shadow-card ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div className="grid gap-3 md:grid-cols-[1fr_1.4fr_1fr_auto]">
        <label className="flex flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">State</span>
          <select
            value={state}
            onChange={(e) => { setState(e.target.value); setUniversity(""); }}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">All states</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">University</span>
          <select
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Any university</option>
            {filteredUnis.map((u) => (
              <option key={u.name} value={u.name}>{u.name}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Any type</option>
            <option>Self-contain</option>
            <option>Single room</option>
            <option>Shared flat</option>
            <option>1 Bedroom</option>
            <option>2 Bedroom</option>
            <option>Hostel</option>
          </select>
        </label>
        <div className="flex items-end">
          <button
            onClick={onSearch}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--gradient-hero)] px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95 md:w-auto"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
