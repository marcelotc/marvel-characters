import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box; 
        outline: 0;
    }   
    body {
        color: #fff;
        -webkit-font-smoothing: antialiased;
        font-family: 'Open Sans';
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
        
    ::-webkit-scrollbar-track {
        background: #000; 
    }
            
    ::-webkit-scrollbar-thumb {
        background: red; 
    }
        
    ::-webkit-scrollbar-thumb:hover {
        background: lightgray; 
    }
`;