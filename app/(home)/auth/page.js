"use client"
import Input from '@/app/Conponents/Utils/Input'
import Image from 'next/image'
import loginImg from "@/public/images/login.png"
import { useState } from 'react'

// for users
export default function AuthPage() {
    const [registerForm, setRegisterForm] = useState(false);

    const handleForm = () => {
        setRegisterForm(!registerForm)
    };

    const handleChange = (e) => {
        console.log(e)
    };

    return (
        <div className='page overflow-hidden'>
            <div className='my-10 lightBg dark:darkBg p-10 rounded-md flex items-center justify-between flex-wrap'>
                <div className='w-[50%]'>
                    <Image
                        src={loginImg}
                        width={1000}
                        height={1000}
                        alt='login image'
                        className='w-full '
                    />
                </div>
                <form action="" className='form'>
                    <h1>{registerForm ? "register" : "Login"}</h1>
                    {registerForm &&
                        <Input
                            width="w-full"
                            type="text"
                            name="username"
                            placeholder="Enter Your username"
                            label="username"
                            handleChange={handleChange}
                        />}
                    <Input
                        width="w-full"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        label="Email"
                        handleChange={handleChange}
                    />
                    <Input
                        width="w-full"
                        type="password"
                        name="categori"
                        placeholder="********"
                        label="Password"
                        handleChange={handleChange}
                    />

                    {registerForm &&
                        <Input
                            width="w-full"
                            type="file"
                            name="Photo"
                            label="Photo"
                            handleChange={handleChange}
                        />}

                    {!registerForm && <div className='text-right my-3'>
                        <small className='text-blue-600 dark:text-gray-400 cursor-pointer text-[18px] underline'>Forgot password</small>
                    </div>}

                    <button className='button'>{registerForm ? "Register" : "Log-in"}</button>
                    <div className='my-3 text-center'>
                        {
                            registerForm ?

                                <p>Have An Account ? <span onClick={handleForm} className='text-blue-600 font-medium cursor-pointer'>Sign In</span> </p>
                                :
                                <p>Create a New Account ? <span onClick={handleForm} className='text-blue-600 font-medium cursor-pointer'>Sign Up</span> </p>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
