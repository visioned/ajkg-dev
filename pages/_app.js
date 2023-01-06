import '../styles/globals.css';
import { Prompt, Karla } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['500','600'],
  variable: '--font-prompt',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-karla',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <main className={`${prompt.variable} ${karla.variable} font-prompt overflow-hidden`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
