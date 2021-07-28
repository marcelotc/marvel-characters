import { Slider } from './components/Slider';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { CharactersList } from './components/CharactersList';
import { MarvelCard } from './components/MarvelCard';
import { NewsLetter } from './components/NewsLetter';

function App() {

  return (
    <>
     <Header />
     <Banner />
     <Slider />
     <CharactersList />
     <MarvelCard />
     <NewsLetter />
    </>
  );
}

export default App;
