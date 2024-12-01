import styled from 'styled-components';

export default styled.label<{ $size: string }>`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme, $size }) => theme.typography.fontSize[$size]};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme, $size }) => theme.spacing[$size]};
`;
