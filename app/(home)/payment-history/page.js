"use client"
import Heading from '@/app/Conponents/Utils/Heading'
import { HomeContext } from '@/app/ContextApi/HomeContext'
import React, { useContext } from 'react'
import History from './History'

export default function PaymentHistory() {

    const { detailsData } = useContext(HomeContext)

    return (
        <div className='page'>
            <Heading text={"Payment History"} />

            <div className=' my-10'>
                {
                    detailsData.map((data, i) => (
                        <History
                            key={i}
                            history={data}
                        />
                    ))
                }
            </div>
        </div>
    )
}


