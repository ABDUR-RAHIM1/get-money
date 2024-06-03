import PageHero from '@/app/Conponents/Utils/PageHero'
import React from 'react'
import PakagesCard from './PakagesCard';

export default function PakagesPage() {

    const earningCategories = [
        {
            name: "Bronze",
            amount: 300,
            dailyIncome: 30,
            limit: 20,
            description: "Basic Membership. Earn 30 TK daily for 20 days."
        },
        {
            name: "Silver",
            amount: 500,
            dailyIncome: 50,
            limit: 20,
            description: "Enhanced Membership. Earn 50 TK daily for 20 days."
        },
        {
            name: "Gold",
            amount: 750,
            dailyIncome: 75,
            limit: 20,
            description: "Premium Membership. Earn 75 TK daily for 20 days."
        },
        {
            name: "Platinum",
            amount: 1000,
            dailyIncome: 100,
            limit: 20,
            description: "Platinum Membership Earn 100 TK daily for 20 days."
        }
    ];


    return (
        <div>
            <PageHero text={"Pakages"} />
            <h1 className='text-3xl text-center my=4 text-black dark:text-white my-4'>Categories</h1>
            <div className='page py-10 flex justify-between flex-wrap'>
                {
                    earningCategories.map((c, i) => (
                        <PakagesCard
                            key={i}
                            categori={c}
                        />
                    ))
                }
            </div>
        </div>
    )
}
