import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SiFigshare } from "react-icons/si";
import "./Modal.css";
const LeftBar = (props) => {
  return (
    <>
      <div className="sidebar w-25">
        <div className="sidebar w-25 h-100 d-flex flex-column justify-content-around  ">
          <div className="tabs">
            <AiOutlineHome className="tab_icon" />
            <h5 className="mb-5 tab"> HOME</h5>
            <AiOutlineSearch className="tab_icon" />
            <h5 className="mb-5 tab">SEARCH</h5>
            <AiOutlineNotification className="tab_icon"/>
            <h5 className="mb-5 tab">NOTIFICATIONS</h5>
            <AiOutlineMessage className="tab_icon"/>
            <h5 className="mb-5 tab">MESSAGES</h5>
            <CgProfile className="tab_icon" />
            <h5 className="mb-5 tab">PROFILE</h5>
          </div>
          <div>
            {" "}
            <SiFigshare /> <h5>UPDATE THE MATRIX</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftBar;
