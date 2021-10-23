import '../styles/theme.scss'
import '../styles/Nav.scss'
import Nav from '../components/Nav'

export default function Site({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
