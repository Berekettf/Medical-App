import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function ServiceCard() {
  return (
    <Link href='#' className='rounded-md bg-slate-500 hover:bg-slate-50 flex gap-4 duration-100'>
     <Image width={271}  height={416} src='/1.png' className="" alt="A descriptive title for the image"/>
     <div className="flex flex-col">
        <h2>telehealth</h2>
        <p>1000 Doctors available</p>
     </div>
    </Link>
    
  )
}
