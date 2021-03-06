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
            <button className="signUp">CADASTRE-SE AGORA</button>
            <button className="howWorks">ENTENDA COMO FUNCIONA</button>
        </Container>
    )
}
