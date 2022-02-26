import Layout from '../comps/Layout'
import '../styles/bootstrap.css'
import '../styles/bootstrap-grid.css'
import '../styles/bootstrap-utilities.css'
import '../styles/globals.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
