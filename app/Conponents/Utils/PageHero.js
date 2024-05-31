import React from 'react'

export default function PageHero(props) {
    const { text, bg } = props
    return (
        <div className=' bg-'>
            <div className={` ${bg || "bg-blue-600 text-white dark:bg-slate-900"} w-full h-[300px] flex items-center justify-center bg-opacity-85`}>
                <h1 className='text-4xl font-medium items-center'>{text}</h1>
            </div>
        </div>
    )
}
