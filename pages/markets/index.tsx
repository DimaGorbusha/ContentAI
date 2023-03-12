import LogoContentAI from '@/components/common/LogoContentAI';
import LogoWooble from '@/components/common/LogoWooble';
import Link from 'next/link';
import Image from 'next/image';
import CardMarkets1 from '@/assets/cardImages/cardMarkets1.png';
import CardMarkets2 from '@/assets/cardImages/cardMarkets2.png';
import CardMarkets3 from '@/assets/cardImages/cardMarkets3.png';
import CardMarkets4 from '@/assets/cardImages/cardMarkets4.png';

const Markets = (): JSX.Element => {
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
						Для продаж
					</Link>
				</div>
			</section>
			<section className='mt-[20px]'>
				<div>
					<h1 className='font-bold text-[38px]'>
						Для продаж
					</h1>
				</div>
				<div>
					<Link href='/markets/commerce'>
						<Image
							src={CardMarkets1}
							alt='CardSociety' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/markets/uto'>
						<Image
							src={CardMarkets2}
							alt='CardMarkets' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/markets/places'>
						<Image
							src={CardMarkets3}
							alt='CardSites' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/markets/offer'>
						<Image
							src={CardMarkets4}
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


export default Markets;
