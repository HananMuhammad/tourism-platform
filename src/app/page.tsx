import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DestinationCard } from '@/components/DestinationCard';
import { Footer } from '@/components/Footer';
import type { Destination } from '@/types/destination';

const featuredDestination: Destination = {
  id: 'kyoto-japan',
  name: 'Kyoto',
  country: 'Japan',
  description:
    'Ancient temples, quiet gardens, and streets that feel unchanged for centuries.',
  pricePerNight: 89,
  currency: '$',
  imageAlt: 'destination image placeholder',
  verified: true,
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured destination</h2>
          <DestinationCard destination={featuredDestination} />
        </section>
      </main>
      <Footer />
    </>
  );
}
