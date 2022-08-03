import styled from "styled-components";

export const Container = styled.div`

    > h2 {
        font-weight: normal;
        font-size: 40px;
    }

    > p {
        font-weight: 400;
        font-size: 24px;
    }

    > footer {
        width: 100%;
        
        display: flex;
        gap: 20px;
        margin-top: 32px;
        margin-bottom: 48px;
        font-weight: 400;
        font-size: 18px;
    }

    > div {
        display: flex;
        align-items: center;

        .amount {
            display: flex;
            align-items: center;
            gap: 17px;
            margin-left: 56px;

            span {
                font-weight: 700;
                font-size: 20px;
            }
        }
        h2 {
            font-weight: 400;
            font-size: 32px;

            /* text-align: center; */
            color: #82F3FF;

        }

        .include {
           width: 110px;
           text-align: center;
           padding: 7px 17px;
           margin-left: 27px;
        }
    }
    
`;