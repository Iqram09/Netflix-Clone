import { sign } from "crypto";
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";


interface Inputs {
    email: string
    password: string
}


function Login(){
    const [login,setLogin] = useState(false)
    const {signIn,signUp} = useAuth()


    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async ({email,password}) => {
        if (login){
            await signIn(email , password)
        }
        else{
            await signUp(email , password)
        }

    }
    return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
            <title>Netflix</title>
            <link rel="icon" href="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"/>
        </Head>
        <Image src="https://www.zdnet.com/a/img/resize/d3246129e133854600901030f6bf2ad9bad95665/2022/10/28/1c172650-d9f5-4ebe-ac73-59df62796f74/netflix.jpg?auto=webp&width=1280"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=""/>
        <img src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}/>

        <form  onSubmit={handleSubmit(onSubmit)} className=" relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <h1 className="text-4xl font-semibold">Sign In</h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                    <input type="email" placeholder="Email" className=" input" {...register("email",{required: true})}/>
                    {errors.email && <p className="p-1 text-[13px] font-light  text-orange-500">This field is required</p>}
                     </label>
                     
                <label className="inline-block w-full">
                    <input type="password" placeholder="Password" className="input" {...register("password",{required: true})} />
                    {errors.password && <p className="p-1 text-[13px] font-light  text-orange-500">This field is required</p>}
                    </label>
            </div>
            <button className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={()=> setLogin(true)}>Sign In</button>
            <div className="text-[gray]">New to Netflix?{' '}
                <button className="text-white hover:underline" onClick={()=> setLogin(false)}>Sign Up Now</button>
            </div>
        </form>
    </div>
    )
}

export default Login