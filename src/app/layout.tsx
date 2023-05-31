import Header from '@/components/layout/Header'
import { Rubik } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Providers from '@/store/Provider'
import localFont from '@next/font/local'

const rubic = Rubik({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--rubic'
}
)

export const metadata = {
  title: 'Swipe',
  description: 'Conecta con tu próximo trabajo o compañero de equipo de una forma sencillo.'
}

const coolvetica = localFont({
  src: [
    {
      path: '../../public/font/coolvetica.otf',
      weight: '600'
    }
  ],
  variable: '--font-coolvetica'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  // used to load the font
  return (
    <html lang='es'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content='/img/og-image.jpg' />
        <meta property='og:url' content='https://hackaton-infojobs-swipe.vercel.app/' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={`flex flex-col min-h-screen min-w-screen w-full h-full bg-[#f5f5f5] ${rubic.variable} ${coolvetica.variable}`}>
        <Providers>
          <Header />
          <main className='flex-1 flex flex-col min-h-[calc(100vh_-_85px)] w-full items-center justify-center p-3 max-w-5xl bg-white mx-auto shadow-custom'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
