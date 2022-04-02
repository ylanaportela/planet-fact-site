import Header from "../components/Header/Header"
import Head from 'next/head'
import Datas from '../data.json'
import index from '../styles/index.module.scss'

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
        { Datas.map(data=>{
          return (
            <section className={index.section}>
              <div className={index.informations}>
                <div className="image">
                <img src={data.images.planet}/>
                </div>
                <div className={index.text}>
                  <div className={index.planetName}>
                    <h2>{data.name}</h2>
                  </div>
                  <div className={index.paragraph}></div>
                  <div className={index.source}></div>
                </div>
                
              </div>

              <div className={index.description}>

              </div>

            </section>
          )
        })


        }



      </main>


    </div>
  )
}
