'use client'

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const userEmail = "admin@gmail.com"
  const userSenha = "123"

  const validar = (event: any) => {
    event.preventDefault();

    if( email == "" ){
      toast.error('Preencha o campo email', {
        position: "top-right",
      })
      return
    }
    
    if( senha == "" ){
      toast.error('Preencha o campo senha', {
        position: "top-right",
      })
      return
    }

    if( email != userEmail){
      toast.error('E-mail é diferente!', {
        position: "top-right",
      })
      return
    }

    if( senha != userSenha){
      toast.error('Senha é diferente!', {
        position: "top-right",
      })
      return
    }

    toast.success('Login com sucesso', {
      position: "top-right",
    })
    
  }
  // flex flex-col justify-center items-center
  // sm, md, lg
  return (
   <div className="pt-10 w-full p-10 md:pt-10 md:w-[450] mx-auto">
    <form className="flex flex-col gap-5 bg-zinc-900 p-10 rounded-3xl shadow-2xl shadow-violet-600">
      <h1 className="text-3xl font-semibold mb-5 mt-5 tracking-widest">Login</h1>

      <input type="text" placeholder="email"
        value={email} onChange={ e => setEmail(e.target.value) }
        className="rounded-md outline-none text-sm p-3 border-2 border-violet-500 tracking-widest w-full bg-zinc-800 px-5"
      />
      
      <input type="password" placeholder="senha" 
        value={senha} onChange={ e => setSenha(e.target.value) }
        className="rounded-md outline-none text-sm p-3 border-2 border-violet-500 tracking-widest w-full bg-zinc-800 px-5"
      />


      <div className="flex justify-center gap-5 mt-3">
        <button onClick={validar} className="bg-green-600 p-2 px-7 rounded-md hover:bg-violet-600 duration-200" >
          Entrar
        </button>
        <button className="bg-zinc-700 p-2 px-7 rounded-md hover:bg-violet-600 duration-200">
          Cadastrar
        </button>
      </div>
    </form>
   </div>
  )
}