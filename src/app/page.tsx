import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col w-full h-full justify-center items-center gap-4'>
			<Image className='mt-8' src={'/YearBook 2.png'} width={986 * 0.75} height={664 * 0.75} alt='YearBook' />
			<div className='flex flex-col h-full justify-center items-start gap-4'>
				<Link className='text-3xl hover:underline hover:italic' href={'/yb1'}>
					1- YearBook Form 1 - Basic Info
				</Link>
				<Link className='text-3xl hover:underline hover:italic' href={'yb2'}>
					2- YearBook Form 2 - Emotional One
				</Link>
				<Link className='text-3xl hover:underline hover:italic' href={'yb3'}>
					3- YearBook Activity 1 - Canvas
				</Link>
				<Link className='text-3xl hover:underline hover:italic' href={'/yb4'}>
					4- YearBook Activity 2 / Form 3 - Profiles
				</Link>
			</div>
		</div>
	);
}
