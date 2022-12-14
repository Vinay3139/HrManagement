import "./Modulebox.css"
// import Insta from "./images/insta.png" 

function Module(props){
    return(
        
        <div className="Module" >
            <img src={props.image} alt="" ></img>
            <div><h4 className="header">{props.text}</h4></div>
            <p>Lorem ipsum is simply<br></br>
                dummy text of the printing<br></br>
                and typesetting industryc.
            </p>
           
        </div>
        
    )
}
export default Module;