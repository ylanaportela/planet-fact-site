import Header from "../components/Header/Header"
import Head from 'next/head'
import Datas from '../data.json'
import index from '../styles/index.module.scss'
import { useMemo, useState } from "react"
import State from "../components/State/State"

export function getServerSideProps(context) {

  let planet = 'Mercury'
  if (context.params.planet) {
    planet = context.params.planet[0]
  }

  return {
    props: {
      planet
    }
  }
}


export default function Home({ planet}) {

  const [ state, setState ] = useState('overview')

  const currentPlanet = useMemo(() => {
    return Datas.find(data => data.name === planet)
  }, [planet])

  const attribute = useMemo(()=>{
    return currentPlanet[state]
  }, [currentPlanet, state])


  const renderImage = useMemo(()=>{
    if(state === 'overview'){
      return (
        <>
          <img src={ currentPlanet.images.planet } className={`${currentPlanet.name.toLocaleLowerCase()}`}/>
        </>
      )
    }

    else if(state === 'structure'){
      return (
        <>
          <img src={ currentPlanet.images.internal } className={`${currentPlanet.name.toLocaleLowerCase()}`}/>
        </>
      )
    } 
    else{
      return (
        <>
          <img src={ currentPlanet.images.planet } className={`${currentPlanet.name.toLocaleLowerCase()}`}/>
          <div className={` imageSurface ${currentPlanet.name.toLocaleLowerCase()}` }></div>     
        </>
      )
    }
  }, [currentPlanet, state])  


  if (!currentPlanet) {
    return <div>
      Planeta não existe
    </div>
  }

  
  return (

    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500&family=Spartan:wght@400;700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Generated by create next app" />
        <title>Planets</title>
      </Head>

      <main>
        <Header/>
        <State changeState={state => setState(state)}/>
        

        <section className={index.section}>

          <div className={index.informations}>
            <div className="image">
              {renderImage}
            </div>

            <div className={index.report}>

              <div className={index.text}>

                <div className={index.planetName}>
                  <h2>{currentPlanet.name.toLocaleUpperCase()}</h2>
                </div>

                <div className={index.paragraph}>
                  <p>{attribute.content}</p>
                </div>

                <div className={index.source}>
                  <span>Source:</span>
                  <a href={attribute.source}>Wikipedia</a> 
                  <span>
                  <img src='/assets/icon-link.svg'/>
                  </span>
                </div>

              </div>

              <State changeState={state => setState(state)}/>
  
            </div>
          </div>

          <div className={index.data}>

            <div className={index.board}>
              <div className={index.caption}>ROTATION TIME</div>
              <div className={index.description}>{currentPlanet.rotation.toUpperCase()}</div>
            </div>

            <div className={index.board}>
              <div className={index.caption}>REVOLUTION TIME</div>
              <div className={index.description}>{currentPlanet.revolution.toUpperCase()}</div>
            </div>

            <div className={index.board}>
              <div className={index.caption}>RADIUS</div>
              <div className={index.description}>{currentPlanet.radius.toUpperCase()}</div>
            </div>

            <div className={index.board}>
              <div className={index.caption}>AVERAGE TEMP</div>
              <div className={index.description}>{currentPlanet.temperature.toUpperCase()}</div>
            </div>

          </div>

        </section>
      </main>


    </div>
  )
}
