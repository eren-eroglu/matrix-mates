
import media from "./img/media.svg";
import emoji from "./img/emoji.svg";
import location from "./img/location.svg";


import logo from "./img/logo.png"
import Post from "./Post";
import { useState } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([])
  const [value,setValue] = useState('')
  const newPost = () => {

     setPosts([...posts,value]) 
  }
  function onTestChange(e) {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
      e.target.value = ''
      newPost()
     
    }
    else {
        return true;
    }
}
  return (
    <main className="main w-100 d-flex flex-column">
      <div className="w-100 mt-3 h-100 home d-flex justify-content-center align-items-center align-content-center  ">
        <div className="d-flex flex-column w-100 justify-content-center align-items-center align-content-center">
         <img src={logo} style={{height:'75px'}} alt="" />
         
          <div className="share-post  w-100 d-flex justify-content-center align-content-center align-items-center">
            <div className="input-group w-50 d-flex">
              <div className="input-group-prepend"></div>
              <textarea className="form-control textarea ms-2 " onKeyDown={(e) => onTestChange(e)}   onChange={(e) => setValue(e.target.value)} rows="4"></textarea>
            </div>
          </div>
          <div className="w-50 d-flex justify-content-between align-content-between align-items-center">
         
            <div className="icons w-100 d-flex flex-start pt-2">
              <img src={media} style={{ height: "35px" }} alt="media" />
              <img style={{ height: "35px" }} src={emoji} alt="emoji" />
              <img src={location} alt="location" style={{ height: "35px" }} /> </div>
              <div>
              <button className="btn btn-primary mt-2 d-flex" type="button" onClick={newPost}> Share</button></div>
           
          </div>
        </div>
      </div>
      <main className="post_main w-100 mt-3 d-flex justify-content-center align-items-center">
        <div className="post_media">
         
          <section className="d-flex flex-column ">
         <Post value='This is Matrix-Mates! You can post too! Just try 🤯'></Post>
          
      {posts.map((post) => {
            return  <Post value={post}></Post>
          })}
          </section>
        </div>
      </main>
     
    </main>
  );
};
export default Home;
