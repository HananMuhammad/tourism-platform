export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div className="text-white font-bold">WanderGo</div>
        <div className="flex gap-6">
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/support" className="hover:text-white">
            Support
          </a>
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
        </div>
        <div>&copy; 2026 WanderGo. All rights reserved.</div>
      </div>
    </footer>
  );
}
