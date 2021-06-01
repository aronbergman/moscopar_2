import '../styles/globals.scss'
import './../components/Header/Burger/styles.scss'
import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
