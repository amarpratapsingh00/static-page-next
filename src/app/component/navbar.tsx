import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
export default function Navbar() {
  return (
    <nav className="flex  bg-gray-800 p-4 h-16">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h1 className="text-white text-xl ml-2 mr-2">Clouwood Studio</h1>
      </div>
      <div className="ml-auto">
        <ul className="flex space-x-4 text-white mt-2">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
