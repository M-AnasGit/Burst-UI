export default {
    article: [
        {
            width: '100%',
            height: '20px',
            type: 'text',
            lines: 1,
        } as CustomText,
        {
            width: '35%',
            height: '18px',
            type: 'text',
            lines: 1,
        } as CustomText,
        {
            width: '100%',
            height: '12px',
            type: 'text',
            lines: 4,
            spacing: '0.5rem',
        } as CustomText,
    ],
    card: [
        {
            width: '100%',
            height: '150px',
            type: 'block',
        } as CustomBlock,
        {
            width: '45%',
            height: '12px',
            type: 'text',
            lines: 1,
        } as CustomText,
    ],
    comment: [
        {
            width: '100%',
            height: '20%',
            type: 'flex-container',
            justify: 'flex-start',
            align: 'center',
            direction: 'row',
            items: [
                {
                    width: '70px',
                    height: '70px',
                    type: 'circle',
                } as CustomCircle,
                {
                    width: '20%',
                    height: '14px',
                    type: 'text',
                    lines: 1,
                } as CustomText,
            ],
        } as CustomFlexContainer,
        {
            width: '100%',
            height: '16px',
            type: 'text',
            lines: 3,
            spacing: '0.5rem',
        } as CustomText,
    ],
    profile: [
        {
            width: '100%',
            height: '50%',
            type: 'flex-container',
            justify: 'flex-start',
            align: 'center',
            direction: 'row',
            items: [
                {
                    width: '70px',
                    height: '70px',
                    type: 'circle',
                } as CustomCircle,

                {
                    width: '50%',
                    height: '14px',
                    type: 'text',
                    lines: 2,
                } as CustomText,
            ],
        } as CustomFlexContainer,
        {
            width: '50%',
            height: '14px',
            type: 'text',
            lines: 1,
        } as CustomText,
        {
            width: '100%',
            height: '14px',
            type: 'flex-container',
            justify: 'space-between',
            align: 'center',
            direction: 'row',
            items: [
                {
                    width: '25%',
                    height: '150px',
                    type: 'block',
                } as CustomBlock,
                {
                    width: '25%',
                    height: '150px',
                    type: 'block',
                } as CustomBlock,
                {
                    width: '25%',
                    height: '150px',
                    type: 'block',
                } as CustomBlock,
            ],
        } as CustomFlexContainer,
    ],
} as Record<string, CustomModel[]>;
