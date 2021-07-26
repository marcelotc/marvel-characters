import styled from 'styled-components';

import gray_player_icon from './assets/icons/gray_player_icon.svg';

import light_next_rounded_icon from './assets/icons/light_next_rounded_icon.svg';

import webinars_coin from './assets/icons/webinars_coin_icon.svg';

import arrow from './assets/icons/enter_arrow.svg';

interface Slide {
    currentSlide?: number;
    slidesLength?: number;

    'data-photo'?: string;
    'data-tag'?: string;
}

interface External {
    renderAs?: any;
    to?: any;
}

export const SectionWrapper = styled.section`
  position: relative;

  padding: 6em 0 5em;
  margin-top: 3em;

  background: var(--blue);
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  min-width: 70px;
  max-width: 560px;
  min-height: 70px;

  margin: -130px 0 0 -15px;
  padding: 0px 30px;

  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--blue);

  background-color: #fff !important;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  @media (min-width: 1300.1px) {
    background: no-repeat 50%;
    background-size: 35px;
    background-image: url(${gray_player_icon});
  }

  @media (min-width: 1024.1px) {
    max-width: calc(50vw - 320px);
  }
`;

export const Container = styled.div`
  display: flex;

  gap: 30px 0;

  width: 100%;

  @media (max-width: 670px) {
    flex-wrap: wrap;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;

  position: relative;

  width: 100%;

  margin-left: auto;
  padding: 75px 15px 15px;

  &:before {
    content: '';
    position: relative;
    top: 0;
    left: -5px;

    width: 75px;
    height: 75px;

    background: no-repeat center;
    background-size: contain;
    background-image: url(${webinars_coin});
  }

  @media (min-width: 670px) {
    max-width: 310px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
`;

export const SubTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  color: #fff;
  font-size: 0.95rem;
`;

export const NextButton = styled.div<Slide>`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  transition: all 0.5s;

  background: no-repeat center;
  background-size: contain;
  background-image: url(${light_next_rounded_icon});

  cursor: ${({ currentSlide, slidesLength = 3 }) =>
        currentSlide !== slidesLength - 1 ? 'pointer' : 'unset'};

  pointer-events: ${({ currentSlide, slidesLength = 3 }) =>
        currentSlide !== slidesLength - 1 ? 'all' : 'none'};

  opacity: ${({ currentSlide, slidesLength = 3 }) =>
        currentSlide !== slidesLength - 1 ? '1' : '.7'};

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const PrevButton = styled(NextButton)`
  left: unset;
  right: 15px;

  transform: scaleX(-1);

  cursor: ${({ currentSlide }) => (currentSlide === 0 ? 'unset' : 'pointer')};

  pointer-events: ${({ currentSlide }) =>
        currentSlide === 0 ? 'none' : 'all'};

  opacity: ${({ currentSlide }) => (currentSlide === 0 ? '.7' : '1')};
`;


export const Slider = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  max-width: 885px;

  padding: 15px;

  overflow: hidden;

  @media (min-width: 1300.1px) {
    max-width: 885px;
  }
`;

export const SlideWrapper = styled.div<Slide>`
  min-width: 100%;

  padding: 0 23px 0 7px;

  transition: all 0.5s;
  transform: ${({ currentSlide }) =>
        currentSlide ? `translateX(-${currentSlide}00%)` : 'translate(0%)'};

  @media (min-width: 368px) {
    min-width: 390px;
  }
`;

export const Slide = styled.div<Slide>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  position: relative;

  width: 100%;
  max-width: 345px;
  min-height: 340px;

  padding: 40px 15px 5px;

  color: #fff;

  background: no-repeat 0 0;
  background-size: cover;
  background-image: ${({ 'data-photo': photo }) => photo && `url(${photo})`};

  box-shadow: 0 3px 6px rgb(0 0 0 /16%);

  &:after {
    content: attr(data-tag);
    position: absolute;
    top: 8px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    min-height: 30px;

    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    border-radius: 15px;
    background: ${({ 'data-tag': tag }) =>
        tag === 'Gratuito' ? 'var(--blue00)' : 'var(--blue)'};
  }
`;

export const SlideTitle = styled.h4`
  max-width: 200px;
  color: #fff;
  font-size: 1.25rem;
  text-transform: uppercase;
`;

export const SlideContent = styled.div`
  max-width: 200px;
  font-size: 0.9rem;
  margin-bottom: auto;
`;

export const ActionButton = styled.div<External>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 50px;

  margin: 10px 0;
  padding-right: 10px;

  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  background: no-repeat 102% 0;
  background-color: var(--blue);
  background-image: url(${arrow});
  background-size: 55px;

  border: 0;
  cursor: pointer;
  border-radius: 24px;
  transition: all 0.2s;
  opacity: 0.95;

  &:hover {
    color: #fff;
    box-shadow: 0px 0px 3px #97c0fe;
    opacity: 0.9;
  }

  @media (min-width: 315.1px) {
    max-width: 240px;
  }
`;
