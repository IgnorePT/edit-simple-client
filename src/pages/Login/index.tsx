import { useState } from "react"
import LoginForm from "../../components/LoginForm"
import RegisterForm from "../../components/RegisterForm"
import Title from "../../components/shared/Title"
import "./styles.scss"

export const Login = () => {

    const [tabActive, setActiveTab] = useState(0)

    return (
        <div className='login-page'>
        <Title>Login</Title>

        <div className="tabs">
          <span onClick={() => setActiveTab(0)} className={tabActive == 0 ? "active" : ''}>Login</span>
          <span onClick={() => setActiveTab(1)}  className={tabActive == 1 ? "active" : ''}>Register</span>
        </div>

        <div className='content'>
          {tabActive == 0 && <LoginForm /> }
          {tabActive == 1 && <RegisterForm /> }
        </div>
      </div>
    )
}

export default Login