import styled from "styled-components";

export const Container = styled.div`

    padding: 0 123px;
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    gap: 32px;
    background: #00111A;
    
    grid-area: header;

    > .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #00111A;
        h1 {
            font-size: 25px;
            width: max-content;     
        }
    }

    div {
        background: #0D1D25;
        border: none;
    }

    > button {
        width: 216px;
        white-space: nowrap;    
    }

    > .logout {
        background: transparent;
        border: none;
        padding-top: 36px;
        padding-bottom: 36px;
        display: flex;
        align-items: center;
        width: 32px;
        height: 32px;

        svg {
            font-size: 32px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;