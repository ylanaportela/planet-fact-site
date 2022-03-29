import header from './header.module.scss'
import Link from 'next/link'
import Datas from '../../data.json'


export default function Header() {
    return (
        <header className={header.container}>
            <div className={header.menu}>
                <div className={header.title}>
                    <h1>THE PLANETS</h1>
                </div>
                <div>
                    <button className={header.button}><img src='/assets/icon-hamburger.svg' alt='Icon of menu hamburguer' /></button>
                </div>
            </div>
            
            <nav  className={header.nav}>
                <ul className={header.list}>
                    {Datas.map(data => {
                        return (
                            <li key={data.name} className={header.card}>

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
        </header>
    )
}