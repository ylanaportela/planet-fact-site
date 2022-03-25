import header from './header.module.scss'
import Link from 'next/link'
import Datas from '../../data.json'



export default function Header(){
    return(
        <header className={header.container}>
            <div className={header.title}>
                <h1>THE PLANETS</h1>
            </div>
            <div>
                <img src='/assets/icon-hamburger.svg' alt='Icon of menu hamburguer'/>  
            </div>

            <ul>
            { Datas.map(data =>{
                return(
                    <li key={data.name}>
                        <Link href={`/${data.name}`}>
                            <a>{data.name}</a>
                        </Link>
                    </li>
            )})
            }
               
            </ul>
        </header>
    )
}