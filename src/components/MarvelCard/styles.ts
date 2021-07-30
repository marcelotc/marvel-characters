import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 80px 0 225px 0;

    > h1 {
        color: #000;
        font-family: 'Oswald';
        font-size: 50px;
    }

    > label {
        color: #9B9B9B;
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 500;
        margin: 10px 0 30px 10px;
    }

    > img {
        width: 100%;
    }

    .signUp {
        font: normal normal bold 14px/14px Open Sans;
        font-weight: bold;
        background: red;
        padding: 20px 70px 20px 70px;
        cursor: pointer;
        transition: background-color 0.5s ease;
        margin-top: 40px;
        border: none;
        color: #fff;

        &:hover {
            background: #000;
        }
    }

    .howWorks {
        color: red;
        font-weight: bold;
        margin-top: 15px;
        cursor: pointer;
        transition: color 0.5s ease;
        border: none;
        color: red;
        background: #fff;

        &:hover {
            color: #000;
        }
    }

    @media (max-width: 485px) {
        > h1 {
            font-size: 10vw;
        }
    }
`;