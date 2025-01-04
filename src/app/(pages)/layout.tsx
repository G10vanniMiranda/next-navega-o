import Nav from "@/components/Nav";

export default function Layout( props: any ) {
    return(
        <div className="">
            <Nav />
            {props.children}
        </div>
    )
}