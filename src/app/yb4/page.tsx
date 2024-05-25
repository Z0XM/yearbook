'use client';

import Profiles from '@/components/profiles';
import { GridFour, GridNine, SquareSplitVertical } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function YB4() {
	const [columns, setColumns] = useState(1);
	return (
		<div className='flex flex-col w-full h-full justify-center items-center gap-4 px-4'>
			<Link href={'/'}>
				<Image className='mt-8' src={'/YearBook 2.png'} width={986 * 0.5} height={664 * 0.5} alt='YearBook' />
			</Link>
			<div className='text-md'>
				Note: Fill forms for your friends&#39; profile page. You don&#39;t need to fill all forms! Fill for whomever you
				wish to.
			</div>
			<button className='hover:scale-110' onClick={() => setColumns((_) => (_ === 1 ? 2 : _ === 2 ? 4 : 1))}>
				{columns === 1 && <SquareSplitVertical size={32} />}
				{columns === 2 && <GridFour size={32} />}
				{columns === 4 && <GridNine size={32} />}
			</button>
			<div
				className={
					columns === 2
						? `grid grid-cols-2 gap-4 pb-8`
						: columns === 4
						? `grid grid-cols-4 gap-4 pb-8`
						: `grid grid-cols-1 gap-4 pb-8`
				}>
				<Profiles />
			</div>
		</div>
	);
}
