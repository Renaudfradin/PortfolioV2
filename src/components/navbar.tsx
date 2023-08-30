import Link from "next/link";
import Image from "next/image";
// import { items } from "./data";
import { Github, Linkedin, Home, User, Settings, Eye } from "lucide-react";

export default function navbar() {
  return ( 
    <div className="containerNav">
      <div>
        <Link href="/">
          <Image 
            src="../../assets/logo.svg"
            width={70}
            height={70}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className="containerMenu">
        <Link href="/" className="iconNav">
          <Home color="white" size={30} strokeWidth={1.75} />
        </Link>
        <Link href="/about" className="iconNav">
          <User color="white" size={30} strokeWidth={1.75}/>
        </Link>
        <Link href="/skills" className="iconNav">
          <Settings color="white" size={30} strokeWidth={1.75}/>
        </Link>
        <Link href="/works" className="iconNav">
          <Eye color="white" size={30} strokeWidth={1.75}/>
        </Link>
      </div>
      <div className="containerResaux">
        <Link href="https://www.linkedin.com/in/renaudfradin/" replace target="_blank" className="iconNav">
          <Linkedin color="white" size={30} strokeWidth={1.75}/>
        </Link>
        <Link href="https://github.com/Renaudfradin" replace target="_blank" className="iconNav" >
          <Github color="white" size={30} strokeWidth={1.75}/>
        </Link>
      </div>
    </div>
  )
}