import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineNotification} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {SiFigshare} from "react-icons/si"
const LeftBar = () => {
  return (
   <div className="sidebar w-25">
       <div className="sidebar w-25 h-100 d-flex flex-column justify-content-around  ">
                <div>
                <AiOutlineHome/><h5 class="mb-5"> HOME</h5>
                <AiOutlineSearch/>
                <h5 className="mb-5">SEARCH</h5>
                <AiOutlineNotification/>
                <h5 className="mb-5">NOTIFICATIONS</h5>
        <AiOutlineMessage/>
                <h5 className="mb-5">MESSAGES</h5>
                <CgProfile/>
                <h5 className="mb-5">PROFILE</h5>
        </div>
<div>        <SiFigshare />       <h5>UPDATE THE MATRIX</h5></div>
         
      
        </div>

   </div>
  )
}
export default LeftBar