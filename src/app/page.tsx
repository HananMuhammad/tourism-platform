
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DestinationCard } from '@/components/DestinationCard';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import type { Destination } from '@/types/destination';

async function getFeaturedDestination(): Promise<Destination | null> {
  const { data, error } = await supabase
    .from('destinations')
    .select('id, name, country, description, verified')
    .eq('verified', true)
    .limit(1)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    country: data.country,
    description: data.description,
    pricePerNight: 89,
    currency: '$',
    imageAlt: `${data.name} destination image`,
    verified: data.verified,
  };
}

export default async function HomePage() {
  const featuredDestination = await getFeaturedDestination();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured destination</h2>
          {featuredDestination ? (
            <DestinationCard destination={featuredDestination} />
          ) : (
            <p className="text-slate-500">No destinations found yet.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
