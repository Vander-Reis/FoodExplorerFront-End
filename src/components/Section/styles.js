import styled from "styled-components";

export const Container = styled.section`
    margin-top: 28px;
    
    > h2 {
        margin-bottom: 40px;
    }
    > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 27px;
    }

    @media (min-width: 1450px) {
        > div {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            
        }
    }
    

    @media (max-width: 900px) {
        > div {
            grid-template-columns: 1fr 1fr;
            
        }
    }

    @media (max-width: 500px) {
        > div {
            grid-template-columns: 1fr;
            
        }
    }


`;

