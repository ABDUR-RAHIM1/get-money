"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import avatar from "@/public/images/avatar.jpg"

export default function Header() {
    const path = usePathname();
    const [lighMood, setLightMood] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    const handleMood = () => {
        setLightMood(!lighMood)
        document.body.classList.toggle("dark");
    }

    const handleShowProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu)
    }
    const handleBlur = () => {
        setShowProfileMenu(false)
    }
    const items = [
        { item: "Home", path: "/" },
        { item: "packeges", path: "/packeges" },
        { item: "tasks", path: "/tasks" },
        { item: "blogs", path: "/blogs" },
        { item: "about", path: "/about" },
        { item: "how-to-earn", path: "/how-to-earn" },
    ]

    return (
        <div className='page sticky top-0 flex items-center justify-between py-5 bg-gray-100 dark:bg-slate-900 border-b border-gray-300 dark:border-slate-800 dark:text-white  '>
            <div className="logo text-2xl font-medium">
                <Link href={"/"}>
                    ༺✮•°◤ 𝙂𝙀𝙏 𝙈𝙊𝙉𝙀𝙔 ◥°•✮༻
                </Link>
            </div>
            <nav>
                <ul className='navUl'>
                    {
                        items.map((item, index) => (
                            <Link className={path === item.path ? "border-b border-gray-400 dark:border-slate-500" : ""} key={index} href={item.path}>{item.item}</Link>
                        ))
                    }

                    <Link href={'/auth'} className='  hover:border-0 capitalize text-center bg-blue-600 text-white rounded-md py-2 px-5'>
                        login
                    </Link>

                    <div className=' relative'>
                        <button onClick={handleShowProfileMenu}>
                            <Image
                                src={avatar}
                                width={500}
                                height={500}
                                alt='Profile avatar'
                                className=' w-[40px] h-[40px] rounded-full'
                            />
                        </button>

                        <div onBlur={handleBlur} className={`${showProfileMenu ? "scale-y-1" : "scale-y-0"} origin-top z-[999] from-gray-300 flex flex-col gap-4 w-[150px]  h-[150px] bg-gray-200 px-2 py-4 absolute top-16 right-0 `}>
                            <Link href={"/profile"}>Profile</Link>
                            <Link href={"/"}>Profile</Link>
                            <Link href={"/"}>Profile</Link>
                        </div>
                    </div>


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
