import LogoContentAI from '@/components/common/LogoContentAI';
import LogoWooble from '@/components/common/LogoWooble';
import Link from 'next/link';
import Image from 'next/image';
import CardSociety1 from '@/assets/cardImages/cardSociety1.png';
import CardSociety2 from '@/assets/cardImages/cardSociety2.png';
import CardSociety3 from '@/assets/cardImages/cardSociety3.png';
import CardSociety4 from '@/assets/cardImages/cardSociety4.png';

const Societies = (): JSX.Element => {
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
						Для соцсетей
					</Link>
				</div>
			</section>
			<section className='mt-[20px]'>
				<div>
					<h1 className='font-bold text-[38px]'>
						Для соцсетей
					</h1>
				</div>
				<div>
					<Link href='/societies/post'>
						<Image
							src={CardSociety1}
							alt='CardSociety' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/societies/story'>
						<Image
							src={CardSociety2}
							alt='CardMarkets' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/societies/profile'>
						<Image
							src={CardSociety3}
							alt='CardSites' 
							className='w-[357px] h-[314px] mb-[14px]' />
					</Link>
					<Link href='/societies/content'>
						<Image
							src={CardSociety4}
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

export default Societies;
