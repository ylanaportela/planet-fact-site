import header from './header.module.scss'
import Link from 'next/link'
import Datas from '../../data.json'
import image from  './icon-source.svg'



export default function Header(){
    return(
        <header className={header.container}>
            <div className={header.title}>
                <h1>THE PLANETS</h1>
            </div>
            <div>
                <img src={image} alt='Icon of menu hamburguer'></img>
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