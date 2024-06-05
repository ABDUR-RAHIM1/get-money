import React from 'react'

export default function History(props) {
    const { type, name, transactionId, amount, paymentMethodName, number } = props.history

  
    return (
        <div className=' my-5 lightBg dark:darkBg py-5 px-3 leading-7 flex items-center justify-between rounded-md'>
            {
                props.history.length < 1 && <h2 className='text-2xl text-red-500 my-5'>History Not Found</h2>
            }
            <div className='w-[85%]'>
                {
                    type === "deposit" ?
                        (
                            <>
                                <p>Date : {new Date().toLocaleDateString()}</p>
                                <p>Date : {new Date().toLocaleTimeString()}</p>
                                <p>Type : {type}</p>
                                <p>Name : {name}</p>
                                <p>transactionId : {transactionId}</p>
                                <p>amount : {amount}</p>
                            </>
                        )
                        :
                        (
                            <>
                                <p>Date : {new Date().toLocaleDateString()}</p>
                                <p>Date : {new Date().toLocaleTimeString()}</p>
                                <p>Type : {type}</p>
                                <p>Name : {name}</p>
                                <p>paymentMethodName : {paymentMethodName}</p>
                                <p>number : {number}</p>
                                <p>amount : {amount}</p>
                            </>
                        )
                }
            </div>

            <button className='button bg-red-700 dark:bg-slate-800 text-white'>Delete</button>
        </div>
    )
}
