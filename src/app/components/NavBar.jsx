import Link from "next/link"

function NavBar() {
    return (
        <div className="w-full bg-slate-50 h-auto flex px-4 py-2 border-b border-b-gray-200 sticky top-0 z-40 shadow-xl">
            <div className="flex items-center flex-wrap space-x-10">
                <div className="text-base font-semibold text-cyan-700 py-2">Weather app</div>
                <div className="flex items-center space-x-3 md:space-x-5 flex-wrap text-sm text-gray-800 font-medium">
                    <Link className="hover:text-blue-600" href="/">Home</Link>
                    <Link className="hover:text-blue-600" href="/about">About</Link>
                    <Link className="hover:text-blue-600" href="/ourservice">Services</Link>
                    <Link className="hover:text-blue-600" href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
