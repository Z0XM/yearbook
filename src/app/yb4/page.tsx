'use client';

import Profiles from '@/components/profiles';
import { GridFour, GridNine, SquareSplitVertical } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function YB4() {
	const [columns, setColumns] = useState(1);
	return (
		<div className='flex flex-col w-full h-full justify-center items-center gap-4'>
			<Link href={'/'}>
				<Image className='mt-8' src={'/YearBook 2.png'} width={986 * 0.5} height={664 * 0.5} alt='YearBook' />
			</Link>
			<button className='hover:scale-110' onClick={() => setColumns((_) => (_ === 1 ? 2 : _ === 2 ? 4 : 1))}>
				{columns === 1 && <SquareSplitVertical size={32} />}
				{columns === 2 && <GridFour size={32} />}
				{columns === 4 && <GridNine size={32} />}
			</button>
			<div className={`grid grid-cols-${columns} gap-4 p-4`}>
				<Profiles />
			</div>
		</div>
	);
}
