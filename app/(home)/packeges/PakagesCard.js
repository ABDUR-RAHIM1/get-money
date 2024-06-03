import React from 'react'

export default function PakagesCard(props) {
    const { name, amount, dailyIncome, limit, description } = props.categori;
    return (
        <div className=' w-full md:w-[23%] border py-5 px-3 rounded-md lightBg dark:darkBg text-center hover:shadow-md'>
            <h3 className='text-2xl border-b border-gray-300 dark:border-slate-700 font-medium items-center my-3'>{name}</h3>
            <p className=' font-bold my-2'>Price : {amount}</p>
            <p className=' text-blue-600' >Daily Income : {dailyIncome} Taka </p>
            <p className=' font-medium text-red-600 my-3'>Limit :{limit} Day's</p>
            <p>
                {description}
            </p>
            <button className='button text-white bg-blue-500'>Buy now</button>
        </div>
    )
}
