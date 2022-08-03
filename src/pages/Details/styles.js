import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";
   
    > main {

        > div {
            .backToPage {
                background: transparent;
                border: none;
                color: ${({ theme   }) => theme.COLORS.GRAY};
                display: flex;
                align-items: center;
                gap: 11px;
                font-weight: 500;
                font-size: 24px;
                margin-top: 24px;
                /* margin-bottom: 41px; */
                padding-left: 154px;
            }

            svg {
                font-size: 22px;
                color: ${({ theme   }) => theme.COLORS.WHITE};
            }
        }

       
    }

`;

export const Content = styled.div`
        padding: 60px 122px;
        display: flex;
        /* align-items: center; */
        gap: 41px;
        grid-area: content;
        .plate {
        width: 390px;
        height: 390px;
        }
`;