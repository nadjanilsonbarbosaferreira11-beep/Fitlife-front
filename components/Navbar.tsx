import Link from "next/link";

export default function Navbar(){

    return(

        <header className="w-full bg-gray-700 border-b shadow-sm">
            <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:text-green-500 scale-110 transition-all duration-200 ">
                Academia Fit-life
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-green-500 transition">
                    Inicio
                    </Link>

                    <Link href="/planos" className="text-white hover:text-green-500 transition">
                    Planos
                    </Link>

                    <Link href="/login" className="text-white hover:text-green-500 transition">Login</Link>
                </div>

            </nav>

        </header>
    )
}