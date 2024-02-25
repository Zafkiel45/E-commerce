import Link from "next/link"
export const Footer = () => {
    return (
        <footer className="bg-black items-center w-screen h-auto flex justify-around p-4 text-white">
            <div className="text-xl font-bold">Logo</div>
            <div className="w-fit h-fit flex flex-col gap-3">
                <h1 className="font-medium">Social</h1>
                <ol className="text-sm flex flex-col gap-2">
                    <Link className="hover:underline" href={`#`}>
                        <li>Instagram</li>
                    </Link>
                    <Link className="hover:underline" href={`#`}>
                        <li>Whatsapp</li>
                    </Link>
                    <Link className="hover:underline" href={`#`}>
                        <li>Twitter</li>
                    </Link>
                </ol>
            </div> 
            <div className="flex gap-3 flex-col self-start">
                <h1 className="font-medium">Outros</h1>
                <ol className="flex flex-col gap-2">
                    <Link className="hover:underline" href={`#`}>
                        <li>Github</li>
                    </Link>
                    <Link className="hover:underline" href={`#`}>
                        <li>fakestoreapi</li>
                    </Link>
                </ol>
            </div>
        </footer>
    )
}