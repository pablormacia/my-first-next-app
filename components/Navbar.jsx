import Link from "next/link"

const Navbar = () => {
  return ( 
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-4">
        <Link href="/" className="text-bold">Home</Link>
        <ul>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar