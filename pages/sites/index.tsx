import LogoContentAI from '@/components/common/LogoContentAI';
import LogoWooble from '@/components/common/LogoWooble';
import Link from 'next/link';
import Image from 'next/image';
import CardSites1 from '@/assets/cardImages/cardSites1.png';
import CardSites2 from '@/assets/cardImages/cardSites2.png';
import CardSites3 from '@/assets/cardImages/cardSites3.png';
import CardSites4 from '@/assets/cardImages/cardSites4.png';
import CardSites5 from '@/assets/cardImages/cardSites5.png';
import CardSites6 from '@/assets/cardImages/cardSites6.png';

const Sites = (): JSX.Element => {
	return (
		<div className='ml-[18px] mt-[39px]'>
			<section>
				<LogoContentAI />
				<div className='mt-[27px]'>
					<Link 
						href='/'
						className='text-BodyText_14'
					>
						<span className='text-greyText'>
							Главная/
						</span>
						Для сайтов
					</Link>
				</div>
			</section>
			<section className='mt-[20px]'>
				<div>
					<h1 className='font-bold text-[38px]'>
						Для сайтов
					</h1>
				</div>
				<div>
					<Link href='/sites/sfera'>
						<Image
							src={CardSites1}
							alt='CardSociety' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/sites/news'>
						<Image
							src={CardSites2}
							alt='CardMarkets' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/sites/faq'>
						<Image
							src={CardSites3}
							alt='CardSites' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/sites/text'>
						<Image
							src={CardSites4}
							alt='CardMarkets' 
							className='w-[357px] h-[314px]' />
					</Link>
					<Link href='/sites/landing'>
						<Image
							src={CardSites5}
							alt='CardMarkets' 
							className='w-[357px] h-[314px]' />
					</Link>
					<Link href='/sites/content'>
						<Image
							src={CardSites6}
							alt='CardMarkets' 
							className='w-[357px] h-[314px]' />
					</Link>
				</div>
			</section>
			<section className='ml-[117px] my-[58px]'>
				<LogoWooble />
			</section>
		</div>
	);
};

export default Sites;
