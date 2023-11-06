import Footer from '@/components/footer'
import Header from '@/components/header'
import { Poppins, Roboto, Roboto_Condensed, Squada_One } from 'next/font/google'
import './globals.css'

export const squadaOne = Squada_One({ subsets: ['latin'], weight: '400' })
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
