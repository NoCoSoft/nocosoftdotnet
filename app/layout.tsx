import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { theme } from '@/theme';

export const metadata = {
  title: 'NoCoSoft | Web Development for Northern Colorado',
  description: 'Professional web solutions for Northern Colorado businesses',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
