import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    background: #222222;
    padding: 50px 0 50px 50px;

    h4 {
        font-family: 'Oswald';
    }

    p {
        font-family: 'Open Sans';
    }

    @media (max-width: 1095px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px;
    }
`;

export const About = styled.div`
    > h4 {
        color: #fff;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;

    > img {
        margin-right: 60px;
    }

    > div {
        margin-right: 60px;

        > p {
            color: #9B9B9B;
            margin: 5px 0 5px 0;
            cursor: pointer;
            transition: color 0.2s ease;

            &:hover {
                color: #fff;
            }
        }
    }

    @media (max-width: 415px) {
        align-items: center;
        flex-direction: column;
        text-align: center;

        > img {
            margin-right: 0;
        }

        > div {
            margin: 20px 0 10px 0;
        }
    }
`;

export const Blog = styled.div`
    > div {
        display: flex;
        align-items: center;
        margin-top: 10px;

        > img {
            width: 90px;
            margin-right: 15px;
        }

        > p {
            font-weight: bold;
        }
    }

    > p {
        font-family: 'Open Sans';
        color: #9B9B9B;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease;
        margin-top: 10px;

        &:hover {
            color: #fff;
        }
    }

    @media (max-width: 1095px) {
        margin: 50px 0 50px 0;
        text-align: center;

        > div {
            flex-direction: column;

            > img {
                margin: 10px 0 10px 0;
            }
        }
    }
`;

export const Social = styled.div`
    svg {
        margin: 10px 15px 0 0;
        cursor: pointer;

        &:hover {
            path {
                fill: #fff;
            }
        }
    }
`;