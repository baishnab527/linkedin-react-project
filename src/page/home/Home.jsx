import Header from "../../component/header/Header";
import { RiBox1Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { BiSolidCalendar } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { FaRegFaceGrinWide } from "react-icons/fa6";
import { TbJewishStarFilled } from "react-icons/tb";
import { FaToolbox } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLinkedinPost,
  createLinkedinPost,
  deleteLinkedinPost,
  updateLinkedinPost,
} from "../../../redux/linkedin/action";

// create a home component;

import "./Home.scss";
const Home = () => {
  // to get linkedin store;
  const { linkedinPosts } = useSelector((state) => state.linkedin);

  // to get all data type
  const dispatch = useDispatch();

  // Modla state manage;
  const [modal, setModal] = useState(false);
  const hanldePostModalShow = () => {
    setModal(true);
  };

  const handlePostModalHide = () => {
    setModal(false);
  };

  // student photo link manage;
  const [link, SetLink] = useState(false);
  const handleLinkTrue = () => {
    SetLink(true);
  };

  // edit and delete button manage
  const [button, setButton] = useState(false);
  const handleButtonShow = () => {
    setButton(true);
  };
  const handleButtonHide = () => {
    setButton(false);
  };

  // Input state mange;
  const [input, setInput] = useState({
    content: "",
    photo: "",
  });

  //  input change handler;
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  // Form manage ;
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // form validation here;
    if (!input.content) {
      alert("Please Fill Up Content Field ");
    } else {
      alert("Data Stable");
      dispatch(createLinkedinPost(input));
    }

    // form empty;
    setInput({
      content: "",
      photo: "",
    });

    setModal(false);
    SetLink(false);
  };

  const handleLinkedinPostDelete = (id) => {
    dispatch(deleteLinkedinPost(id));
    setButton(false);
  };



  // create a edit modal post here;
  const [editModal, setEditModal] = useState(false);
  const handleEditModalHide = () => {
    setEditModal(false);
  };
  const [editInput, setEditInput] = useState({
    content: "",
    photo: "",
  });

  // create hander functon form update input change;
  const handleEditInputChange = (e) => {
    setEditInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  // handle modal show ;
  const handleEditModalShow = (item) => {
    setEditModal(true);
    setEditInput(item);
  };

  // handle Edit form summit;
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    // update form validation here;
    if (!editInput.content) {
      alert("Please fill up the content field");
    } else {
      alert("Data stable");

     
    }

    dispatch(updateLinkedinPost(editInput));
    setEditModal(false);
    setEditInput({
      content: "",
      photo: "",
    });
    
  };

    // control SideEffect;
    useEffect(() => {
      dispatch(getAllLinkedinPost());
    }, []);

  return (
    <>
      {/* Create a post modal here ==============================>*/}

      {modal && (
        <div className="PostModaldesign">
          <div className=" .container PostModaldesign-container ">
            <div className="Modal-dialogbox-area">
              <div className="modal-box-top">
                <div className="modal-box-top-left">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                    alt="author photo"
                  />
                  <div className="profile-content">
                    <h4>
                      Bishsajit Baishnab <FaCaretDown />{" "}
                    </h4>
                    <span> Post to connections only </span>
                  </div>
                </div>
                <div className="modal-box-top-right">
                  <button onClick={handlePostModalHide}>
                    {" "}
                    <LiaTimesSolid />{" "}
                  </button>
                </div>
              </div>

              {/* Form Data submit here */}

              <form onSubmit={handleFormSubmit}>
                <div className="modal-box-input">
                  <input
                    type="text"
                    placeholder="what do you want to talk about ?"
                    name="content"
                    value={input.content}
                    onBlur={handleLinkTrue}
                    onChange={handleInputChange}
                  />

                  <div className="link-input">
                    {link && (
                      <input
                        type="text"
                        placeholder="Submit image link here"
                        name="photo"
                        value={input.photo}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                </div>

                <div className="modal-box-bottom-emogi">
                  <button>
                    {" "}
                    <FaRegFaceGrinWide />{" "}
                  </button>
                </div>

                <div className="modal-box-bootm-file-action">
                  <button>
                    {" "}
                    <GoFileMedia />{" "}
                  </button>
                  <button>
                    {" "}
                    <TbJewishStarFilled />{" "}
                  </button>
                  <button>
                    {" "}
                    <FaToolbox />{" "}
                  </button>
                  <button>
                    {" "}
                    <BsThreeDots />{" "}
                  </button>
                </div>

                <div className="dividr"></div>

                <div className="modal-box-form-submit-button">
                  <button>
                    {" "}
                    <MdAccessAlarm />{" "}
                  </button>

                  {<button type="submit">Post</button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* update post modal designt */}

      {editModal && (
        <div className="PostModaldesign">
          <div className=" .container PostModaldesign-container ">
            <div className="Modal-dialogbox-area">
              <div className="modal-box-top">
                <div className="modal-box-top-left">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                    alt="author photo"
                  />
                  <div className="profile-content">
                    <h4>
                      Bishsajit Baishnab <FaCaretDown />{" "}
                    </h4>
                    <span> Post to connections only </span>
                  </div>
                </div>
                <div className="modal-box-top-right">
                  <button onClick={handleEditModalHide}>
                    {" "}
                    <LiaTimesSolid />{" "}
                  </button>
                </div>
              </div>

              {/* Form Data submit here */}

              <form onSubmit={handleEditFormSubmit}>
                <div className="modal-box-input">
                  <input
                    type="text"
                    placeholder="what do you want to talk about ?"
                    name="content"
                    value={editInput.content}
                    onBlur={handleLinkTrue}
                    onChange={handleEditInputChange}
                  />

                  <div className="link-input">
                    {link && (
                      <input
                        type="text"
                        placeholder="Submit image link here"
                        name="photo"
                        value={editInput.photo}
                        onChange={handleEditInputChange}
                      />
                    )}
                  </div>
                </div>

                <div className="modal-box-bottom-emogi">
                  <button>
                    {" "}
                    <FaRegFaceGrinWide />{" "}
                  </button>
                </div>

                <div className="modal-box-bootm-file-action">
                  <button>
                    {" "}
                    <GoFileMedia />{" "}
                  </button>
                  <button>
                    {" "}
                    <TbJewishStarFilled />{" "}
                  </button>
                  <button>
                    {" "}
                    <FaToolbox />{" "}
                  </button>
                  <button>
                    {" "}
                    <BsThreeDots />{" "}
                  </button>
                </div>

                <div className="dividr"></div>

                <div className="modal-box-form-submit-button">
                  <button>
                    {" "}
                    <MdAccessAlarm />{" "}
                  </button>
                  {<button type="submit"> Update </button>}:
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Linke din Home page design here ===============================> */}
      <Header />

      <div className="home-area">
        <div className="container home-area-container">
          {/* =============================== linkedin Left Sideber element =======================> */}
          <div className="linkedin-left-sideber">
            <div className="profile-section">
              <div className="background-image">
                <img
                  src="https://media.licdn.com/dms/image/D5616AQHuDBo_8HuEBA/profile-displaybackgroundimage-shrink_200_800/0/1697997460687?e=1711584000&v=beta&t=cBGfrQVB1XNHfNg2BjkWUvL0sg4hkQqhhYQiOp25NWI"
                  alt="background image"
                />
              </div>

              <div className="profile-image">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                  alt="Profile iamge"
                />

                <div className="profile-name">
                  <h4>
                    <a href="#"> Bishsajit Baishnab </a>
                  </h4>
                  <p>MERN# Website Development</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="profile-view-empressino">
                <li>
                  <a href="#"> Profile viewers </a> <span>62</span>{" "}
                </li>
                <li>
                  <a href="#"> Post impressions </a> <span> 6 </span>{" "}
                </li>
              </div>

              <div className="divider"></div>

              <div className="premeum-ai">
                <p>strength your profile with an Ai wirting assistant </p>
                <a href="#">
                  {" "}
                  <RiBox1Fill /> Try Premium for free{" "}
                </a>
              </div>

              <div className="divider"></div>

              <div className="my-item">
                <span>
                  {" "}
                  <BsFillBookmarkFill />
                  <a href="#"> My items </a>{" "}
                </span>
              </div>
            </div>

            <div className="recent-activity-area">
              <div className="recent">
                <div className="recent-icon">
                  <span>Recent</span>{" "}
                  <a href="#">
                    {" "}
                    <IoIosArrowUp />{" "}
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <FaPeopleGroup /> Full Stack Developer - MEAN{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaHashtag /> Placement{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaPeopleGroup /> javaScript{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaHashtag /> Softwareeengineering{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaPeopleGroup /> React Developers{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="recent">
                <div className="recent-group">
                  <span>Group</span>{" "}
                  <a href="#">
                    {" "}
                    <IoIosArrowUp />{" "}
                  </a>
                </div>

                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <FaPeopleGroup /> Full Stack Developer - MEAN{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaPeopleGroup /> javaScript{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaPeopleGroup /> React Developers{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="recent">
                <div className="recent-group">
                  <span>Events</span>{" "}
                  <a href="#">
                    {" "}
                    <FiPlus />{" "}
                  </a>
                </div>

                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <FaHashtag /> Placement{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaHashtag /> Softwareeengineering{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <FaHashtag /> Softwareeengineering{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" style={{ marginLeft: "30px" }}>
                      {" "}
                      See all{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="divider"></div>

              <div className="discover-more">
                <span>Discover more</span>
              </div>
            </div>
          </div>
          {/* =============================== linkedin middle postarea element =======================> */}
          <div className="linkedin-middle-postarea">
            <div className="lindedin-post-modal-area">
              <div className="post-modal-top">
                <div className="post-moddal-top-left-profile">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                    alt="Profile Image"
                  />
                </div>

                <div className="post-moddal-top-right-input">
                  <button onClick={hanldePostModalShow}>Start a post </button>
                </div>
              </div>

              <div className="post-modal-bottom">
                <div className="post-bottom-button">
                  <button>
                    {" "}
                    <GoFileMedia /> <span>Media</span>{" "}
                  </button>
                  <button>
                    {" "}
                    <BiSolidCalendar /> <span>Event</span>{" "}
                  </button>
                  <button>
                    {" "}
                    <RiArticleLine /> <span>Write article</span>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="linkedin-post-shorting-area">
              <div className="short-line">
                <div className="divider"></div>
              </div>

              <div className="short-button">
                <small>
                  Sort by:{" "}
                  <a href="#">
                    {" "}
                    Top <FaCaretDown />{" "}
                  </a>
                </small>
              </div>
            </div>

            {linkedinPosts.length > 0 ? (
              linkedinPosts
                .slice()
                .reverse()
                .map((item, index) => {
                  return (
                    <div className="linkedin-postbox-area" key={index}>
                      <div className="post-header">
                        <div className="post-header-left">
                          <div className="author-photo">
                            <img
                              src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                              alt="Author phpto"
                            />
                          </div>

                          <div className="author-information">
                            <p>Bishsajit Baishnab</p>
                            <small> MERN Stack Developer </small>
                            <span>
                              1 week ago &#183; <BiWorld />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post-header-right">
                          <button
                            onClick={handleButtonShow}
                            onDoubleClick={handleButtonHide}
                          >
                            <FiPlus /> <a href="#"> Follow</a>
                          </button>
                          {button && (
                            <div className="edit-deletbutton">
                              <button
                                onClick={() =>
                                  handleLinkedinPostDelete(item.id)
                                }
                              >
                                <LiaTimesSolid />{" "}
                              </button>
                              <button onClick={() => handleEditModalShow(item)}>
                                <FaUserEdit />{" "}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="post-content-text">
                        <p>{item.content}</p>
                      </div>
                      <div className="post-content-middle-photo">
                        {item.photo ? <img src={item.photo} alt="" /> : ""}
                      </div>
                      <div className="post-footer-like-share">
                        <div className="like-shire-left">
                          <button>
                            <a href="#">
                              {" "}
                              <BiSolidLike />{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <FaHandHoldingHeart />{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <FcLike />{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <MdOutlineWavingHand />{" "}
                            </a>

                            <a href="#"> you and 87 others </a>
                          </button>
                        </div>
                        <div className="like-shire-right">
                          <a href="#"> 27 comments </a>
                          <a href="#"> . 5 repost </a>
                        </div>
                      </div>
                      <div className="divider">
                        <div className="divider-body"></div>
                      </div>

                      <div className="post-footer-action">
                        <div className="action-button">
                          <button>
                            {" "}
                            <BiSolidLike /> <span>Like</span>{" "}
                          </button>
                          <button>
                            {" "}
                            <FaRegCommentDots /> <span>Comment</span>{" "}
                          </button>
                          <button>
                            {" "}
                            <HiOutlineArrowPathRoundedSquare />{" "}
                            <span>Repost</span>{" "}
                          </button>
                          <button>
                            {" "}
                            <BsFillSendFill /> <span>Repost</span>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
            ) : (
              <p style={{ textAlign: "center", textTransform: "capitalize" }}>
                {" "}
                Any one not post yet...{" "}
              </p>
            )}
          </div>

          {/* =============================== linkedin right sideber postarea element =======================> */}
          <div className="linkedin-right-sideber">
            <div className="feed-area">
              <div className="feed-caption">
                <h3> Add to your feed </h3>{" "}
                <span>
                  {" "}
                  <BsFillExclamationSquareFill />{" "}
                </span>
              </div>
              <div className="feed-item">
                <div className="feed-item-left">
                  <a href="#">
                    <img
                      src="https://media.licdn.com/dms/image/D560BAQF3hWKjfRZ04A/company-logo_200_200/0/1666184672783/mgi_logo?e=1714608000&v=beta&t=crWwpqpbwataQqm-WegCEe9XQsF5ygyGQMKGyezpa_s"
                      alt="Feed image"
                    />
                  </a>
                </div>

                <div className="feed-item-right">
                  <h6> Meghna Group of indstries </h6>
                  <small>company.Consumer Goods</small>
                  <button>
                    {" "}
                    <FiPlus /> Follow{" "}
                  </button>
                </div>
              </div>

              <div className="feed-item">
                <div className="feed-item-left">
                  <a href="#">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQGNtpblgQpJoQ/company-logo_100_100/0/1662120928214/deloitte_logo?e=1714608000&v=beta&t=GtFoAPgc3rtSO46FUo2_5YelLBJtatlliGt1vjc_PZk"
                      alt="Feed image"
                    />
                  </a>
                </div>

                <div className="feed-item-right">
                  <h6> Deloitte </h6>
                  <small>company.Manage Consuilting</small>
                  <button>
                    {" "}
                    <FiPlus /> Follow{" "}
                  </button>
                </div>
              </div>

              <div className="feed-item">
                <div className="feed-item-left">
                  <a href="#">
                    <img
                      src="https://media.licdn.com/dms/image/D4D03AQGRuKaBsIpjJg/profile-displayphoto-shrink_100_100/0/1699788927260?e=1711584000&v=beta&t=NYLJQrqYu5ZLTd1C0fSDXrFCSVcECKXDErtfkWCLkvY"
                      alt="Feed image"
                    />
                  </a>
                </div>

                <div className="feed-item-right">
                  <h6> Ayesha Mehboob </h6>
                  <small>Student of leetCode and trainer at icodeGuru</small>
                  <button>
                    {" "}
                    <FiPlus /> Follow{" "}
                  </button>
                </div>
              </div>

              <div className="view-recommandation">
                <button>
                  view all recomandations <BsArrowRight />{" "}
                </button>
              </div>
            </div>

            <div className="feed-area">
              <div className="add-section">
                <span>
                  Ad <BsThreeDots />{" "}
                </span>
              </div>

              <div className="preimium-area">
                <small>
                  {" "}
                  Bishsajit make connections that matter most in your job search{" "}
                </small>

                <div className="profileIcons">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQF9PYvCIQjFuQ/profile-displayphoto-shrink_100_100/0/1697997148132?e=1711584000&v=beta&t=S_sadM4ktpDrK-KoUcf8NPryx3TgnxwhYEgfDfFlp_k"
                    alt="profile image"
                  />
                  <FaLinkedin />
                </div>

                <p>See who{"'"}s views in your profile the last 90 days</p>

                <button>Try for free!</button>
              </div>
            </div>

            <div className="feed-footer">
              <div className="feed-footer-page">
                <ul>
                  <li>
                    <a href="#"> About </a>
                  </li>
                  <li>
                    <a href="#"> Accesibility </a>
                  </li>
                  <li>
                    <a href="#"> Help Center </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Privacy & Terms <FaCaretDown />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#"> Add Choices </a>
                  </li>
                  <li>
                    <a href="#"> Advertising </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Business Services <FaCaretDown />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#"> get the linkedin app</a>
                  </li>
                  <li>
                    <a href="#"> more </a>
                  </li>
                </ul>
              </div>

              <div className="feed-footer-bottom">
                <a href="#">
                  {" "}
                  Linkedin <FaLinkedin />{" "}
                </a>
                <p>Linkedin Corporaton &copy; {new Date().getFullYear()} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export defautl Home;
export default Home;
