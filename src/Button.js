import "./Button.css";
import Search from "./Search";
function Button() {
  return (
    <div className="Button">
      <p className="single">
        An effortless & smart way to manage your<br></br>
        organisation's HR process from a single plateform.
      </p>
      <div>
        <Search />
      </div>
    </div>
  );
}
export default Button;
