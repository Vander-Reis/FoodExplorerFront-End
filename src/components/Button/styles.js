import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;
    border: none;
    border-radius: 10px;
    /* margin-top: 16px; */
    padding: 16px 37px 16px 37px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 11px;
    &:disabled {
        opacity: 0.5;
    }
`;