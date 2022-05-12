import state from './state.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'



export default function State({ changeState }){

    const [activeButton, setActiveButton] = useState('overview')
    const router = useRouter()

    return(
        
        <ul className={`${state.listSelection} listSelection`}>
        
        <li>
            <button 
            className={  activeButton === 'overview' ? `button-selection ${state.buttonSelectionActive} ${router.asPath.toLocaleLowerCase().replace('/', '')}` : 'button-selection'} 
            onClick={() => {
                changeState('overview')      
                setActiveButton('overview')
            }}
            aria-label='Overview state'>
            OVERVIEW
            </button>
        </li>
        <li>
            <button 
            className={  activeButton === 'structure' ? `button-selection ${state.buttonSelectionActive} ${router.asPath.toLocaleLowerCase().replace('/', '')}` : 'button-selection'}  
            onClick={() => {
                changeState('structure')
                setActiveButton('structure')
            }}
            aria-label='Structure state'>
            STRUCTURE
            </button>
        </li>
        <li> 
            <button 
            className={  activeButton === 'geology' ? `button-selection ${state.buttonSelectionActive} ${router.asPath.toLocaleLowerCase().replace('/', '')}` : 'button-selection'}  
            onClick={() => { 
                changeState('geology')
                setActiveButton('geology')
            }}
            aria-label='Surface state'>
            SURFACE
            </button>
        </li>

        
        </ul>
    )
    }