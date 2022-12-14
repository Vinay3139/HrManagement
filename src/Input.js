// import { type } from "@testing-library/user-event/dist/type";
import "./Input.css";
import Search from "./Search";
const input = [
  {
    name: "First Name*",
    place: "text",
    type: "text",
    title: "dfuhdd",
  },

  { name: "Last Name*", place: "text", type: "text" },
  { name: "Company E-mail*", place: "text", type: "email" },
  { name: "Business Zip Code*", place: "text", type: "text" },
  { name: "Company Name*", place: "text", type: "text" },
  { name: "Phone Number*", place: "text", type: "number" },
  // { name: "Employe Count Range*", place: "text", type: "text" },
];
function Input(props) {
  return (
    <div className="input">
      <h2 className="same">Let's get started</h2>
      <p className="same">once you provide us some contact detail.</p>
      {input.map(function (value) {
        return (
          <>
            <input
              type={value.type}
              placeholder={value.name}
              className="holder" required
            />
          </>
        );
      })}
      <select className="set">
        <option>Employ count range*</option>
      </select>
      <div className="box">
        <input type="checkbox"></input> By submitting this form,you agree to the
        processing of your personal information as described in our Privacy
        
      </div>
      <div className="color">
        <Search />
      </div>
      {/* <input type="Submit"></input> */}
    </div>
  );
}
export default Input;
