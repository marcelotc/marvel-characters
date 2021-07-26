import { useEffect, useState } from 'react';
import api from '../../services/api';
import { time, publicKey, hash} from '../../services/authorization';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import {
  Container,
  SliderHeader,
  ButtonsWrapper,
  NextButton,
  PrevButton,
  SlideWrapper,
  Slide,
  SliderContainer,
} from './styles';

interface CharactersInterface {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [characters, setCharacters] = useState<CharactersInterface[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await api.get(`/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`);
      setCharacters(res.data.data.results)
    }
    getCharacters();  
  }, []);

  const decreaseSlide = (slide: number, setSlide: Function) => {
    slide !== 0 && setSlide(slide - 1);
  };

  const increaseSlide = (
    slide: number,
    setSlide: Function,
    slideLength: number,
  ) => {
    slide !== slideLength && setSlide(slide + 1);
  };

  return (
    <Container>
      <SliderHeader>
      <h1>PERSONAGENS EM DESTAQUE</h1>
      <ButtonsWrapper>
          <PrevButton
            currentSlide={currentSlide}
            slidesLength={characters.length}
            onClick={() => decreaseSlide(currentSlide, setCurrentSlide)}
          ><FaChevronLeft color="#000" /></PrevButton>

          <NextButton
            currentSlide={currentSlide}
            slidesLength={characters.length}
            onClick={() => increaseSlide(currentSlide, setCurrentSlide, characters.length)}
          ><FaChevronRight color="#000"  /></NextButton>
        </ButtonsWrapper>
      </SliderHeader>
      <SliderContainer>
        {characters.map((character) => (
          <SlideWrapper key={character.id} currentSlide={currentSlide}>
            <Slide>
              <div className="title" />
              <p>MOVIES</p>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
              <h4>{character.name}</h4>
            </Slide>
          </SlideWrapper>
        ))}
        </SliderContainer>
      </Container>
  );
}
