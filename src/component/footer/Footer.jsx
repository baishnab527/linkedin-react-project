import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"

import "./Footer.scss";
const Footer = () => {
  return (
    <>
    <footer className="footer" >
        <div className="container footer-container">
         <ul>

            <p>Linked <FaLinkedin />{" "} &nbsp; &copy; <span> {new Date().getFullYear()}  </span> </p>
            <li><Link href=""> <a href="#"> About </a> </Link></li>
            <li><Link href=""> <a href="#"> Accessibility </a> </Link></li>
            <li><Link href=""> <a href="#"> User Argeement </a> </Link></li>
            <li><Link href=""> <a href="#"> Privacy Policy </a> </Link></li>
            <li><Link href=""> <a href="#"> Copyright Policy </a> </Link></li>
            <li><Link href=""> <a href="#"> Brand Policy </a> </Link></li>
            <li><Link href=""> <a href="#"> Community Guidelines </a> </Link></li>
            <li><Link href=""> <a href="#"> Language  < IoIosArrowDown/> </a> </Link></li>
            
         </ul>

        </div>
    </footer>
     
    </>
  )
}

// export default Footer;
export default Footer;