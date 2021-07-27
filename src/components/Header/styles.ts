import styled from 'styled-components';

interface HeaderProps {
    hide: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #000;
    color: #fff;
    padding: 10px;

    @media (max-width: 588px) {
        flex-direction: column;

        > div:first-of-type {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (min-width: 588px) {
        > div:first-of-type {
            svg {
                display: none;
            }
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    color: #fff;
    font-family: 'Open Sans';
    gap: 15px;
    margin-right: 15px;

    > p {
        cursor: pointer;
    }

    @media (max-width: 588px) {
        display: none;
    }
`;

export const MenuResponsive = styled.div<HeaderProps>`
    background: #000;
    z-index: 1;
    width: 100%;
    padding: 10px;
    text-align: center;
    height: 110px;
    transition: height 1s;
    display: ${(props) => props.hide ? 'unset' : 'none'};

    @media (max-width: 588px) {
        position: absolute;
        top: 80px;    
    }

    @media (min-width: 588px) {
        display: none;
    }
`;
