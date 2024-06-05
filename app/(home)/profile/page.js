import Heading from '@/app/Conponents/Utils/Heading';
import React from 'react'


//  for users
export default function ProfilePage() {

    const userProfile = [
        {
            name: "John Doe",
            userId: "user12345",
            email: "johndoe@example.com",
            photo: "https://example.com/photos/johndoe.jpg",
            planName: "Premium",
            phoneNumber: "+1234567890",
            paymentNumber: "4111 1111 1111 1111",
            refer: 50,
            deposit: 1000.00,
            balance: 500.00,
            withdraw: 300.00
        }
    ];
    return (
        <div className=" overflow-hidden">
            <Heading text={"Profile Dashboard"} />

            <div className=' py-10'>
                {
                    userProfile.map(u => (
                        <div key={u.userId} className='w-[50%] m-auto  lightBg dark:darkBg p-10 flex flex-col gap-3'>
                            <h2 className=' text-2xl font-medium'>Name :{u.name}</h2>
                            <p>Email : {u.email}</p>
                            <p>Plan : {u.planName} </p>
                            <p>Phone Number : {u.phoneNumber} </p>
                            <p>Payment Number : {u.paymentNumber}</p>
                            <p>Total Refer :{u.refer}</p>
                            <p>Diposit : {u.deposit} </p>
                            <p>Balance :{u.balance}</p>
                            <p>Withdraw : {u.withdraw}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
