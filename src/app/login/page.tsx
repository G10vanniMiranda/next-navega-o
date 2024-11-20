import Link from "next/link"

export default function Login(){
    return(
        <div className="flex h-screen ">
            <img src="https://media.istockphoto.com/id/1442452138/pt/foto/space-stars-nebula-universe-background.jpg?s=612x612&w=0&k=20&c=Ics2IU65Fl0PgvuReWMeKG_K4tm2QuLfcsTXDhY35Z0=" alt="" />
            <form>
                <input type="text" placeholder="exemplo@gmail.com" />
                <input type="password" placeholder="******************" />
                <Link href="/users">
                    <button>Entrar</button>
                </Link>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}