import { useState } from "react";
import {Link} from "react-router-dom"
import { FaLinkedin } from "react-icons/fa";
import "./SignUp.scss";
import Footer from "../../component/footer/Footer";


const SignUp = () => {
  // hanldePasswordShowHide
  const [button, setButton] = useState(false);

  // handle button show here
  const handleButtontShow = () => {
    setButton(true);
  };

  // handle button hide here;
  const handleButtonHide = () => {
    setButton(true);
  };

  return (
    <>
      <div className="signUp-area">
        <div className="container signUp-area-container">
          <div className="signUp-header">
            <div className="logo">
              <h3>
                Linked <FaLinkedin />{" "}
              </h3>
            </div>

            <p>Make the most of your professional life</p>
          </div>

          {/* Make the form design here */}

          <div className="signUp-form-area">
            <form action="#">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />

              <label htmlFor="password"> Password (6+ characters)</label>

              <div className="join-form">
                <input className="PasswordFild" type="text" id="password" />

                {button ? (
                  <button onClick={handleButtontShow}> Hide </button>
                ) : (
                  <button onClick={handleButtonHide}> Show </button>
                )}
              </div>

              <div className="privacy-policay">
                <p>
                  By clicking Agree & Join, you agree to the LinkedIn <Link>User
                  Agreement</Link> , <Link> Privacy Policy, </Link>  and  <Link> Cookie Policy </Link>.
                </p>
              </div>
              
              <div className="agrre-join">
                <a href="#"> Agree & Join </a>
              </div>

              <div className="orButton">
                <span>or</span>
              </div>


            </form>

            <div className="continue-gogle">
              <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google image" /> Continue with google </a>
            </div>

            <div className="singin">
              <p>Already on Linkedin? <Link to="#"> Sign in  </Link> </p>
            </div>

          </div>

          <div className="form-boottom">
            <p>Looking to create a page for a business?  <Link> Get help </Link> </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

// export default SignUp;
export default SignUp;
