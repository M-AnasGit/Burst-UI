type speed = 'slow' | 'normal' | 'fast';
type models = 'article' | 'card' | 'comment' | 'profile';

type CustomModel =
    | CustomText
    | CustomFlexContainer
    | CustomCircle
    | CustomBlock;

type BaseCustomModel = {
    width: string;
    height: string;
    type: 'text' | 'flex-container' | 'circle' | 'block';
};

type CustomText = BaseCustomModel & {
    type: 'text';
    lines: number;
    spacing?: string;
};

type CustomFlexContainer = BaseCustomModel & {
    type: 'flex-container';
    justify:
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'flex-start'
        | 'flex-end';
    align: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    direction: 'row' | 'column';
    items: CustomModel[];
};

type CustomCircle = BaseCustomModel & {
    type: 'circle';
};

type CustomBlock = BaseCustomModel & {
    type: 'block';
};
