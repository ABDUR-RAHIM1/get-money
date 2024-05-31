import React from 'react'
import { MdHorizontalRule } from 'react-icons/md'

export default function Heading({ text }) {
    return (
        <div className=' my-5  text-black dark:text-white '>
            <h2 className='text-4xl font-bold text-center'>
                {text}

            </h2>

            <div className='flex items-center justify-center text-5xl'>
                <MdHorizontalRule />
                <MdHorizontalRule />
            </div>
        </div>
    )
}
