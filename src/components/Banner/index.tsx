import { Container, Title } from './style'
import banner from '../../assets/banner.jpg';
import { Fade } from 'react-reveal';

export function Banner() {
    return (
        <Container>
            <Fade duration={3000}>
                <img src={banner} alt="Avengers banner" />
            </Fade>
                <Title>
                    <Fade duration={2000}>
                        <div>
                            <h1>CONHEÇA NOSSOS PERSONAGENS</h1>
                        </div>
                    </Fade>
                </Title>
        </Container>
    )
}
