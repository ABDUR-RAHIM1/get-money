import React from 'react'
import Heading from '../Utils/Heading'
import servicesData from '../../Data/Services'

export default function Services() {
    return (
        <div className='page lightBgContainer dark:darkBgContainer py-16'>
            <Heading text={"Our Services"} />

            <div className='flex  justify-between flex-wrap'>
                {
                    servicesData.map((data, index) => (
                        <ChildComponent
                            key={index}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    )
}

  const ChildComponent = (props) => {
    const { title, description } = props.data;
    return (
        <div className='group w-full md:w-[32%] lightBg dark:darkBg py-10 px-5 text-center my-5 rounded-md'>
            <h2 className='text-2xl font-medium my-4'>{title}</h2>
            <p className='text-sm leading-6 font-[300]'>{description}</p>
            <button className='button bg-blue-600 text-white dark:bg-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Buy Now</button>
        </div>
    )
}
