import state from './state.module.scss'
import { useState } from 'react'

export default function State(props){

    const [activeButton, setActiveButton] = useState('overview')  


    return(
        <ul className={`list-selection-mobile ${state.listSelection}`}>
        <li>
            <button 
            className={  activeButton === 'overview' ? `button-selection ${state.buttonSelectionActive}` : 'button-selection'} 
            onClick={() => {
                props.changeState('overview')      
                setActiveButton('overview')
            }}>
            OVERVIEW
            </button>
        </li>
        <li>
            <button 
            className={  activeButton === 'structure' ? `button-selection ${state.buttonSelectionActive}` : 'button-selection'}  
            onClick={() => {
                props.changeState('structure')
                setActiveButton('structure')
            }}>
            STRUCTURE
            </button>
        </li>
        <li> 
            <button 
            className={  activeButton === 'geology' ? `button-selection ${state.buttonSelectionActive}` : 'button-selection'}  
            onClick={() => { 
                props.changeState('geology')
                setActiveButton('geology')

            }}>
            SURFACE
            </button>
        </li>

    </ul>
    )
}