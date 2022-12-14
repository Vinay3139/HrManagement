import "./Navbar.css";

function Navbar(props){
    const menu=["Our Software","Resources","About","Contact","Free Demo"];
    return (
        <div className="Nav-bar">
            {/* <img src={props.image} alt="" ></img> */}
            <img src="/images/1543.png" alt="" id="image"></img>
           {menu.map(function(value){
                return(<li>{value}</li>)
            
            })}
           
            
        </div>
    )
}
export default Navbar;
