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
        if(width >= 768){
            setActiveMenu(true)
        }

        window.addEventListener('resize', ()=>{
            setWidth(window.innerWidth)
            if(width >= 768){
                setActiveMenu(false)
            }
        } )
    
    })

    function handleClick(){
        activeMenu == false ? setActiveMenu(true) : setActiveMenu(false)
    }

    return (
        <header className={ activeMenu === true ? 'header header-nav' : 'header'}>

            <div className={header.menu}>

                <div className={header.title}>
                    <h1>THE PLANETS</h1>
                </div>

                <div>
                    <button 
                    className={header.button}
                    onClick={handleClick}
                    aria-label='Open Menu'>
                        <IconMenu name={activeMenu === false ? header.buttonDefault : header.buttonActive}/>
                    </button>
                </div>

            </div>

            {   
               activeMenu === true ?
               <nav  className={header.nav}>
            
                        <ul className={`${header.list} header-list`} >
                            {Datas.map(data => {
                                return (
                                    <li key={data.name} className={`${header.item} header-item ${data.name.toLowerCase()}`}>

                                        <Icon name={`${header.oval} ${data.name.toLowerCase()}`} />

                                        <Link href={`/${data.name}`}>
                                            <a className={header.link}>{data.name.toUpperCase()}</a>
                                        </Link>
                                        
                                        <img src='/assets/icon-chevron.svg' alt='Icon'/>
                                    </li>
                                )
                            })  
                            }
                        </ul>
                    </nav> 
                :

                null
            }
            
        </header>
    )
}