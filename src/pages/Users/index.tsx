import Subtitle from "../../components/shared/Subtitle"
import Title from "../../components/shared/Title"

const Users = () => {

    // Validar Existencia de token
    // - Se token existe 
    // -- Fetch the List of users from the API using the token that you have
    // -- Nota: ler da localstorage - localStorage.getItem
    // - Se Token não existe
    // -- Apresentar mensagem de erro a indicar que é necessario efetuar login

    return (
        <div className="container">
            {/* Apresentar caso não esteja logado */}
            <Title>Não tem permissoes para ver utilizadores</Title>

            {/* Apresentar caso esteja logado */}
            <Title>Lista de utilizadores</Title>
            <Subtitle>Veja a lista de utilizadores</Subtitle>
            <ul>
                {/* Subsituir por lista de utilizador */}
                <li>Utilizador </li>
            </ul>
        </div>
    )
}

export default Users