import { Container, Title } from './style'
import banner from '../../assets/banner.jpg';
import { Fade } from 'react-reveal';

export function Banner() {
    return (
        <Container>
            <Fade duration={3000}>
                <img src={banner} alt="Avengers banner" />
            </Fade>
                <Fade duration={2000}>
                <Title>
                    <div>
                        <h1>CONHEÇA</h1>
                        <h1>NOSSOS</h1>
                        <h1>PERSONAGENS</h1>
                    </div>
                </Title>
                </Fade>
        </Container>
    )
}
