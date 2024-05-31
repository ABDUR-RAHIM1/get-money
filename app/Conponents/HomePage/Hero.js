import Image from 'next/image'
import HeroImg from "@/public/images/hero.png"

export default function Hero() {
    return (
        <div className='page min-h-[80vh] bg-blue-500 dark:darkBg text-white flex items-center justify-between flex-wrap  '>
            <div className="text w-[48%]">
                <h1 className='text-4xl my-5'>GetMoney - Earnings and get likes, followers on Instagram TikTok, Twitter</h1>
                <p>Register and earn real money by completing simple tasks! Or get likes, followers and more for free!</p>

                <button className='py-3 px-8 border-2 border-solid rounded-full w-[250px] my-8 hover:bg-white hover:text-black dark:hover:bg-blue-600 dark:hover:text-white   duration-200'>Sign In</button>

                <p>You can buy likes, followers for Instagram, TikTok, Twitter, Telegram, Vk, Ok and much more without registration!</p>
            </div>
            <div className="w-[48%]">
                <Image
                    src={HeroImg}
                    width={1000}
                    height={1000}
                    alt='hero image'
                />
            </div>
        </div>
    )
}
