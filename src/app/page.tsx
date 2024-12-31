export default function Home() {
  // sm, md, lg
  return (
    <div className=" w-screen h-screen bg-black flex justify-center p-10 mx-auto ">

      <form className="flex flex-col gap-5 h-[400] bg-zinc-900 p-10 rounded-md hadow-2xl shadow-violet-600 w-full md:w-[400] ">

        <h1 className="text-3xl font-semibold text-white mb-5 mt-5 tracking-widest">Login</h1>
        <input className="rounded-md p-3 outline-none border-none bg-zinc-800 text-white" type="text" placeholder="email" />
        <input className="rounded-md p-3 outline-none border-none bg-zinc-800 text-white" type="password" placeholder="senha" />

        <div className="flex gap-5 items-center justify-center mt-3">
          <button className="bg-green-500 p-2 px-7 rounded-md hover:bg-violet-600 duration-300 text-white ">Entrar</button>
          <button className="bg-zinc-700 p-2 px-7 rounded-md hover:bg-violet-600 duration-300 text-white ">Entrar</button>
        </div>

      </form>

    </div>
  )
}