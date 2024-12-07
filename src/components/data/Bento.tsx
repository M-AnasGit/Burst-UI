import React from 'react';

import { BentoWrapper, BentoSection } from './styles';
import { useTheme } from '../../themeContext';

export interface BentoProps {
    children: React.ReactNode[];
    bentoRatios: number[];
    size?: sizes;
}

export const Bento: React.FC<BentoProps> = ({
    children,
    bentoRatios,
    size = 'small',
}: BentoProps) => {
    const { theme } = useTheme();

    return (
        <BentoWrapper $size={size} theme={theme}>
            {children.map((child, index) => {
                return (
                    <BentoSection
                        key={index}
                        $size={size}
                        $ratio={bentoRatios[index]}
                        theme={theme}
                    >
                        {child}
                    </BentoSection>
                );
            })}
        </BentoWrapper>
    );
};
