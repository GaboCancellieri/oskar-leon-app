import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Oskar Leon',
  description: 'Capturando momentos únicos y creando recuerdos inolvidables en Argentina y el mundo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
