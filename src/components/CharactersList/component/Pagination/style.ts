import styled from 'styled-components';

interface PaginationProps {
    active: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

    > button {
        background: #000;
        color: #fff;
        padding: 13px;
        margin-right: 2px;
        cursor: pointer;
        border: 0;
    }

    > span {
        cursor: pointer;
        margin: 0 10px 0 10px;
        color: #9B9B9B;
    }
`;

export const Page = styled.div<PaginationProps>`
    background: ${(props) => props.active ? 'red' : ''};
    color: ${(props) => props.active ? '#fff' :  '#9B9B9B'};
    padding: 10px;
    margin-right: 2px;
    cursor: pointer;
    width: 35px;
    text-align: center;
    font-family: 'Oswald';
`;
