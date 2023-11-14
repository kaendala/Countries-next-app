import Header from '@/components/Header/Header'
import { CountriesProvider } from '@/context/CountriesContext/CountriesContext'
import { ThemeProvider } from '@/context/ThemeContext/ThemeContext'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries App',
  description: 'Countris app with next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} light`}>
        <ThemeProvider>
          <CountriesProvider>
            <Header></Header>
            {children}
          </CountriesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
