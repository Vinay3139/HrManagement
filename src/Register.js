import "./Register.css";
import { FaArrowRight } from "react-icons/fa";
function Register() {
  return (
    <div className="Regis">
      <h3 className="heading">
        Ready to see our
        <br /> product in action ?
      </h3>
      <div className="Action">
        <p>
          See a demo of software that's allowed for you.
          <br />
          here's how t get started.
          <br />
          <FaArrowRight className="Arrow" />
          Fill out the form to the right to send us your contact<br/> &nbsp; &nbsp; information
          <br />
          <FaArrowRight className="Arrow" />
          We'll reach you discuss how our services can best fit
          <br />&nbsp; &nbsp; your requirement.
          <br />
          <FaArrowRight className="Arrow" />
          We'll show you a personalised demo of the platform.
        </p>
      </div>
    </div>
  );
}
export default Register;
