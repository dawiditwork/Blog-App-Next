'use client';

import { ThemeProvider } from 'next-themes';

export default function ThemeCom({ children }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
}