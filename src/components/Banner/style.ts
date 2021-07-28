import styled from 'styled-components';


export const Container = styled.div`
  position: relative;
  background: #000;
  height: 611px;

  > img {
    width: 100%;
    filter: brightness(50%);
  } 
`;

export const Title = styled.div`
  position: absolute;
  bottom: -48px;
  left: 85px;

  > div {
    margin-top: 10px;
    font-size: 2.5vw;
    font-family: 'Oswald';
    text-align: left;
    text-shadow: 2px 2px 10px #000;
  }

  @media (max-width: 625px) {
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);

    > div {
      text-align: center;
      font-size: 4vw;
    }
  }
`;
