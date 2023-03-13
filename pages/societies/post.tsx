import LogoContentAI from '@/components/common/LogoContentAI';
import LogoWooble from '@/components/common/LogoWooble';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

interface IFormik {
	direction: string;
	prompt: string;
}

const Post = (): JSX.Element => {
	const [outputText, setOutputText] = useState();
	function formSumbit() {
		const finalPrompt = formik.values.direction + formik.values.prompt;
		console.log('отправлен запрос чатгпт');
		console.log(finalPrompt);
	}
	const formik = useFormik<IFormik>({
		initialValues: {
			direction: '',
			prompt: '',
		},
		validationSchema: Yup.object().shape({
			direction: Yup.string().required('Это обязательное поле'),
			promt: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => {
			console.log('Он залез в формик');
			formSumbit();
		},
	});
	return (
		<div className='ml-[18px] mt-[39px]'>
			<section>
				<LogoContentAI />
				<div className='mt-[18px]'>
					<Link 
						href='/societies'
						className='text-BodyText_14'
					>
						<span className='text-greyText'>
							Главная/Для соцсетей/
						</span>
						Пост
					</Link>
				</div>
			</section>
			<section className='mt-[26px]'>
				<div>
					<div className='w-[339px]'>
						<h2 className='text-BoldBodyText_18 mb-[6px]'>
							Направление вашей компании
						</h2>
						<p className='text-BodyText_14 text-greyText'>
							Укажите направление компании, область, чем занимается компания, что производит
						</p>
						<Input
							className='w-full mt-[12px]'
							placeholder='Направление'
							type='text'
							name='direction'
							onChange={formik.handleChange}
							value={formik.values.direction}
							errorMessage={formik.submitCount ? formik.errors.direction : undefined} />
					</div>
					<div className='w-[339px] mt-[28px]'>
						<h2 className='text-BoldBodyText_18 mb-[6px]'>
							Запрос
						</h2>
						<p className='text-BodyText_14 text-greyText'>
							Введите на какую бы тему и про, что вы бы
							хотели получить контент от нейросети, какой объем текста
						</p>
						<Input
							className='w-full mt-[12px]'
							placeholder='Запрос'
							type='text'
							name='prompt'
							onChange={formik.handleChange}
							value={formik.values.prompt}
							errorMessage={formik.submitCount ? formik.errors.prompt : undefined} />
					</div>
					<Button variant='filled' color='black' className='w-[360px] mt-[28px]'>
						Сгенерировать
					</Button>
				</div>
			</section>
			<section className='ml-[117px] my-[58px]'>
				<LogoWooble />
			</section>
		</div>
	);
};

export default Post;
