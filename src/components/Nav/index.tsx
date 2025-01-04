import { IconHome, IconPackage, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex gap-5 items-center justify-center bg-zinc-700 w-[800] h-[90]">
            <Link href="/"  className="nav-item" >
                <IconHome size={30} />
                <span>Home</span>
            </Link>

            <Link href="/produto"  className="nav-item" >
                <IconPackage size={30} />
                <span>Produto</span>
            </Link>

            <Link href="/categoria"  className="nav-item" >
                <IconUser size={30} />
                <span>Cagetoria</span>
            </Link>
        </nav>
    )
}