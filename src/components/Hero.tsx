export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 text-white pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your next journey</h1>
        <p className="text-slate-200 mb-8">
          Real bookings. Real availability. No invented inventory.
        </p>
        <form className="bg-white rounded-full p-2 flex items-center max-w-md mx-auto shadow-lg">
          <input
            type="text"
            placeholder="Where do you want to go?"
            aria-label="Search destinations"
            className="flex-1 px-4 py-2 text-slate-800 outline-none rounded-full"
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-medium"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
