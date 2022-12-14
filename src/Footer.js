import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
function Footer() {
  return (
    <div className="foot">
      <div className="Lorem">
        <div>
          <img src="images/1543.png" alt="" className="ftimg"></img>
        </div>
        <p className="">
          Lorem is simply dummy text of the printing and typesetting industry
          <br />
          <FaInstagramSquare className="instapic" />
          <FaFacebook className="face" />
          <FaLinkedin className="dein" />
          <FaTwitter className="twiter" />
        </p>
      </div>
      <div className="Bio">
        <FaLocationArrow className="locat" /> Address
        <br />
        <p>
          #8323 Gurunank Enclave kharer <br />
          Punjab
        </p>
      </div>
      <div className="contact">
        <FaTruckPickup className="location" /> Contact Us
        <br />
        <FaPhoneVolume className="phone" /> +918626814246
        <br />
        <FaMailBulk className="Mail" /> employ@gmail.com
      </div>
    </div>
  );
}
export default Footer;
