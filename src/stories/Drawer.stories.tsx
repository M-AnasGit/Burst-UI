import React from 'react';
import { Button } from '../components/buttons/Button';
import { Drawer, DrawerProps } from '../components/drawer/Drawer';
import { DrawerContainer } from '../components/drawer/DrawerContainer';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = DrawerProps;

const meta: Meta = {
    component: Drawer,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A drawer component that slides in from the left or right.',
            },
        },
    },
    argTypes: {
        position: {
            description: 'The position of the drawer',
            control: {
                type: 'select',
                options: ['left', 'right'],
            },
        },
        isOpen: {
            description: 'Whether the drawer is open or not',
            control: {
                type: 'boolean',
            },
        },
        minWidth: {
            description: 'The minimum width of the drawer',
            control: {
                type: 'text',
            },
        },
        maxWidth: {
            description: 'The maximum width of the drawer',
            control: {
                type: 'text',
            },
        },
    },
    render: (args: any) => {
        const [isOpen, setIsOpen] = React.useState(true);
        return (
            <div>
                <DrawerContainer
                    isOpen={isOpen}
                    ActiveDrawer={
                        <Drawer {...args}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    height: '100vh',
                                }}
                            >
                                <Button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                >
                                    Toggle Drawer
                                </Button>
                            </div>
                        </Drawer>
                    }
                    overlayType="darken"
                    overlayRoughness="low"
                    onOverlayClick={() => setIsOpen(false)}
                ></DrawerContainer>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                    }}
                >
                    <Button onClick={() => setIsOpen((prev) => !prev)}>
                        Toggle Drawer
                    </Button>
                </div>
            </div>
        );
    },
} as Meta;

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        position: 'left',
        isOpen: true,
        minWidth: '300px',
        maxWidth: '100%',
    },
};

export const Right: Story = {
    args: {
        position: 'right',
        isOpen: true,
        minWidth: '300px',
        maxWidth: '100%',
    },
};

export const Closed: Story = {
    args: {
        position: 'left',
        isOpen: false,
        minWidth: '300px',
        maxWidth: '100%',
    },
};

export const Wide: Story = {
    args: {
        position: 'left',
        isOpen: true,
        minWidth: '300px',
        maxWidth: '500px',
    },
};

export const Narrow: Story = {
    args: {
        position: 'left',
        isOpen: true,
        minWidth: '200px',
        maxWidth: '300px',
    },
};
