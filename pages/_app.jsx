import '../styles/globals.css';
import { Prompt, Karla, Source_Code_Pro } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from '../components/index';
import Background from '../components/Background';
import Backgroundd from '../components/Backgroundd';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-source-code-pro',
});

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-prompt',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['200', '300'],
  variable: '--font-karla',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <main className={`${prompt.variable} ${karla.variable} font-prompt`}>
        <Component {...pageProps} />
        <Background />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
