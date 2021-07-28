import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    background: #000;
    padding-bottom: 100px;
`;

export const EmailContainer = styled.div`
    margin:  30px 300px 0 0;

    > h1 {
        font-family: 'Oswald';
        font-size: 20px;

        > span {
            color: red;
        }
    }

    @media (max-width: 1204px) {
        display: table;
        margin: 215px auto 0 auto;
        
        > h1 {
            text-align: center;
        }
    }
`;

export const EmailInput = styled.div`
    > h5 {
        font-family: 'Oswald';
        font-size: 15px;
        margin: 20px 0 5px 0;
    }
`;

export const InputContainer = styled.div`
    display: flex;

    > input {
        border: 0;
        padding: 10px;
        width: 300px;
        height: 49px;
    }

    > button {
        border: 0;
        background: red;
        color: #fff;
        width: 90px;
        height: 50.8px;
        cursor: pointer;
        transition: background-color 0.5s ease;

        &:hover {
            background: #000;
        }
    }

    @media (max-width: 415px) {
        flex-direction: column;

        > button {
            width: 100%;
        }
    }
`;