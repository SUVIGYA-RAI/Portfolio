import '../styles/globals.css'
import Layout from '../components/Layout'
import Transition from '../components/Transition'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Suvigya Rai </title>
        <link rel="icon" href="/img.png" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full w-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default MyApp