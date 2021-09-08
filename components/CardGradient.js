import Image from "next/image";
import Link from "next/link";

const CardGradient = ({title, icon, alt, text, link}) => {
    return (
        <div className="card  bg-gradient-to-tl from-white via-transparent to-gray-300 rounded-lg shadow-xl bordered group hover:shadow-2xl transition">
        <div className="inner-card w-auto h-full m-4 rounded-lg p-5 hover:bg-transparent hover:text-secondary transition ">
          <div className="flex flex-col items-center">
            <div className="icon w-16 h-16  mb-5 text-center">
              {" "}
              <Image
                src={icon}
                alt={alt}
                width={500}
                height={500}
              />
            </div>
            <div className="title font-bold text-lg text-primary my-5">{title}</div>
            <div className="text-justify">
           {text}
            </div>
            <Link href={link}>
            <button className="btn w-full mt-4 btn-primary btn-outline">
              Go
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
}
export default CardGradient;