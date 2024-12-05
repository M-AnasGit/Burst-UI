type CustomMessage = {
    title?: string;
    message: string;
    type:
        | 'info'
        | 'confirm'
        | 'alert'
        | 'warning'
        | 'error'
        | 'success'
        | 'custom';
};
