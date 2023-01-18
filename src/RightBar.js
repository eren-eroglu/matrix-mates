import {RiVoiceprintFill} from "react-icons/ri"

const RightBar = () => {
  return (
    <div className="w-25 p-3 sidebar_iki">
        <div className="d-flex flex-column">
         <div className="d-flex justify-content-center align-items-center"> <RiVoiceprintFill/> <h5>Spaces</h5><RiVoiceprintFill/></div>
          <hr />
          <button className="btn btn-secondary w-75">Metaverse</button>
          <br></br>
          <button className=" w-75 btn btn-secondary">AI</button>
          <br />
          <button className=" w-75 btn btn-secondary">Crypto</button>
          <br />
          <button className="btn w-75 btn-secondary">Web 3.0</button>
          <br />
          <button className="btn  w-75 btn-secondary">5G / Starlink</button>
        </div>
    </div>
  )
}
export default RightBar