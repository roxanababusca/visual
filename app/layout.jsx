import './styles/globals.css'
import { inter } from './fonts';
import { domine } from './fonts';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Awaken Yoga Studio',
  description: 'A welcoming yoga studio in JLT offering classes for practitioners of all levels.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${domine.variable}`}>
        <NavMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
