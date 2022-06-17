import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --BiggerFont: 2.5rem;
    --BigFont: 1.5rem;
    --MediunFont: 1.2rem;
    --SmallFont:1rem;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
   
    font-family: 'Abel', sans-serif;

    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: 1rem;
        color: var(--white);
    }
}
`