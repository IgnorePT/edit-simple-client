import { useState } from "react";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleNameChange = (e: any): void => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e: any): void => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: any): void => {
        setConfirmPassword(e.target.value);
    }

    const handleRegistrationSubmit = (e: any) => {
        e.preventDefault();

        //Validar campos
        //Regras - Campos nao podem ser vazios & password tem de ser igual a confirmPassword
        if(password != confirmPassword) return setError("Password tem de ser iguais")

        // Efetuar pedido a API para criar utilizador
        // - Caso erro 
        // -- Deve ser apresentada a mensagem de erro ao utilizador
        // - Caso Sucesso 
        // -- Deve ser apresentada a mensagem de sucesso ao utilizador
        console.log("Register")
    }

    return (
        <div className="container">
            <form onSubmit={handleRegistrationSubmit}>
                <input type="text" onChange={handleNameChange} placeholder="Name" value={name} />
                <input type="password" onChange={handlePasswordChange} placeholder="Password" value={password} />
                <input type="password" onChange={handleConfirmPasswordChange} placeholder="Confirm Password" value={confirmPassword} />
                <button type="submit">Register</button>

                {error && <span className="notice error">{error}</span>}
                {success && <span className="notice success">{success}</span>}
            </form>
        </div>)
}

export default RegisterForm