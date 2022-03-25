import Header from "../components/Header/Header"
import Head from 'next/head'

export default function Home() {
  return (

    <div>
      <Head>

        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500&family=Spartan:wght@400;700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Generated by create next app" />
        <title>Planets</title>

      </Head>

      <main>
        <Header />
      </main>


    </div>
  )
}
