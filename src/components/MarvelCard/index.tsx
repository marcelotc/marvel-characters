import { Container } from './styles'
import marvelCard from '../../assets/cards-fan-desktop.png'

export function MarvelCard() {
    return (
        <Container>
            <h1>MARVEL MASTERCARD</h1>
            <h5>Desbloqueie seus super poderes</h5>
            <img src={marvelCard} alt="Marvel Mastercard" />
            <div className="signUp">CADASTRE-SE AGORA</div>
            <div className="howWorks">ENTENDA COMO FUNCIONA</div>
        </Container>
    )
}
