 import styled from "styled-components";

 export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0;
    margin-left: 20px;
    padding: 0 100px;

    h1{
        color: var(--medGrey);
        margin: 20px 0;
    }
    
    @media screen and (max-width: 768px){
        font-size: var(--BigFont);
    }
 `;

 export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
 `;