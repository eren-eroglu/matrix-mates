import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FiShare2 } from "react-icons/fi";
import { TfiMoney } from "react-icons/tfi";
import pp from "./img/linked.jpeg";
const Post = ({ value }) => {
  return (
    <div className="w-100 ">
      <div className="d-flex flex-column mt-3 glassy_post w-100">
        <div className="post_iki d-flex">
          <div>
            <img
              src={pp}
              className="profile"
              alt="profile"
              style={{ height: "50px" }}
            />
          </div>{" "}
          <h5 className="ps-2">Eren Eroğlu</h5>
          <p className="tag ps-3">@ErenEroglu_Eng</p>
        </div>
        <div className=" d-flex flex-start">{value}</div>
        <div className="interactions d-flex d-flex justify-content-between ps-2 pt-2">
          <div>
            <SlLike className="me-2" />
            <SlDislike />
          </div>
          <div>
            <TfiMoney />
          </div>
          <div>
            <FiShare2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
