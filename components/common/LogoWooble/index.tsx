import Link from 'next/link';
import Props from './Logo.props';

import LogoIconWooble from '@assets/ic_wooble.svg';

const LogoWooble: React.FC<Props> = ({ className = '' }) => {
	return (
		<Link className={`${className} font-bold text-2xl`} href='/'>
			<LogoIconWooble />
		</Link>
	);
};

export default LogoWooble;
