import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { CharactersList } from './components/CharactersList';
import { MarvelCard } from './components/MarvelCard';
import { NewsLetter } from './components/NewsLetter';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
     <Header />
     <Banner />
     <Carousel />
     <CharactersList />
     <MarvelCard />
     <NewsLetter />
     <Footer />
    </>
  );
}

export default App;
