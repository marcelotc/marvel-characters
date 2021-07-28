import logoMarvel from '../../assets/icons/marvelFooterLogo.png';
import blogImage from '../../assets/blogImage.png';
import {ReactComponent as FacebookImage} from '../../assets/icons/facebook.svg';
import {ReactComponent as SpotifyImage} from '../../assets/icons/spotify.svg';
import {ReactComponent as InstagramImage} from '../../assets/icons/instagram.svg';
import {ReactComponent as YoutubeyImage} from '../../assets/icons/youtube.svg';

import {
    Container,
    Info,
    Blog,
    Social
  } from './styles';
  
export function Footer() {  

  return (
    <Container>
       <Info>
         <img src={logoMarvel} alt="Marvel logo" />
         
         <div>
            <h4>A Marvel</h4>
            <p>Sobre a Marvel</p>
            <p>Ajuda</p>
            <p>Carreiras</p>
         </div>

         <div>
            <h4>Mídia</h4>
            <p>Filmes</p>
            <p>Quadrinhos</p>
            <p>Programas de TV</p>
            <p>Jogos</p>
         </div>    
       </Info>

       <Blog>
        <h4>Última do blog</h4>
        <div>
          <img src={blogImage} alt="Imagem do blog" />
          <p>Captain Marvel Challenge invadiu <br /> o tape vermelho do oscar</p>
        </div>
        <p>Continuar lendo</p>
       </Blog>

       <Social>
         <h4>Siga a Marvel</h4>
         <FacebookImage />
         <SpotifyImage />
         <InstagramImage />
         <YoutubeyImage />
       </Social>
    </Container>
  );
}
