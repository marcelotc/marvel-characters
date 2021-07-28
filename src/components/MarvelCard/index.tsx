import { Container, Title } from './styles'
import marvelCard from '../../assets/cards-fan-desktop.png'

export function MarvelCard() {
    return (
        <Container>
            <h1>MARVEL MASTERCARD</h1>
            <h5>Desbloqueie seus super poderes</h5>
            <img src={marvelCard} alt="Marvel Mastercard" />
            <div className="signUp">CADASTRE-SE AGORA</div>
            <div className="howWorks">ENTENDA COMO FUNCIONA</div>

            <Title>
                <h1>RECEBA AS</h1>
                <h1>NOVIDADES</h1>
                <h1>DA MARVEL</h1>
            </Title>
        </Container>
    )
}
