import Image from "next/image";
import LogoImg from "../public/images/logo-dark-maylina.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header flex 0 h-24 w-full bg-white sticky top-0 shadow-xl">
      <div className="container flex justify-between items-center p-5 mx-auto">
        <Link href="/" passHref>
          <div className="logo min-w-max cursor-pointer">
            {" "}
            <Image src={LogoImg} alt="Logo Mélina MESSAL" />
          </div>
        </Link>
        <div className="menu flex flex-row gap-6 font-semibold ">
          <a className="">Projets</a>
          <a className="">CV</a>
       <Link href="/articles">  
        <a>Blog</a>
       </Link>
          <a className="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
