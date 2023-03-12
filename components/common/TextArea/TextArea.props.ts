import { FocusEventHandler } from 'react';

interface Props {
    className?: string;
    value: string,
    placeholder: string,
    onFocus: FocusEventHandler<HTMLTextAreaElement>,
    onBlur: FocusEventHandler<HTMLTextAreaElement>,
}

export default Props;
