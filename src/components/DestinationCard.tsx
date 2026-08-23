import type { Destination } from '@/types/destination';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden md:flex">
      <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-sm">
        {destination.imageAlt}
      </div>
      <div className="md:w-1/2 p-6">
        {destination.verified && (
          <span className="text-xs uppercase tracking-wide text-cyan-600 font-semibold">
            Verified
          </span>
        )}
        <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
          {destination.name}, {destination.country}
        </h3>
        <p className="text-slate-600 mb-4">{destination.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-900">
            From {destination.currency}
            {destination.pricePerNight}/night
          </span>
          <button
            type="button"
            className="bg-slate-900 text-white text-sm px-4 py-2 rounded-full"
          >
            View hotels
          </button>
        </div>
      </div>
    </div>
  );
}
