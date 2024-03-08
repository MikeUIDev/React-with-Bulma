import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function BackToTop(props) {

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 600) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <p onClick={goToTop} title="Back to Top"><FontAwesomeIcon icon={faArrowAltCircleUp} color="white" size="2x"></FontAwesomeIcon></p>
        )}{" "}
    </div>
  );
}

export default BackToTop;