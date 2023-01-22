import Subtitle from "../../components/shared/Subtitle"
import Title from "../../components/shared/Title"

const Home = () => {
    return <div className="container">
            <Title>Home Page</Title>
            <Subtitle>Welcome to the home page!</Subtitle>
            <div>
                <p>O Objetivo do exercicio é utilizarem a API que criaram para alimentar esta pequena aplicação.</p>
            </div>
        </div>
}

export default Home