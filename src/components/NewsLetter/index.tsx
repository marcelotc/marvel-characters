import { Container, EmailContainer, EmailInput, InputContainer } from './style'

export function NewsLetter() {
    return (
        <Container>
            <EmailContainer>
                <h1>Cadastre-se para receber nossas</h1>
                <h1>notícias em primeira mão<span>!</span></h1>

                <EmailInput>
                    <h5>SEU MELHOR E-MAIL</h5>
                    <InputContainer>
                        <input placeholder="Informe seu melhor-email" />
                        <button>ENVIAR</button>
                    </InputContainer>
                </EmailInput>
            </EmailContainer>
        </Container>
    )
}
