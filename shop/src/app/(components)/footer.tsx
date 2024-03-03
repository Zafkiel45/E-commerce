import Link from "next/link"
export const Footer = () => {
    return (
        <footer className="bg-black items-center w-screen h-auto flex justify-around p-4 text-white">
            <div className="text-xl font-bold tablet-big:text-2xl">Logo</div>
            <div className="w-fit h-fit flex flex-col gap-3">
                <h1 className="font-medium tablet-big:text-xl">Social</h1>
                <ol className="text-sm flex flex-col gap-2">
                    <Link className="hover:underline" href={`#`}>
                        <li className="tablet-big:text-lg">Instagram</li>
                    </Link>
                    <Link className="hover:underline" href={`#`}>
                        <li className="tablet-big:text-lg">Whatsapp</li>
                    </Link>
                    <Link className="hover:underline" href={`#`}>
                        <li className="tablet-big:text-lg">Twitter</li>
                    </Link>
                </ol>
            </div> 
            <div className="flex gap-3 flex-col self-start">
                <h1 className="font-medium tablet-big:text-xl">Outros</h1>
                <ol className="flex flex-col gap-2">
                    <Link className="hover:underline" href={`#`}>
                        <li className="tablet-big:text-lg">Github</li>
                    </Link>
                    <Link className="hover:underline" href={`#`}>
                        <li className="tablet-big:text-lg">fakestoreapi</li>
                    </Link>
                </ol>
            </div>
        </footer>
    )
}