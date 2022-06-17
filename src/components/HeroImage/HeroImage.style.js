import styled from 'styled-components';


export const Wrapper = styled.div`
    background-image: url(${({image}) => image });
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage 1s;
    

    @keyframes  animateHeroImage{
        from {
            opacity:0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1{
        font-size: var(--BiggerFont);

        @media screen and (max-width: 720px){
            font-size: var(--BigFont);
        }
    }
    p{
        font-size: var(--MediunFont);

        @media screen and (max-width: 720px){
            font-size: var(--SmallFont);
        }
    }

    @media screen and (max-width: 720px){
        max-width: 100%;
    }
`;