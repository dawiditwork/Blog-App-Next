
import './globals.css';
import Header from './components/Header';
import ThemeCom from './components/ThemeCom';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from './components/Footer';
import { Suspense } from 'react';

export const metadata = {
  title: {
    default: 'Dawid.dev | Projects & Development Notes',
    template: '%s | Dawid.dev',
  },
  description:
    'Full-stack development projects, technical notes and lessons learned by Dawid Frankowicz.',
};

export default function RootLayout({ children }) {
  return (
 <ClerkProvider
  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
>
  <html lang='en' suppressHydrationWarning>
    <body className='antialiased'>
      <ThemeCom>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        {children}
        <Footer />
      </ThemeCom>
    </body>
  </html>
</ClerkProvider>
  );
}
