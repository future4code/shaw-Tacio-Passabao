import Header from '../../components/Header/Header';
import { Div, HomeContainer, TextAndButton } from './style';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const goToListTrips = () => {
        navigate("/trips/list");
    }

    return (
        <Div>
            <Header />
            <HomeContainer>
                <TextAndButton>
                    <button onClick={goToListTrips}>Vamos explorar o espaço!</button>
                </TextAndButton>
            </HomeContainer>
        </Div>
    )
}

export default HomePage;