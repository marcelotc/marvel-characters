import { useEffect, useState } from 'react';
import api from '../../services/api';
import { time, publicKey, hash} from '../../services/authorization';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Fade } from 'react-reveal';

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
  const [characters, setCharacters] = useState<CharactersInterface[]>();
  const [loading, setLoading] = useState(false);

  const getSpeiderMan = `/v1/public/characters?ts=${time}&name=Spider-Man (Peter Parker)&apikey=${publicKey}&hash=${hash}`;
  const getBlackWidow = `/v1/public/characters?ts=${time}&name=Black Widow&apikey=${publicKey}&hash=${hash}`;
  const getHulk = `/v1/public/characters?ts=${time}&name=Hulk&apikey=${publicKey}&hash=${hash}`;
  const getThor = `/v1/public/characters?ts=${time}&name=Thor&apikey=${publicKey}&hash=${hash}`;
  const getBlackPanther = `/v1/public/characters?ts=${time}&name=Black Panther&apikey=${publicKey}&hash=${hash}`;
  const getThanos = `/v1/public/characters?ts=${time}&name=Thanos&apikey=${publicKey}&hash=${hash}`;
  const getIronMan = `/v1/public/characters?ts=${time}&name=Iron Man&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        const [spiderMan, blackWidow, hulk, thor, blackPanther, thanos, ironMan] = await Promise.all([
          api.get(getSpeiderMan),
          api.get(getBlackWidow),
          api.get(getHulk),
          api.get(getThor),
          api.get(getBlackPanther),
          api.get(getThanos),
          api.get(getIronMan),
        ]);
        
        const charactersArr: Array<CharactersInterface> = []
        charactersArr.push(spiderMan.data.data.results[0]);
        charactersArr.push(blackWidow.data.data.results[0]);
        charactersArr.push(hulk.data.data.results[0]);
        charactersArr.push(thor.data.data.results[0]);
        charactersArr.push(blackPanther.data.data.results[0]);
        charactersArr.push(thanos.data.data.results[0]);
        charactersArr.push(ironMan.data.data.results[0]);

        setCharacters(charactersArr);
        setLoading(false);
      } catch (error) {
        console.log(error.response?.data?.message || error.toString());
        setLoading(false);
      }
    }
    getCharacters();  
  }, [
    getSpeiderMan,
    getBlackWidow, 
    getHulk, 
    getThor, 
    getBlackPanther,
    getThanos,
    getIronMan
  ]);

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
                slidesLength={characters?.length}
                onClick={() => decreaseSlide(currentSlide, setCurrentSlide)}
              ><FaChevronLeft color="#fff" /></PrevButton>

              <NextButton
                currentSlide={currentSlide}
                slidesLength={characters?.length}
                onClick={() => increaseSlide(currentSlide, setCurrentSlide, characters?.length as number)}
              ><FaChevronRight color="#fff"  /></NextButton>
          </ButtonsWrapper>
          </SliderHeader>
          {!loading ? (
          <Fade bottom>
          <SliderContainer>
            {characters?.map((character) => (
              <SlideWrapper key={character.id} currentSlide={currentSlide}>
                <Slide>
                  <div className="title" />
                  <p>MOVIES</p>
                  <div className="characterImg">
                    <img 
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                      alt="Personagens"
                    />
                  </div>
                  <h4>{character.name}</h4>
                </Slide>
              </SlideWrapper>
            ))}
          </SliderContainer>
          </Fade> ) : (
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
