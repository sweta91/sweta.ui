import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sweta Patil | Senior Frontend Engineer',
  description: 'Senior UI Developer and Frontend Engineer with 10+ years of experience building responsive, accessible and high-performance web experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
