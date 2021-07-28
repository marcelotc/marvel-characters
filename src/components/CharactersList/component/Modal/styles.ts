import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h5 {
        font-size: 35px;
        color: #000;
        margin: 20px 0 20px 0;
    }

    > svg {
        color: #000;
        cursor: pointer;
        font-size: 30px;
        align-self: flex-end;
        transition: color .2s ease;

        &:hover {
            color: #9B9B9B;
        }
    }

    > h1, p {
        color: #000;
        font-family: 'Oswald';
        font-size: 40px;
    }

    > h4 {
        color: #000;
        font-family: 'Oswald';
        font-size: 30px;
    }

    > p {
        color: #000;
        font-family: 'Oswald';
        font-size: 20px;
    }
`;

export const Deitails = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 309px;
    border: 5px solid #000;
    padding: 10px;
    margin-bottom: 30px;

    > h4 {
        color: #000;
        font-family: 'Oswald';
        font-size: 30px;
    }

    > p {
        font-size: 25px;
    }
`;