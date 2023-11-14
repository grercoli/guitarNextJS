import './globals.css'
import { Outfit } from 'next/font/google'
import Footer from './components/footer';
import Header from './components/header';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'GuitarLA',
  description: 'Venta de guitarras y blog de musica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
