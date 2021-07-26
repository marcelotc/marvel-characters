import styled from 'styled-components';

interface Slide {
    currentSlide?: number;
    slidesLength?: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 15%;
  margin-left: 15%;

  @media (max-width: 625px) {
    margin: 0;
  }
`;

export const SliderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-family: 'Oswald';
      color: #000;
      font-weight: 500;
      margin: 0;
    }

 @media (max-width: 625px) {
    flex-direction: column;

    h1 {
        text-align: center;
        margin-bottom: 10px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  gap: 5px;
`;

export const NextButton = styled.div<Slide>`
  display: flex;
  align-items: center;
  border: 3px solid #000;
  color: #fff;
  padding: 3px;
  cursor: ${({ currentSlide, slidesLength = 3 }) =>
        currentSlide !== slidesLength - 1 ? 'pointer' : 'unset'};

  pointer-events: ${({ currentSlide, slidesLength = 3 }) =>
        currentSlide !== slidesLength - 1 ? 'all' : 'none'};

  opacity: ${({ currentSlide, slidesLength = 3 }) =>
        currentSlide !== slidesLength - 1 ? '1' : '.7'};

`;

export const PrevButton = styled(NextButton)`
  cursor: ${({ currentSlide }) => (currentSlide === 0 ? 'unset' : 'pointer')};
  pointer-events: ${({ currentSlide }) =>
        currentSlide === 0 ? 'none' : 'all'};
  opacity: ${({ currentSlide }) => (currentSlide === 0 ? '.7' : '1')};
`;


export const SliderContainer = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  max-width: 885px;

  padding: 15px;

  overflow: hidden;

  @media (min-width: 1300.1px) {
    max-width: 960px;
  }
`;

export const SlideWrapper = styled.div<Slide>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 100%;

  padding: 0 23px 0 7px;

  transition: all 0.5s;
  transform: ${({ currentSlide }) =>
        currentSlide ? `translateX(-${currentSlide}00%)` : 'translate(0%)'};

  @media (min-width: 368px) {
    min-width: 190px;
  }
`;

export const Slide = styled.div<Slide>`
 display: flex;
 align-items: flex-start;
 justify-content: center;
 width: 90px;
 height: 210px;
 min-width: 200px;
 border: 1px solid black;
 font-family: 'Oswald';
 font-weight: 500;
 color: #fff;
 border-bottom: 5px solid red;

 .title {
    position: absolute;
    text-align: center;
    color: white;
    width: 88px;
    font-size: 14px;
    margin-top: 20px;
}

.title:before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    color: #fff;
    bottom: 100%;
    border-bottom: 15px solid #000;
    border-left: 15px solid transparent;
}
.title:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    border-bottom: 15px solid #000;
    border-right: 15px solid transparent;
}

.title:after {
    bottom: auto;
    top: 100%;
    border-bottom: none;
    border-top: 15px solid #000;
}

> p {
    position: absolute;
    top: -6px;
}

 > img {
    height: 100%;
    width: 100%;
 }

 > h4 {
     position: absolute;
     color: #fff;
     bottom: 0;
     text-shadow: 2px 2px 10px #000;
 }
`;