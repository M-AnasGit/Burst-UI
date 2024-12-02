import { useState } from 'react';
import { Modal } from '../Modal';
import { ModalContainer } from '../ModalContainer';
import { Button } from '../../buttons/Button';

import { StoryFn, Meta } from '@storybook/react';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
} as Meta;

// Default Modal story
export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Default Modal</Button>
            <ModalContainer
                isOpen={isOpen}
                ActiveModal={
                    <Modal
                        title="Default Modal"
                        message="This is a default modal message."
                        onConfirm={() => alert('Confirmed!')}
                        onCancel={() => setIsOpen(false)}
                    />
                }
                overlayType="darken"
                overlayRoughness="medium"
                onOverlayClick={() => setIsOpen(false)}
            />
        </>
    );
};

// Modal with Custom Messages story
export const WithCustomMessages = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Open Modal with Custom Messages
            </Button>
            <ModalContainer
                isOpen={isOpen}
                ActiveModal={
                    <Modal
                        title="Custom Messages Modal"
                        message="This modal has custom messages."
                        customMessages={[
                            {
                                type: 'info',
                                title: 'Info',
                                message: 'This is an info message.',
                            },
                            {
                                type: 'warning',
                                title: 'Warning',
                                message: 'This is a warning message.',
                            },
                            {
                                type: 'error',
                                title: 'Error',
                                message: 'This is an error message.',
                            },
                            {
                                type: 'success',
                                title: 'Success',
                                message: 'This is a success message.',
                            },
                        ]}
                        onConfirm={() =>
                            alert('Confirmed with custom messages!')
                        }
                        onCancel={() => setIsOpen(false)}
                    />
                }
                overlayType="darken"
                overlayRoughness="medium"
                onOverlayClick={() => setIsOpen(false)}
            />
        </>
    );
};

// Modal with Different Sizes story
export const DifferentSizes = () => {
    const [isSmallOpen, setSmallOpen] = useState(false);
    const [isMediumOpen, setMediumOpen] = useState(false);
    const [isLargeOpen, setLargeOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setSmallOpen(true)}>Open Small Modal</Button>
            <Button onClick={() => setMediumOpen(true)}>
                Open Medium Modal
            </Button>
            <Button onClick={() => setLargeOpen(true)}>Open Large Modal</Button>

            <ModalContainer
                isOpen={isSmallOpen}
                ActiveModal={
                    <Modal
                        title="Small Modal"
                        message="This is a small modal."
                        size="small"
                        onConfirm={() => alert('Confirmed!')}
                        onCancel={() => setSmallOpen(false)}
                    />
                }
                overlayType="darken"
                overlayRoughness="medium"
                onOverlayClick={() => setSmallOpen(false)}
            />

            <ModalContainer
                isOpen={isMediumOpen}
                ActiveModal={
                    <Modal
                        title="Medium Modal"
                        message="This is a medium modal."
                        size="medium"
                        onConfirm={() => alert('Confirmed!')}
                        onCancel={() => setMediumOpen(false)}
                    />
                }
                overlayType="darken"
                overlayRoughness="medium"
                onOverlayClick={() => setMediumOpen(false)}
            />

            <ModalContainer
                isOpen={isLargeOpen}
                ActiveModal={
                    <Modal
                        title="Large Modal"
                        message="This is a large modal."
                        size="large"
                        onConfirm={() => alert('Confirmed!')}
                        onCancel={() => setLargeOpen(false)}
                    />
                }
                overlayType="darken"
                overlayRoughness="medium"
                onOverlayClick={() => setLargeOpen(false)}
            />
        </>
    );
};

export const BlurModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Blur Modal</Button>
            <ModalContainer
                isOpen={isOpen}
                ActiveModal={
                    <Modal
                        title="Blur Modal"
                        message="This is a blur modal."
                        size="small"
                        onConfirm={() => alert('Confirmed!')}
                        onCancel={() => setIsOpen(false)}
                    />
                }
                overlayType="blur"
                overlayRoughness="low"
                onOverlayClick={() => setIsOpen(false)}
            />
        </>
    );
};
