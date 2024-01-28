import { navLinks } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="hidden md:block fixed z-10 w-full font-poppins leading-normal">
      <nav className="relative w-full flex-nowrap items-center justify-center py-4 text-white bg-dark-1/20 backdrop-blur-xl">
        <div className="flex justify-center items-center gap-10">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {"// "}
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
