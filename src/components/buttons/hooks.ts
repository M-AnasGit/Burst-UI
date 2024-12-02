import React from 'react';

/**
 * @param duration - The duration of the notification in milliseconds.
 * @returns An object containing the notification state and a function to trigger the notification.
 */
export const useNotification = (duration: number = 500) => {
    const [isNotify, setIsNotify] = React.useState(false);

    const triggerNotification = React.useCallback(() => {
        setIsNotify(true);
        setTimeout(() => setIsNotify(false), duration);
    }, [duration]);

    return { isNotify, triggerNotification };
};

/**
 *
 * @param width - The width of the element.
 * @param height - The height of the element.
 * @returns { width: string, height: string } - An object containing the width and height as strings.
 */
export const useDimensions = (
    width: number | string,
    height: number | string,
) => {
    return {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };
};
