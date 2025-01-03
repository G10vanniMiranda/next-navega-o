'use client'

import { useEffect, useState } from "react"

export default function Users(){
    const urlAPI = "https://jsonplaceholder.org/users"
    
    const [user, setUser] = useState([])

    useEffect( () => {
        fetch(urlAPI) // url da api
        .then((response) => response.json()) // converte para json
        .then((json) => setUser(json)) // armazena na variavel
    }, [user] ) // executa sempre que o user for alterado
    
    return(
        <div className="bg-black text-white w-screen h-screen
            flex flex-col items-center pt-10
        ">
        <h1 className="text-3xl mb-5">Lista de Usuários</h1>

        <div className="bg-zinc-800 w-[600]">
            {
                user.map((item: any) => (
                    <div key={item.id} className="flex gap-2">
                        <div className="p-2 hover:bg-green-600 duration-300 cursor-pointer w-full flex justify-between px-5 "> 
                            <span className="bg-red-600 p-2 w-10 rounded-full flex items-center justify-center mr-2">{item.id}</span>
                            <div className="flex p-2 justify-between bg-green-600 w-full ">
                                <div className="w-36">{item.firstname}</div>
                                <div className="flex justify-between w-full">
                                    <div>{item.email}</div>
                                    <div>{item.birthDate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        </div>
    )
}