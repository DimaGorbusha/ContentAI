import { MutableRefObject, useRef, useState } from 'react';
import Props from './TextArea.props';

const TextArea: React.FC<Props> = ({ className = '', placeholder, value, onFocus = () => undefined,
	onBlur = () => undefined, ...props }) => {
	const [isFocused, setIsFocused] = useState(false);

	const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>; 

	return (
		<>
			<div
				className={className + ' h-14 px-4 border-[1px] rounded-2xl '}
				onClick={() => {
					setIsFocused(true);
					inputRef.current?.click();
					inputRef.current?.focus();
				}}
			>
				<p className={'font-semibold text-darkGrey transition-all duration-100 '
					+ (isFocused || value ? ' text-xs pt-[10px]' : 'pt-4')}
				>
					{placeholder}
				</p>
				<textarea
					ref={inputRef}
					onFocus={(e) => {
						setIsFocused(true);
						onFocus(e);
					}}
					onBlur={(e) => {
						setIsFocused(false);
						onBlur(e);
					}}
					value={value}
					className={className + ' text-black outline-none bg-transparent mt-0'}
					{...props} />
			</div>
		</>
	);
};

export default TextArea;
