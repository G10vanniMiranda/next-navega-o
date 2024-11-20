import Link from "next/link"

import "./users.css"

export default function Users(){
    return(
        <div className="bg-black h-screen flex flex-col gap-20 p-10 ">
            
            <Link href="/">
                <button className="btn-voltar">Voltar</button>
            </Link>
            <h1 className="text-white text-5xl">Users</h1>

            <div className="item flex items-center cursor-pointer gap-5 p-5 rounded-md  bg-violet-700 text-white h-40 w-full">
                <img className="rounded-full" width={200} src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="" />
                <div className="description flex flex-col">
                    <h3 className="text-3xl mb-5">Nome: Giovanni Miranda</h3>
                    <p>giovanni-miranda@gmail.com</p>
                </div>
            </div>

            <div className="item flex items-center cursor-pointer gap-5 p-5 rounded-md  bg-violet-700 text-white h-40 w-full">
                <img className="rounded-full" width={200} src="https://avatars.githubusercontent.com/u/23580648?v=4" alt="" />
                <div className="description flex flex-col">
                    <h3 className="text-3xl mb-5">Nome: Sebastião Rodrigo</h3>
                    <p>rodrigoexer1@gmail.com</p>
                </div>
            </div>
        </div>
    )
}