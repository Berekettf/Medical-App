import Link from 'next/link'
import React from 'react'

export default function LinkCards({ className = '' }: { className?: string }) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6'>
      <Link href='#' className={`rounded-md flex gap-4 bg-slate-500 py-3 px-6 text-slate-50 ${className}`}>
      <h2>Anexity</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md flex gap-4 bg-slate-500 py-3 px-6 text-slate-50 ${className}`}>
      <h2>Anexity</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md flex gap-4 bg-slate-500 py-3 px-6 text-slate-50 ${className}`}>
      <h2>Anexity</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md flex gap-4 bg-slate-500 py-3 px-6 text-slate-50 ${className}`}>
      <h2>Anexity</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md flex gap-4 bg-slate-500 py-3 px-6 text-slate-50 ${className}`}>
      <h2>Anexity</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md flex gap-4 bg-slate-500 py-3 px-6 text-slate-50 ${className}`}>
      <h2>Anexity</h2>
      <span aria-hidden="true">&rarr;</span>
    </Link>
    </div>
  )
}
