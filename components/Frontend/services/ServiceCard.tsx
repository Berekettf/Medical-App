import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function ServiceCard() {
    return (
        <Link href='#' className='rounded-md bg-slate-500 hover:bg-slate-50 flex gap-4 overflow-hidden duration-100'>
            <Image width={271} height={416} src='/1.png' className="w-1/3 object-cover aspect-video" alt="A descriptive title for the image" />
            <div className="flex flex-colw-2/3 py-5">
                <h2>telehealth</h2>
                <p className='text-[0.6rem]'>1000 Doctors available</p>
            </div>
        </Link>

    )
}
