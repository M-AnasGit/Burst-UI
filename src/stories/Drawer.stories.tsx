import React from 'react';
import { Button } from '../components/buttons/Button';
import { Drawer, DrawerProps } from '../components/drawer/Drawer';
import { DrawerContainer } from '../components/drawer/DrawerContainer';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = DrawerProps;

const meta: Meta = {
    component: Drawer,
    tags: ['autodocs'],
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
            <DrawerContainer
                isOpen={isOpen}
                ActiveDrawer={
                    <Drawer {...args}>
                        <div style={{ padding: '1rem' }}>Drawer Content</div>
                    </Drawer>
                }
                onOverlayClick={() => setIsOpen(false)}
            >
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
                    <div style={{ padding: '1rem' }}>Main Content</div>
                </div>
            </DrawerContainer>
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
