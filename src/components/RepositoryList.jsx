import {RepositoryItem} from './RepositoryItem'

import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

export function RepositoryList(){
    const [repositories,setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/henriquenobre/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios GitHub Henrique Nobre</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem repository={repository} />
                })}
               
            </ul>
        </section>
    )
}