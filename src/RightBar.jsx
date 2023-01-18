import { RiVoiceprintFill } from "react-icons/ri";

const RightBar = () => {
  return (
    <div className="w-25 p-3 sidebar_iki">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <RiVoiceprintFill /> <h5>Spaces</h5>
          <RiVoiceprintFill />
        </div>
        <div>
          <hr />
          <button className="btn btn-secondary w-75">Metaverse</button>

          <button className=" w-75 btn btn-secondary  mt-3">AI</button>

          <button className=" w-75 btn btn-secondary mt-3">Crypto</button>

          <button className="btn w-75 btn-secondary mt-3">Web 3.0</button>

          <button className="btn  w-75 btn-secondary mt-3">5G / Starlink</button>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
