import header from './header.module.scss'
import Link from 'next/link'
import Datas from '../../data.json'
import Icon from '../Icon'
import { useEffect, useState } from 'react'
import IconMenu from '../IconMenu'


export default function Header(props) {
    
    const [ activeMenu, setActiveMenu ] = useState(false)
    const [width, setWidth] = useState(0)
    const [activeButton, setActiveButton] = useState('overview')

    useEffect(()=>{
        setWidth(window.innerWidth)
        if(width >= 768){
            setActiveMenu(true)
        }

        window.addEventListener('resize', ()=>{
            setWidth(window.innerWidth)
            if(width >= 768){
                setActiveMenu(true)
            }
        } )
    
    })

    function handleClick(){
        activeMenu == false ? setActiveMenu(true) : setActiveMenu(false)
    }


    return (
        <header className={header.container}>

            <div className={header.menu}>

                <div className={header.title}>
                    <h1>THE PLANETS</h1>
                </div>

                <div>
                    <button 
                    className={header.button}
                    onClick={handleClick}>
                        <IconMenu name={activeMenu === false ? header.buttonDefault : header.buttonActive}/>
                    </button>
                </div>

            </div>


            {   
               activeMenu === true ?
               <nav  className={header.nav}>
                        <ul className={header.list}>
                            {Datas.map(data => {
                                return (
                                    <li key={data.name} className={header.item}>

                                        <Icon name={`${header.oval} ${data.name.toLowerCase()}`} />

                                        <Link href={`/${data.name}`}>
                                            <a className={header.link}>{data.name.toUpperCase()}</a>
                                        </Link>
                                        
                                        <img src='/assets/icon-chevron.svg'/>
                                    </li>
                                )
                            })  
                            }
                        </ul>
                    </nav> 
                :

                <div className={header.selection}>
                        <ul className={header.listSelection}>
                            <li>
                                <button 
                                className={  activeButton === 'overview' ? `button-selection ${header.buttonSelectionActive}` : 'button-selection'} 
                                onClick={() => {
                                    props.changeState('overview')      
                                    setActiveButton('overview')
                                }}>
                                OVERVIEW
                                </button>
                            </li>
                            <li>
                                <button 
                                className={  activeButton === 'structure' ? `button-selection ${header.buttonSelectionActive}` : 'button-selection'}  
                                onClick={() => {
                                    props.changeState('structure')
                                    setActiveButton('structure')
                                }}>
                                STRUCTURE
                                </button>
                            </li>
                            <li> 
                                <button 
                                className={  activeButton === 'geology' ? `button-selection ${header.buttonSelectionActive}` : 'button-selection'}  
                                onClick={() => { 
                                    props.changeState('geology')
                                    setActiveButton('geology')

                                }}>
                                SURFACE
                                </button>
                            </li>

                        </ul>
                </div>
    
            }
            
        </header>
    )
}