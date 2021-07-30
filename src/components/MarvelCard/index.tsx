import { Container } from './styles'
import marvelCard from '../../assets/cards-fan-desktop.png'
import { Fade } from 'react-reveal';

export function MarvelCard() {
    return (
        <Container>
            <Fade bottom>
            <h1>MARVEL MASTERCARD</h1>
            <h5>Desbloqueie seus super poderes</h5>
            <img src={marvelCard} alt="Marvel Mastercard" />
            </Fade>
            <div className="signUp">CADASTRE-SE AGORA</div>
            <div className="howWorks">ENTENDA COMO FUNCIONA</div>
        </Container>
    )
}
