import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Feed from "../components/Feed"
const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen 
    overflow-y-scroll 
    scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>This is the INSTAGRAM 2.0 BUILD</h1> */}
      <Header />
      {/* header */}
      <Feed />
      {/* feed */}
      {/* modal */}
    </div>
  )
}

export default Home
