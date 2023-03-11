import Link from 'next/link';
import Props from './Logo.props';

import LogoIcon from '@assets/ic_wooble.svg';

const LogoWooble: React.FC<Props> = ({ className = '' }) => {
	return (
		<Link className={`${className} font-bold text-2xl`} href='/'>
			<LogoIcon />
		</Link>
	);
};

export default LogoWooble;
