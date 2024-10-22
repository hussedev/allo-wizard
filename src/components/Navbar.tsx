import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full pl-8 px-4 py-6 bg-white">
      <div className="w-full flex justify-between items-center">
        <Image src="/alloLogo.svg" width={300} height={30} alt="Allo Logo" />
        <Link
          className="font-bold px-2 py-4"
          href="https://github.com/hussedev/allo-wizard">
          GitHub
        </Link>
      </div>
    </nav>
  );
};
