import "./Features.css";
let Feature = [
  {
    Image: "/images/calendar.svg",
    id: "Analytic Data",
    text: "See all your employes state and you can easily compare by date",
  },
  {
    Image: "/images/manageemployes.svg",
    id: "Manage Employes",
    text: "You can easily manage your employe and their schedule",
  },
  {
    Image: "/images/Paperless.svg",
    id: "Paperless",
    text: "Manage everything digital through your laptop or mobiles ",
  },
  {
    Image: "/images/security.svg",
    id: "Security",
    text: "Protecting against unauthorized access.Privacy denotes anyone who feels ",
  },
  {
    Image: "/images/accounting.svg",
    id: "Accounting",
    text: "Manage and records the day to day transaction of an organisation",
  },
  {
    Image: "/images/easy-acess.svg",
    id: "Eassy Access",
    text: "You can esaily access  anything and everywhere from your computer",
  },
];
function Features() {
  return (
    <div className="feature">
      <div className="map">
        {Feature.map(function (value) {
          return (
            <>
              <div className="imagetext">
                <img src={value.Image} alt="" className="Helloo"></img>
                <h3>{value.id}</h3>
                <p>{value.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Features;
