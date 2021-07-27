import { Container, Title } from './style'
import banner from '../../assets/banner.jpg';

export function Banner() {
    return (
        <Container>
            <img src={banner} alt="Avengers banner" />
                <Title>
                    <div>
                        <h1>CONHEÇA</h1>
                        <h1>NOSSOS</h1>
                        <h1>PERSONAGENS</h1>
                    </div>
                </Title>
        </Container>
    )
}
