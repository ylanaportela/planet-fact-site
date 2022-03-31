import header from './header.module.scss'
import Link from 'next/link'
import Datas from '../../data.json'
import Icon from '../Icon'
import { useEffect, useState } from 'react'
import IconMenu from '../IconMenu'

export default function Header() {

    const [ activeMenu, setActiveMenu ] = useState(false)
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        setWidth(window.innerWidth)
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
               width == 375 && activeMenu == false ? 
                    <div className={header.selection}>
                        <ul className={header.listSelection}>
                            <li>OVERVIEW</li>
                            <li>STRUCTURE</li>
                            <li>SURFACE</li>
                        </ul>
                    </div>
                : 
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

            }
            
        </header>
    )
}