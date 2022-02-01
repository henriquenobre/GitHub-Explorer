export function RepositoryItem( props ) {
    return(
        <li>
        <strong>{props.repository ?? 'Padrão'}</strong>
        <p>Forms in React</p>

        <a href="">
            Acessar repositórios
        </a>
    </li>
    )
}