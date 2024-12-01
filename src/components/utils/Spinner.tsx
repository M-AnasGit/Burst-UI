import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export default styled.div`
    border: 2px solid ${(props) => props.theme.colors.background.normal};
    border-top: 2px solid ${(props) => props.theme.colors.textPrimary};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: ${spin} 1s linear infinite;
`;
