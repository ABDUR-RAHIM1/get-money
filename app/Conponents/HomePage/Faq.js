import React from 'react'
import Heading from '../Utils/Heading'
import faqData from '@/app/Data/Faq'

export default function Faq() {
  return (
    <div className='page py-10'>
      <Heading text={"FAQ"} />

      <div className='flex  justify-between flex-wrap'>
        {
          faqData.map((data, index) => (
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
  const { question, answer } = props.data;
  return (
    <div className='w-full md:w-[32%] my-5 py-5 px-3 rounded-md lightBg dark:darkBg'>
      <h2 className='text-xl font-medium my-3'>{question}</h2>
      <p className=' leading-6 text-sm'>{answer}</p>
    </div>
  )
}