"use client"
import Heading from '@/app/Conponents/Utils/Heading';
import Input from '@/app/Conponents/Utils/Input';
import Image from 'next/image';
import avatar from "@/public/images/avatar.jpg"
import Link from 'next/link';
import { useContext } from 'react';
import { HomeContext } from '@/app/ContextApi/HomeContext';
import { useRouter } from 'next/navigation';


//  for users
export default function ProfilePage() {

    const { detailsData, setDetailsData } = useContext(HomeContext)
    const router = useRouter();

    const profile = {
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
        withdraw: 300.00,
        paymentHistory: [
            {
                type: "deposit",
                userId: "user12345",
                name: "John Doe",
                transactionId: "txn123456",
                amount: 1000.00
            },
            {
                type: "deposit",
                userId: "user12345",
                name: "John Doe",
                transactionId: "txn123456",
                amount: 1000.00
            },
            {
                type: "deposit",
                userId: "user12345",
                name: "John Doe",
                transactionId: "txn123456",
                amount: 1000.00
            },
            {
                type: "withdraw",
                userId: "user12345",
                name: "John Doe",
                paymentMethodName: "Credit Card",
                number: "4111 1111 1111 1111",
                amount: 300.00
            },
            {
                type: "withdraw",
                userId: "user12345",
                name: "John Doe",
                paymentMethodName: "Credit Card",
                number: "4111 1111 1111 1111",
                amount: 300.00
            },
            {
                type: "withdraw",
                userId: "user12345",
                name: "John Doe",
                paymentMethodName: "Credit Card",
                number: "4111 1111 1111 1111",
                amount: 300.00
            },
            {
                type: "withdraw",
                userId: "user12345",
                name: "John Doe",
                paymentMethodName: "Credit Card",
                number: "4111 1111 1111 1111",
                amount: 300.00
            },
        ]
    };

    const handleChange = (e) => {
        console.log(e)
    }


    const handlePassPaymentHistory = () => {
        const history = profile.paymentHistory;
        setDetailsData(history)
        router.push("/payment-history")
    }

    return (
        <div className=" page my-10 overflow-hidden">
            <Heading text={"Profile Dashboard"} />

            <div className='lightBg dark:darkBg p-10 leading-7'>
                <div className='w-[200px] my-10 m-auto '>
                    <Image
                        src={avatar}
                        width={500}
                        height={500}
                        alt='profile photo'
                        className='w-full rounded-full'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className=' text-2xl'>Name -{profile.name}</h2>
                        <p>Email -{profile.email}</p>
                    </div>
                    <div>
                        <p>Plan - {profile.planName} Users</p>
                        <p>Refer - {profile.refer} Users</p>
                    </div>
                </div>

                <div className=' border-t border-gray-200 dark:border-slate-800 py-5 my-5 flex items-center justify-between'>
                    <div>
                        <p>Deposit - {profile.deposit}</p>
                        <p>Withdraw - {profile.withdraw}</p>
                        <p>Balance - {profile.balance}</p>
                    </div>
                    <div>
                        <p>Phone Number -{profile.phoneNumber}</p>
                        <p>Payment Number -{profile.paymentNumber}</p>
                    </div>
                </div>

                <div className=' text-center'>
                    <small onClick={handlePassPaymentHistory} className=' button text-[16px] cursor-pointer bg-blue-500 text-white dark:bg-slate-800' href={"/payment-history"}>See Your Payment history</small>
                </div>

            </div>

            <div className='flex items-center justify-between flex-wrap my-10 gap-10'>
                <form action="" className='form  w-full md:w-[w-48%] lightBg dark:darkBg'>
                    <h1>Deposite</h1>
                    <Input
                        type="text"
                        name="userId"
                        placeholder="Enter Id"
                        label="User Id"
                        handleChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        label="Name"
                        handleChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="amount"
                        placeholder="Enter Amount"
                        label="amount"
                        handleChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="transectionId"
                        placeholder="Enter transection Id"
                        label="transection Id"
                        handleChange={handleChange}
                    />
                    <button className='button'>Deposite</button>
                </form>

                {/*  withdraw form start */}
                <form action="" className='form w-full md:w-[w-48%] lightBg dark:darkBg'>
                    <h1>Deposite</h1>
                    <Input
                        type="text"
                        name="userId"
                        placeholder="Enter Id"
                        label="User Id"
                        handleChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        label="Name"
                        handleChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="amount"
                        placeholder="Enter Amount"
                        label="amount"
                        handleChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="method"
                        placeholder="method"
                        label="method"
                        handleChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="methodNumber"
                        placeholder="method Number"
                        label="method Number"
                        handleChange={handleChange}
                    />
                    <button className='button'>Deposite</button>
                </form>
            </div>




        </div>
    )
}


// const Profile = (props) => {
//     const { u } = props;
//     return (
//         <div className='w-[50%] m-auto  lightBg dark:darkBg p-10 flex flex-col gap-3'>
//             <h2 className=' text-2xl font-medium'>Name :{u.name}</h2>
//             <p>Email : {u.email}</p>
//             <p>Plan : {u.planName} </p>
//             <p>Phone Number : {u.phoneNumber} </p>
//             <p>Payment Number : {u.paymentNumber}</p>
//             <p>Total Refer :{u.refer}</p>
//             <p>Diposit : {u.deposit} </p>
//             <p>Balance :{u.balance}</p>
//             <p>Withdraw : {u.withdraw}</p>
//         </div>
//     )
// }