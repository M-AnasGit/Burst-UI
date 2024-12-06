import React from 'react';

import {
    FeedbackWrapper,
    LeftWrapper,
    IconWrapper,
    TextWrapper,
    Title,
    Message,
    StyledButton,
} from './styles';
import { useTheme } from '../../themeContext';

import info from '../../assets/info.svg';
import success from '../../assets/success.svg';
import warning from '../../assets/warning.svg';
import error from '../../assets/error.svg';

const getIcon = (type: feedbackTypes): string => {
    switch (type) {
        case 'info':
            return info;
        case 'success':
            return success;
        case 'warning':
            return warning;
        case 'error':
            return error;
    }
};

export interface FeedbackProps {
    title: string;
    message: string;
    type: feedbackTypes;
    position: feedbackPositions;
    timer: number;
    dissapear: boolean;
    size: sizes;
    minWidth: string;
}

export const Feedback: React.FC<FeedbackProps> = ({
    title,
    message,
    type = 'info',
    position = 'top-right',
    timer = 2000,
    dissapear = true,
    size = 'small',
    minWidth = '400px',
}: FeedbackProps) => {
    const { theme } = useTheme();

    const [show, setShow] = React.useState(true);
    const [dispay, setDisplay] = React.useState<'flex' | 'none'>('flex');
    const handleAnimationEnd = React.useCallback((): void => {
        if (!show) {
            setDisplay('none');
        }
    }, [show]);

    React.useEffect(() => {
        let timerId: any;
        if (dissapear) {
            timerId = setTimeout(() => {
                setShow(false);
            }, timer);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <FeedbackWrapper
            $size={size}
            $position={position}
            $show={show}
            $display={dispay}
            $type={type}
            $minWidth={minWidth}
            theme={theme}
            onAnimationEnd={handleAnimationEnd}
        >
            <LeftWrapper>
                <IconWrapper $size={size} theme={theme}>
                    <img src={getIcon(type)} alt={type} />
                </IconWrapper>
                <TextWrapper $size={size} theme={theme}>
                    <Title $size={size} $type={type} theme={theme}>
                        {title}
                    </Title>
                    <Message $size={size} theme={theme}>
                        {message}
                    </Message>
                </TextWrapper>
            </LeftWrapper>
            <StyledButton
                $size={size}
                $type={type}
                theme={theme}
                onClick={() => setShow(false)}
            >
                X
            </StyledButton>
        </FeedbackWrapper>
    );
};
