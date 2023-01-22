import { useState } from "react"

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const handleNameChange = (e: any): void => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e: any): void => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = (e: any) => {
        e.preventDefault();
        console.log("Login")
        // Validação dos campos (Case pretendam)

        // Efetuar pedido a API para Login de utilizador
        // - Caso erro 
        // -- Deve ser apresentada a mensagem de erro ao utilizador
        // - Caso Sucesso 
        // -- Deve ser apresentada a mensagem de sucesso ao utilizador
        // -- Devemos armazenar o token retornado no LocalStorage com a chave "token"
        // -- Nota: localStorage.setItem

    }

    return (
        <div className="container">
            <form onSubmit={handleLoginSubmit}>
                <input type="text" onChange={handleNameChange} placeholder="Name" value={name} />
                <input type="password" onChange={handlePasswordChange} placeholder="Password" value={password} />
                <button type="submit">Login</button>

                {error && <span className="notice error">{error}</span>}
                {success && <span className="notice success">{success}</span>}
            </form>
        </div>)
}

export default LoginForm