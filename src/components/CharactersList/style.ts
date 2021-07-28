import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const List = styled.div`
  width: 86.5%;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > h1 {
    font-family: 'Oswald';
    color: #000;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #000;
  width: 300px;
  height: 30px;
  border-radius: 25px;
  padding: 20px;

  > input {
    border: none;
    width: 100%;
  }

  > svg {
    cursor: pointer;
    color: #000;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  align-content: center; 

  @media (max-width: 393px) {
    display: unset;
  }
`;

export const CardContainer = styled.div`
  cursor: pointer;
  transition: filter .2s ease;
  
  &:hover {
    filter: brightness(70%);
  }
`;

export const Card = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: center;
 width: 170px;
 height: 210px;
 min-width: 150px;
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
    margin-top: 8px;
}

 > img {
    height: 100%;
    width: 100%;
 }

 > h4 {
     color: #fff;
     bottom: 18px;
     text-shadow: 2px 2px 10px #000;
 }

  @media (max-width: 393px) {
    width: 100%;
  }
`;

export const CardFooter = styled.div`
  background: #000;
  margin-bottom: 20px;
  height: 100px;
  width: 170px;

  > p {
    padding: 20px;
  }

  @media (max-width: 393px) {
    width: 100%;
  }
`;
