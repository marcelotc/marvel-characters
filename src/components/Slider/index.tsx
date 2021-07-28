import { useEffect, useState } from 'react';
import api from '../../services/api';
import { time, publicKey, hash} from '../../services/authorization';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
  const [loading, setLoading] = useState(false);

  const getCharactersEndpoint = `/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        const res = await api.get(getCharactersEndpoint);
        setCharacters(res.data.data.results)
        setLoading(false);
      } catch (error) {
        console.log(error.response?.data?.message || error.toString());
        setLoading(false);
      }
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
      <div>
        <SliderHeader>
        <h1>PERSONAGENS EM DESTAQUE</h1>
        
            

      <ButtonsWrapper>
            <PrevButton
              currentSlide={currentSlide}
              slidesLength={characters.length}
              onClick={() => decreaseSlide(currentSlide, setCurrentSlide)}
            ><FaChevronLeft color="#fff" /></PrevButton>

            <NextButton
              currentSlide={currentSlide}
              slidesLength={characters.length}
              onClick={() => increaseSlide(currentSlide, setCurrentSlide, characters.length)}
            ><FaChevronRight color="#fff"  /></NextButton>
          </ButtonsWrapper>
        </SliderHeader>
        {!loading ? (
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
        </SliderContainer> ) : (
          <SkeletonTheme color="#222" highlightColor="red">
            <div style={{marginTop: '30px'}}>
              <Skeleton count={6} duration={2} />
            </div>
          </SkeletonTheme> 
        )}
        </div>
      </Container>
  );
}
