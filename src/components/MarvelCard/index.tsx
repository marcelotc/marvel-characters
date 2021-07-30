import { Container } from './styles'
import marvelCard from '../../assets/cards-fan-desktop.png'
import { Fade } from 'react-reveal';

export function MarvelCard() {
    return (
        <Container>
            <Fade bottom>
                <h1>MARVEL MASTERCARD</h1>
                <label>Desbloqueie seus super poderes</label>
                <img src={marvelCard} alt="Marvel Mastercard" />
            </Fade>
            <a className="signUp">CADASTRE-SE AGORA</a>
            <a className="howWorks">ENTENDA COMO FUNCIONA</a>
        </Container>
    )
}
