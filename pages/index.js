import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import Tools from '../components/Tools';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ajkg.dev</title>
        <meta name='description' content='ajkg.dev portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-10'>
        <Header />
        <Hero />
        <About />
        <Tools />
        <Projects />
      </main>
    </div>
  );
}
