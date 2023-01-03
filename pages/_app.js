import '../styles/globals.css';
import { Prompt } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-prompt',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <main className={`${prompt.variable} font-prompt`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
