import Image from 'next/image'
import LogoImg from '../public/images/logo-dark-maylina.png'

const Header = () => {
  return (
    <div className="header flex 0 h-24 w-full bg-white">
      <div className="container flex justify-between items-center p-5 mx-auto">
        <div className="logo min-w-max">   <Image src={LogoImg} alt="Logo Mélina MESSAL" /></div>
        <div className="menu flex flex-row gap-10 font-semibold">
          <div className="">Projets</div>
          <div className="">CV</div>
          <div className="">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
