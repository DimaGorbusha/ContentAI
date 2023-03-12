import Link from 'next/link';
import Props from './Logo.props';

import LogoIconContentAI from '@assets/ic_contentai.svg';

const LogoContentAI: React.FC<Props> = ({ className = '' }) => {
	return (
		<Link className={`${className} font-bold text-2xl`} href='/'>
			<LogoIconContentAI />
		</Link>
	);
};

export default LogoContentAI;
