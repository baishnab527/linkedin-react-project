import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { PiToolboxFill } from "react-icons/pi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

import "./Header.scss";

// create a header component here;

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="header-logo-searchbox">
            <div className="header-logo">
              <FaLinkedin />
            </div>
            <div className="header-serchbox">
              <div className="searchbox-show">
                <span>
                  {" "}
                  <FaSearch />{" "}
                </span>
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>

          <div className="header-menu">
            <nav>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <IoHomeSharp /> <span> Home </span>{" "}
                  </a>
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <MdPeopleAlt />
                    <span> My Network </span>{" "}
                  </a>
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <PiToolboxFill />
                    <span> Jobs </span>{" "}
                  </a>
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <BsFillChatDotsFill />
                    <span> Messaging </span>{" "}
                  </a>
                </li>

                <li>
                  <a href="">
                    {" "}
                    <IoNotifications />
                    <span> Notifications </span>{" "}
                  </a>
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <img
                      src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                      alt=""
                    />
                    <span>
                      {" "}
                      Me <FaCaretDown />{" "}
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-bussnes">
            <nav>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <TbGridDots />{" "}
                    <span>
                      For Business <FaCaretDown />{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span> Try Prememium for free </span>{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

// export default Header;
export default Header;
