import Image from 'next/image'
import React from 'react'

export default function Blog(props) {
    const { title, description, date, image } = props.data
    return (
        <div className='page lightBg dark:darkBg flex items-center justify-between gap-5 py-5 my-5 border-b'>
            <div className='w-[20%] border'>
                <img className='w-full h-[200px] rounded-md border border-gray-500' src={image} alt="image" />
            </div>
            <div className='flex-1'>
                <small className='my-2 block'>Date : {new Date(date).toLocaleDateString()}</small>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className='button bg-blue-600 dark:bg-slate-950 text-white'>Details</button>
            </div>


        </div>
    )
}
