import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Grid from '../components/Grid';
import Footer from '../components/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>
            <Grid />
          </h1>
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
