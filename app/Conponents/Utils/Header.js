"use client"
import Link from 'next/link'
import React, { useState } from 'react'

import { MdDarkMode, MdLightMode } from "react-icons/md"

export default function Header() {

    const [lighMood, setLightMood] = useState(false)

    const handleMood = () => {
        setLightMood(!lighMood)
        document.body.classList.toggle("dark");
    }
    return (
        <div className='page sticky top-0 flex items-center justify-between py-5 bg-gray-100 dark:bg-slate-800 dark:text-white  '>
            <div className="logo text-2xl font-medium">
                <Link href={"/"}>
                    ༺✮•°◤ 𝙂𝙀𝙏 𝙈𝙊𝙉𝙀𝙔 ◥°•✮༻
                </Link>
            </div>
            <nav>
                <ul className='navUl'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/blogs"}>Blogs</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/how-to-earn"}>How to Earn</Link>

                    <button className='  hover:border-0 capitalize text-center bg-blue-600 text-white rounded-md py-2 px-5'>
                        login
                    </button>


                    <button onClick={handleMood} className='text-3xl '>
                        {
                            lighMood ?
                                <MdDarkMode />
                                :
                                <MdLightMode />
                        }
                    </button>
                </ul>
            </nav>
        </div>
    )
}
