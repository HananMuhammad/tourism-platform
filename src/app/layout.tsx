import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tourism Platform',
  description: 'A tourism booking platform built one tested piece at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
