import "./Hrmanager.css";
import Search from "./Search";
function Hrmanager() {
  return (
    <div className="Container">
      <div className="Hr">
        <h3>
          HR
          <br />
          Management
        </h3>
        <p>
          Create a great place to woek at every
          <br />
          stage of growth with all in one software
        </p>
        <Search />
        {/* <button className="btn">Get Free Demo</button> */}
      </div>
      <div>
        <img src="/images/Group 237.png " alt="" className="Manager"></img>
      </div>
    </div>
  );
}
export default Hrmanager;
