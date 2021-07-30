import { useEffect, useState, useRef } from 'react';
import api from '../../services/api';
import { time, publicKey, hash} from '../../services/authorization';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Fade } from 'react-reveal';
import Slider from "react-slick";

import {
  Container,
  SliderHeader,
  ButtonsWrapper,
  NextButton,
  PrevButton,
  SlideWrapper,
  Slide,
} from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CharactersInterface {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [characters, setCharacters] = useState<CharactersInterface[]>();
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef<Slider>(null);

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

  const decreaseSlide = () => {
    sliderRef.current?.slickPrev()
  };

  const increaseSlide = () => {
    sliderRef.current?.slickNext()
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,  
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 712,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <Container>
      <div>
          <SliderHeader>
          <h2>PERSONAGENS EM DESTAQUE</h2>

          <ButtonsWrapper>
              <PrevButton
                onClick={() => decreaseSlide()}
              ><FaChevronLeft color="#fff" /></PrevButton>

              <NextButton
                onClick={() => increaseSlide()}
              ><FaChevronRight color="#fff"  /></NextButton>
          </ButtonsWrapper>
          </SliderHeader>
          {!loading ? (
          <Fade bottom>
          <Slider ref={sliderRef} {...settings}>
            {characters?.map((character) => (
              <SlideWrapper key={character.id}>
               <Slide>
                <span className="label-movies" />
                <p>movies</p>
                 <img 
                   src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                   alt="Personagens"
                 />
                 <h4>{character.name}</h4>
               </Slide>
             </SlideWrapper>
            ))}
          </Slider>
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
