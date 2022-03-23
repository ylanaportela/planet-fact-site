import header from './header.module.scss'
import Link from 'next/link'
import Datas from '../../data.json'

export default function Header(){
    return(
        <header>
            <div className={header.title}>
                <h1>THE PLANETS</h1>
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