import Props from './FormLayout.props';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TextArea from '@/components/common/TextArea';

const FormLayout: React.FC<Props> = ({ title1, title2, title3, subtitle1, subtitle2, subtitle3 }) => {
	return (
		<div>
			<div>
				<div className='w-[339px]'>
					<h2 className='text-BoldBodyText_18 mb-[6px]'>
						{title1}
					</h2>
					<p className='text-BodyText_14 text-greyText'>
						{subtitle1}
					</p>
				</div>
				<div className='w-[339px]'>
					<h2 className='text-BoldBodyText_18 mb-[6px]'>
						{title2}
					</h2>
					<p className='text-BodyText_14 text-greyText'>
						{subtitle2}
					</p>
				</div>
				<div className='w-[339px]'>
					<h2 className='text-BoldBodyText_18 mb-[6px]'>
						{title3}
					</h2>
					<p className='text-BodyText_14 text-greyText'>
						{subtitle3}
					</p>
				</div>
				<Button variant='filled' color='black' className='w-[360px] mt-[28px]'>
					Сгенерировать
				</Button>
			</div>
			<div>

			</div>
		</div>
	);
};

export default FormLayout;
