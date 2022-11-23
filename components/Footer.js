import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer dark:text-gray-400">
      <Link href="https://twitter.com/frank_react" >
      <AiFillTwitterCircle/>
      </Link>
      <Link href="https://www.linkedin.com/in/francis-meru-78a056226/" >
      <AiFillLinkedin />
      </Link>
      <Link href="https://youtu.be/RUoUxdhdQ-Y" >
      <AiFillYoutube />
      </Link>
  </div>
  )
}

export default Footer