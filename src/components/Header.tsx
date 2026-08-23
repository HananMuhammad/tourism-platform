import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900">
          Wander<span className="text-cyan-600">Go</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <Link href="/destinations" className="hover:text-cyan-600">
            Destinations
          </Link>
          <Link href="/hotels" className="hover:text-cyan-600">
            Hotels
          </Link>
          <Link href="/tours" className="hover:text-cyan-600">
            Tours
          </Link>
        </nav>
        <button
          type="button"
          className="bg-cyan-600 text-white text-sm px-4 py-2 rounded-full"
        >
          Book now
        </button>
      </div>
    </header>
  );
}
