import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;
    border: none;
    border-radius: 10px;
    margin-top: 16px;
    padding: 16px;
    font-weight: 500;
    text-align: center;
    &:disabled {
        opacity: 0.5;
    }
    > svg {
        margin-right: 8px;
    }
`;