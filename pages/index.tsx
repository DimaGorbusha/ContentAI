import LogoWooble from '@/components/common/LogoWooble';
import LogoContentAI from '@/components/common/LogoContentAI';
import Card1 from '@assets/cardImages/cardSociety.png';
import Card2 from '@assets/cardImages/cardMarkets.png';
import Card3 from '@assets/cardImages/cardSites.png';
import Card4 from '@assets/cardImages/cardImprove.png';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';

const Home = (): JSX.Element => {
	const router = useRouter();
	return (
		<div className='ml-[18px]'>
			<section>
				<div className='mt-[39px]'>
					<LogoContentAI />
				</div>
			</section>
			<section className='mt-[41px]'>
				<h1 className='text-heading-1 text-[#242424]'>
					Создание и улучшение
					<br />
					текстового контента
					<br />
					для бизнеса
				</h1>
				<p className='text-BodyText_13 mt-[7px] text-[#7C7C7C]'>
					Сервис на основе ChatGPT который сгенерирует
					<br />
					пост, описание профиля или любой другой текст, а
					<br />
					также поможет улучшить уже существующий
					<br />
					контент
				</p>
			</section>
			<section className='mt-[30px]'>
				<div>
					<Link href='/societies'>
						<Image
							src={Card1}
							alt='CardSociety' 
							className='w-[357px] h-[400px] mb-[14px]' />
					</Link>
					<Link href='/markets'>
						<Image
							src={Card2}
							alt='CardMarkets' 
							className='w-[357px] h-[400px] mb-[14px]' />
					</Link>
					<Link href='/sites'>
						<Image
							src={Card3}
							alt='CardSites' 
							className='w-[357px] h-[400px] mb-[14px]' />
					</Link>
					<Link href='/improve'>
						<Image
							src={Card4}
							alt='CardMarkets' 
							className='w-[357px] h-[400px]' />
					</Link>
				</div>
			</section>
			<section className='ml-[117px] my-[58px]'>
				<LogoWooble />
			</section>
		</div>
	);
};

export default Home;
